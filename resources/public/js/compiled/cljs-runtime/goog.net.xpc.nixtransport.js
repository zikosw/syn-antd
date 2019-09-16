goog.provide("goog.net.xpc.NixTransport");
goog.require("goog.log");
goog.require("goog.net.xpc");
goog.require("goog.net.xpc.CfgFields");
goog.require("goog.net.xpc.CrossPageChannelRole");
goog.require("goog.net.xpc.Transport");
goog.require("goog.net.xpc.TransportTypes");
goog.require("goog.reflect");
/**
 @final
 @constructor
 @extends {goog.net.xpc.Transport}
 @param {goog.net.xpc.CrossPageChannel} channel
 @param {goog.dom.DomHelper=} opt_domHelper
 */
goog.net.xpc.NixTransport = function(channel, opt_domHelper) {
  goog.net.xpc.NixTransport.base(this, "constructor", opt_domHelper);
  /** @private @type {goog.net.xpc.CrossPageChannel} */ this.channel_ = channel;
  /** @private @type {?string} */ this.authToken_ = channel[goog.net.xpc.CfgFields.AUTH_TOKEN] || "";
  /** @private @type {?string} */ this.remoteAuthToken_ = channel[goog.net.xpc.CfgFields.REMOTE_AUTH_TOKEN] || "";
  goog.net.xpc.NixTransport.conductGlobalSetup_(this.getWindow());
  this[goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE] = this.handleMessage_;
  this[goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL] = this.createChannel_;
};
goog.inherits(goog.net.xpc.NixTransport, goog.net.xpc.Transport);
/** @type {string} */ goog.net.xpc.NixTransport.NIX_WRAPPER = "GCXPC____NIXVBS_wrapper";
/** @type {string} */ goog.net.xpc.NixTransport.NIX_GET_WRAPPER = "GCXPC____NIXVBS_get_wrapper";
/** @type {string} */ goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE = "GCXPC____NIXJS_handle_message";
/** @type {string} */ goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL = "GCXPC____NIXJS_create_channel";
/** @type {string} */ goog.net.xpc.NixTransport.NIX_ID_FIELD = "GCXPC____NIXVBS_container";
/**
 @return {boolean}
 */
goog.net.xpc.NixTransport.isNixSupported = function() {
  var isSupported = false;
  try {
    var oldOpener = window.opener;
    window.opener = /** @type {Window} */ ({});
    isSupported = goog.reflect.canAccessProperty(window, "opener");
    window.opener = oldOpener;
  } catch (e) {
  }
  return isSupported;
};
/**
 @private
 @param {Window} listenWindow
 */
goog.net.xpc.NixTransport.conductGlobalSetup_ = function(listenWindow) {
  if (listenWindow["nix_setup_complete"]) {
    return;
  }
  var vbscript = "Class " + goog.net.xpc.NixTransport.NIX_WRAPPER + "\n " + "Private m_Transport\n" + "Private m_Auth\n" + "Public Sub SetTransport(transport)\n" + "If isEmpty(m_Transport) Then\n" + "Set m_Transport \x3d transport\n" + "End If\n" + "End Sub\n" + "Public Sub SetAuth(auth)\n" + "If isEmpty(m_Auth) Then\n" + "m_Auth \x3d auth\n" + "End If\n" + "End Sub\n" + "Public Function GetAuthToken()\n " + "GetAuthToken \x3d m_Auth\n" + "End Function\n" + "Public Sub SendMessage(service, payload)\n " + 
  "Call m_Transport." + goog.net.xpc.NixTransport.NIX_HANDLE_MESSAGE + "(service, payload)\n" + "End Sub\n" + "Public Sub CreateChannel(channel)\n " + "Call m_Transport." + goog.net.xpc.NixTransport.NIX_CREATE_CHANNEL + "(channel)\n" + "End Sub\n" + "Public Sub " + goog.net.xpc.NixTransport.NIX_ID_FIELD + "()\n " + "End Sub\n" + "End Class\n " + "Function " + goog.net.xpc.NixTransport.NIX_GET_WRAPPER + "(transport, auth)\n" + "Dim wrap\n" + "Set wrap \x3d New " + goog.net.xpc.NixTransport.NIX_WRAPPER + 
  "\n" + "wrap.SetTransport transport\n" + "wrap.SetAuth auth\n" + "Set " + goog.net.xpc.NixTransport.NIX_GET_WRAPPER + " \x3d wrap\n" + "End Function";
  try {
    listenWindow.execScript(vbscript, "vbscript");
    listenWindow["nix_setup_complete"] = true;
  } catch (e) {
    goog.log.error(goog.net.xpc.logger, "exception caught while attempting global setup: " + e);
  }
};
/** @protected @override @type {number} */ goog.net.xpc.NixTransport.prototype.transportType = goog.net.xpc.TransportTypes.NIX;
/** @private @type {boolean} */ goog.net.xpc.NixTransport.prototype.localSetupCompleted_ = false;
/** @private @type {?Object} */ goog.net.xpc.NixTransport.prototype.nixChannel_ = null;
/** @override */ goog.net.xpc.NixTransport.prototype.connect = function() {
  if (this.channel_.getRole() == goog.net.xpc.CrossPageChannelRole.OUTER) {
    this.attemptOuterSetup_();
  } else {
    this.attemptInnerSetup_();
  }
};
/** @private */ goog.net.xpc.NixTransport.prototype.attemptOuterSetup_ = function() {
  if (this.localSetupCompleted_) {
    return;
  }
  var innerFrame = this.channel_.getIframeElement();
  try {
    var theWindow = this.getWindow();
    var getWrapper = theWindow[goog.net.xpc.NixTransport.NIX_GET_WRAPPER];
    innerFrame.contentWindow.opener = getWrapper(this, this.authToken_);
    this.localSetupCompleted_ = true;
  } catch (e) {
    goog.log.error(goog.net.xpc.logger, "exception caught while attempting setup: " + e);
  }
  if (!this.localSetupCompleted_) {
    this.getWindow().setTimeout(goog.bind(this.attemptOuterSetup_, this), 100);
  }
};
/** @private */ goog.net.xpc.NixTransport.prototype.attemptInnerSetup_ = function() {
  if (this.localSetupCompleted_) {
    return;
  }
  try {
    var opener = this.getWindow().opener;
    if (opener && goog.net.xpc.NixTransport.NIX_ID_FIELD in opener) {
      this.nixChannel_ = opener;
      var remoteAuthToken = this.nixChannel_["GetAuthToken"]();
      if (remoteAuthToken != this.remoteAuthToken_) {
        goog.log.error(goog.net.xpc.logger, "Invalid auth token from other party");
        return;
      }
      var theWindow = this.getWindow();
      var getWrapper = theWindow[goog.net.xpc.NixTransport.NIX_GET_WRAPPER];
      this.nixChannel_["CreateChannel"](getWrapper(this, this.authToken_));
      this.localSetupCompleted_ = true;
      this.channel_.notifyConnected();
    }
  } catch (e) {
    goog.log.error(goog.net.xpc.logger, "exception caught while attempting setup: " + e);
    return;
  }
  if (!this.localSetupCompleted_) {
    this.getWindow().setTimeout(goog.bind(this.attemptInnerSetup_, this), 100);
  }
};
/**
 @private
 @param {Object} channel
 */
goog.net.xpc.NixTransport.prototype.createChannel_ = function(channel) {
  if (typeof channel != "unknown" || !(goog.net.xpc.NixTransport.NIX_ID_FIELD in channel)) {
    goog.log.error(goog.net.xpc.logger, "Invalid NIX channel given to createChannel_");
  }
  this.nixChannel_ = channel;
  var remoteAuthToken = this.nixChannel_["GetAuthToken"]();
  if (remoteAuthToken != this.remoteAuthToken_) {
    goog.log.error(goog.net.xpc.logger, "Invalid auth token from other party");
    return;
  }
  this.channel_.notifyConnected();
};
/**
 @private
 @param {string} serviceName
 @param {string} payload
 */
goog.net.xpc.NixTransport.prototype.handleMessage_ = function(serviceName, payload) {
  /**
   @this {goog.net.xpc.NixTransport}
   */
  var deliveryHandler = function() {
    this.channel_.xpcDeliver(serviceName, payload);
  };
  this.getWindow().setTimeout(goog.bind(deliveryHandler, this), 1);
};
/**
 @param {string} service
 @param {string} payload
 @override
 */
goog.net.xpc.NixTransport.prototype.send = function(service, payload) {
  if (typeof this.nixChannel_ !== "unknown") {
    goog.log.error(goog.net.xpc.logger, "NIX channel not connected");
  }
  this.nixChannel_["SendMessage"](service, payload);
};
/** @override */ goog.net.xpc.NixTransport.prototype.disposeInternal = function() {
  goog.net.xpc.NixTransport.base(this, "disposeInternal");
  this.nixChannel_ = null;
};

//# sourceMappingURL=goog.net.xpc.nixtransport.js.map
