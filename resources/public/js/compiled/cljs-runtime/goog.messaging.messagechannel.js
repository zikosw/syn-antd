goog.provide("goog.messaging.MessageChannel");
/** @interface */ goog.messaging.MessageChannel = function() {
};
/**
 @param {Function=} opt_connectCb
 */
goog.messaging.MessageChannel.prototype.connect = function(opt_connectCb) {
};
/**
 @return {boolean}
 */
goog.messaging.MessageChannel.prototype.isConnected = function() {
};
/**
 @param {string} serviceName
 @param {function((string|!Object))} callback
 @param {boolean=} opt_objectPayload
 */
goog.messaging.MessageChannel.prototype.registerService = function(serviceName, callback, opt_objectPayload) {
};
/**
 @param {function(string,(string|!Object))} callback
 */
goog.messaging.MessageChannel.prototype.registerDefaultService = function(callback) {
};
/**
 @param {string} serviceName
 @param {(string|!Object)} payload
 */
goog.messaging.MessageChannel.prototype.send = function(serviceName, payload) {
};

//# sourceMappingURL=goog.messaging.messagechannel.js.map
