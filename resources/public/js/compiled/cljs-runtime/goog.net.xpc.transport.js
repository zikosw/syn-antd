goog.provide("goog.net.xpc.Transport");
goog.require("goog.Disposable");
goog.require("goog.dom");
goog.require("goog.net.xpc.TransportNames");
/**
 @constructor
 @extends {goog.Disposable}
 @param {goog.dom.DomHelper=} opt_domHelper
 */
goog.net.xpc.Transport = function(opt_domHelper) {
  goog.Disposable.call(this);
  /** @private @type {goog.dom.DomHelper} */ this.domHelper_ = opt_domHelper || goog.dom.getDomHelper();
};
goog.inherits(goog.net.xpc.Transport, goog.Disposable);
/** @protected @type {number} */ goog.net.xpc.Transport.prototype.transportType = 0;
/**
 @return {number}
 */
goog.net.xpc.Transport.prototype.getType = function() {
  return this.transportType;
};
/**
 @return {!Window}
 */
goog.net.xpc.Transport.prototype.getWindow = function() {
  return this.domHelper_.getWindow();
};
/**
 @return {string}
 */
goog.net.xpc.Transport.prototype.getName = function() {
  return goog.net.xpc.TransportNames[String(this.transportType)] || "";
};
/**
 @param {string} payload
 */
goog.net.xpc.Transport.prototype.transportServiceHandler = goog.abstractMethod;
goog.net.xpc.Transport.prototype.connect = goog.abstractMethod;
/**
 @param {string} service
 @param {string} payload
 */
goog.net.xpc.Transport.prototype.send = goog.abstractMethod;

//# sourceMappingURL=goog.net.xpc.transport.js.map
