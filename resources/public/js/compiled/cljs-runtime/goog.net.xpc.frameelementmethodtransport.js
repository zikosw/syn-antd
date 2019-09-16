goog.provide("goog.net.xpc.FrameElementMethodTransport");
goog.require("goog.log");
goog.require("goog.net.xpc");
goog.require("goog.net.xpc.CrossPageChannelRole");
goog.require("goog.net.xpc.Transport");
goog.require("goog.net.xpc.TransportTypes");
/**
 @final
 @constructor
 @extends {goog.net.xpc.Transport}
 @param {goog.net.xpc.CrossPageChannel} channel
 @param {goog.dom.DomHelper=} opt_domHelper
 */
goog.net.xpc.FrameElementMethodTransport = function(channel, opt_domHelper) {
  goog.net.xpc.FrameElementMethodTransport.base(this, "constructor", opt_domHelper);
  /** @private @type {goog.net.xpc.CrossPageChannel} */ this.channel_ = channel;
  /** @private @type {Array<{serviceName:string,payload:string}>} */ this.queue_ = [];
  /** @private @type {Function} */ this.deliverQueuedCb_ = goog.bind(this.deliverQueued_, this);
};
goog.inherits(goog.net.xpc.FrameElementMethodTransport, goog.net.xpc.Transport);
/** @protected @override @type {number} */ goog.net.xpc.FrameElementMethodTransport.prototype.transportType = goog.net.xpc.TransportTypes.FRAME_ELEMENT_METHOD;
/** @private @type {(!Function|undefined)} */ goog.net.xpc.FrameElementMethodTransport.prototype.attemptSetupCb_;
/** @private */ goog.net.xpc.FrameElementMethodTransport.prototype.outgoing_;
/** @private */ goog.net.xpc.FrameElementMethodTransport.prototype.iframeElm_;
/** @private @type {boolean} */ goog.net.xpc.FrameElementMethodTransport.prototype.recursive_ = false;
/** @private @type {?Function} */ goog.net.xpc.FrameElementMethodTransport.outgoing_ = null;
/** @override */ goog.net.xpc.FrameElementMethodTransport.prototype.connect = function() {
  if (this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER) {
    this.iframeElm_ = this.channel_.getIframeElement();
    this.iframeElm_["XPC_toOuter"] = goog.bind(this.incoming_, this);
  } else {
    this.attemptSetup_();
  }
};
/** @private */ goog.net.xpc.FrameElementMethodTransport.prototype.attemptSetup_ = function() {
  var retry = true;
  try {
    if (!this.iframeElm_) {
      this.iframeElm_ = this.getWindow().frameElement;
    }
    if (this.iframeElm_ && this.iframeElm_["XPC_toOuter"]) {
      this.outgoing_ = this.iframeElm_["XPC_toOuter"];
      this.iframeElm_["XPC_toOuter"]["XPC_toInner"] = goog.bind(this.incoming_, this);
      retry = false;
      this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_);
      this.channel_.notifyConnected();
    }
  } catch (e) {
    goog.log.error(goog.net.xpc.logger, "exception caught while attempting setup: " + e);
  }
  if (retry) {
    if (!this.attemptSetupCb_) {
      this.attemptSetupCb_ = goog.bind(this.attemptSetup_, this);
    }
    this.getWindow().setTimeout(this.attemptSetupCb_, 100);
  }
};
/**
 @param {string} payload
 @override
 */
goog.net.xpc.FrameElementMethodTransport.prototype.transportServiceHandler = function(payload) {
  if (this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER && !this.channel_.isConnected() && payload == goog.net.xpc.SETUP_ACK_) {
    this.outgoing_ = this.iframeElm_["XPC_toOuter"]["XPC_toInner"];
    this.channel_.notifyConnected();
  } else {
    throw new Error("Got unexpected transport message.");
  }
};
/**
 @private
 @param {string} serviceName
 @param {string} payload
 */
goog.net.xpc.FrameElementMethodTransport.prototype.incoming_ = function(serviceName, payload) {
  if (!this.recursive_ && this.queue_.length == 0) {
    this.channel_.xpcDeliver(serviceName, payload);
  } else {
    this.queue_.push({serviceName:serviceName, payload:payload});
    if (this.queue_.length == 1) {
      this.getWindow().setTimeout(this.deliverQueuedCb_, 1);
    }
  }
};
/** @private */ goog.net.xpc.FrameElementMethodTransport.prototype.deliverQueued_ = function() {
  while (this.queue_.length) {
    var msg = this.queue_.shift();
    this.channel_.xpcDeliver(msg.serviceName, msg.payload);
  }
};
/**
 @param {string} service
 @param {string} payload
 @override
 */
goog.net.xpc.FrameElementMethodTransport.prototype.send = function(service, payload) {
  this.recursive_ = true;
  this.outgoing_(service, payload);
  this.recursive_ = false;
};
/** @override */ goog.net.xpc.FrameElementMethodTransport.prototype.disposeInternal = function() {
  goog.net.xpc.FrameElementMethodTransport.superClass_.disposeInternal.call(this);
  this.outgoing_ = null;
  this.iframeElm_ = null;
};

//# sourceMappingURL=goog.net.xpc.frameelementmethodtransport.js.map
