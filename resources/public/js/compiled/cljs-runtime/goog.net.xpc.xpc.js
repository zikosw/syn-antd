/**
 @suppress {underscore}
 */
goog.provide("goog.net.xpc");
goog.provide("goog.net.xpc.CfgFields");
goog.provide("goog.net.xpc.ChannelStates");
goog.provide("goog.net.xpc.TransportNames");
goog.provide("goog.net.xpc.TransportTypes");
goog.provide("goog.net.xpc.UriCfgFields");
goog.require("goog.log");
goog.forwardDeclare("goog.net.xpc.CrossPageChannel");
/** @enum {number} */ goog.net.xpc.TransportTypes = {UNDEFINED:0, NATIVE_MESSAGING:1, FRAME_ELEMENT_METHOD:2, IFRAME_RELAY:3, IFRAME_POLLING:4, FLASH:5, NIX:6, DIRECT:7};
/** @const @type {!Object<string,string>} */ goog.net.xpc.TransportNames = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport", 7:"DirectTransport"};
/** @const */ goog.net.xpc.CfgFields = {CHANNEL_NAME:"cn", AUTH_TOKEN:"at", REMOTE_AUTH_TOKEN:"rat", PEER_URI:"pu", IFRAME_ID:"ifrid", TRANSPORT:"tp", LOCAL_RELAY_URI:"lru", PEER_RELAY_URI:"pru", LOCAL_POLL_URI:"lpu", PEER_POLL_URI:"ppu", PEER_HOSTNAME:"ph", ONE_SIDED_HANDSHAKE:"osh", ROLE:"role", NATIVE_TRANSPORT_PROTOCOL_VERSION:"nativeProtocolVersion", DIRECT_TRANSPORT_SYNC_MODE:"directSyncMode"};
/** @type {Array<string>} */ goog.net.xpc.UriCfgFields = [goog.net.xpc.CfgFields.PEER_URI, goog.net.xpc.CfgFields.LOCAL_RELAY_URI, goog.net.xpc.CfgFields.PEER_RELAY_URI, goog.net.xpc.CfgFields.LOCAL_POLL_URI, goog.net.xpc.CfgFields.PEER_POLL_URI];
/** @enum {number} */ goog.net.xpc.ChannelStates = {NOT_CONNECTED:1, CONNECTED:2, CLOSED:3};
/**
 @type {string}
 @suppress {underscore,visibility}
 */
goog.net.xpc.TRANSPORT_SERVICE_ = "tp";
/** @type {string} */ goog.net.xpc.SETUP = "SETUP";
/** @type {string} */ goog.net.xpc.SETUP_NTPV2 = "SETUP_NTPV2";
/**
 @type {string}
 @suppress {underscore,visibility}
 */
goog.net.xpc.SETUP_ACK_ = "SETUP_ACK";
/** @type {string} */ goog.net.xpc.SETUP_ACK_NTPV2 = "SETUP_ACK_NTPV2";
/** @package @type {Object<string,goog.net.xpc.CrossPageChannel>} */ goog.net.xpc.channels = {};
/**
 @param {number} length
 @param {string=} opt_characters
 @return {string}
 */
goog.net.xpc.getRandomString = function(length, opt_characters) {
  var chars = opt_characters || goog.net.xpc.randomStringCharacters_;
  var charsLength = chars.length;
  var s = "";
  while (length-- > 0) {
    s += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return s;
};
/** @private @type {string} */ goog.net.xpc.randomStringCharacters_ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
/** @type {goog.log.Logger} */ goog.net.xpc.logger = goog.log.getLogger("goog.net.xpc");

//# sourceMappingURL=goog.net.xpc.xpc.js.map
