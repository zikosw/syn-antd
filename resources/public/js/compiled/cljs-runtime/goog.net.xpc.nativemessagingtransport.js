goog.provide("goog.net.xpc.NativeMessagingTransport");
goog.require("goog.Timer");
goog.require("goog.asserts");
goog.require("goog.async.Deferred");
goog.require("goog.events");
goog.require("goog.events.EventHandler");
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
 @param {string} peerHostname
 @param {goog.dom.DomHelper=} opt_domHelper
 @param {boolean=} opt_oneSidedHandshake
 @param {number=} opt_protocolVersion
 */
goog.net.xpc.NativeMessagingTransport = function(channel, peerHostname, opt_domHelper, opt_oneSidedHandshake, opt_protocolVersion) {
  goog.net.xpc.NativeMessagingTransport.base(this, "constructor", opt_domHelper);
  /** @private @type {goog.net.xpc.CrossPageChannel} */ this.channel_ = channel;
  /** @private @type {number} */ this.protocolVersion_ = opt_protocolVersion || 2;
  goog.asserts.assert(this.protocolVersion_ >= 1);
  goog.asserts.assert(this.protocolVersion_ <= 2);
  /** @private @type {string} */ this.peerHostname_ = peerHostname || "*";
  /** @private @type {!goog.events.EventHandler<!goog.net.xpc.NativeMessagingTransport>} */ this.eventHandler_ = new goog.events.EventHandler(this);
  /** @private @type {!goog.Timer} */ this.maybeAttemptToConnectTimer_ = new goog.Timer(100, this.getWindow());
  /** @private @type {boolean} */ this.oneSidedHandshake_ = !!opt_oneSidedHandshake;
  /** @private @type {!goog.async.Deferred} */ this.setupAckReceived_ = new goog.async.Deferred;
  /** @private @type {!goog.async.Deferred} */ this.setupAckSent_ = new goog.async.Deferred;
  /** @private @type {!goog.async.Deferred} */ this.connected_ = new goog.async.Deferred;
  /** @private @type {string} */ this.endpointId_ = goog.net.xpc.getRandomString(10);
  /** @private @type {?string} */ this.peerEndpointId_ = null;
  if (this.oneSidedHandshake_) {
    if (this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.INNER) {
      this.connected_.awaitDeferred(this.setupAckReceived_);
    } else {
      this.connected_.awaitDeferred(this.setupAckSent_);
    }
  } else {
    this.connected_.awaitDeferred(this.setupAckReceived_);
    if (this.protocolVersion_ == 2) {
      this.connected_.awaitDeferred(this.setupAckSent_);
    }
  }
  this.connected_.addCallback(this.notifyConnected_, this);
  this.connected_.callback(true);
  this.eventHandler_.listen(this.maybeAttemptToConnectTimer_, goog.Timer.TICK, this.maybeAttemptToConnect_);
  goog.log.info(goog.net.xpc.logger, "NativeMessagingTransport created.  " + "protocolVersion\x3d" + this.protocolVersion_ + ", oneSidedHandshake\x3d" + this.oneSidedHandshake_ + ", role\x3d" + this.channel_.getRole());
};
goog.inherits(goog.net.xpc.NativeMessagingTransport, goog.net.xpc.Transport);
/** @private @type {number} */ goog.net.xpc.NativeMessagingTransport.CONNECTION_DELAY_MS_ = 200;
/** @private @type {?number} */ goog.net.xpc.NativeMessagingTransport.prototype.peerProtocolVersion_ = null;
/** @private @type {boolean} */ goog.net.xpc.NativeMessagingTransport.prototype.initialized_ = false;
/** @override @type {number} */ goog.net.xpc.NativeMessagingTransport.prototype.transportType = goog.net.xpc.TransportTypes.NATIVE_MESSAGING;
/** @private @type {string} */ goog.net.xpc.NativeMessagingTransport.MESSAGE_DELIMITER_ = ",";
/** @private @type {Object<?,number>} */ goog.net.xpc.NativeMessagingTransport.activeCount_ = {};
/** @private @type {number} */ goog.net.xpc.NativeMessagingTransport.prototype.sendTimerId_ = 0;
/**
 @private
 @param {number} version
 @return {boolean}
 */
goog.net.xpc.NativeMessagingTransport.prototype.couldPeerVersionBe_ = function(version) {
  return this.peerProtocolVersion_ == null || this.peerProtocolVersion_ == version;
};
/**
 @private
 @param {Window} listenWindow
 */
goog.net.xpc.NativeMessagingTransport.initialize_ = function(listenWindow) {
  var uid = goog.getUid(listenWindow);
  var value = goog.net.xpc.NativeMessagingTransport.activeCount_[uid];
  if (!goog.isNumber(value)) {
    value = 0;
  }
  if (value == 0) {
    goog.events.listen(listenWindow.postMessage ? listenWindow : listenWindow.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, false, goog.net.xpc.NativeMessagingTransport);
  }
  goog.net.xpc.NativeMessagingTransport.activeCount_[uid] = value + 1;
};
/**
 @private
 @param {goog.events.BrowserEvent} msgEvt
 @return {boolean}
 */
goog.net.xpc.NativeMessagingTransport.messageReceived_ = function(msgEvt) {
  var data = msgEvt.getBrowserEvent().data;
  if (!goog.isString(data)) {
    return false;
  }
  var headDelim = data.indexOf("|");
  var serviceDelim = data.indexOf(":");
  if (headDelim == -1 || serviceDelim == -1) {
    return false;
  }
  var channelName = data.substring(0, headDelim);
  var service = data.substring(headDelim + 1, serviceDelim);
  var payload = data.substring(serviceDelim + 1);
  goog.log.fine(goog.net.xpc.logger, "messageReceived: channel\x3d" + channelName + ", service\x3d" + service + ", payload\x3d" + payload);
  var channel = goog.net.xpc.channels[channelName];
  if (channel) {
    channel.xpcDeliver(service, payload, /** @type {!MessageEvent} */ (msgEvt.getBrowserEvent()).origin);
    return true;
  }
  var transportMessageType = goog.net.xpc.NativeMessagingTransport.parseTransportPayload_(payload)[0];
  for (var staleChannelName in goog.net.xpc.channels) {
    var staleChannel = goog.net.xpc.channels[staleChannelName];
    if (staleChannel.getRole() == goog.net.xpc.CrossPageChannelRole.INNER && !staleChannel.isConnected() && service == goog.net.xpc.TRANSPORT_SERVICE_ && (transportMessageType == goog.net.xpc.SETUP || transportMessageType == goog.net.xpc.SETUP_NTPV2) && staleChannel.isMessageOriginAcceptable(msgEvt.getBrowserEvent().origin)) {
      staleChannel.updateChannelNameAndCatalog(channelName);
      staleChannel.xpcDeliver(service, payload);
      return true;
    }
  }
  goog.log.info(goog.net.xpc.logger, 'channel name mismatch; message ignored"');
  return false;
};
/**
 @param {string} payload
 @override
 */
goog.net.xpc.NativeMessagingTransport.prototype.transportServiceHandler = function(payload) {
  var transportParts = goog.net.xpc.NativeMessagingTransport.parseTransportPayload_(payload);
  var transportMessageType = transportParts[0];
  var peerEndpointId = transportParts[1];
  switch(transportMessageType) {
    case goog.net.xpc.SETUP_ACK_:
      this.setPeerProtocolVersion_(1);
      if (!this.setupAckReceived_.hasFired()) {
        this.setupAckReceived_.callback(true);
      }
      break;
    case goog.net.xpc.SETUP_ACK_NTPV2:
      if (this.protocolVersion_ == 2) {
        this.setPeerProtocolVersion_(2);
        if (!this.setupAckReceived_.hasFired()) {
          this.setupAckReceived_.callback(true);
        }
      }
      break;
    case goog.net.xpc.SETUP:
      this.setPeerProtocolVersion_(1);
      this.sendSetupAckMessage_(1);
      break;
    case goog.net.xpc.SETUP_NTPV2:
      if (this.protocolVersion_ == 2) {
        var prevPeerProtocolVersion = this.peerProtocolVersion_;
        this.setPeerProtocolVersion_(2);
        this.sendSetupAckMessage_(2);
        if ((prevPeerProtocolVersion == 1 || this.peerEndpointId_ != null) && this.peerEndpointId_ != peerEndpointId) {
          goog.log.info(goog.net.xpc.logger, "Sending SETUP and changing peer ID to: " + peerEndpointId);
          this.sendSetupMessage_();
        }
        this.peerEndpointId_ = peerEndpointId;
      }
      break;
  }
};
/** @private */ goog.net.xpc.NativeMessagingTransport.prototype.sendSetupMessage_ = function() {
  goog.asserts.assert(!(this.protocolVersion_ == 1 && this.peerProtocolVersion_ == 2));
  if (this.protocolVersion_ == 2 && this.couldPeerVersionBe_(2)) {
    var payload = goog.net.xpc.SETUP_NTPV2;
    payload += goog.net.xpc.NativeMessagingTransport.MESSAGE_DELIMITER_;
    payload += this.endpointId_;
    this.send(goog.net.xpc.TRANSPORT_SERVICE_, payload);
  }
  if (this.couldPeerVersionBe_(1)) {
    this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP);
  }
};
/**
 @private
 @param {number} protocolVersion
 */
goog.net.xpc.NativeMessagingTransport.prototype.sendSetupAckMessage_ = function(protocolVersion) {
  goog.asserts.assert(this.protocolVersion_ != 1 || protocolVersion != 2, "Shouldn't try to send a v2 setup ack in v1 mode.");
  if (this.protocolVersion_ == 2 && this.couldPeerVersionBe_(2) && protocolVersion == 2) {
    this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_NTPV2);
  } else {
    if (this.couldPeerVersionBe_(1) && protocolVersion == 1) {
      this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_);
    } else {
      return;
    }
  }
  if (!this.setupAckSent_.hasFired()) {
    this.setupAckSent_.callback(true);
  }
};
/**
 @private
 @param {number} version
 */
goog.net.xpc.NativeMessagingTransport.prototype.setPeerProtocolVersion_ = function(version) {
  if (version > this.peerProtocolVersion_) {
    this.peerProtocolVersion_ = version;
  }
  if (this.peerProtocolVersion_ == 1) {
    if (!this.setupAckSent_.hasFired() && !this.oneSidedHandshake_) {
      this.setupAckSent_.callback(true);
    }
    this.peerEndpointId_ = null;
  }
};
/** @override */ goog.net.xpc.NativeMessagingTransport.prototype.connect = function() {
  goog.net.xpc.NativeMessagingTransport.initialize_(this.getWindow());
  this.initialized_ = true;
  this.maybeAttemptToConnect_();
};
/** @private */ goog.net.xpc.NativeMessagingTransport.prototype.maybeAttemptToConnect_ = function() {
  var outerFrame = this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER;
  if (this.oneSidedHandshake_ && outerFrame || this.channel_.isConnected() || this.isDisposed()) {
    this.maybeAttemptToConnectTimer_.stop();
    return;
  }
  this.maybeAttemptToConnectTimer_.start();
  this.sendSetupMessage_();
};
/**
 @param {string} service
 @param {string} payload
 @override
 */
goog.net.xpc.NativeMessagingTransport.prototype.send = function(service, payload) {
  var win = this.channel_.getPeerWindowObject();
  if (!win) {
    goog.log.fine(goog.net.xpc.logger, "send(): window not ready");
    return;
  }
  this.send = function(service, payload) {
    var transport = this;
    var channelName = this.channel_.name;
    var sendFunctor = function() {
      transport.sendTimerId_ = 0;
      try {
        var obj = win.postMessage ? win : win.document;
        if (!obj.postMessage) {
          goog.log.warning(goog.net.xpc.logger, "Peer window had no postMessage function.");
          return;
        }
        obj.postMessage(channelName + "|" + service + ":" + payload, transport.peerHostname_);
        goog.log.fine(goog.net.xpc.logger, "send(): service\x3d" + service + " payload\x3d" + payload + " to hostname\x3d" + transport.peerHostname_);
      } catch (error) {
        goog.log.warning(goog.net.xpc.logger, "Error performing postMessage, ignoring.", error);
      }
    };
    this.sendTimerId_ = goog.Timer.callOnce(sendFunctor, 0);
  };
  this.send(service, payload);
};
/** @private */ goog.net.xpc.NativeMessagingTransport.prototype.notifyConnected_ = function() {
  var delay = this.protocolVersion_ == 1 || this.peerProtocolVersion_ == 1 ? goog.net.xpc.NativeMessagingTransport.CONNECTION_DELAY_MS_ : undefined;
  this.channel_.notifyConnected(delay);
};
/** @override */ goog.net.xpc.NativeMessagingTransport.prototype.disposeInternal = function() {
  if (this.initialized_) {
    var listenWindow = this.getWindow();
    var uid = goog.getUid(listenWindow);
    var value = goog.net.xpc.NativeMessagingTransport.activeCount_[uid];
    goog.net.xpc.NativeMessagingTransport.activeCount_[uid] = value - 1;
    if (value == 1) {
      goog.events.unlisten(listenWindow.postMessage ? listenWindow : listenWindow.document, "message", goog.net.xpc.NativeMessagingTransport.messageReceived_, false, goog.net.xpc.NativeMessagingTransport);
    }
  }
  if (this.sendTimerId_) {
    goog.Timer.clear(this.sendTimerId_);
    this.sendTimerId_ = 0;
  }
  goog.dispose(this.eventHandler_);
  delete this.eventHandler_;
  goog.dispose(this.maybeAttemptToConnectTimer_);
  delete this.maybeAttemptToConnectTimer_;
  this.setupAckReceived_.cancel();
  delete this.setupAckReceived_;
  this.setupAckSent_.cancel();
  delete this.setupAckSent_;
  this.connected_.cancel();
  delete this.connected_;
  delete this.send;
  goog.net.xpc.NativeMessagingTransport.base(this, "disposeInternal");
};
/**
 @private
 @param {string} payload
 @return {!Array<?string>}
 */
goog.net.xpc.NativeMessagingTransport.parseTransportPayload_ = function(payload) {
  var transportParts = /** @type {!Array<?string>} */ (payload.split(goog.net.xpc.NativeMessagingTransport.MESSAGE_DELIMITER_));
  transportParts[1] = transportParts[1] || null;
  return transportParts;
};

//# sourceMappingURL=goog.net.xpc.nativemessagingtransport.js.map
