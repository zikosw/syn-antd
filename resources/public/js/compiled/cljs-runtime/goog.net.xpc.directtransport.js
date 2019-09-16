goog.provide("goog.net.xpc.DirectTransport");
goog.require("goog.Timer");
goog.require("goog.async.Deferred");
goog.require("goog.events.EventHandler");
goog.require("goog.log");
goog.require("goog.net.xpc");
goog.require("goog.net.xpc.CfgFields");
goog.require("goog.net.xpc.CrossPageChannelRole");
goog.require("goog.net.xpc.Transport");
goog.require("goog.net.xpc.TransportTypes");
goog.require("goog.object");
goog.scope(function() {
  var CfgFields = goog.net.xpc.CfgFields;
  var CrossPageChannelRole = goog.net.xpc.CrossPageChannelRole;
  var Deferred = goog.async.Deferred;
  var EventHandler = goog.events.EventHandler;
  var Timer = goog.Timer;
  var Transport = goog.net.xpc.Transport;
  /**
   @constructor
   @extends {Transport}
   @param {!goog.net.xpc.CrossPageChannel} channel
   @param {goog.dom.DomHelper=} opt_domHelper
   */
  goog.net.xpc.DirectTransport = function(channel, opt_domHelper) {
    goog.net.xpc.DirectTransport.base(this, "constructor", opt_domHelper);
    /** @private @type {!goog.net.xpc.CrossPageChannel} */ this.channel_ = channel;
    /** @private @type {!EventHandler<!goog.net.xpc.DirectTransport>} */ this.eventHandler_ = new EventHandler(this);
    this.registerDisposable(this.eventHandler_);
    /** @private @type {!Timer} */ this.maybeAttemptToConnectTimer_ = new Timer(DirectTransport.CONNECTION_ATTEMPT_INTERVAL_MS_, this.getWindow());
    this.registerDisposable(this.maybeAttemptToConnectTimer_);
    /** @private @type {!Deferred} */ this.setupAckReceived_ = new Deferred;
    /** @private @type {!Deferred} */ this.setupAckSent_ = new Deferred;
    /** @private @type {!Deferred} */ this.connected_ = new Deferred;
    /** @private @type {string} */ this.endpointId_ = goog.net.xpc.getRandomString(10);
    /** @private @type {?string} */ this.peerEndpointId_ = null;
    /** @private @type {Object} */ this.asyncSendsMap_ = {};
    /** @private @type {string} */ this.originalChannelName_ = this.channel_.name;
    this.channel_.updateChannelNameAndCatalog(DirectTransport.getRoledChannelName_(this.channel_.name, this.channel_.getRole()));
    /** @private @type {boolean} */ this.initialized_ = false;
    this.connected_.awaitDeferred(this.setupAckReceived_);
    this.connected_.awaitDeferred(this.setupAckSent_);
    this.connected_.addCallback(this.notifyConnected_, this);
    this.connected_.callback(true);
    this.eventHandler_.listen(this.maybeAttemptToConnectTimer_, Timer.TICK, this.maybeAttemptToConnect_);
    goog.log.info(goog.net.xpc.logger, "DirectTransport created. role\x3d" + this.channel_.getRole());
  };
  goog.inherits(goog.net.xpc.DirectTransport, Transport);
  var DirectTransport = goog.net.xpc.DirectTransport;
  /** @private @const @type {number} */ DirectTransport.CONNECTION_ATTEMPT_INTERVAL_MS_ = 100;
  /** @private @const @type {number} */ DirectTransport.CONNECTION_DELAY_INTERVAL_MS_ = 0;
  /**
   @param {!Window} peerWindow
   @return {boolean}
   */
  DirectTransport.isSupported = function(peerWindow) {
    try {
      return window.document.domain == peerWindow.document.domain;
    } catch (e) {
      return false;
    }
  };
  /** @private @type {!Object<?,number>} */ DirectTransport.activeCount_ = {};
  /** @private @const @type {string} */ DirectTransport.GLOBAL_TRANPORT_PATH_ = "crosswindowmessaging.channel";
  /** @private @const @type {string} */ DirectTransport.MESSAGE_DELIMITER_ = ",";
  /**
   @private
   @param {!Window} listenWindow
   */
  DirectTransport.initialize_ = function(listenWindow) {
    var uid = goog.getUid(listenWindow);
    var value = DirectTransport.activeCount_[uid] || 0;
    if (value == 0) {
      var globalProxy = goog.getObjectByName(DirectTransport.GLOBAL_TRANPORT_PATH_, listenWindow);
      if (globalProxy == null) {
        goog.exportSymbol(DirectTransport.GLOBAL_TRANPORT_PATH_, DirectTransport.messageReceivedHandler_, listenWindow);
      }
    }
    DirectTransport.activeCount_[uid]++;
  };
  /**
   @private
   @param {string} channelName
   @param {(string|number)} role
   @return {string}
   */
  DirectTransport.getRoledChannelName_ = function(channelName, role) {
    return channelName + "_" + role;
  };
  /**
   @private
   @param {!Object} literal
   @return {boolean}
   */
  DirectTransport.messageReceivedHandler_ = function(literal) {
    var msg = DirectTransport.Message_.fromLiteral(literal);
    var channelName = msg.channelName;
    var service = msg.service;
    var payload = msg.payload;
    goog.log.fine(goog.net.xpc.logger, "messageReceived: channel\x3d" + channelName + ", service\x3d" + service + ", payload\x3d" + payload);
    var channel = goog.net.xpc.channels[channelName];
    if (channel) {
      channel.xpcDeliver(service, payload);
      return true;
    }
    var transportMessageType = DirectTransport.parseTransportPayload_(payload)[0];
    for (var staleChannelName in goog.net.xpc.channels) {
      var staleChannel = goog.net.xpc.channels[staleChannelName];
      if (staleChannel.getRole() == CrossPageChannelRole.INNER && !staleChannel.isConnected() && service == goog.net.xpc.TRANSPORT_SERVICE_ && transportMessageType == goog.net.xpc.SETUP) {
        staleChannel.updateChannelNameAndCatalog(channelName);
        staleChannel.xpcDeliver(service, payload);
        return true;
      }
    }
    goog.log.info(goog.net.xpc.logger, "channel name mismatch; message ignored.");
    return false;
  };
  /** @override @type {number} */ DirectTransport.prototype.transportType = goog.net.xpc.TransportTypes.DIRECT;
  /**
   @param {string} payload
   @override
   */
  DirectTransport.prototype.transportServiceHandler = function(payload) {
    var transportParts = DirectTransport.parseTransportPayload_(payload);
    var transportMessageType = transportParts[0];
    var peerEndpointId = transportParts[1];
    switch(transportMessageType) {
      case goog.net.xpc.SETUP_ACK_:
        if (!this.setupAckReceived_.hasFired()) {
          this.setupAckReceived_.callback(true);
        }
        break;
      case goog.net.xpc.SETUP:
        this.sendSetupAckMessage_();
        if (this.peerEndpointId_ != null && this.peerEndpointId_ != peerEndpointId) {
          goog.log.info(goog.net.xpc.logger, "Sending SETUP and changing peer ID to: " + peerEndpointId);
          this.sendSetupMessage_();
        }
        this.peerEndpointId_ = peerEndpointId;
        break;
    }
  };
  /** @private */ DirectTransport.prototype.sendSetupMessage_ = function() {
    var payload = goog.net.xpc.SETUP;
    payload += DirectTransport.MESSAGE_DELIMITER_;
    payload += this.endpointId_;
    this.send(goog.net.xpc.TRANSPORT_SERVICE_, payload);
  };
  /** @private */ DirectTransport.prototype.sendSetupAckMessage_ = function() {
    this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_);
    if (!this.setupAckSent_.hasFired()) {
      this.setupAckSent_.callback(true);
    }
  };
  /** @override */ DirectTransport.prototype.connect = function() {
    var win = this.getWindow();
    if (win) {
      DirectTransport.initialize_(win);
      this.initialized_ = true;
      this.maybeAttemptToConnect_();
    } else {
      goog.log.fine(goog.net.xpc.logger, "connect(): no window to initialize.");
    }
  };
  /** @private */ DirectTransport.prototype.maybeAttemptToConnect_ = function() {
    if (this.channel_.isConnected()) {
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
  DirectTransport.prototype.send = function(service, payload) {
    if (!this.channel_.getPeerWindowObject()) {
      goog.log.fine(goog.net.xpc.logger, "send(): window not ready");
      return;
    }
    var channelName = DirectTransport.getRoledChannelName_(this.originalChannelName_, this.getPeerRole_());
    var message = new DirectTransport.Message_(channelName, service, payload);
    if (this.channel_.getConfig()[CfgFields.DIRECT_TRANSPORT_SYNC_MODE]) {
      this.executeScheduledSend_(message);
    } else {
      this.asyncSendsMap_[goog.getUid(message)] = Timer.callOnce(goog.bind(this.executeScheduledSend_, this, message), 0);
    }
  };
  /**
   @private
   @param {!DirectTransport.Message_} message
   */
  DirectTransport.prototype.executeScheduledSend_ = function(message) {
    var messageId = goog.getUid(message);
    if (this.asyncSendsMap_[messageId]) {
      delete this.asyncSendsMap_[messageId];
    }
    try {
      var peerProxy = goog.getObjectByName(DirectTransport.GLOBAL_TRANPORT_PATH_, this.channel_.getPeerWindowObject());
    } catch (error) {
      goog.log.warning(goog.net.xpc.logger, "Can't access other window, ignoring.", error);
      return;
    }
    if (goog.isNull(peerProxy)) {
      goog.log.warning(goog.net.xpc.logger, "Peer window had no global function.");
      return;
    }
    try {
      peerProxy(message.toLiteral());
      goog.log.info(goog.net.xpc.logger, "send(): channelName\x3d" + message.channelName + " service\x3d" + message.service + " payload\x3d" + message.payload);
    } catch (error$6) {
      goog.log.warning(goog.net.xpc.logger, "Error performing call, ignoring.", error$6);
    }
  };
  /**
   @private
   @return {goog.net.xpc.CrossPageChannelRole}
   */
  DirectTransport.prototype.getPeerRole_ = function() {
    var role = this.channel_.getRole();
    return role == goog.net.xpc.CrossPageChannelRole.OUTER ? goog.net.xpc.CrossPageChannelRole.INNER : goog.net.xpc.CrossPageChannelRole.OUTER;
  };
  /** @private */ DirectTransport.prototype.notifyConnected_ = function() {
    this.channel_.notifyConnected(this.channel_.getConfig()[CfgFields.DIRECT_TRANSPORT_SYNC_MODE] ? DirectTransport.CONNECTION_DELAY_INTERVAL_MS_ : 0);
  };
  /** @override */ DirectTransport.prototype.disposeInternal = function() {
    if (this.initialized_) {
      var listenWindow = this.getWindow();
      var uid = goog.getUid(listenWindow);
      var value = --DirectTransport.activeCount_[uid];
      if (value == 1) {
        goog.exportSymbol(DirectTransport.GLOBAL_TRANPORT_PATH_, null, listenWindow);
      }
    }
    if (this.asyncSendsMap_) {
      goog.object.forEach(this.asyncSendsMap_, function(timerId) {
        Timer.clear(timerId);
      });
      this.asyncSendsMap_ = null;
    }
    if (this.setupAckReceived_) {
      this.setupAckReceived_.cancel();
      delete this.setupAckReceived_;
    }
    if (this.setupAckSent_) {
      this.setupAckSent_.cancel();
      delete this.setupAckSent_;
    }
    if (this.connected_) {
      this.connected_.cancel();
      delete this.connected_;
    }
    DirectTransport.base(this, "disposeInternal");
  };
  /**
   @private
   @param {string} payload
   @return {!Array<?string>}
   */
  DirectTransport.parseTransportPayload_ = function(payload) {
    var transportParts = /** @type {!Array<?string>} */ (payload.split(DirectTransport.MESSAGE_DELIMITER_));
    transportParts[1] = transportParts[1] || null;
    return transportParts;
  };
  /**
   @private
   @struct
   @constructor
   @param {string} channelName
   @param {string} service
   @param {string} payload
   */
  DirectTransport.Message_ = function(channelName, service, payload) {
    /** @type {string} */ this.channelName = channelName;
    /** @type {string} */ this.service = service;
    /** @type {string} */ this.payload = payload;
  };
  /**
   @return {!Object}
   */
  DirectTransport.Message_.prototype.toLiteral = function() {
    return {"channelName":this.channelName, "service":this.service, "payload":this.payload};
  };
  /**
   @param {!Object} literal
   @return {!DirectTransport.Message_}
   */
  DirectTransport.Message_.fromLiteral = function(literal) {
    return new DirectTransport.Message_(literal["channelName"], literal["service"], literal["payload"]);
  };
});

//# sourceMappingURL=goog.net.xpc.directtransport.js.map
