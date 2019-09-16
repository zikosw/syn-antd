goog.provide("goog.net.xpc.IframeRelayTransport");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.events");
goog.require("goog.html.SafeHtml");
goog.require("goog.log");
goog.require("goog.log.Level");
goog.require("goog.net.xpc");
goog.require("goog.net.xpc.CfgFields");
goog.require("goog.net.xpc.Transport");
goog.require("goog.net.xpc.TransportTypes");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.require("goog.userAgent");
/**
 @final
 @constructor
 @extends {goog.net.xpc.Transport}
 @param {goog.net.xpc.CrossPageChannel} channel
 @param {goog.dom.DomHelper=} opt_domHelper
 */
goog.net.xpc.IframeRelayTransport = function(channel, opt_domHelper) {
  goog.net.xpc.IframeRelayTransport.base(this, "constructor", opt_domHelper);
  /** @private @type {goog.net.xpc.CrossPageChannel} */ this.channel_ = channel;
  /** @private @type {string} */ this.peerRelayUri_ = this.channel_.getConfig()[goog.net.xpc.CfgFields.PEER_RELAY_URI];
  /** @private @type {string} */ this.peerIframeId_ = this.channel_.getConfig()[goog.net.xpc.CfgFields.IFRAME_ID];
  if (goog.userAgent.WEBKIT) {
    goog.net.xpc.IframeRelayTransport.startCleanupTimer_();
  }
};
goog.inherits(goog.net.xpc.IframeRelayTransport, goog.net.xpc.Transport);
if (goog.userAgent.WEBKIT) {
  /** @private @type {Array<Object>} */ goog.net.xpc.IframeRelayTransport.iframeRefs_ = [];
  /** @private @type {number} */ goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_ = 1000;
  /** @private @type {number} */ goog.net.xpc.IframeRelayTransport.IFRAME_MAX_AGE_ = 3000;
  /** @private @type {number} */ goog.net.xpc.IframeRelayTransport.cleanupTimer_ = 0;
  /** @private */ goog.net.xpc.IframeRelayTransport.startCleanupTimer_ = function() {
    if (!goog.net.xpc.IframeRelayTransport.cleanupTimer_) {
      goog.net.xpc.IframeRelayTransport.cleanupTimer_ = window.setTimeout(function() {
        goog.net.xpc.IframeRelayTransport.cleanup_();
      }, goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_);
    }
  };
  /**
   @private
   @param {number=} opt_maxAge
   */
  goog.net.xpc.IframeRelayTransport.cleanup_ = function(opt_maxAge) {
    var now = goog.now();
    var maxAge = opt_maxAge || goog.net.xpc.IframeRelayTransport.IFRAME_MAX_AGE_;
    while (goog.net.xpc.IframeRelayTransport.iframeRefs_.length && now - goog.net.xpc.IframeRelayTransport.iframeRefs_[0].timestamp >= maxAge) {
      var ifr = goog.net.xpc.IframeRelayTransport.iframeRefs_.shift().iframeElement;
      goog.dom.removeNode(ifr);
      goog.log.log(goog.net.xpc.logger, goog.log.Level.FINEST, "iframe removed");
    }
    goog.net.xpc.IframeRelayTransport.cleanupTimer_ = window.setTimeout(goog.net.xpc.IframeRelayTransport.cleanupCb_, goog.net.xpc.IframeRelayTransport.CLEANUP_INTERVAL_);
  };
  /** @private */ goog.net.xpc.IframeRelayTransport.cleanupCb_ = function() {
    goog.net.xpc.IframeRelayTransport.cleanup_();
  };
}
/** @private @type {number} */ goog.net.xpc.IframeRelayTransport.IE_PAYLOAD_MAX_SIZE_ = 1800;
/** @typedef {{fragments:!Array<string>,received:number,expected:number}} */ goog.net.xpc.IframeRelayTransport.FragmentInfo;
/** @private @type {!Object<string,!goog.net.xpc.IframeRelayTransport.FragmentInfo>} */ goog.net.xpc.IframeRelayTransport.fragmentMap_ = {};
/** @override @type {number} */ goog.net.xpc.IframeRelayTransport.prototype.transportType = goog.net.xpc.TransportTypes.IFRAME_RELAY;
/** @override */ goog.net.xpc.IframeRelayTransport.prototype.connect = function() {
  if (!this.getWindow()["xpcRelay"]) {
    this.getWindow()["xpcRelay"] = goog.net.xpc.IframeRelayTransport.receiveMessage_;
  }
  this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP);
};
/**
 @private
 @param {string} channelName
 @param {string} frame
 */
goog.net.xpc.IframeRelayTransport.receiveMessage_ = function(channelName, frame) {
  var pos = frame.indexOf(":");
  var header = frame.substr(0, pos);
  var payload = frame.substr(pos + 1);
  if (!goog.userAgent.IE || (pos = header.indexOf("|")) == -1) {
    var service = header;
  } else {
    var service = header.substr(0, pos);
    var fragmentIdStr = header.substr(pos + 1);
    pos = fragmentIdStr.indexOf("+");
    var messageIdStr = fragmentIdStr.substr(0, pos);
    var fragmentNum = parseInt(fragmentIdStr.substr(pos + 1), 10);
    var fragmentInfo = goog.net.xpc.IframeRelayTransport.fragmentMap_[messageIdStr];
    if (!fragmentInfo) {
      fragmentInfo = goog.net.xpc.IframeRelayTransport.fragmentMap_[messageIdStr] = {fragments:[], received:0, expected:0};
    }
    if (goog.string.contains(fragmentIdStr, "++")) {
      fragmentInfo.expected = fragmentNum + 1;
    }
    fragmentInfo.fragments[fragmentNum] = payload;
    fragmentInfo.received++;
    if (fragmentInfo.received != fragmentInfo.expected) {
      return;
    }
    payload = fragmentInfo.fragments.join("");
    delete goog.net.xpc.IframeRelayTransport.fragmentMap_[messageIdStr];
  }
  goog.net.xpc.channels[channelName].xpcDeliver(service, decodeURIComponent(payload));
};
/**
 @param {string} payload
 @override
 */
goog.net.xpc.IframeRelayTransport.prototype.transportServiceHandler = function(payload) {
  if (payload == goog.net.xpc.SETUP) {
    this.send(goog.net.xpc.TRANSPORT_SERVICE_, goog.net.xpc.SETUP_ACK_);
    this.channel_.notifyConnected();
  } else {
    if (payload == goog.net.xpc.SETUP_ACK_) {
      this.channel_.notifyConnected();
    }
  }
};
/**
 @param {string} service
 @param {string} payload
 @override
 */
goog.net.xpc.IframeRelayTransport.prototype.send = function(service, payload) {
  var encodedPayload = encodeURIComponent(payload);
  var encodedLen = encodedPayload.length;
  var maxSize = goog.net.xpc.IframeRelayTransport.IE_PAYLOAD_MAX_SIZE_;
  if (goog.userAgent.IE && encodedLen > maxSize) {
    var messageIdStr = goog.string.getRandomString();
    for (var startIndex = 0, fragmentNum = 0; startIndex < encodedLen; fragmentNum++) {
      var payloadFragment = encodedPayload.substr(startIndex, maxSize);
      startIndex += maxSize;
      var fragmentIdStr = messageIdStr + (startIndex >= encodedLen ? "++" : "+") + fragmentNum;
      this.send_(service, payloadFragment, fragmentIdStr);
    }
  } else {
    this.send_(service, encodedPayload);
  }
};
/**
 @private
 @param {string} service
 @param {string} encodedPayload
 @param {string=} opt_fragmentIdStr
 */
goog.net.xpc.IframeRelayTransport.prototype.send_ = function(service, encodedPayload, opt_fragmentIdStr) {
  if (goog.userAgent.IE) {
    var div = this.getWindow().document.createElement(String(goog.dom.TagName.DIV));
    goog.dom.safe.setInnerHtml(div, goog.html.SafeHtml.createIframe(null, null, {"onload":goog.string.Const.from("this.xpcOnload()"), "sandbox":null}));
    var ifr = div.childNodes[0];
    div = null;
    ifr["xpcOnload"] = goog.net.xpc.IframeRelayTransport.iframeLoadHandler_;
  } else {
    var ifr = this.getWindow().document.createElement(String(goog.dom.TagName.IFRAME));
    if (goog.userAgent.WEBKIT) {
      goog.net.xpc.IframeRelayTransport.iframeRefs_.push({timestamp:goog.now(), iframeElement:ifr});
    } else {
      goog.events.listen(ifr, "load", goog.net.xpc.IframeRelayTransport.iframeLoadHandler_);
    }
  }
  var style = ifr.style;
  style.visibility = "hidden";
  style.width = ifr.style.height = "0px";
  style.position = "absolute";
  var url = this.peerRelayUri_;
  url += "#" + this.channel_.name;
  if (this.peerIframeId_) {
    url += "," + this.peerIframeId_;
  }
  url += "|" + service;
  if (opt_fragmentIdStr) {
    url += "|" + opt_fragmentIdStr;
  }
  url += ":" + encodedPayload;
  ifr.src = url;
  this.getWindow().document.body.appendChild(ifr);
  goog.log.log(goog.net.xpc.logger, goog.log.Level.FINEST, "msg sent: " + url);
};
/**
 @private
 @this {Element}
 */
goog.net.xpc.IframeRelayTransport.iframeLoadHandler_ = function() {
  goog.log.log(goog.net.xpc.logger, goog.log.Level.FINEST, "iframe-load");
  goog.dom.removeNode(this);
  this.xpcOnload = null;
};
/** @override */ goog.net.xpc.IframeRelayTransport.prototype.disposeInternal = function() {
  goog.net.xpc.IframeRelayTransport.base(this, "disposeInternal");
  if (goog.userAgent.WEBKIT) {
    goog.net.xpc.IframeRelayTransport.cleanup_(0);
  }
};

//# sourceMappingURL=goog.net.xpc.iframerelaytransport.js.map
