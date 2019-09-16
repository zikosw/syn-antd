goog.provide("goog.net.WebSocket");
goog.provide("goog.net.WebSocket.ErrorEvent");
goog.provide("goog.net.WebSocket.EventType");
goog.provide("goog.net.WebSocket.MessageEvent");
goog.require("goog.Timer");
goog.require("goog.asserts");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.events");
goog.require("goog.events.Event");
goog.require("goog.events.EventTarget");
goog.require("goog.log");
/**
 @constructor
 @extends {goog.events.EventTarget}
 @param {(boolean|!goog.net.WebSocket.Options)=} opt_params
 @param {function(number):number=} opt_getNextReconnect
 */
goog.net.WebSocket = function(opt_params, opt_getNextReconnect) {
  goog.net.WebSocket.base(this, "constructor");
  if (typeof opt_params != "object") {
    opt_params = /** @type {!goog.net.WebSocket.Options} */ ({autoReconnect:opt_params, getNextReconnect:opt_getNextReconnect});
  }
  /** @private @type {boolean} */ this.autoReconnect_ = opt_params.autoReconnect != false;
  /** @private @type {function(number):number} */ this.getNextReconnect_ = opt_params.getNextReconnect || goog.net.WebSocket.EXPONENTIAL_BACKOFF_;
  /** @private @type {goog.net.WebSocket.BinaryType} */ this.binaryType_ = opt_params.binaryType || goog.net.WebSocket.BinaryType.BLOB;
  /** @private @type {number} */ this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_);
};
goog.inherits(goog.net.WebSocket, goog.events.EventTarget);
/** @enum {string} */ goog.net.WebSocket.BinaryType = {ARRAY_BUFFER:"arraybuffer", BLOB:"blob"};
/** @record */ goog.net.WebSocket.Options = function() {
  /** @type {(boolean|undefined)} */ this.autoReconnect;
  /** @type {(function(number):number|undefined)} */ this.getNextReconnect;
  /** @type {(!goog.net.WebSocket.BinaryType|undefined)} */ this.binaryType;
};
/** @private @type {?WebSocket} */ goog.net.WebSocket.prototype.webSocket_ = null;
/** @private @type {?string} */ goog.net.WebSocket.prototype.url_ = null;
/** @private @type {(string|undefined)} */ goog.net.WebSocket.prototype.protocol_ = undefined;
/** @private @type {boolean} */ goog.net.WebSocket.prototype.closeExpected_ = false;
/** @private @type {number} */ goog.net.WebSocket.prototype.reconnectAttempt_ = 0;
/** @private @type {?number} */ goog.net.WebSocket.prototype.reconnectTimer_ = null;
/** @private @type {?goog.log.Logger} */ goog.net.WebSocket.prototype.logger_ = goog.log.getLogger("goog.net.WebSocket");
/** @enum {string} */ goog.net.WebSocket.EventType = {CLOSED:goog.events.getUniqueId("closed"), ERROR:goog.events.getUniqueId("error"), MESSAGE:goog.events.getUniqueId("message"), OPENED:goog.events.getUniqueId("opened")};
/** @private @enum {number} */ goog.net.WebSocket.ReadyState_ = {CONNECTING:0, OPEN:1, CLOSING:2, CLOSED:3};
/** @private @type {number} */ goog.net.WebSocket.EXPONENTIAL_BACKOFF_CEILING_ = 60 * 1000;
/**
 @private
 @const
 @param {number} attempt
 @return {number}
 */
goog.net.WebSocket.EXPONENTIAL_BACKOFF_ = function(attempt) {
  var time = Math.pow(2, attempt) * 1000;
  return Math.min(time, goog.net.WebSocket.EXPONENTIAL_BACKOFF_CEILING_);
};
/**
 @param {!goog.debug.ErrorHandler} errorHandler
 */
goog.net.WebSocket.protectEntryPoints = function(errorHandler) {
  goog.net.WebSocket.prototype.onOpen_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onOpen_);
  goog.net.WebSocket.prototype.onClose_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onClose_);
  goog.net.WebSocket.prototype.onMessage_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onMessage_);
  goog.net.WebSocket.prototype.onError_ = errorHandler.protectEntryPoint(goog.net.WebSocket.prototype.onError_);
};
/**
 @param {string} url
 @param {string=} opt_protocol
 */
goog.net.WebSocket.prototype.open = function(url, opt_protocol) {
  goog.asserts.assert(goog.global["WebSocket"], "This browser does not support WebSocket");
  goog.asserts.assert(!this.isOpen(), "The WebSocket is already open");
  this.clearReconnectTimer_();
  this.url_ = url;
  this.protocol_ = opt_protocol;
  if (this.protocol_) {
    goog.log.info(this.logger_, "Opening the WebSocket on " + this.url_ + " with protocol " + this.protocol_);
    this.webSocket_ = new WebSocket(this.url_, this.protocol_);
  } else {
    goog.log.info(this.logger_, "Opening the WebSocket on " + this.url_);
    this.webSocket_ = new WebSocket(this.url_);
  }
  this.webSocket_.binaryType = this.binaryType_;
  this.webSocket_.onopen = goog.bind(this.onOpen_, this);
  this.webSocket_.onclose = goog.bind(this.onClose_, this);
  this.webSocket_.onmessage = goog.bind(this.onMessage_, this);
  this.webSocket_.onerror = goog.bind(this.onError_, this);
};
goog.net.WebSocket.prototype.close = function() {
  this.clearReconnectTimer_();
  if (this.webSocket_) {
    goog.log.info(this.logger_, "Closing the WebSocket.");
    this.closeExpected_ = true;
    this.webSocket_.close();
    this.webSocket_ = null;
  }
};
/**
 @param {(string|!ArrayBuffer|!ArrayBufferView)} message
 */
goog.net.WebSocket.prototype.send = function(message) {
  goog.asserts.assert(this.isOpen(), "Cannot send without an open socket");
  this.webSocket_.send(message);
};
/**
 @return {boolean}
 */
goog.net.WebSocket.prototype.isOpen = function() {
  return !!this.webSocket_ && this.webSocket_.readyState == goog.net.WebSocket.ReadyState_.OPEN;
};
/**
 @return {number}
 */
goog.net.WebSocket.prototype.getBufferedAmount = function() {
  return this.webSocket_.bufferedAmount;
};
/** @private */ goog.net.WebSocket.prototype.onOpen_ = function() {
  goog.log.info(this.logger_, "WebSocket opened on " + this.url_);
  this.dispatchEvent(goog.net.WebSocket.EventType.OPENED);
  this.reconnectAttempt_ = 0;
  this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_);
};
/**
 @private
 @param {!Event} event
 */
goog.net.WebSocket.prototype.onClose_ = function(event) {
  goog.log.info(this.logger_, "The WebSocket on " + this.url_ + " closed.");
  this.dispatchEvent(goog.net.WebSocket.EventType.CLOSED);
  this.webSocket_ = null;
  if (this.closeExpected_) {
    goog.log.info(this.logger_, "The WebSocket closed normally.");
    this.url_ = null;
    this.protocol_ = undefined;
  } else {
    goog.log.error(this.logger_, "The WebSocket disconnected unexpectedly: " + event.data);
    if (this.autoReconnect_) {
      var seconds = Math.floor(this.nextReconnect_ / 1000);
      goog.log.info(this.logger_, "Seconds until next reconnect attempt: " + seconds);
      this.reconnectTimer_ = goog.Timer.callOnce(goog.bind(this.open, this, this.url_, this.protocol_), this.nextReconnect_, this);
      this.reconnectAttempt_++;
      this.nextReconnect_ = this.getNextReconnect_(this.reconnectAttempt_);
    }
  }
  this.closeExpected_ = false;
};
/**
 @private
 @param {MessageEvent<string>} event
 */
goog.net.WebSocket.prototype.onMessage_ = function(event) {
  var message = event.data;
  this.dispatchEvent(new goog.net.WebSocket.MessageEvent(message));
};
/**
 @private
 @param {Event} event
 */
goog.net.WebSocket.prototype.onError_ = function(event) {
  var data = /** @type {string} */ (event.data);
  goog.log.error(this.logger_, "An error occurred: " + data);
  this.dispatchEvent(new goog.net.WebSocket.ErrorEvent(data));
};
/** @private */ goog.net.WebSocket.prototype.clearReconnectTimer_ = function() {
  if (goog.isDefAndNotNull(this.reconnectTimer_)) {
    goog.Timer.clear(this.reconnectTimer_);
  }
  this.reconnectTimer_ = null;
};
/** @override */ goog.net.WebSocket.prototype.disposeInternal = function() {
  goog.net.WebSocket.base(this, "disposeInternal");
  this.close();
};
/**
 @final
 @constructor
 @extends {goog.events.Event}
 @param {string} message
 */
goog.net.WebSocket.MessageEvent = function(message) {
  goog.net.WebSocket.MessageEvent.base(this, "constructor", goog.net.WebSocket.EventType.MESSAGE);
  /** @type {string} */ this.message = message;
};
goog.inherits(goog.net.WebSocket.MessageEvent, goog.events.Event);
/**
 @final
 @constructor
 @extends {goog.events.Event}
 @param {string} data
 */
goog.net.WebSocket.ErrorEvent = function(data) {
  goog.net.WebSocket.ErrorEvent.base(this, "constructor", goog.net.WebSocket.EventType.ERROR);
  /** @type {string} */ this.data = data;
};
goog.inherits(goog.net.WebSocket.ErrorEvent, goog.events.Event);
goog.debug.entryPointRegistry.register(/**
 @param {function(!Function):!Function} transformer
 */
function(transformer) {
  goog.net.WebSocket.prototype.onOpen_ = transformer(goog.net.WebSocket.prototype.onOpen_);
  goog.net.WebSocket.prototype.onClose_ = transformer(goog.net.WebSocket.prototype.onClose_);
  goog.net.WebSocket.prototype.onMessage_ = transformer(goog.net.WebSocket.prototype.onMessage_);
  goog.net.WebSocket.prototype.onError_ = transformer(goog.net.WebSocket.prototype.onError_);
});

//# sourceMappingURL=goog.net.websocket.js.map
