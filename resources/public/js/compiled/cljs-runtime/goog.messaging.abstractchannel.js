goog.provide("goog.messaging.AbstractChannel");
goog.require("goog.Disposable");
goog.require("goog.json");
goog.require("goog.log");
goog.require("goog.messaging.MessageChannel");
/**
 @constructor
 @extends {goog.Disposable}
 @implements {goog.messaging.MessageChannel}
 */
goog.messaging.AbstractChannel = function() {
  goog.messaging.AbstractChannel.base(this, "constructor");
  /** @private @type {Object<string,{callback:function((string|!Object)),objectPayload:boolean}>} */ this.services_ = {};
};
goog.inherits(goog.messaging.AbstractChannel, goog.Disposable);
/** @private @type {?function(string,(string|!Object))} */ goog.messaging.AbstractChannel.prototype.defaultService_;
/** @protected @type {goog.log.Logger} */ goog.messaging.AbstractChannel.prototype.logger = goog.log.getLogger("goog.messaging.AbstractChannel");
/** @override */ goog.messaging.AbstractChannel.prototype.connect = function(opt_connectCb) {
  if (opt_connectCb) {
    opt_connectCb();
  }
};
/** @override */ goog.messaging.AbstractChannel.prototype.isConnected = function() {
  return true;
};
/** @override */ goog.messaging.AbstractChannel.prototype.registerService = function(serviceName, callback, opt_objectPayload) {
  this.services_[serviceName] = {callback:callback, objectPayload:!!opt_objectPayload};
};
/** @override */ goog.messaging.AbstractChannel.prototype.registerDefaultService = function(callback) {
  this.defaultService_ = callback;
};
/** @override */ goog.messaging.AbstractChannel.prototype.send = goog.abstractMethod;
/**
 @protected
 @param {string} serviceName
 @param {(string|!Object)} payload
 */
goog.messaging.AbstractChannel.prototype.deliver = function(serviceName, payload) {
  var service = this.getService(serviceName, payload);
  if (!service) {
    return;
  }
  var decodedPayload = this.decodePayload(serviceName, payload, service.objectPayload);
  if (goog.isDefAndNotNull(decodedPayload)) {
    service.callback(decodedPayload);
  }
};
/**
 @protected
 @param {string} serviceName
 @param {(string|!Object)} payload
 @return {?{callback:function((string|!Object)),objectPayload:boolean}}
 */
goog.messaging.AbstractChannel.prototype.getService = function(serviceName, payload) {
  var service = this.services_[serviceName];
  if (service) {
    return service;
  } else {
    if (this.defaultService_) {
      var callback = goog.partial(this.defaultService_, serviceName);
      var objectPayload = goog.isObject(payload);
      return {callback:callback, objectPayload:objectPayload};
    }
  }
  goog.log.warning(this.logger, 'Unknown service name "' + serviceName + '"');
  return null;
};
/**
 @protected
 @param {string} serviceName
 @param {(string|!Object)} payload
 @param {boolean} objectPayload
 @return {(string|Object)}
 */
goog.messaging.AbstractChannel.prototype.decodePayload = function(serviceName, payload, objectPayload) {
  if (objectPayload && goog.isString(payload)) {
    try {
      return (/** @type {!Object} */ (JSON.parse(payload)));
    } catch (err) {
      goog.log.warning(this.logger, "Expected JSON payload for " + serviceName + ', was "' + payload + '"');
      return null;
    }
  } else {
    if (!objectPayload && !goog.isString(payload)) {
      return goog.json.serialize(payload);
    }
  }
  return payload;
};
/** @override */ goog.messaging.AbstractChannel.prototype.disposeInternal = function() {
  goog.messaging.AbstractChannel.base(this, "disposeInternal");
  delete this.services_;
  delete this.defaultService_;
};

//# sourceMappingURL=goog.messaging.abstractchannel.js.map
