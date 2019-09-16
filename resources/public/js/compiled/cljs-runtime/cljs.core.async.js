goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31303 = arguments.length;
switch (G__31303) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31316 = (function (f,blockable,meta31317){
this.f = f;
this.blockable = blockable;
this.meta31317 = meta31317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31318,meta31317__$1){
var self__ = this;
var _31318__$1 = this;
return (new cljs.core.async.t_cljs$core$async31316(self__.f,self__.blockable,meta31317__$1));
});

cljs.core.async.t_cljs$core$async31316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31318){
var self__ = this;
var _31318__$1 = this;
return self__.meta31317;
});

cljs.core.async.t_cljs$core$async31316.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31317","meta31317",252445961,null)], null);
});

cljs.core.async.t_cljs$core$async31316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31316";

cljs.core.async.t_cljs$core$async31316.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31316");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31316.
 */
cljs.core.async.__GT_t_cljs$core$async31316 = (function cljs$core$async$__GT_t_cljs$core$async31316(f__$1,blockable__$1,meta31317){
return (new cljs.core.async.t_cljs$core$async31316(f__$1,blockable__$1,meta31317));
});

}

return (new cljs.core.async.t_cljs$core$async31316(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31346 = arguments.length;
switch (G__31346) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31352 = arguments.length;
switch (G__31352) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31357 = arguments.length;
switch (G__31357) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33765 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33765) : fn1.call(null,val_33765));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33765,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33765) : fn1.call(null,val_33765));
});})(val_33765,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31387 = arguments.length;
switch (G__31387) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33776 = n;
var x_33777 = (0);
while(true){
if((x_33777 < n__4607__auto___33776)){
(a[x_33777] = (0));

var G__33778 = (x_33777 + (1));
x_33777 = G__33778;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__33779 = (i + (1));
i = G__33779;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31408 = (function (flag,meta31409){
this.flag = flag;
this.meta31409 = meta31409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31410,meta31409__$1){
var self__ = this;
var _31410__$1 = this;
return (new cljs.core.async.t_cljs$core$async31408(self__.flag,meta31409__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31410){
var self__ = this;
var _31410__$1 = this;
return self__.meta31409;
});})(flag))
;

cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31408.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31409","meta31409",-902076874,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31408";

cljs.core.async.t_cljs$core$async31408.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31408");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31408.
 */
cljs.core.async.__GT_t_cljs$core$async31408 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31408(flag__$1,meta31409){
return (new cljs.core.async.t_cljs$core$async31408(flag__$1,meta31409));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31408(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31418 = (function (flag,cb,meta31419){
this.flag = flag;
this.cb = cb;
this.meta31419 = meta31419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31420,meta31419__$1){
var self__ = this;
var _31420__$1 = this;
return (new cljs.core.async.t_cljs$core$async31418(self__.flag,self__.cb,meta31419__$1));
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31420){
var self__ = this;
var _31420__$1 = this;
return self__.meta31419;
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31419","meta31419",-183405585,null)], null);
});

cljs.core.async.t_cljs$core$async31418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31418";

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31418");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31418.
 */
cljs.core.async.__GT_t_cljs$core$async31418 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31418(flag__$1,cb__$1,meta31419){
return (new cljs.core.async.t_cljs$core$async31418(flag__$1,cb__$1,meta31419));
});

}

return (new cljs.core.async.t_cljs$core$async31418(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31428_SHARP_){
var G__31437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31428_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31437) : fret.call(null,G__31437));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31429_SHARP_){
var G__31438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31429_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31438) : fret.call(null,G__31438));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33791 = (i + (1));
i = G__33791;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33794 = arguments.length;
var i__4731__auto___33795 = (0);
while(true){
if((i__4731__auto___33795 < len__4730__auto___33794)){
args__4736__auto__.push((arguments[i__4731__auto___33795]));

var G__33800 = (i__4731__auto___33795 + (1));
i__4731__auto___33795 = G__33800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31462){
var map__31463 = p__31462;
var map__31463__$1 = (((((!((map__31463 == null))))?(((((map__31463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31463):map__31463);
var opts = map__31463__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31457){
var G__31458 = cljs.core.first(seq31457);
var seq31457__$1 = cljs.core.next(seq31457);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31458,seq31457__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31494 = arguments.length;
switch (G__31494) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31235__auto___33811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___33811){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___33811){
return (function (state_31541){
var state_val_31542 = (state_31541[(1)]);
if((state_val_31542 === (7))){
var inst_31536 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31543_33812 = state_31541__$1;
(statearr_31543_33812[(2)] = inst_31536);

(statearr_31543_33812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (1))){
var state_31541__$1 = state_31541;
var statearr_31544_33815 = state_31541__$1;
(statearr_31544_33815[(2)] = null);

(statearr_31544_33815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (4))){
var inst_31514 = (state_31541[(7)]);
var inst_31514__$1 = (state_31541[(2)]);
var inst_31519 = (inst_31514__$1 == null);
var state_31541__$1 = (function (){var statearr_31545 = state_31541;
(statearr_31545[(7)] = inst_31514__$1);

return statearr_31545;
})();
if(cljs.core.truth_(inst_31519)){
var statearr_31546_33819 = state_31541__$1;
(statearr_31546_33819[(1)] = (5));

} else {
var statearr_31548_33820 = state_31541__$1;
(statearr_31548_33820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (13))){
var state_31541__$1 = state_31541;
var statearr_31549_33821 = state_31541__$1;
(statearr_31549_33821[(2)] = null);

(statearr_31549_33821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (6))){
var inst_31514 = (state_31541[(7)]);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31541__$1,(11),to,inst_31514);
} else {
if((state_val_31542 === (3))){
var inst_31539 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31541__$1,inst_31539);
} else {
if((state_val_31542 === (12))){
var state_31541__$1 = state_31541;
var statearr_31553_33826 = state_31541__$1;
(statearr_31553_33826[(2)] = null);

(statearr_31553_33826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (2))){
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31541__$1,(4),from);
} else {
if((state_val_31542 === (11))){
var inst_31528 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31528)){
var statearr_31556_33831 = state_31541__$1;
(statearr_31556_33831[(1)] = (12));

} else {
var statearr_31557_33832 = state_31541__$1;
(statearr_31557_33832[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (9))){
var state_31541__$1 = state_31541;
var statearr_31558_33833 = state_31541__$1;
(statearr_31558_33833[(2)] = null);

(statearr_31558_33833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (5))){
var state_31541__$1 = state_31541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31559_33835 = state_31541__$1;
(statearr_31559_33835[(1)] = (8));

} else {
var statearr_31560_33836 = state_31541__$1;
(statearr_31560_33836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (14))){
var inst_31534 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31563_33837 = state_31541__$1;
(statearr_31563_33837[(2)] = inst_31534);

(statearr_31563_33837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (10))){
var inst_31525 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31564_33840 = state_31541__$1;
(statearr_31564_33840[(2)] = inst_31525);

(statearr_31564_33840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (8))){
var inst_31522 = cljs.core.async.close_BANG_(to);
var state_31541__$1 = state_31541;
var statearr_31565_33844 = state_31541__$1;
(statearr_31565_33844[(2)] = inst_31522);

(statearr_31565_33844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___33811))
;
return ((function (switch__30976__auto__,c__31235__auto___33811){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_31567 = [null,null,null,null,null,null,null,null];
(statearr_31567[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_31567[(1)] = (1));

return statearr_31567;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_31541){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31541);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31568){if((e31568 instanceof Object)){
var ex__30980__auto__ = e31568;
var statearr_31571_33847 = state_31541;
(statearr_31571_33847[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33848 = state_31541;
state_31541 = G__33848;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_31541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_31541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___33811))
})();
var state__31237__auto__ = (function (){var statearr_31572 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31572[(6)] = c__31235__auto___33811);

return statearr_31572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___33811))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31575){
var vec__31576 = p__31575;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31576,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31576,(1),null);
var job = vec__31576;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31235__auto___33858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___33858,res,vec__31576,v,p,job,jobs,results){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___33858,res,vec__31576,v,p,job,jobs,results){
return (function (state_31583){
var state_val_31584 = (state_31583[(1)]);
if((state_val_31584 === (1))){
var state_31583__$1 = state_31583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31583__$1,(2),res,v);
} else {
if((state_val_31584 === (2))){
var inst_31580 = (state_31583[(2)]);
var inst_31581 = cljs.core.async.close_BANG_(res);
var state_31583__$1 = (function (){var statearr_31593 = state_31583;
(statearr_31593[(7)] = inst_31580);

return statearr_31593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31583__$1,inst_31581);
} else {
return null;
}
}
});})(c__31235__auto___33858,res,vec__31576,v,p,job,jobs,results))
;
return ((function (switch__30976__auto__,c__31235__auto___33858,res,vec__31576,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0 = (function (){
var statearr_31595 = [null,null,null,null,null,null,null,null];
(statearr_31595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__);

(statearr_31595[(1)] = (1));

return statearr_31595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1 = (function (state_31583){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31583);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31601){if((e31601 instanceof Object)){
var ex__30980__auto__ = e31601;
var statearr_31603_33867 = state_31583;
(statearr_31603_33867[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33870 = state_31583;
state_31583 = G__33870;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = function(state_31583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1.call(this,state_31583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___33858,res,vec__31576,v,p,job,jobs,results))
})();
var state__31237__auto__ = (function (){var statearr_31612 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31612[(6)] = c__31235__auto___33858);

return statearr_31612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___33858,res,vec__31576,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31617){
var vec__31618 = p__31617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31618,(1),null);
var job = vec__31618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33876 = n;
var __33877 = (0);
while(true){
if((__33877 < n__4607__auto___33876)){
var G__31621_33878 = type;
var G__31621_33879__$1 = (((G__31621_33878 instanceof cljs.core.Keyword))?G__31621_33878.fqn:null);
switch (G__31621_33879__$1) {
case "compute":
var c__31235__auto___33883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33877,c__31235__auto___33883,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (__33877,c__31235__auto___33883,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async){
return (function (state_31634){
var state_val_31635 = (state_31634[(1)]);
if((state_val_31635 === (1))){
var state_31634__$1 = state_31634;
var statearr_31636_33885 = state_31634__$1;
(statearr_31636_33885[(2)] = null);

(statearr_31636_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (2))){
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31634__$1,(4),jobs);
} else {
if((state_val_31635 === (3))){
var inst_31632 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31634__$1,inst_31632);
} else {
if((state_val_31635 === (4))){
var inst_31624 = (state_31634[(2)]);
var inst_31625 = process(inst_31624);
var state_31634__$1 = state_31634;
if(cljs.core.truth_(inst_31625)){
var statearr_31637_33888 = state_31634__$1;
(statearr_31637_33888[(1)] = (5));

} else {
var statearr_31638_33891 = state_31634__$1;
(statearr_31638_33891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (5))){
var state_31634__$1 = state_31634;
var statearr_31639_33892 = state_31634__$1;
(statearr_31639_33892[(2)] = null);

(statearr_31639_33892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (6))){
var state_31634__$1 = state_31634;
var statearr_31644_33893 = state_31634__$1;
(statearr_31644_33893[(2)] = null);

(statearr_31644_33893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (7))){
var inst_31630 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31645_33895 = state_31634__$1;
(statearr_31645_33895[(2)] = inst_31630);

(statearr_31645_33895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33877,c__31235__auto___33883,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async))
;
return ((function (__33877,switch__30976__auto__,c__31235__auto___33883,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0 = (function (){
var statearr_31650 = [null,null,null,null,null,null,null];
(statearr_31650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__);

(statearr_31650[(1)] = (1));

return statearr_31650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1 = (function (state_31634){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31634);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31655){if((e31655 instanceof Object)){
var ex__30980__auto__ = e31655;
var statearr_31656_33899 = state_31634;
(statearr_31656_33899[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33900 = state_31634;
state_31634 = G__33900;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = function(state_31634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1.call(this,state_31634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__;
})()
;})(__33877,switch__30976__auto__,c__31235__auto___33883,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async))
})();
var state__31237__auto__ = (function (){var statearr_31657 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31657[(6)] = c__31235__auto___33883);

return statearr_31657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(__33877,c__31235__auto___33883,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async))
);


break;
case "async":
var c__31235__auto___33910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33877,c__31235__auto___33910,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (__33877,c__31235__auto___33910,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async){
return (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (1))){
var state_31670__$1 = state_31670;
var statearr_31672_33916 = state_31670__$1;
(statearr_31672_33916[(2)] = null);

(statearr_31672_33916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (2))){
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31670__$1,(4),jobs);
} else {
if((state_val_31671 === (3))){
var inst_31668 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (4))){
var inst_31660 = (state_31670[(2)]);
var inst_31661 = async(inst_31660);
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31661)){
var statearr_31676_33920 = state_31670__$1;
(statearr_31676_33920[(1)] = (5));

} else {
var statearr_31677_33921 = state_31670__$1;
(statearr_31677_33921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (5))){
var state_31670__$1 = state_31670;
var statearr_31678_33922 = state_31670__$1;
(statearr_31678_33922[(2)] = null);

(statearr_31678_33922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (6))){
var state_31670__$1 = state_31670;
var statearr_31679_33923 = state_31670__$1;
(statearr_31679_33923[(2)] = null);

(statearr_31679_33923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (7))){
var inst_31666 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31680_33924 = state_31670__$1;
(statearr_31680_33924[(2)] = inst_31666);

(statearr_31680_33924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33877,c__31235__auto___33910,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async))
;
return ((function (__33877,switch__30976__auto__,c__31235__auto___33910,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0 = (function (){
var statearr_31681 = [null,null,null,null,null,null,null];
(statearr_31681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__);

(statearr_31681[(1)] = (1));

return statearr_31681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1 = (function (state_31670){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31670);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31683){if((e31683 instanceof Object)){
var ex__30980__auto__ = e31683;
var statearr_31686_33931 = state_31670;
(statearr_31686_33931[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33932 = state_31670;
state_31670 = G__33932;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__;
})()
;})(__33877,switch__30976__auto__,c__31235__auto___33910,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async))
})();
var state__31237__auto__ = (function (){var statearr_31689 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31689[(6)] = c__31235__auto___33910);

return statearr_31689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(__33877,c__31235__auto___33910,G__31621_33878,G__31621_33879__$1,n__4607__auto___33876,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31621_33879__$1)].join('')));

}

var G__33933 = (__33877 + (1));
__33877 = G__33933;
continue;
} else {
}
break;
}

var c__31235__auto___33934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___33934,jobs,results,process,async){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___33934,jobs,results,process,async){
return (function (state_31714){
var state_val_31715 = (state_31714[(1)]);
if((state_val_31715 === (7))){
var inst_31710 = (state_31714[(2)]);
var state_31714__$1 = state_31714;
var statearr_31716_33939 = state_31714__$1;
(statearr_31716_33939[(2)] = inst_31710);

(statearr_31716_33939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31715 === (1))){
var state_31714__$1 = state_31714;
var statearr_31717_33943 = state_31714__$1;
(statearr_31717_33943[(2)] = null);

(statearr_31717_33943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31715 === (4))){
var inst_31694 = (state_31714[(7)]);
var inst_31694__$1 = (state_31714[(2)]);
var inst_31696 = (inst_31694__$1 == null);
var state_31714__$1 = (function (){var statearr_31720 = state_31714;
(statearr_31720[(7)] = inst_31694__$1);

return statearr_31720;
})();
if(cljs.core.truth_(inst_31696)){
var statearr_31721_33944 = state_31714__$1;
(statearr_31721_33944[(1)] = (5));

} else {
var statearr_31722_33946 = state_31714__$1;
(statearr_31722_33946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31715 === (6))){
var inst_31700 = (state_31714[(8)]);
var inst_31694 = (state_31714[(7)]);
var inst_31700__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31701 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31702 = [inst_31694,inst_31700__$1];
var inst_31703 = (new cljs.core.PersistentVector(null,2,(5),inst_31701,inst_31702,null));
var state_31714__$1 = (function (){var statearr_31725 = state_31714;
(statearr_31725[(8)] = inst_31700__$1);

return statearr_31725;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31714__$1,(8),jobs,inst_31703);
} else {
if((state_val_31715 === (3))){
var inst_31712 = (state_31714[(2)]);
var state_31714__$1 = state_31714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31714__$1,inst_31712);
} else {
if((state_val_31715 === (2))){
var state_31714__$1 = state_31714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31714__$1,(4),from);
} else {
if((state_val_31715 === (9))){
var inst_31707 = (state_31714[(2)]);
var state_31714__$1 = (function (){var statearr_31728 = state_31714;
(statearr_31728[(9)] = inst_31707);

return statearr_31728;
})();
var statearr_31732_33949 = state_31714__$1;
(statearr_31732_33949[(2)] = null);

(statearr_31732_33949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31715 === (5))){
var inst_31698 = cljs.core.async.close_BANG_(jobs);
var state_31714__$1 = state_31714;
var statearr_31733_33952 = state_31714__$1;
(statearr_31733_33952[(2)] = inst_31698);

(statearr_31733_33952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31715 === (8))){
var inst_31700 = (state_31714[(8)]);
var inst_31705 = (state_31714[(2)]);
var state_31714__$1 = (function (){var statearr_31736 = state_31714;
(statearr_31736[(10)] = inst_31705);

return statearr_31736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31714__$1,(9),results,inst_31700);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___33934,jobs,results,process,async))
;
return ((function (switch__30976__auto__,c__31235__auto___33934,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0 = (function (){
var statearr_31740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__);

(statearr_31740[(1)] = (1));

return statearr_31740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1 = (function (state_31714){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31714);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31741){if((e31741 instanceof Object)){
var ex__30980__auto__ = e31741;
var statearr_31742_33956 = state_31714;
(statearr_31742_33956[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33960 = state_31714;
state_31714 = G__33960;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = function(state_31714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1.call(this,state_31714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___33934,jobs,results,process,async))
})();
var state__31237__auto__ = (function (){var statearr_31743 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31743[(6)] = c__31235__auto___33934);

return statearr_31743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___33934,jobs,results,process,async))
);


var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto__,jobs,results,process,async){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto__,jobs,results,process,async){
return (function (state_31781){
var state_val_31782 = (state_31781[(1)]);
if((state_val_31782 === (7))){
var inst_31777 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31790_33965 = state_31781__$1;
(statearr_31790_33965[(2)] = inst_31777);

(statearr_31790_33965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (20))){
var state_31781__$1 = state_31781;
var statearr_31791_33968 = state_31781__$1;
(statearr_31791_33968[(2)] = null);

(statearr_31791_33968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (1))){
var state_31781__$1 = state_31781;
var statearr_31792_33974 = state_31781__$1;
(statearr_31792_33974[(2)] = null);

(statearr_31792_33974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (4))){
var inst_31746 = (state_31781[(7)]);
var inst_31746__$1 = (state_31781[(2)]);
var inst_31747 = (inst_31746__$1 == null);
var state_31781__$1 = (function (){var statearr_31793 = state_31781;
(statearr_31793[(7)] = inst_31746__$1);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31747)){
var statearr_31794_33978 = state_31781__$1;
(statearr_31794_33978[(1)] = (5));

} else {
var statearr_31796_33979 = state_31781__$1;
(statearr_31796_33979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (15))){
var inst_31759 = (state_31781[(8)]);
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31781__$1,(18),to,inst_31759);
} else {
if((state_val_31782 === (21))){
var inst_31772 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31797_33980 = state_31781__$1;
(statearr_31797_33980[(2)] = inst_31772);

(statearr_31797_33980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (13))){
var inst_31774 = (state_31781[(2)]);
var state_31781__$1 = (function (){var statearr_31800 = state_31781;
(statearr_31800[(9)] = inst_31774);

return statearr_31800;
})();
var statearr_31803_33984 = state_31781__$1;
(statearr_31803_33984[(2)] = null);

(statearr_31803_33984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (6))){
var inst_31746 = (state_31781[(7)]);
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31781__$1,(11),inst_31746);
} else {
if((state_val_31782 === (17))){
var inst_31767 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
if(cljs.core.truth_(inst_31767)){
var statearr_31805_33988 = state_31781__$1;
(statearr_31805_33988[(1)] = (19));

} else {
var statearr_31806_33989 = state_31781__$1;
(statearr_31806_33989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (3))){
var inst_31779 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31781__$1,inst_31779);
} else {
if((state_val_31782 === (12))){
var inst_31756 = (state_31781[(10)]);
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31781__$1,(14),inst_31756);
} else {
if((state_val_31782 === (2))){
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31781__$1,(4),results);
} else {
if((state_val_31782 === (19))){
var state_31781__$1 = state_31781;
var statearr_31808_33993 = state_31781__$1;
(statearr_31808_33993[(2)] = null);

(statearr_31808_33993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (11))){
var inst_31756 = (state_31781[(2)]);
var state_31781__$1 = (function (){var statearr_31809 = state_31781;
(statearr_31809[(10)] = inst_31756);

return statearr_31809;
})();
var statearr_31810_33994 = state_31781__$1;
(statearr_31810_33994[(2)] = null);

(statearr_31810_33994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (9))){
var state_31781__$1 = state_31781;
var statearr_31811_33995 = state_31781__$1;
(statearr_31811_33995[(2)] = null);

(statearr_31811_33995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (5))){
var state_31781__$1 = state_31781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31812_33996 = state_31781__$1;
(statearr_31812_33996[(1)] = (8));

} else {
var statearr_31813_34001 = state_31781__$1;
(statearr_31813_34001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (14))){
var inst_31761 = (state_31781[(11)]);
var inst_31759 = (state_31781[(8)]);
var inst_31759__$1 = (state_31781[(2)]);
var inst_31760 = (inst_31759__$1 == null);
var inst_31761__$1 = cljs.core.not(inst_31760);
var state_31781__$1 = (function (){var statearr_31817 = state_31781;
(statearr_31817[(11)] = inst_31761__$1);

(statearr_31817[(8)] = inst_31759__$1);

return statearr_31817;
})();
if(inst_31761__$1){
var statearr_31818_34008 = state_31781__$1;
(statearr_31818_34008[(1)] = (15));

} else {
var statearr_31819_34009 = state_31781__$1;
(statearr_31819_34009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (16))){
var inst_31761 = (state_31781[(11)]);
var state_31781__$1 = state_31781;
var statearr_31820_34010 = state_31781__$1;
(statearr_31820_34010[(2)] = inst_31761);

(statearr_31820_34010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (10))){
var inst_31753 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31821_34011 = state_31781__$1;
(statearr_31821_34011[(2)] = inst_31753);

(statearr_31821_34011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (18))){
var inst_31764 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31822_34012 = state_31781__$1;
(statearr_31822_34012[(2)] = inst_31764);

(statearr_31822_34012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (8))){
var inst_31750 = cljs.core.async.close_BANG_(to);
var state_31781__$1 = state_31781;
var statearr_31823_34019 = state_31781__$1;
(statearr_31823_34019[(2)] = inst_31750);

(statearr_31823_34019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto__,jobs,results,process,async))
;
return ((function (switch__30976__auto__,c__31235__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0 = (function (){
var statearr_31825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__);

(statearr_31825[(1)] = (1));

return statearr_31825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1 = (function (state_31781){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31781);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31826){if((e31826 instanceof Object)){
var ex__30980__auto__ = e31826;
var statearr_31827_34026 = state_31781;
(statearr_31827_34026[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34027 = state_31781;
state_31781 = G__34027;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__ = function(state_31781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1.call(this,state_31781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto__,jobs,results,process,async))
})();
var state__31237__auto__ = (function (){var statearr_31831 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31831[(6)] = c__31235__auto__);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto__,jobs,results,process,async))
);

return c__31235__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31833 = arguments.length;
switch (G__31833) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31835 = arguments.length;
switch (G__31835) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31840 = arguments.length;
switch (G__31840) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31235__auto___34038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34038,tc,fc){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34038,tc,fc){
return (function (state_31866){
var state_val_31867 = (state_31866[(1)]);
if((state_val_31867 === (7))){
var inst_31862 = (state_31866[(2)]);
var state_31866__$1 = state_31866;
var statearr_31868_34039 = state_31866__$1;
(statearr_31868_34039[(2)] = inst_31862);

(statearr_31868_34039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (1))){
var state_31866__$1 = state_31866;
var statearr_31869_34040 = state_31866__$1;
(statearr_31869_34040[(2)] = null);

(statearr_31869_34040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (4))){
var inst_31843 = (state_31866[(7)]);
var inst_31843__$1 = (state_31866[(2)]);
var inst_31844 = (inst_31843__$1 == null);
var state_31866__$1 = (function (){var statearr_31870 = state_31866;
(statearr_31870[(7)] = inst_31843__$1);

return statearr_31870;
})();
if(cljs.core.truth_(inst_31844)){
var statearr_31872_34041 = state_31866__$1;
(statearr_31872_34041[(1)] = (5));

} else {
var statearr_31873_34042 = state_31866__$1;
(statearr_31873_34042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (13))){
var state_31866__$1 = state_31866;
var statearr_31874_34043 = state_31866__$1;
(statearr_31874_34043[(2)] = null);

(statearr_31874_34043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (6))){
var inst_31843 = (state_31866[(7)]);
var inst_31849 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31843) : p.call(null,inst_31843));
var state_31866__$1 = state_31866;
if(cljs.core.truth_(inst_31849)){
var statearr_31875_34046 = state_31866__$1;
(statearr_31875_34046[(1)] = (9));

} else {
var statearr_31876_34047 = state_31866__$1;
(statearr_31876_34047[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (3))){
var inst_31864 = (state_31866[(2)]);
var state_31866__$1 = state_31866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31866__$1,inst_31864);
} else {
if((state_val_31867 === (12))){
var state_31866__$1 = state_31866;
var statearr_31877_34048 = state_31866__$1;
(statearr_31877_34048[(2)] = null);

(statearr_31877_34048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (2))){
var state_31866__$1 = state_31866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31866__$1,(4),ch);
} else {
if((state_val_31867 === (11))){
var inst_31843 = (state_31866[(7)]);
var inst_31853 = (state_31866[(2)]);
var state_31866__$1 = state_31866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31866__$1,(8),inst_31853,inst_31843);
} else {
if((state_val_31867 === (9))){
var state_31866__$1 = state_31866;
var statearr_31879_34049 = state_31866__$1;
(statearr_31879_34049[(2)] = tc);

(statearr_31879_34049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (5))){
var inst_31846 = cljs.core.async.close_BANG_(tc);
var inst_31847 = cljs.core.async.close_BANG_(fc);
var state_31866__$1 = (function (){var statearr_31880 = state_31866;
(statearr_31880[(8)] = inst_31846);

return statearr_31880;
})();
var statearr_31881_34050 = state_31866__$1;
(statearr_31881_34050[(2)] = inst_31847);

(statearr_31881_34050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (14))){
var inst_31860 = (state_31866[(2)]);
var state_31866__$1 = state_31866;
var statearr_31882_34051 = state_31866__$1;
(statearr_31882_34051[(2)] = inst_31860);

(statearr_31882_34051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (10))){
var state_31866__$1 = state_31866;
var statearr_31883_34052 = state_31866__$1;
(statearr_31883_34052[(2)] = fc);

(statearr_31883_34052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31867 === (8))){
var inst_31855 = (state_31866[(2)]);
var state_31866__$1 = state_31866;
if(cljs.core.truth_(inst_31855)){
var statearr_31884_34053 = state_31866__$1;
(statearr_31884_34053[(1)] = (12));

} else {
var statearr_31885_34054 = state_31866__$1;
(statearr_31885_34054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34038,tc,fc))
;
return ((function (switch__30976__auto__,c__31235__auto___34038,tc,fc){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_31886 = [null,null,null,null,null,null,null,null,null];
(statearr_31886[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_31886[(1)] = (1));

return statearr_31886;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_31866){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31866);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31887){if((e31887 instanceof Object)){
var ex__30980__auto__ = e31887;
var statearr_31888_34057 = state_31866;
(statearr_31888_34057[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34059 = state_31866;
state_31866 = G__34059;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_31866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_31866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34038,tc,fc))
})();
var state__31237__auto__ = (function (){var statearr_31892 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31892[(6)] = c__31235__auto___34038);

return statearr_31892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34038,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto__){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto__){
return (function (state_31916){
var state_val_31917 = (state_31916[(1)]);
if((state_val_31917 === (7))){
var inst_31912 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
var statearr_31918_34064 = state_31916__$1;
(statearr_31918_34064[(2)] = inst_31912);

(statearr_31918_34064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (1))){
var inst_31895 = init;
var state_31916__$1 = (function (){var statearr_31919 = state_31916;
(statearr_31919[(7)] = inst_31895);

return statearr_31919;
})();
var statearr_31920_34065 = state_31916__$1;
(statearr_31920_34065[(2)] = null);

(statearr_31920_34065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (4))){
var inst_31898 = (state_31916[(8)]);
var inst_31898__$1 = (state_31916[(2)]);
var inst_31899 = (inst_31898__$1 == null);
var state_31916__$1 = (function (){var statearr_31921 = state_31916;
(statearr_31921[(8)] = inst_31898__$1);

return statearr_31921;
})();
if(cljs.core.truth_(inst_31899)){
var statearr_31922_34067 = state_31916__$1;
(statearr_31922_34067[(1)] = (5));

} else {
var statearr_31923_34068 = state_31916__$1;
(statearr_31923_34068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (6))){
var inst_31898 = (state_31916[(8)]);
var inst_31902 = (state_31916[(9)]);
var inst_31895 = (state_31916[(7)]);
var inst_31902__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31895,inst_31898) : f.call(null,inst_31895,inst_31898));
var inst_31903 = cljs.core.reduced_QMARK_(inst_31902__$1);
var state_31916__$1 = (function (){var statearr_31924 = state_31916;
(statearr_31924[(9)] = inst_31902__$1);

return statearr_31924;
})();
if(inst_31903){
var statearr_31925_34070 = state_31916__$1;
(statearr_31925_34070[(1)] = (8));

} else {
var statearr_31926_34071 = state_31916__$1;
(statearr_31926_34071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (3))){
var inst_31914 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31916__$1,inst_31914);
} else {
if((state_val_31917 === (2))){
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31916__$1,(4),ch);
} else {
if((state_val_31917 === (9))){
var inst_31902 = (state_31916[(9)]);
var inst_31895 = inst_31902;
var state_31916__$1 = (function (){var statearr_31927 = state_31916;
(statearr_31927[(7)] = inst_31895);

return statearr_31927;
})();
var statearr_31928_34073 = state_31916__$1;
(statearr_31928_34073[(2)] = null);

(statearr_31928_34073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (5))){
var inst_31895 = (state_31916[(7)]);
var state_31916__$1 = state_31916;
var statearr_31929_34074 = state_31916__$1;
(statearr_31929_34074[(2)] = inst_31895);

(statearr_31929_34074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (10))){
var inst_31909 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
var statearr_31930_34075 = state_31916__$1;
(statearr_31930_34075[(2)] = inst_31909);

(statearr_31930_34075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (8))){
var inst_31902 = (state_31916[(9)]);
var inst_31905 = cljs.core.deref(inst_31902);
var state_31916__$1 = state_31916;
var statearr_31931_34076 = state_31916__$1;
(statearr_31931_34076[(2)] = inst_31905);

(statearr_31931_34076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto__))
;
return ((function (switch__30976__auto__,c__31235__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30977__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30977__auto____0 = (function (){
var statearr_31932 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31932[(0)] = cljs$core$async$reduce_$_state_machine__30977__auto__);

(statearr_31932[(1)] = (1));

return statearr_31932;
});
var cljs$core$async$reduce_$_state_machine__30977__auto____1 = (function (state_31916){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31916);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31933){if((e31933 instanceof Object)){
var ex__30980__auto__ = e31933;
var statearr_31934_34077 = state_31916;
(statearr_31934_34077[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34082 = state_31916;
state_31916 = G__34082;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30977__auto__ = function(state_31916){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30977__auto____1.call(this,state_31916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30977__auto____0;
cljs$core$async$reduce_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30977__auto____1;
return cljs$core$async$reduce_$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto__))
})();
var state__31237__auto__ = (function (){var statearr_31935 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31935[(6)] = c__31235__auto__);

return statearr_31935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto__))
);

return c__31235__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto__,f__$1){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto__,f__$1){
return (function (state_31941){
var state_val_31942 = (state_31941[(1)]);
if((state_val_31942 === (1))){
var inst_31936 = cljs.core.async.reduce(f__$1,init,ch);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31941__$1,(2),inst_31936);
} else {
if((state_val_31942 === (2))){
var inst_31938 = (state_31941[(2)]);
var inst_31939 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31938) : f__$1.call(null,inst_31938));
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31941__$1,inst_31939);
} else {
return null;
}
}
});})(c__31235__auto__,f__$1))
;
return ((function (switch__30976__auto__,c__31235__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30977__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30977__auto____0 = (function (){
var statearr_31944 = [null,null,null,null,null,null,null];
(statearr_31944[(0)] = cljs$core$async$transduce_$_state_machine__30977__auto__);

(statearr_31944[(1)] = (1));

return statearr_31944;
});
var cljs$core$async$transduce_$_state_machine__30977__auto____1 = (function (state_31941){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31941);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e31945){if((e31945 instanceof Object)){
var ex__30980__auto__ = e31945;
var statearr_31946_34095 = state_31941;
(statearr_31946_34095[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34102 = state_31941;
state_31941 = G__34102;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30977__auto__ = function(state_31941){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30977__auto____1.call(this,state_31941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30977__auto____0;
cljs$core$async$transduce_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30977__auto____1;
return cljs$core$async$transduce_$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto__,f__$1))
})();
var state__31237__auto__ = (function (){var statearr_31956 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_31956[(6)] = c__31235__auto__);

return statearr_31956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto__,f__$1))
);

return c__31235__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31958 = arguments.length;
switch (G__31958) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto__){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto__){
return (function (state_31983){
var state_val_31984 = (state_31983[(1)]);
if((state_val_31984 === (7))){
var inst_31965 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_31985_34104 = state_31983__$1;
(statearr_31985_34104[(2)] = inst_31965);

(statearr_31985_34104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (1))){
var inst_31959 = cljs.core.seq(coll);
var inst_31960 = inst_31959;
var state_31983__$1 = (function (){var statearr_31986 = state_31983;
(statearr_31986[(7)] = inst_31960);

return statearr_31986;
})();
var statearr_31987_34113 = state_31983__$1;
(statearr_31987_34113[(2)] = null);

(statearr_31987_34113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (4))){
var inst_31960 = (state_31983[(7)]);
var inst_31963 = cljs.core.first(inst_31960);
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31983__$1,(7),ch,inst_31963);
} else {
if((state_val_31984 === (13))){
var inst_31977 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_31988_34117 = state_31983__$1;
(statearr_31988_34117[(2)] = inst_31977);

(statearr_31988_34117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (6))){
var inst_31968 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
if(cljs.core.truth_(inst_31968)){
var statearr_31989_34119 = state_31983__$1;
(statearr_31989_34119[(1)] = (8));

} else {
var statearr_31990_34120 = state_31983__$1;
(statearr_31990_34120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (3))){
var inst_31981 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31983__$1,inst_31981);
} else {
if((state_val_31984 === (12))){
var state_31983__$1 = state_31983;
var statearr_31991_34121 = state_31983__$1;
(statearr_31991_34121[(2)] = null);

(statearr_31991_34121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (2))){
var inst_31960 = (state_31983[(7)]);
var state_31983__$1 = state_31983;
if(cljs.core.truth_(inst_31960)){
var statearr_31992_34122 = state_31983__$1;
(statearr_31992_34122[(1)] = (4));

} else {
var statearr_31993_34123 = state_31983__$1;
(statearr_31993_34123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (11))){
var inst_31974 = cljs.core.async.close_BANG_(ch);
var state_31983__$1 = state_31983;
var statearr_31998_34126 = state_31983__$1;
(statearr_31998_34126[(2)] = inst_31974);

(statearr_31998_34126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (9))){
var state_31983__$1 = state_31983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31999_34127 = state_31983__$1;
(statearr_31999_34127[(1)] = (11));

} else {
var statearr_32000_34128 = state_31983__$1;
(statearr_32000_34128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (5))){
var inst_31960 = (state_31983[(7)]);
var state_31983__$1 = state_31983;
var statearr_32003_34129 = state_31983__$1;
(statearr_32003_34129[(2)] = inst_31960);

(statearr_32003_34129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (10))){
var inst_31979 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_32006_34136 = state_31983__$1;
(statearr_32006_34136[(2)] = inst_31979);

(statearr_32006_34136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (8))){
var inst_31960 = (state_31983[(7)]);
var inst_31970 = cljs.core.next(inst_31960);
var inst_31960__$1 = inst_31970;
var state_31983__$1 = (function (){var statearr_32007 = state_31983;
(statearr_32007[(7)] = inst_31960__$1);

return statearr_32007;
})();
var statearr_32008_34137 = state_31983__$1;
(statearr_32008_34137[(2)] = null);

(statearr_32008_34137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto__))
;
return ((function (switch__30976__auto__,c__31235__auto__){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_32009 = [null,null,null,null,null,null,null,null];
(statearr_32009[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_32009[(1)] = (1));

return statearr_32009;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_31983){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_31983);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e32010){if((e32010 instanceof Object)){
var ex__30980__auto__ = e32010;
var statearr_32011_34139 = state_31983;
(statearr_32011_34139[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34144 = state_31983;
state_31983 = G__34144;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_31983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_31983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto__))
})();
var state__31237__auto__ = (function (){var statearr_32021 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_32021[(6)] = c__31235__auto__);

return statearr_32021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto__))
);

return c__31235__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32048 = (function (ch,cs,meta32049){
this.ch = ch;
this.cs = cs;
this.meta32049 = meta32049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32050,meta32049__$1){
var self__ = this;
var _32050__$1 = this;
return (new cljs.core.async.t_cljs$core$async32048(self__.ch,self__.cs,meta32049__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32050){
var self__ = this;
var _32050__$1 = this;
return self__.meta32049;
});})(cs))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32048.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32049","meta32049",1156297648,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32048";

cljs.core.async.t_cljs$core$async32048.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32048");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32048.
 */
cljs.core.async.__GT_t_cljs$core$async32048 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32048(ch__$1,cs__$1,meta32049){
return (new cljs.core.async.t_cljs$core$async32048(ch__$1,cs__$1,meta32049));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32048(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31235__auto___34177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34177,cs,m,dchan,dctr,done){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34177,cs,m,dchan,dctr,done){
return (function (state_32220){
var state_val_32221 = (state_32220[(1)]);
if((state_val_32221 === (7))){
var inst_32213 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32225_34179 = state_32220__$1;
(statearr_32225_34179[(2)] = inst_32213);

(statearr_32225_34179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (20))){
var inst_32104 = (state_32220[(7)]);
var inst_32117 = cljs.core.first(inst_32104);
var inst_32119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32117,(0),null);
var inst_32120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32117,(1),null);
var state_32220__$1 = (function (){var statearr_32227 = state_32220;
(statearr_32227[(8)] = inst_32119);

return statearr_32227;
})();
if(cljs.core.truth_(inst_32120)){
var statearr_32228_34181 = state_32220__$1;
(statearr_32228_34181[(1)] = (22));

} else {
var statearr_32229_34183 = state_32220__$1;
(statearr_32229_34183[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (27))){
var inst_32149 = (state_32220[(9)]);
var inst_32160 = (state_32220[(10)]);
var inst_32067 = (state_32220[(11)]);
var inst_32151 = (state_32220[(12)]);
var inst_32160__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32149,inst_32151);
var inst_32161 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32160__$1,inst_32067,done);
var state_32220__$1 = (function (){var statearr_32235 = state_32220;
(statearr_32235[(10)] = inst_32160__$1);

return statearr_32235;
})();
if(cljs.core.truth_(inst_32161)){
var statearr_32236_34188 = state_32220__$1;
(statearr_32236_34188[(1)] = (30));

} else {
var statearr_32237_34189 = state_32220__$1;
(statearr_32237_34189[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (1))){
var state_32220__$1 = state_32220;
var statearr_32238_34190 = state_32220__$1;
(statearr_32238_34190[(2)] = null);

(statearr_32238_34190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (24))){
var inst_32104 = (state_32220[(7)]);
var inst_32126 = (state_32220[(2)]);
var inst_32127 = cljs.core.next(inst_32104);
var inst_32078 = inst_32127;
var inst_32079 = null;
var inst_32080 = (0);
var inst_32081 = (0);
var state_32220__$1 = (function (){var statearr_32243 = state_32220;
(statearr_32243[(13)] = inst_32078);

(statearr_32243[(14)] = inst_32126);

(statearr_32243[(15)] = inst_32081);

(statearr_32243[(16)] = inst_32079);

(statearr_32243[(17)] = inst_32080);

return statearr_32243;
})();
var statearr_32244_34191 = state_32220__$1;
(statearr_32244_34191[(2)] = null);

(statearr_32244_34191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (39))){
var state_32220__$1 = state_32220;
var statearr_32272_34192 = state_32220__$1;
(statearr_32272_34192[(2)] = null);

(statearr_32272_34192[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (4))){
var inst_32067 = (state_32220[(11)]);
var inst_32067__$1 = (state_32220[(2)]);
var inst_32068 = (inst_32067__$1 == null);
var state_32220__$1 = (function (){var statearr_32273 = state_32220;
(statearr_32273[(11)] = inst_32067__$1);

return statearr_32273;
})();
if(cljs.core.truth_(inst_32068)){
var statearr_32274_34193 = state_32220__$1;
(statearr_32274_34193[(1)] = (5));

} else {
var statearr_32275_34194 = state_32220__$1;
(statearr_32275_34194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (15))){
var inst_32078 = (state_32220[(13)]);
var inst_32081 = (state_32220[(15)]);
var inst_32079 = (state_32220[(16)]);
var inst_32080 = (state_32220[(17)]);
var inst_32099 = (state_32220[(2)]);
var inst_32101 = (inst_32081 + (1));
var tmp32269 = inst_32078;
var tmp32270 = inst_32079;
var tmp32271 = inst_32080;
var inst_32078__$1 = tmp32269;
var inst_32079__$1 = tmp32270;
var inst_32080__$1 = tmp32271;
var inst_32081__$1 = inst_32101;
var state_32220__$1 = (function (){var statearr_32279 = state_32220;
(statearr_32279[(13)] = inst_32078__$1);

(statearr_32279[(15)] = inst_32081__$1);

(statearr_32279[(16)] = inst_32079__$1);

(statearr_32279[(17)] = inst_32080__$1);

(statearr_32279[(18)] = inst_32099);

return statearr_32279;
})();
var statearr_32280_34195 = state_32220__$1;
(statearr_32280_34195[(2)] = null);

(statearr_32280_34195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (21))){
var inst_32130 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32284_34198 = state_32220__$1;
(statearr_32284_34198[(2)] = inst_32130);

(statearr_32284_34198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (31))){
var inst_32160 = (state_32220[(10)]);
var inst_32164 = done(null);
var inst_32165 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32160);
var state_32220__$1 = (function (){var statearr_32290 = state_32220;
(statearr_32290[(19)] = inst_32164);

return statearr_32290;
})();
var statearr_32291_34200 = state_32220__$1;
(statearr_32291_34200[(2)] = inst_32165);

(statearr_32291_34200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (32))){
var inst_32149 = (state_32220[(9)]);
var inst_32151 = (state_32220[(12)]);
var inst_32148 = (state_32220[(20)]);
var inst_32150 = (state_32220[(21)]);
var inst_32167 = (state_32220[(2)]);
var inst_32168 = (inst_32151 + (1));
var tmp32281 = inst_32149;
var tmp32282 = inst_32148;
var tmp32283 = inst_32150;
var inst_32148__$1 = tmp32282;
var inst_32149__$1 = tmp32281;
var inst_32150__$1 = tmp32283;
var inst_32151__$1 = inst_32168;
var state_32220__$1 = (function (){var statearr_32293 = state_32220;
(statearr_32293[(9)] = inst_32149__$1);

(statearr_32293[(12)] = inst_32151__$1);

(statearr_32293[(20)] = inst_32148__$1);

(statearr_32293[(21)] = inst_32150__$1);

(statearr_32293[(22)] = inst_32167);

return statearr_32293;
})();
var statearr_32295_34202 = state_32220__$1;
(statearr_32295_34202[(2)] = null);

(statearr_32295_34202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (40))){
var inst_32183 = (state_32220[(23)]);
var inst_32187 = done(null);
var inst_32190 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32183);
var state_32220__$1 = (function (){var statearr_32296 = state_32220;
(statearr_32296[(24)] = inst_32187);

return statearr_32296;
})();
var statearr_32297_34203 = state_32220__$1;
(statearr_32297_34203[(2)] = inst_32190);

(statearr_32297_34203[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (33))){
var inst_32171 = (state_32220[(25)]);
var inst_32175 = cljs.core.chunked_seq_QMARK_(inst_32171);
var state_32220__$1 = state_32220;
if(inst_32175){
var statearr_32299_34206 = state_32220__$1;
(statearr_32299_34206[(1)] = (36));

} else {
var statearr_32300_34207 = state_32220__$1;
(statearr_32300_34207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (13))){
var inst_32091 = (state_32220[(26)]);
var inst_32096 = cljs.core.async.close_BANG_(inst_32091);
var state_32220__$1 = state_32220;
var statearr_32301_34208 = state_32220__$1;
(statearr_32301_34208[(2)] = inst_32096);

(statearr_32301_34208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (22))){
var inst_32119 = (state_32220[(8)]);
var inst_32123 = cljs.core.async.close_BANG_(inst_32119);
var state_32220__$1 = state_32220;
var statearr_32302_34209 = state_32220__$1;
(statearr_32302_34209[(2)] = inst_32123);

(statearr_32302_34209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (36))){
var inst_32171 = (state_32220[(25)]);
var inst_32178 = cljs.core.chunk_first(inst_32171);
var inst_32179 = cljs.core.chunk_rest(inst_32171);
var inst_32180 = cljs.core.count(inst_32178);
var inst_32148 = inst_32179;
var inst_32149 = inst_32178;
var inst_32150 = inst_32180;
var inst_32151 = (0);
var state_32220__$1 = (function (){var statearr_32303 = state_32220;
(statearr_32303[(9)] = inst_32149);

(statearr_32303[(12)] = inst_32151);

(statearr_32303[(20)] = inst_32148);

(statearr_32303[(21)] = inst_32150);

return statearr_32303;
})();
var statearr_32304_34210 = state_32220__$1;
(statearr_32304_34210[(2)] = null);

(statearr_32304_34210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (41))){
var inst_32171 = (state_32220[(25)]);
var inst_32192 = (state_32220[(2)]);
var inst_32193 = cljs.core.next(inst_32171);
var inst_32148 = inst_32193;
var inst_32149 = null;
var inst_32150 = (0);
var inst_32151 = (0);
var state_32220__$1 = (function (){var statearr_32305 = state_32220;
(statearr_32305[(9)] = inst_32149);

(statearr_32305[(27)] = inst_32192);

(statearr_32305[(12)] = inst_32151);

(statearr_32305[(20)] = inst_32148);

(statearr_32305[(21)] = inst_32150);

return statearr_32305;
})();
var statearr_32306_34211 = state_32220__$1;
(statearr_32306_34211[(2)] = null);

(statearr_32306_34211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (43))){
var state_32220__$1 = state_32220;
var statearr_32307_34212 = state_32220__$1;
(statearr_32307_34212[(2)] = null);

(statearr_32307_34212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (29))){
var inst_32201 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32308_34213 = state_32220__$1;
(statearr_32308_34213[(2)] = inst_32201);

(statearr_32308_34213[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (44))){
var inst_32210 = (state_32220[(2)]);
var state_32220__$1 = (function (){var statearr_32312 = state_32220;
(statearr_32312[(28)] = inst_32210);

return statearr_32312;
})();
var statearr_32313_34214 = state_32220__$1;
(statearr_32313_34214[(2)] = null);

(statearr_32313_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (6))){
var inst_32140 = (state_32220[(29)]);
var inst_32139 = cljs.core.deref(cs);
var inst_32140__$1 = cljs.core.keys(inst_32139);
var inst_32141 = cljs.core.count(inst_32140__$1);
var inst_32142 = cljs.core.reset_BANG_(dctr,inst_32141);
var inst_32147 = cljs.core.seq(inst_32140__$1);
var inst_32148 = inst_32147;
var inst_32149 = null;
var inst_32150 = (0);
var inst_32151 = (0);
var state_32220__$1 = (function (){var statearr_32317 = state_32220;
(statearr_32317[(30)] = inst_32142);

(statearr_32317[(29)] = inst_32140__$1);

(statearr_32317[(9)] = inst_32149);

(statearr_32317[(12)] = inst_32151);

(statearr_32317[(20)] = inst_32148);

(statearr_32317[(21)] = inst_32150);

return statearr_32317;
})();
var statearr_32320_34217 = state_32220__$1;
(statearr_32320_34217[(2)] = null);

(statearr_32320_34217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (28))){
var inst_32148 = (state_32220[(20)]);
var inst_32171 = (state_32220[(25)]);
var inst_32171__$1 = cljs.core.seq(inst_32148);
var state_32220__$1 = (function (){var statearr_32322 = state_32220;
(statearr_32322[(25)] = inst_32171__$1);

return statearr_32322;
})();
if(inst_32171__$1){
var statearr_32323_34218 = state_32220__$1;
(statearr_32323_34218[(1)] = (33));

} else {
var statearr_32324_34219 = state_32220__$1;
(statearr_32324_34219[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (25))){
var inst_32151 = (state_32220[(12)]);
var inst_32150 = (state_32220[(21)]);
var inst_32156 = (inst_32151 < inst_32150);
var inst_32157 = inst_32156;
var state_32220__$1 = state_32220;
if(cljs.core.truth_(inst_32157)){
var statearr_32325_34220 = state_32220__$1;
(statearr_32325_34220[(1)] = (27));

} else {
var statearr_32326_34221 = state_32220__$1;
(statearr_32326_34221[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (34))){
var state_32220__$1 = state_32220;
var statearr_32327_34222 = state_32220__$1;
(statearr_32327_34222[(2)] = null);

(statearr_32327_34222[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (17))){
var state_32220__$1 = state_32220;
var statearr_32328_34223 = state_32220__$1;
(statearr_32328_34223[(2)] = null);

(statearr_32328_34223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (3))){
var inst_32215 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32220__$1,inst_32215);
} else {
if((state_val_32221 === (12))){
var inst_32135 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32329_34224 = state_32220__$1;
(statearr_32329_34224[(2)] = inst_32135);

(statearr_32329_34224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (2))){
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32220__$1,(4),ch);
} else {
if((state_val_32221 === (23))){
var state_32220__$1 = state_32220;
var statearr_32330_34225 = state_32220__$1;
(statearr_32330_34225[(2)] = null);

(statearr_32330_34225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (35))){
var inst_32199 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32333_34226 = state_32220__$1;
(statearr_32333_34226[(2)] = inst_32199);

(statearr_32333_34226[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (19))){
var inst_32104 = (state_32220[(7)]);
var inst_32108 = cljs.core.chunk_first(inst_32104);
var inst_32109 = cljs.core.chunk_rest(inst_32104);
var inst_32110 = cljs.core.count(inst_32108);
var inst_32078 = inst_32109;
var inst_32079 = inst_32108;
var inst_32080 = inst_32110;
var inst_32081 = (0);
var state_32220__$1 = (function (){var statearr_32334 = state_32220;
(statearr_32334[(13)] = inst_32078);

(statearr_32334[(15)] = inst_32081);

(statearr_32334[(16)] = inst_32079);

(statearr_32334[(17)] = inst_32080);

return statearr_32334;
})();
var statearr_32335_34227 = state_32220__$1;
(statearr_32335_34227[(2)] = null);

(statearr_32335_34227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (11))){
var inst_32078 = (state_32220[(13)]);
var inst_32104 = (state_32220[(7)]);
var inst_32104__$1 = cljs.core.seq(inst_32078);
var state_32220__$1 = (function (){var statearr_32336 = state_32220;
(statearr_32336[(7)] = inst_32104__$1);

return statearr_32336;
})();
if(inst_32104__$1){
var statearr_32337_34228 = state_32220__$1;
(statearr_32337_34228[(1)] = (16));

} else {
var statearr_32338_34229 = state_32220__$1;
(statearr_32338_34229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (9))){
var inst_32137 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32339_34230 = state_32220__$1;
(statearr_32339_34230[(2)] = inst_32137);

(statearr_32339_34230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (5))){
var inst_32076 = cljs.core.deref(cs);
var inst_32077 = cljs.core.seq(inst_32076);
var inst_32078 = inst_32077;
var inst_32079 = null;
var inst_32080 = (0);
var inst_32081 = (0);
var state_32220__$1 = (function (){var statearr_32340 = state_32220;
(statearr_32340[(13)] = inst_32078);

(statearr_32340[(15)] = inst_32081);

(statearr_32340[(16)] = inst_32079);

(statearr_32340[(17)] = inst_32080);

return statearr_32340;
})();
var statearr_32341_34231 = state_32220__$1;
(statearr_32341_34231[(2)] = null);

(statearr_32341_34231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (14))){
var state_32220__$1 = state_32220;
var statearr_32342_34232 = state_32220__$1;
(statearr_32342_34232[(2)] = null);

(statearr_32342_34232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (45))){
var inst_32207 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32343_34233 = state_32220__$1;
(statearr_32343_34233[(2)] = inst_32207);

(statearr_32343_34233[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (26))){
var inst_32140 = (state_32220[(29)]);
var inst_32203 = (state_32220[(2)]);
var inst_32204 = cljs.core.seq(inst_32140);
var state_32220__$1 = (function (){var statearr_32344 = state_32220;
(statearr_32344[(31)] = inst_32203);

return statearr_32344;
})();
if(inst_32204){
var statearr_32345_34234 = state_32220__$1;
(statearr_32345_34234[(1)] = (42));

} else {
var statearr_32346_34235 = state_32220__$1;
(statearr_32346_34235[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (16))){
var inst_32104 = (state_32220[(7)]);
var inst_32106 = cljs.core.chunked_seq_QMARK_(inst_32104);
var state_32220__$1 = state_32220;
if(inst_32106){
var statearr_32347_34237 = state_32220__$1;
(statearr_32347_34237[(1)] = (19));

} else {
var statearr_32348_34238 = state_32220__$1;
(statearr_32348_34238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (38))){
var inst_32196 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32349_34239 = state_32220__$1;
(statearr_32349_34239[(2)] = inst_32196);

(statearr_32349_34239[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (30))){
var state_32220__$1 = state_32220;
var statearr_32350_34244 = state_32220__$1;
(statearr_32350_34244[(2)] = null);

(statearr_32350_34244[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (10))){
var inst_32081 = (state_32220[(15)]);
var inst_32079 = (state_32220[(16)]);
var inst_32090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32079,inst_32081);
var inst_32091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32090,(0),null);
var inst_32093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32090,(1),null);
var state_32220__$1 = (function (){var statearr_32351 = state_32220;
(statearr_32351[(26)] = inst_32091);

return statearr_32351;
})();
if(cljs.core.truth_(inst_32093)){
var statearr_32352_34245 = state_32220__$1;
(statearr_32352_34245[(1)] = (13));

} else {
var statearr_32353_34246 = state_32220__$1;
(statearr_32353_34246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (18))){
var inst_32133 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32354_34247 = state_32220__$1;
(statearr_32354_34247[(2)] = inst_32133);

(statearr_32354_34247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (42))){
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32220__$1,(45),dchan);
} else {
if((state_val_32221 === (37))){
var inst_32067 = (state_32220[(11)]);
var inst_32183 = (state_32220[(23)]);
var inst_32171 = (state_32220[(25)]);
var inst_32183__$1 = cljs.core.first(inst_32171);
var inst_32184 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32183__$1,inst_32067,done);
var state_32220__$1 = (function (){var statearr_32355 = state_32220;
(statearr_32355[(23)] = inst_32183__$1);

return statearr_32355;
})();
if(cljs.core.truth_(inst_32184)){
var statearr_32356_34248 = state_32220__$1;
(statearr_32356_34248[(1)] = (39));

} else {
var statearr_32357_34249 = state_32220__$1;
(statearr_32357_34249[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (8))){
var inst_32081 = (state_32220[(15)]);
var inst_32080 = (state_32220[(17)]);
var inst_32083 = (inst_32081 < inst_32080);
var inst_32084 = inst_32083;
var state_32220__$1 = state_32220;
if(cljs.core.truth_(inst_32084)){
var statearr_32358_34254 = state_32220__$1;
(statearr_32358_34254[(1)] = (10));

} else {
var statearr_32359_34255 = state_32220__$1;
(statearr_32359_34255[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34177,cs,m,dchan,dctr,done))
;
return ((function (switch__30976__auto__,c__31235__auto___34177,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30977__auto__ = null;
var cljs$core$async$mult_$_state_machine__30977__auto____0 = (function (){
var statearr_32363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32363[(0)] = cljs$core$async$mult_$_state_machine__30977__auto__);

(statearr_32363[(1)] = (1));

return statearr_32363;
});
var cljs$core$async$mult_$_state_machine__30977__auto____1 = (function (state_32220){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_32220);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e32364){if((e32364 instanceof Object)){
var ex__30980__auto__ = e32364;
var statearr_32365_34262 = state_32220;
(statearr_32365_34262[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34266 = state_32220;
state_32220 = G__34266;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30977__auto__ = function(state_32220){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30977__auto____1.call(this,state_32220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30977__auto____0;
cljs$core$async$mult_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30977__auto____1;
return cljs$core$async$mult_$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34177,cs,m,dchan,dctr,done))
})();
var state__31237__auto__ = (function (){var statearr_32370 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_32370[(6)] = c__31235__auto___34177);

return statearr_32370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34177,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32378 = arguments.length;
switch (G__32378) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34281 = arguments.length;
var i__4731__auto___34282 = (0);
while(true){
if((i__4731__auto___34282 < len__4730__auto___34281)){
args__4736__auto__.push((arguments[i__4731__auto___34282]));

var G__34284 = (i__4731__auto___34282 + (1));
i__4731__auto___34282 = G__34284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32414){
var map__32415 = p__32414;
var map__32415__$1 = (((((!((map__32415 == null))))?(((((map__32415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32415):map__32415);
var opts = map__32415__$1;
var statearr_32417_34287 = state;
(statearr_32417_34287[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__32415,map__32415__$1,opts){
return (function (val){
var statearr_32418_34289 = state;
(statearr_32418_34289[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32415,map__32415__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32419_34290 = state;
(statearr_32419_34290[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32405){
var G__32406 = cljs.core.first(seq32405);
var seq32405__$1 = cljs.core.next(seq32405);
var G__32407 = cljs.core.first(seq32405__$1);
var seq32405__$2 = cljs.core.next(seq32405__$1);
var G__32408 = cljs.core.first(seq32405__$2);
var seq32405__$3 = cljs.core.next(seq32405__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32406,G__32407,G__32408,seq32405__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32436 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32437){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32437 = meta32437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32438,meta32437__$1){
var self__ = this;
var _32438__$1 = this;
return (new cljs.core.async.t_cljs$core$async32436(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32437__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32438){
var self__ = this;
var _32438__$1 = this;
return self__.meta32437;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32437","meta32437",1701426406,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32436";

cljs.core.async.t_cljs$core$async32436.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32436");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32436.
 */
cljs.core.async.__GT_t_cljs$core$async32436 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32436(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32437){
return (new cljs.core.async.t_cljs$core$async32436(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32437));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32436(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31235__auto___34307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32559){
var state_val_32560 = (state_32559[(1)]);
if((state_val_32560 === (7))){
var inst_32459 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32569_34308 = state_32559__$1;
(statearr_32569_34308[(2)] = inst_32459);

(statearr_32569_34308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (20))){
var inst_32473 = (state_32559[(7)]);
var state_32559__$1 = state_32559;
var statearr_32570_34309 = state_32559__$1;
(statearr_32570_34309[(2)] = inst_32473);

(statearr_32570_34309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (27))){
var state_32559__$1 = state_32559;
var statearr_32571_34310 = state_32559__$1;
(statearr_32571_34310[(2)] = null);

(statearr_32571_34310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (1))){
var inst_32446 = (state_32559[(8)]);
var inst_32446__$1 = calc_state();
var inst_32448 = (inst_32446__$1 == null);
var inst_32449 = cljs.core.not(inst_32448);
var state_32559__$1 = (function (){var statearr_32573 = state_32559;
(statearr_32573[(8)] = inst_32446__$1);

return statearr_32573;
})();
if(inst_32449){
var statearr_32574_34311 = state_32559__$1;
(statearr_32574_34311[(1)] = (2));

} else {
var statearr_32575_34312 = state_32559__$1;
(statearr_32575_34312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (24))){
var inst_32526 = (state_32559[(9)]);
var inst_32508 = (state_32559[(10)]);
var inst_32497 = (state_32559[(11)]);
var inst_32526__$1 = (inst_32497.cljs$core$IFn$_invoke$arity$1 ? inst_32497.cljs$core$IFn$_invoke$arity$1(inst_32508) : inst_32497.call(null,inst_32508));
var state_32559__$1 = (function (){var statearr_32576 = state_32559;
(statearr_32576[(9)] = inst_32526__$1);

return statearr_32576;
})();
if(cljs.core.truth_(inst_32526__$1)){
var statearr_32581_34313 = state_32559__$1;
(statearr_32581_34313[(1)] = (29));

} else {
var statearr_32582_34314 = state_32559__$1;
(statearr_32582_34314[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (4))){
var inst_32462 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32462)){
var statearr_32583_34315 = state_32559__$1;
(statearr_32583_34315[(1)] = (8));

} else {
var statearr_32585_34316 = state_32559__$1;
(statearr_32585_34316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (15))){
var inst_32491 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32491)){
var statearr_32586_34318 = state_32559__$1;
(statearr_32586_34318[(1)] = (19));

} else {
var statearr_32588_34319 = state_32559__$1;
(statearr_32588_34319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (21))){
var inst_32496 = (state_32559[(12)]);
var inst_32496__$1 = (state_32559[(2)]);
var inst_32497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32496__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32496__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32496__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32559__$1 = (function (){var statearr_32589 = state_32559;
(statearr_32589[(13)] = inst_32500);

(statearr_32589[(12)] = inst_32496__$1);

(statearr_32589[(11)] = inst_32497);

return statearr_32589;
})();
return cljs.core.async.ioc_alts_BANG_(state_32559__$1,(22),inst_32501);
} else {
if((state_val_32560 === (31))){
var inst_32534 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32534)){
var statearr_32590_34320 = state_32559__$1;
(statearr_32590_34320[(1)] = (32));

} else {
var statearr_32591_34321 = state_32559__$1;
(statearr_32591_34321[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (32))){
var inst_32507 = (state_32559[(14)]);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32559__$1,(35),out,inst_32507);
} else {
if((state_val_32560 === (33))){
var inst_32496 = (state_32559[(12)]);
var inst_32473 = inst_32496;
var state_32559__$1 = (function (){var statearr_32594 = state_32559;
(statearr_32594[(7)] = inst_32473);

return statearr_32594;
})();
var statearr_32595_34327 = state_32559__$1;
(statearr_32595_34327[(2)] = null);

(statearr_32595_34327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (13))){
var inst_32473 = (state_32559[(7)]);
var inst_32480 = inst_32473.cljs$lang$protocol_mask$partition0$;
var inst_32481 = (inst_32480 & (64));
var inst_32482 = inst_32473.cljs$core$ISeq$;
var inst_32483 = (cljs.core.PROTOCOL_SENTINEL === inst_32482);
var inst_32484 = ((inst_32481) || (inst_32483));
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32484)){
var statearr_32598_34330 = state_32559__$1;
(statearr_32598_34330[(1)] = (16));

} else {
var statearr_32599_34331 = state_32559__$1;
(statearr_32599_34331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (22))){
var inst_32508 = (state_32559[(10)]);
var inst_32507 = (state_32559[(14)]);
var inst_32506 = (state_32559[(2)]);
var inst_32507__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32506,(0),null);
var inst_32508__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32506,(1),null);
var inst_32511 = (inst_32507__$1 == null);
var inst_32513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32508__$1,change);
var inst_32514 = ((inst_32511) || (inst_32513));
var state_32559__$1 = (function (){var statearr_32603 = state_32559;
(statearr_32603[(10)] = inst_32508__$1);

(statearr_32603[(14)] = inst_32507__$1);

return statearr_32603;
})();
if(cljs.core.truth_(inst_32514)){
var statearr_32605_34332 = state_32559__$1;
(statearr_32605_34332[(1)] = (23));

} else {
var statearr_32606_34333 = state_32559__$1;
(statearr_32606_34333[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (36))){
var inst_32496 = (state_32559[(12)]);
var inst_32473 = inst_32496;
var state_32559__$1 = (function (){var statearr_32610 = state_32559;
(statearr_32610[(7)] = inst_32473);

return statearr_32610;
})();
var statearr_32611_34334 = state_32559__$1;
(statearr_32611_34334[(2)] = null);

(statearr_32611_34334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (29))){
var inst_32526 = (state_32559[(9)]);
var state_32559__$1 = state_32559;
var statearr_32612_34335 = state_32559__$1;
(statearr_32612_34335[(2)] = inst_32526);

(statearr_32612_34335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (6))){
var state_32559__$1 = state_32559;
var statearr_32613_34336 = state_32559__$1;
(statearr_32613_34336[(2)] = false);

(statearr_32613_34336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (28))){
var inst_32522 = (state_32559[(2)]);
var inst_32523 = calc_state();
var inst_32473 = inst_32523;
var state_32559__$1 = (function (){var statearr_32615 = state_32559;
(statearr_32615[(15)] = inst_32522);

(statearr_32615[(7)] = inst_32473);

return statearr_32615;
})();
var statearr_32617_34337 = state_32559__$1;
(statearr_32617_34337[(2)] = null);

(statearr_32617_34337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (25))){
var inst_32549 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32620_34339 = state_32559__$1;
(statearr_32620_34339[(2)] = inst_32549);

(statearr_32620_34339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (34))){
var inst_32547 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32621_34340 = state_32559__$1;
(statearr_32621_34340[(2)] = inst_32547);

(statearr_32621_34340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (17))){
var state_32559__$1 = state_32559;
var statearr_32622_34341 = state_32559__$1;
(statearr_32622_34341[(2)] = false);

(statearr_32622_34341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (3))){
var state_32559__$1 = state_32559;
var statearr_32623_34342 = state_32559__$1;
(statearr_32623_34342[(2)] = false);

(statearr_32623_34342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (12))){
var inst_32556 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32559__$1,inst_32556);
} else {
if((state_val_32560 === (2))){
var inst_32446 = (state_32559[(8)]);
var inst_32451 = inst_32446.cljs$lang$protocol_mask$partition0$;
var inst_32452 = (inst_32451 & (64));
var inst_32453 = inst_32446.cljs$core$ISeq$;
var inst_32454 = (cljs.core.PROTOCOL_SENTINEL === inst_32453);
var inst_32455 = ((inst_32452) || (inst_32454));
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32455)){
var statearr_32624_34344 = state_32559__$1;
(statearr_32624_34344[(1)] = (5));

} else {
var statearr_32625_34345 = state_32559__$1;
(statearr_32625_34345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (23))){
var inst_32507 = (state_32559[(14)]);
var inst_32516 = (inst_32507 == null);
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32516)){
var statearr_32626_34353 = state_32559__$1;
(statearr_32626_34353[(1)] = (26));

} else {
var statearr_32627_34354 = state_32559__$1;
(statearr_32627_34354[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (35))){
var inst_32537 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
if(cljs.core.truth_(inst_32537)){
var statearr_32628_34355 = state_32559__$1;
(statearr_32628_34355[(1)] = (36));

} else {
var statearr_32630_34356 = state_32559__$1;
(statearr_32630_34356[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (19))){
var inst_32473 = (state_32559[(7)]);
var inst_32493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32473);
var state_32559__$1 = state_32559;
var statearr_32631_34358 = state_32559__$1;
(statearr_32631_34358[(2)] = inst_32493);

(statearr_32631_34358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (11))){
var inst_32473 = (state_32559[(7)]);
var inst_32477 = (inst_32473 == null);
var inst_32478 = cljs.core.not(inst_32477);
var state_32559__$1 = state_32559;
if(inst_32478){
var statearr_32633_34359 = state_32559__$1;
(statearr_32633_34359[(1)] = (13));

} else {
var statearr_32634_34360 = state_32559__$1;
(statearr_32634_34360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (9))){
var inst_32446 = (state_32559[(8)]);
var state_32559__$1 = state_32559;
var statearr_32635_34362 = state_32559__$1;
(statearr_32635_34362[(2)] = inst_32446);

(statearr_32635_34362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (5))){
var state_32559__$1 = state_32559;
var statearr_32636_34366 = state_32559__$1;
(statearr_32636_34366[(2)] = true);

(statearr_32636_34366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (14))){
var state_32559__$1 = state_32559;
var statearr_32637_34367 = state_32559__$1;
(statearr_32637_34367[(2)] = false);

(statearr_32637_34367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (26))){
var inst_32508 = (state_32559[(10)]);
var inst_32519 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32508);
var state_32559__$1 = state_32559;
var statearr_32638_34368 = state_32559__$1;
(statearr_32638_34368[(2)] = inst_32519);

(statearr_32638_34368[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (16))){
var state_32559__$1 = state_32559;
var statearr_32639_34369 = state_32559__$1;
(statearr_32639_34369[(2)] = true);

(statearr_32639_34369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (38))){
var inst_32542 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32641_34370 = state_32559__$1;
(statearr_32641_34370[(2)] = inst_32542);

(statearr_32641_34370[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (30))){
var inst_32500 = (state_32559[(13)]);
var inst_32508 = (state_32559[(10)]);
var inst_32497 = (state_32559[(11)]);
var inst_32529 = cljs.core.empty_QMARK_(inst_32497);
var inst_32530 = (inst_32500.cljs$core$IFn$_invoke$arity$1 ? inst_32500.cljs$core$IFn$_invoke$arity$1(inst_32508) : inst_32500.call(null,inst_32508));
var inst_32531 = cljs.core.not(inst_32530);
var inst_32532 = ((inst_32529) && (inst_32531));
var state_32559__$1 = state_32559;
var statearr_32643_34371 = state_32559__$1;
(statearr_32643_34371[(2)] = inst_32532);

(statearr_32643_34371[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (10))){
var inst_32446 = (state_32559[(8)]);
var inst_32469 = (state_32559[(2)]);
var inst_32470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32469,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32469,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32469,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32473 = inst_32446;
var state_32559__$1 = (function (){var statearr_32644 = state_32559;
(statearr_32644[(7)] = inst_32473);

(statearr_32644[(16)] = inst_32471);

(statearr_32644[(17)] = inst_32472);

(statearr_32644[(18)] = inst_32470);

return statearr_32644;
})();
var statearr_32645_34372 = state_32559__$1;
(statearr_32645_34372[(2)] = null);

(statearr_32645_34372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (18))){
var inst_32488 = (state_32559[(2)]);
var state_32559__$1 = state_32559;
var statearr_32646_34374 = state_32559__$1;
(statearr_32646_34374[(2)] = inst_32488);

(statearr_32646_34374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (37))){
var state_32559__$1 = state_32559;
var statearr_32647_34375 = state_32559__$1;
(statearr_32647_34375[(2)] = null);

(statearr_32647_34375[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32560 === (8))){
var inst_32446 = (state_32559[(8)]);
var inst_32466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32446);
var state_32559__$1 = state_32559;
var statearr_32652_34376 = state_32559__$1;
(statearr_32652_34376[(2)] = inst_32466);

(statearr_32652_34376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30976__auto__,c__31235__auto___34307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30977__auto__ = null;
var cljs$core$async$mix_$_state_machine__30977__auto____0 = (function (){
var statearr_32654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32654[(0)] = cljs$core$async$mix_$_state_machine__30977__auto__);

(statearr_32654[(1)] = (1));

return statearr_32654;
});
var cljs$core$async$mix_$_state_machine__30977__auto____1 = (function (state_32559){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_32559);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e32657){if((e32657 instanceof Object)){
var ex__30980__auto__ = e32657;
var statearr_32659_34377 = state_32559;
(statearr_32659_34377[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34379 = state_32559;
state_32559 = G__34379;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30977__auto__ = function(state_32559){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30977__auto____1.call(this,state_32559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30977__auto____0;
cljs$core$async$mix_$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30977__auto____1;
return cljs$core$async$mix_$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31237__auto__ = (function (){var statearr_32660 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_32660[(6)] = c__31235__auto___34307);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32666 = arguments.length;
switch (G__32666) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32671 = arguments.length;
switch (G__32671) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32669_SHARP_){
if(cljs.core.truth_((p1__32669_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32669_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32669_SHARP_.call(null,topic)))){
return p1__32669_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32669_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32672 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32673){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32673 = meta32673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32674,meta32673__$1){
var self__ = this;
var _32674__$1 = this;
return (new cljs.core.async.t_cljs$core$async32672(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32673__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32674){
var self__ = this;
var _32674__$1 = this;
return self__.meta32673;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32673","meta32673",2007101337,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32672";

cljs.core.async.t_cljs$core$async32672.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32672");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32672.
 */
cljs.core.async.__GT_t_cljs$core$async32672 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32672(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32673){
return (new cljs.core.async.t_cljs$core$async32672(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32673));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32672(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31235__auto___34400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34400,mults,ensure_mult,p){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34400,mults,ensure_mult,p){
return (function (state_32754){
var state_val_32755 = (state_32754[(1)]);
if((state_val_32755 === (7))){
var inst_32750 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32756_34401 = state_32754__$1;
(statearr_32756_34401[(2)] = inst_32750);

(statearr_32756_34401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (20))){
var state_32754__$1 = state_32754;
var statearr_32757_34402 = state_32754__$1;
(statearr_32757_34402[(2)] = null);

(statearr_32757_34402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (1))){
var state_32754__$1 = state_32754;
var statearr_32759_34403 = state_32754__$1;
(statearr_32759_34403[(2)] = null);

(statearr_32759_34403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (24))){
var inst_32732 = (state_32754[(7)]);
var inst_32742 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32732);
var state_32754__$1 = state_32754;
var statearr_32760_34404 = state_32754__$1;
(statearr_32760_34404[(2)] = inst_32742);

(statearr_32760_34404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (4))){
var inst_32683 = (state_32754[(8)]);
var inst_32683__$1 = (state_32754[(2)]);
var inst_32684 = (inst_32683__$1 == null);
var state_32754__$1 = (function (){var statearr_32762 = state_32754;
(statearr_32762[(8)] = inst_32683__$1);

return statearr_32762;
})();
if(cljs.core.truth_(inst_32684)){
var statearr_32763_34405 = state_32754__$1;
(statearr_32763_34405[(1)] = (5));

} else {
var statearr_32764_34406 = state_32754__$1;
(statearr_32764_34406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (15))){
var inst_32726 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32766_34409 = state_32754__$1;
(statearr_32766_34409[(2)] = inst_32726);

(statearr_32766_34409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (21))){
var inst_32747 = (state_32754[(2)]);
var state_32754__$1 = (function (){var statearr_32767 = state_32754;
(statearr_32767[(9)] = inst_32747);

return statearr_32767;
})();
var statearr_32768_34410 = state_32754__$1;
(statearr_32768_34410[(2)] = null);

(statearr_32768_34410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (13))){
var inst_32707 = (state_32754[(10)]);
var inst_32710 = cljs.core.chunked_seq_QMARK_(inst_32707);
var state_32754__$1 = state_32754;
if(inst_32710){
var statearr_32769_34411 = state_32754__$1;
(statearr_32769_34411[(1)] = (16));

} else {
var statearr_32770_34414 = state_32754__$1;
(statearr_32770_34414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (22))){
var inst_32739 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
if(cljs.core.truth_(inst_32739)){
var statearr_32771_34415 = state_32754__$1;
(statearr_32771_34415[(1)] = (23));

} else {
var statearr_32772_34416 = state_32754__$1;
(statearr_32772_34416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (6))){
var inst_32683 = (state_32754[(8)]);
var inst_32734 = (state_32754[(11)]);
var inst_32732 = (state_32754[(7)]);
var inst_32732__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32683) : topic_fn.call(null,inst_32683));
var inst_32733 = cljs.core.deref(mults);
var inst_32734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32733,inst_32732__$1);
var state_32754__$1 = (function (){var statearr_32773 = state_32754;
(statearr_32773[(11)] = inst_32734__$1);

(statearr_32773[(7)] = inst_32732__$1);

return statearr_32773;
})();
if(cljs.core.truth_(inst_32734__$1)){
var statearr_32775_34417 = state_32754__$1;
(statearr_32775_34417[(1)] = (19));

} else {
var statearr_32776_34418 = state_32754__$1;
(statearr_32776_34418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (25))){
var inst_32744 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32777_34419 = state_32754__$1;
(statearr_32777_34419[(2)] = inst_32744);

(statearr_32777_34419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (17))){
var inst_32707 = (state_32754[(10)]);
var inst_32717 = cljs.core.first(inst_32707);
var inst_32718 = cljs.core.async.muxch_STAR_(inst_32717);
var inst_32719 = cljs.core.async.close_BANG_(inst_32718);
var inst_32720 = cljs.core.next(inst_32707);
var inst_32693 = inst_32720;
var inst_32694 = null;
var inst_32695 = (0);
var inst_32696 = (0);
var state_32754__$1 = (function (){var statearr_32778 = state_32754;
(statearr_32778[(12)] = inst_32719);

(statearr_32778[(13)] = inst_32693);

(statearr_32778[(14)] = inst_32694);

(statearr_32778[(15)] = inst_32695);

(statearr_32778[(16)] = inst_32696);

return statearr_32778;
})();
var statearr_32779_34420 = state_32754__$1;
(statearr_32779_34420[(2)] = null);

(statearr_32779_34420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (3))){
var inst_32752 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32754__$1,inst_32752);
} else {
if((state_val_32755 === (12))){
var inst_32728 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32782_34422 = state_32754__$1;
(statearr_32782_34422[(2)] = inst_32728);

(statearr_32782_34422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (2))){
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32754__$1,(4),ch);
} else {
if((state_val_32755 === (23))){
var state_32754__$1 = state_32754;
var statearr_32785_34423 = state_32754__$1;
(statearr_32785_34423[(2)] = null);

(statearr_32785_34423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (19))){
var inst_32683 = (state_32754[(8)]);
var inst_32734 = (state_32754[(11)]);
var inst_32737 = cljs.core.async.muxch_STAR_(inst_32734);
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32754__$1,(22),inst_32737,inst_32683);
} else {
if((state_val_32755 === (11))){
var inst_32693 = (state_32754[(13)]);
var inst_32707 = (state_32754[(10)]);
var inst_32707__$1 = cljs.core.seq(inst_32693);
var state_32754__$1 = (function (){var statearr_32787 = state_32754;
(statearr_32787[(10)] = inst_32707__$1);

return statearr_32787;
})();
if(inst_32707__$1){
var statearr_32788_34424 = state_32754__$1;
(statearr_32788_34424[(1)] = (13));

} else {
var statearr_32790_34425 = state_32754__$1;
(statearr_32790_34425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (9))){
var inst_32730 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32792_34427 = state_32754__$1;
(statearr_32792_34427[(2)] = inst_32730);

(statearr_32792_34427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (5))){
var inst_32690 = cljs.core.deref(mults);
var inst_32691 = cljs.core.vals(inst_32690);
var inst_32692 = cljs.core.seq(inst_32691);
var inst_32693 = inst_32692;
var inst_32694 = null;
var inst_32695 = (0);
var inst_32696 = (0);
var state_32754__$1 = (function (){var statearr_32796 = state_32754;
(statearr_32796[(13)] = inst_32693);

(statearr_32796[(14)] = inst_32694);

(statearr_32796[(15)] = inst_32695);

(statearr_32796[(16)] = inst_32696);

return statearr_32796;
})();
var statearr_32798_34429 = state_32754__$1;
(statearr_32798_34429[(2)] = null);

(statearr_32798_34429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (14))){
var state_32754__$1 = state_32754;
var statearr_32802_34430 = state_32754__$1;
(statearr_32802_34430[(2)] = null);

(statearr_32802_34430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (16))){
var inst_32707 = (state_32754[(10)]);
var inst_32712 = cljs.core.chunk_first(inst_32707);
var inst_32713 = cljs.core.chunk_rest(inst_32707);
var inst_32714 = cljs.core.count(inst_32712);
var inst_32693 = inst_32713;
var inst_32694 = inst_32712;
var inst_32695 = inst_32714;
var inst_32696 = (0);
var state_32754__$1 = (function (){var statearr_32803 = state_32754;
(statearr_32803[(13)] = inst_32693);

(statearr_32803[(14)] = inst_32694);

(statearr_32803[(15)] = inst_32695);

(statearr_32803[(16)] = inst_32696);

return statearr_32803;
})();
var statearr_32804_34434 = state_32754__$1;
(statearr_32804_34434[(2)] = null);

(statearr_32804_34434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (10))){
var inst_32693 = (state_32754[(13)]);
var inst_32694 = (state_32754[(14)]);
var inst_32695 = (state_32754[(15)]);
var inst_32696 = (state_32754[(16)]);
var inst_32701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32694,inst_32696);
var inst_32702 = cljs.core.async.muxch_STAR_(inst_32701);
var inst_32703 = cljs.core.async.close_BANG_(inst_32702);
var inst_32704 = (inst_32696 + (1));
var tmp32799 = inst_32693;
var tmp32800 = inst_32694;
var tmp32801 = inst_32695;
var inst_32693__$1 = tmp32799;
var inst_32694__$1 = tmp32800;
var inst_32695__$1 = tmp32801;
var inst_32696__$1 = inst_32704;
var state_32754__$1 = (function (){var statearr_32808 = state_32754;
(statearr_32808[(13)] = inst_32693__$1);

(statearr_32808[(14)] = inst_32694__$1);

(statearr_32808[(15)] = inst_32695__$1);

(statearr_32808[(17)] = inst_32703);

(statearr_32808[(16)] = inst_32696__$1);

return statearr_32808;
})();
var statearr_32810_34445 = state_32754__$1;
(statearr_32810_34445[(2)] = null);

(statearr_32810_34445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (18))){
var inst_32723 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32814_34446 = state_32754__$1;
(statearr_32814_34446[(2)] = inst_32723);

(statearr_32814_34446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (8))){
var inst_32695 = (state_32754[(15)]);
var inst_32696 = (state_32754[(16)]);
var inst_32698 = (inst_32696 < inst_32695);
var inst_32699 = inst_32698;
var state_32754__$1 = state_32754;
if(cljs.core.truth_(inst_32699)){
var statearr_32816_34450 = state_32754__$1;
(statearr_32816_34450[(1)] = (10));

} else {
var statearr_32817_34451 = state_32754__$1;
(statearr_32817_34451[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34400,mults,ensure_mult,p))
;
return ((function (switch__30976__auto__,c__31235__auto___34400,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_32818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32818[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_32818[(1)] = (1));

return statearr_32818;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_32754){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_32754);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e32819){if((e32819 instanceof Object)){
var ex__30980__auto__ = e32819;
var statearr_32820_34455 = state_32754;
(statearr_32820_34455[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34456 = state_32754;
state_32754 = G__34456;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_32754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_32754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34400,mults,ensure_mult,p))
})();
var state__31237__auto__ = (function (){var statearr_32821 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_32821[(6)] = c__31235__auto___34400);

return statearr_32821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34400,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32823 = arguments.length;
switch (G__32823) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32832 = arguments.length;
switch (G__32832) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32845 = arguments.length;
switch (G__32845) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31235__auto___34476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32900){
var state_val_32901 = (state_32900[(1)]);
if((state_val_32901 === (7))){
var state_32900__$1 = state_32900;
var statearr_32909_34477 = state_32900__$1;
(statearr_32909_34477[(2)] = null);

(statearr_32909_34477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (1))){
var state_32900__$1 = state_32900;
var statearr_32910_34478 = state_32900__$1;
(statearr_32910_34478[(2)] = null);

(statearr_32910_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (4))){
var inst_32856 = (state_32900[(7)]);
var inst_32858 = (inst_32856 < cnt);
var state_32900__$1 = state_32900;
if(cljs.core.truth_(inst_32858)){
var statearr_32912_34485 = state_32900__$1;
(statearr_32912_34485[(1)] = (6));

} else {
var statearr_32915_34486 = state_32900__$1;
(statearr_32915_34486[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (15))){
var inst_32892 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32916_34487 = state_32900__$1;
(statearr_32916_34487[(2)] = inst_32892);

(statearr_32916_34487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (13))){
var inst_32885 = cljs.core.async.close_BANG_(out);
var state_32900__$1 = state_32900;
var statearr_32920_34488 = state_32900__$1;
(statearr_32920_34488[(2)] = inst_32885);

(statearr_32920_34488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (6))){
var state_32900__$1 = state_32900;
var statearr_32922_34489 = state_32900__$1;
(statearr_32922_34489[(2)] = null);

(statearr_32922_34489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (3))){
var inst_32894 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32900__$1,inst_32894);
} else {
if((state_val_32901 === (12))){
var inst_32882 = (state_32900[(8)]);
var inst_32882__$1 = (state_32900[(2)]);
var inst_32883 = cljs.core.some(cljs.core.nil_QMARK_,inst_32882__$1);
var state_32900__$1 = (function (){var statearr_32929 = state_32900;
(statearr_32929[(8)] = inst_32882__$1);

return statearr_32929;
})();
if(cljs.core.truth_(inst_32883)){
var statearr_32930_34490 = state_32900__$1;
(statearr_32930_34490[(1)] = (13));

} else {
var statearr_32931_34491 = state_32900__$1;
(statearr_32931_34491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (2))){
var inst_32855 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32856 = (0);
var state_32900__$1 = (function (){var statearr_32932 = state_32900;
(statearr_32932[(7)] = inst_32856);

(statearr_32932[(9)] = inst_32855);

return statearr_32932;
})();
var statearr_32933_34492 = state_32900__$1;
(statearr_32933_34492[(2)] = null);

(statearr_32933_34492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (11))){
var inst_32856 = (state_32900[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32900,(10),Object,null,(9));
var inst_32869 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32856) : chs__$1.call(null,inst_32856));
var inst_32870 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32856) : done.call(null,inst_32856));
var inst_32871 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32869,inst_32870);
var state_32900__$1 = state_32900;
var statearr_32934_34493 = state_32900__$1;
(statearr_32934_34493[(2)] = inst_32871);


cljs.core.async.impl.ioc_helpers.process_exception(state_32900__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (9))){
var inst_32856 = (state_32900[(7)]);
var inst_32873 = (state_32900[(2)]);
var inst_32874 = (inst_32856 + (1));
var inst_32856__$1 = inst_32874;
var state_32900__$1 = (function (){var statearr_32935 = state_32900;
(statearr_32935[(7)] = inst_32856__$1);

(statearr_32935[(10)] = inst_32873);

return statearr_32935;
})();
var statearr_32936_34500 = state_32900__$1;
(statearr_32936_34500[(2)] = null);

(statearr_32936_34500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (5))){
var inst_32880 = (state_32900[(2)]);
var state_32900__$1 = (function (){var statearr_32938 = state_32900;
(statearr_32938[(11)] = inst_32880);

return statearr_32938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32900__$1,(12),dchan);
} else {
if((state_val_32901 === (14))){
var inst_32882 = (state_32900[(8)]);
var inst_32887 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32882);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32900__$1,(16),out,inst_32887);
} else {
if((state_val_32901 === (16))){
var inst_32889 = (state_32900[(2)]);
var state_32900__$1 = (function (){var statearr_32941 = state_32900;
(statearr_32941[(12)] = inst_32889);

return statearr_32941;
})();
var statearr_32942_34501 = state_32900__$1;
(statearr_32942_34501[(2)] = null);

(statearr_32942_34501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (10))){
var inst_32862 = (state_32900[(2)]);
var inst_32865 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32900__$1 = (function (){var statearr_32943 = state_32900;
(statearr_32943[(13)] = inst_32862);

return statearr_32943;
})();
var statearr_32944_34502 = state_32900__$1;
(statearr_32944_34502[(2)] = inst_32865);


cljs.core.async.impl.ioc_helpers.process_exception(state_32900__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (8))){
var inst_32878 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32948_34503 = state_32900__$1;
(statearr_32948_34503[(2)] = inst_32878);

(statearr_32948_34503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34476,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30976__auto__,c__31235__auto___34476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_32951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32951[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_32951[(1)] = (1));

return statearr_32951;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_32900){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_32900);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e32955){if((e32955 instanceof Object)){
var ex__30980__auto__ = e32955;
var statearr_32956_34510 = state_32900;
(statearr_32956_34510[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34511 = state_32900;
state_32900 = G__34511;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_32900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_32900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34476,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31237__auto__ = (function (){var statearr_32959 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_32959[(6)] = c__31235__auto___34476);

return statearr_32959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34476,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32970 = arguments.length;
switch (G__32970) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___34513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34513,out){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34513,out){
return (function (state_33030){
var state_val_33031 = (state_33030[(1)]);
if((state_val_33031 === (7))){
var inst_33001 = (state_33030[(7)]);
var inst_33000 = (state_33030[(8)]);
var inst_33000__$1 = (state_33030[(2)]);
var inst_33001__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33000__$1,(0),null);
var inst_33002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33000__$1,(1),null);
var inst_33004 = (inst_33001__$1 == null);
var state_33030__$1 = (function (){var statearr_33040 = state_33030;
(statearr_33040[(9)] = inst_33002);

(statearr_33040[(7)] = inst_33001__$1);

(statearr_33040[(8)] = inst_33000__$1);

return statearr_33040;
})();
if(cljs.core.truth_(inst_33004)){
var statearr_33043_34514 = state_33030__$1;
(statearr_33043_34514[(1)] = (8));

} else {
var statearr_33045_34515 = state_33030__$1;
(statearr_33045_34515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (1))){
var inst_32988 = cljs.core.vec(chs);
var inst_32989 = inst_32988;
var state_33030__$1 = (function (){var statearr_33047 = state_33030;
(statearr_33047[(10)] = inst_32989);

return statearr_33047;
})();
var statearr_33048_34516 = state_33030__$1;
(statearr_33048_34516[(2)] = null);

(statearr_33048_34516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (4))){
var inst_32989 = (state_33030[(10)]);
var state_33030__$1 = state_33030;
return cljs.core.async.ioc_alts_BANG_(state_33030__$1,(7),inst_32989);
} else {
if((state_val_33031 === (6))){
var inst_33022 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33052_34520 = state_33030__$1;
(statearr_33052_34520[(2)] = inst_33022);

(statearr_33052_34520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (3))){
var inst_33024 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33030__$1,inst_33024);
} else {
if((state_val_33031 === (2))){
var inst_32989 = (state_33030[(10)]);
var inst_32992 = cljs.core.count(inst_32989);
var inst_32993 = (inst_32992 > (0));
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_32993)){
var statearr_33054_34521 = state_33030__$1;
(statearr_33054_34521[(1)] = (4));

} else {
var statearr_33056_34522 = state_33030__$1;
(statearr_33056_34522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (11))){
var inst_32989 = (state_33030[(10)]);
var inst_33015 = (state_33030[(2)]);
var tmp33053 = inst_32989;
var inst_32989__$1 = tmp33053;
var state_33030__$1 = (function (){var statearr_33058 = state_33030;
(statearr_33058[(11)] = inst_33015);

(statearr_33058[(10)] = inst_32989__$1);

return statearr_33058;
})();
var statearr_33060_34523 = state_33030__$1;
(statearr_33060_34523[(2)] = null);

(statearr_33060_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (9))){
var inst_33001 = (state_33030[(7)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33030__$1,(11),out,inst_33001);
} else {
if((state_val_33031 === (5))){
var inst_33020 = cljs.core.async.close_BANG_(out);
var state_33030__$1 = state_33030;
var statearr_33064_34527 = state_33030__$1;
(statearr_33064_34527[(2)] = inst_33020);

(statearr_33064_34527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (10))){
var inst_33018 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33067_34530 = state_33030__$1;
(statearr_33067_34530[(2)] = inst_33018);

(statearr_33067_34530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (8))){
var inst_32989 = (state_33030[(10)]);
var inst_33002 = (state_33030[(9)]);
var inst_33001 = (state_33030[(7)]);
var inst_33000 = (state_33030[(8)]);
var inst_33007 = (function (){var cs = inst_32989;
var vec__32995 = inst_33000;
var v = inst_33001;
var c = inst_33002;
return ((function (cs,vec__32995,v,c,inst_32989,inst_33002,inst_33001,inst_33000,state_val_33031,c__31235__auto___34513,out){
return (function (p1__32963_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32963_SHARP_);
});
;})(cs,vec__32995,v,c,inst_32989,inst_33002,inst_33001,inst_33000,state_val_33031,c__31235__auto___34513,out))
})();
var inst_33011 = cljs.core.filterv(inst_33007,inst_32989);
var inst_32989__$1 = inst_33011;
var state_33030__$1 = (function (){var statearr_33070 = state_33030;
(statearr_33070[(10)] = inst_32989__$1);

return statearr_33070;
})();
var statearr_33071_34531 = state_33030__$1;
(statearr_33071_34531[(2)] = null);

(statearr_33071_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34513,out))
;
return ((function (switch__30976__auto__,c__31235__auto___34513,out){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_33075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33075[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_33075[(1)] = (1));

return statearr_33075;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_33030){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_33030);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e33076){if((e33076 instanceof Object)){
var ex__30980__auto__ = e33076;
var statearr_33077_34532 = state_33030;
(statearr_33077_34532[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34534 = state_33030;
state_33030 = G__34534;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_33030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34513,out))
})();
var state__31237__auto__ = (function (){var statearr_33082 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_33082[(6)] = c__31235__auto___34513);

return statearr_33082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34513,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33096 = arguments.length;
switch (G__33096) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___34537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34537,out){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34537,out){
return (function (state_33128){
var state_val_33129 = (state_33128[(1)]);
if((state_val_33129 === (7))){
var inst_33107 = (state_33128[(7)]);
var inst_33107__$1 = (state_33128[(2)]);
var inst_33108 = (inst_33107__$1 == null);
var inst_33109 = cljs.core.not(inst_33108);
var state_33128__$1 = (function (){var statearr_33134 = state_33128;
(statearr_33134[(7)] = inst_33107__$1);

return statearr_33134;
})();
if(inst_33109){
var statearr_33137_34538 = state_33128__$1;
(statearr_33137_34538[(1)] = (8));

} else {
var statearr_33141_34542 = state_33128__$1;
(statearr_33141_34542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (1))){
var inst_33102 = (0);
var state_33128__$1 = (function (){var statearr_33143 = state_33128;
(statearr_33143[(8)] = inst_33102);

return statearr_33143;
})();
var statearr_33144_34543 = state_33128__$1;
(statearr_33144_34543[(2)] = null);

(statearr_33144_34543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (4))){
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33128__$1,(7),ch);
} else {
if((state_val_33129 === (6))){
var inst_33121 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33150_34550 = state_33128__$1;
(statearr_33150_34550[(2)] = inst_33121);

(statearr_33150_34550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (3))){
var inst_33123 = (state_33128[(2)]);
var inst_33125 = cljs.core.async.close_BANG_(out);
var state_33128__$1 = (function (){var statearr_33152 = state_33128;
(statearr_33152[(9)] = inst_33123);

return statearr_33152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33128__$1,inst_33125);
} else {
if((state_val_33129 === (2))){
var inst_33102 = (state_33128[(8)]);
var inst_33104 = (inst_33102 < n);
var state_33128__$1 = state_33128;
if(cljs.core.truth_(inst_33104)){
var statearr_33155_34551 = state_33128__$1;
(statearr_33155_34551[(1)] = (4));

} else {
var statearr_33158_34552 = state_33128__$1;
(statearr_33158_34552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (11))){
var inst_33102 = (state_33128[(8)]);
var inst_33113 = (state_33128[(2)]);
var inst_33114 = (inst_33102 + (1));
var inst_33102__$1 = inst_33114;
var state_33128__$1 = (function (){var statearr_33163 = state_33128;
(statearr_33163[(10)] = inst_33113);

(statearr_33163[(8)] = inst_33102__$1);

return statearr_33163;
})();
var statearr_33165_34554 = state_33128__$1;
(statearr_33165_34554[(2)] = null);

(statearr_33165_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (9))){
var state_33128__$1 = state_33128;
var statearr_33166_34556 = state_33128__$1;
(statearr_33166_34556[(2)] = null);

(statearr_33166_34556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (5))){
var state_33128__$1 = state_33128;
var statearr_33168_34559 = state_33128__$1;
(statearr_33168_34559[(2)] = null);

(statearr_33168_34559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (10))){
var inst_33118 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33171_34561 = state_33128__$1;
(statearr_33171_34561[(2)] = inst_33118);

(statearr_33171_34561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (8))){
var inst_33107 = (state_33128[(7)]);
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33128__$1,(11),out,inst_33107);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34537,out))
;
return ((function (switch__30976__auto__,c__31235__auto___34537,out){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_33177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33177[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_33177[(1)] = (1));

return statearr_33177;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_33128){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_33128);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e33180){if((e33180 instanceof Object)){
var ex__30980__auto__ = e33180;
var statearr_33182_34562 = state_33128;
(statearr_33182_34562[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34563 = state_33128;
state_33128 = G__34563;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_33128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_33128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34537,out))
})();
var state__31237__auto__ = (function (){var statearr_33186 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_33186[(6)] = c__31235__auto___34537);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34537,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33193 = (function (f,ch,meta33194){
this.f = f;
this.ch = ch;
this.meta33194 = meta33194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33195,meta33194__$1){
var self__ = this;
var _33195__$1 = this;
return (new cljs.core.async.t_cljs$core$async33193(self__.f,self__.ch,meta33194__$1));
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33195){
var self__ = this;
var _33195__$1 = this;
return self__.meta33194;
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33203 = (function (f,ch,meta33194,_,fn1,meta33204){
this.f = f;
this.ch = ch;
this.meta33194 = meta33194;
this._ = _;
this.fn1 = fn1;
this.meta33204 = meta33204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33205,meta33204__$1){
var self__ = this;
var _33205__$1 = this;
return (new cljs.core.async.t_cljs$core$async33203(self__.f,self__.ch,self__.meta33194,self__._,self__.fn1,meta33204__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33205){
var self__ = this;
var _33205__$1 = this;
return self__.meta33204;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33190_SHARP_){
var G__33212 = (((p1__33190_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33190_SHARP_) : self__.f.call(null,p1__33190_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33212) : f1.call(null,G__33212));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33194","meta33194",1543210262,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33193","cljs.core.async/t_cljs$core$async33193",974603226,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33204","meta33204",1001222311,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33203";

cljs.core.async.t_cljs$core$async33203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33203");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33203.
 */
cljs.core.async.__GT_t_cljs$core$async33203 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33203(f__$1,ch__$1,meta33194__$1,___$2,fn1__$1,meta33204){
return (new cljs.core.async.t_cljs$core$async33203(f__$1,ch__$1,meta33194__$1,___$2,fn1__$1,meta33204));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33203(self__.f,self__.ch,self__.meta33194,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33227 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33227) : self__.f.call(null,G__33227));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33194","meta33194",1543210262,null)], null);
});

cljs.core.async.t_cljs$core$async33193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33193";

cljs.core.async.t_cljs$core$async33193.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33193");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33193.
 */
cljs.core.async.__GT_t_cljs$core$async33193 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33193(f__$1,ch__$1,meta33194){
return (new cljs.core.async.t_cljs$core$async33193(f__$1,ch__$1,meta33194));
});

}

return (new cljs.core.async.t_cljs$core$async33193(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33233 = (function (f,ch,meta33234){
this.f = f;
this.ch = ch;
this.meta33234 = meta33234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33235,meta33234__$1){
var self__ = this;
var _33235__$1 = this;
return (new cljs.core.async.t_cljs$core$async33233(self__.f,self__.ch,meta33234__$1));
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33235){
var self__ = this;
var _33235__$1 = this;
return self__.meta33234;
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async33233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33234","meta33234",-357975748,null)], null);
});

cljs.core.async.t_cljs$core$async33233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33233";

cljs.core.async.t_cljs$core$async33233.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33233");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33233.
 */
cljs.core.async.__GT_t_cljs$core$async33233 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33233(f__$1,ch__$1,meta33234){
return (new cljs.core.async.t_cljs$core$async33233(f__$1,ch__$1,meta33234));
});

}

return (new cljs.core.async.t_cljs$core$async33233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33253 = (function (p,ch,meta33254){
this.p = p;
this.ch = ch;
this.meta33254 = meta33254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33255,meta33254__$1){
var self__ = this;
var _33255__$1 = this;
return (new cljs.core.async.t_cljs$core$async33253(self__.p,self__.ch,meta33254__$1));
});

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33255){
var self__ = this;
var _33255__$1 = this;
return self__.meta33254;
});

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33254","meta33254",2109345466,null)], null);
});

cljs.core.async.t_cljs$core$async33253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33253";

cljs.core.async.t_cljs$core$async33253.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33253");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33253.
 */
cljs.core.async.__GT_t_cljs$core$async33253 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33253(p__$1,ch__$1,meta33254){
return (new cljs.core.async.t_cljs$core$async33253(p__$1,ch__$1,meta33254));
});

}

return (new cljs.core.async.t_cljs$core$async33253(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33278 = arguments.length;
switch (G__33278) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___34583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34583,out){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34583,out){
return (function (state_33305){
var state_val_33306 = (state_33305[(1)]);
if((state_val_33306 === (7))){
var inst_33301 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33312_34587 = state_33305__$1;
(statearr_33312_34587[(2)] = inst_33301);

(statearr_33312_34587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (1))){
var state_33305__$1 = state_33305;
var statearr_33313_34591 = state_33305__$1;
(statearr_33313_34591[(2)] = null);

(statearr_33313_34591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (4))){
var inst_33283 = (state_33305[(7)]);
var inst_33283__$1 = (state_33305[(2)]);
var inst_33284 = (inst_33283__$1 == null);
var state_33305__$1 = (function (){var statearr_33318 = state_33305;
(statearr_33318[(7)] = inst_33283__$1);

return statearr_33318;
})();
if(cljs.core.truth_(inst_33284)){
var statearr_33319_34597 = state_33305__$1;
(statearr_33319_34597[(1)] = (5));

} else {
var statearr_33320_34598 = state_33305__$1;
(statearr_33320_34598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (6))){
var inst_33283 = (state_33305[(7)]);
var inst_33292 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33283) : p.call(null,inst_33283));
var state_33305__$1 = state_33305;
if(cljs.core.truth_(inst_33292)){
var statearr_33323_34599 = state_33305__$1;
(statearr_33323_34599[(1)] = (8));

} else {
var statearr_33324_34600 = state_33305__$1;
(statearr_33324_34600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (3))){
var inst_33303 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33305__$1,inst_33303);
} else {
if((state_val_33306 === (2))){
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33305__$1,(4),ch);
} else {
if((state_val_33306 === (11))){
var inst_33295 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33325_34601 = state_33305__$1;
(statearr_33325_34601[(2)] = inst_33295);

(statearr_33325_34601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (9))){
var state_33305__$1 = state_33305;
var statearr_33326_34602 = state_33305__$1;
(statearr_33326_34602[(2)] = null);

(statearr_33326_34602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (5))){
var inst_33286 = cljs.core.async.close_BANG_(out);
var state_33305__$1 = state_33305;
var statearr_33327_34603 = state_33305__$1;
(statearr_33327_34603[(2)] = inst_33286);

(statearr_33327_34603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (10))){
var inst_33298 = (state_33305[(2)]);
var state_33305__$1 = (function (){var statearr_33328 = state_33305;
(statearr_33328[(8)] = inst_33298);

return statearr_33328;
})();
var statearr_33329_34604 = state_33305__$1;
(statearr_33329_34604[(2)] = null);

(statearr_33329_34604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33306 === (8))){
var inst_33283 = (state_33305[(7)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33305__$1,(11),out,inst_33283);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34583,out))
;
return ((function (switch__30976__auto__,c__31235__auto___34583,out){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_33333 = [null,null,null,null,null,null,null,null,null];
(statearr_33333[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_33333[(1)] = (1));

return statearr_33333;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_33305){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_33305);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e33334){if((e33334 instanceof Object)){
var ex__30980__auto__ = e33334;
var statearr_33335_34618 = state_33305;
(statearr_33335_34618[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34620 = state_33305;
state_33305 = G__34620;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_33305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_33305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34583,out))
})();
var state__31237__auto__ = (function (){var statearr_33342 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_33342[(6)] = c__31235__auto___34583);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34583,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33346 = arguments.length;
switch (G__33346) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto__){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto__){
return (function (state_33409){
var state_val_33410 = (state_33409[(1)]);
if((state_val_33410 === (7))){
var inst_33405 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33414_34635 = state_33409__$1;
(statearr_33414_34635[(2)] = inst_33405);

(statearr_33414_34635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (20))){
var inst_33375 = (state_33409[(7)]);
var inst_33386 = (state_33409[(2)]);
var inst_33387 = cljs.core.next(inst_33375);
var inst_33361 = inst_33387;
var inst_33362 = null;
var inst_33363 = (0);
var inst_33364 = (0);
var state_33409__$1 = (function (){var statearr_33415 = state_33409;
(statearr_33415[(8)] = inst_33386);

(statearr_33415[(9)] = inst_33362);

(statearr_33415[(10)] = inst_33364);

(statearr_33415[(11)] = inst_33361);

(statearr_33415[(12)] = inst_33363);

return statearr_33415;
})();
var statearr_33416_34646 = state_33409__$1;
(statearr_33416_34646[(2)] = null);

(statearr_33416_34646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (1))){
var state_33409__$1 = state_33409;
var statearr_33417_34647 = state_33409__$1;
(statearr_33417_34647[(2)] = null);

(statearr_33417_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (4))){
var inst_33350 = (state_33409[(13)]);
var inst_33350__$1 = (state_33409[(2)]);
var inst_33351 = (inst_33350__$1 == null);
var state_33409__$1 = (function (){var statearr_33418 = state_33409;
(statearr_33418[(13)] = inst_33350__$1);

return statearr_33418;
})();
if(cljs.core.truth_(inst_33351)){
var statearr_33419_34648 = state_33409__$1;
(statearr_33419_34648[(1)] = (5));

} else {
var statearr_33420_34649 = state_33409__$1;
(statearr_33420_34649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (15))){
var state_33409__$1 = state_33409;
var statearr_33425_34651 = state_33409__$1;
(statearr_33425_34651[(2)] = null);

(statearr_33425_34651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (21))){
var state_33409__$1 = state_33409;
var statearr_33426_34653 = state_33409__$1;
(statearr_33426_34653[(2)] = null);

(statearr_33426_34653[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (13))){
var inst_33362 = (state_33409[(9)]);
var inst_33364 = (state_33409[(10)]);
var inst_33361 = (state_33409[(11)]);
var inst_33363 = (state_33409[(12)]);
var inst_33371 = (state_33409[(2)]);
var inst_33372 = (inst_33364 + (1));
var tmp33422 = inst_33362;
var tmp33423 = inst_33361;
var tmp33424 = inst_33363;
var inst_33361__$1 = tmp33423;
var inst_33362__$1 = tmp33422;
var inst_33363__$1 = tmp33424;
var inst_33364__$1 = inst_33372;
var state_33409__$1 = (function (){var statearr_33427 = state_33409;
(statearr_33427[(14)] = inst_33371);

(statearr_33427[(9)] = inst_33362__$1);

(statearr_33427[(10)] = inst_33364__$1);

(statearr_33427[(11)] = inst_33361__$1);

(statearr_33427[(12)] = inst_33363__$1);

return statearr_33427;
})();
var statearr_33428_34655 = state_33409__$1;
(statearr_33428_34655[(2)] = null);

(statearr_33428_34655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (22))){
var state_33409__$1 = state_33409;
var statearr_33429_34657 = state_33409__$1;
(statearr_33429_34657[(2)] = null);

(statearr_33429_34657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (6))){
var inst_33350 = (state_33409[(13)]);
var inst_33359 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33350) : f.call(null,inst_33350));
var inst_33360 = cljs.core.seq(inst_33359);
var inst_33361 = inst_33360;
var inst_33362 = null;
var inst_33363 = (0);
var inst_33364 = (0);
var state_33409__$1 = (function (){var statearr_33431 = state_33409;
(statearr_33431[(9)] = inst_33362);

(statearr_33431[(10)] = inst_33364);

(statearr_33431[(11)] = inst_33361);

(statearr_33431[(12)] = inst_33363);

return statearr_33431;
})();
var statearr_33432_34658 = state_33409__$1;
(statearr_33432_34658[(2)] = null);

(statearr_33432_34658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (17))){
var inst_33375 = (state_33409[(7)]);
var inst_33379 = cljs.core.chunk_first(inst_33375);
var inst_33380 = cljs.core.chunk_rest(inst_33375);
var inst_33381 = cljs.core.count(inst_33379);
var inst_33361 = inst_33380;
var inst_33362 = inst_33379;
var inst_33363 = inst_33381;
var inst_33364 = (0);
var state_33409__$1 = (function (){var statearr_33434 = state_33409;
(statearr_33434[(9)] = inst_33362);

(statearr_33434[(10)] = inst_33364);

(statearr_33434[(11)] = inst_33361);

(statearr_33434[(12)] = inst_33363);

return statearr_33434;
})();
var statearr_33435_34660 = state_33409__$1;
(statearr_33435_34660[(2)] = null);

(statearr_33435_34660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (3))){
var inst_33407 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33409__$1,inst_33407);
} else {
if((state_val_33410 === (12))){
var inst_33395 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33439_34661 = state_33409__$1;
(statearr_33439_34661[(2)] = inst_33395);

(statearr_33439_34661[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (2))){
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33409__$1,(4),in$);
} else {
if((state_val_33410 === (23))){
var inst_33403 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33440_34666 = state_33409__$1;
(statearr_33440_34666[(2)] = inst_33403);

(statearr_33440_34666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (19))){
var inst_33390 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33445_34667 = state_33409__$1;
(statearr_33445_34667[(2)] = inst_33390);

(statearr_33445_34667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (11))){
var inst_33375 = (state_33409[(7)]);
var inst_33361 = (state_33409[(11)]);
var inst_33375__$1 = cljs.core.seq(inst_33361);
var state_33409__$1 = (function (){var statearr_33454 = state_33409;
(statearr_33454[(7)] = inst_33375__$1);

return statearr_33454;
})();
if(inst_33375__$1){
var statearr_33455_34669 = state_33409__$1;
(statearr_33455_34669[(1)] = (14));

} else {
var statearr_33456_34670 = state_33409__$1;
(statearr_33456_34670[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (9))){
var inst_33397 = (state_33409[(2)]);
var inst_33398 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33409__$1 = (function (){var statearr_33458 = state_33409;
(statearr_33458[(15)] = inst_33397);

return statearr_33458;
})();
if(cljs.core.truth_(inst_33398)){
var statearr_33460_34673 = state_33409__$1;
(statearr_33460_34673[(1)] = (21));

} else {
var statearr_33461_34674 = state_33409__$1;
(statearr_33461_34674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (5))){
var inst_33353 = cljs.core.async.close_BANG_(out);
var state_33409__$1 = state_33409;
var statearr_33462_34675 = state_33409__$1;
(statearr_33462_34675[(2)] = inst_33353);

(statearr_33462_34675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (14))){
var inst_33375 = (state_33409[(7)]);
var inst_33377 = cljs.core.chunked_seq_QMARK_(inst_33375);
var state_33409__$1 = state_33409;
if(inst_33377){
var statearr_33464_34680 = state_33409__$1;
(statearr_33464_34680[(1)] = (17));

} else {
var statearr_33465_34681 = state_33409__$1;
(statearr_33465_34681[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (16))){
var inst_33393 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33466_34684 = state_33409__$1;
(statearr_33466_34684[(2)] = inst_33393);

(statearr_33466_34684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (10))){
var inst_33362 = (state_33409[(9)]);
var inst_33364 = (state_33409[(10)]);
var inst_33369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33362,inst_33364);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33409__$1,(13),out,inst_33369);
} else {
if((state_val_33410 === (18))){
var inst_33375 = (state_33409[(7)]);
var inst_33384 = cljs.core.first(inst_33375);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33409__$1,(20),out,inst_33384);
} else {
if((state_val_33410 === (8))){
var inst_33364 = (state_33409[(10)]);
var inst_33363 = (state_33409[(12)]);
var inst_33366 = (inst_33364 < inst_33363);
var inst_33367 = inst_33366;
var state_33409__$1 = state_33409;
if(cljs.core.truth_(inst_33367)){
var statearr_33468_34700 = state_33409__$1;
(statearr_33468_34700[(1)] = (10));

} else {
var statearr_33469_34702 = state_33409__$1;
(statearr_33469_34702[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto__))
;
return ((function (switch__30976__auto__,c__31235__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30977__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30977__auto____0 = (function (){
var statearr_33471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33471[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30977__auto__);

(statearr_33471[(1)] = (1));

return statearr_33471;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30977__auto____1 = (function (state_33409){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_33409);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e33472){if((e33472 instanceof Object)){
var ex__30980__auto__ = e33472;
var statearr_33473_34719 = state_33409;
(statearr_33473_34719[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34720 = state_33409;
state_33409 = G__34720;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30977__auto__ = function(state_33409){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30977__auto____1.call(this,state_33409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30977__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30977__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto__))
})();
var state__31237__auto__ = (function (){var statearr_33474 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_33474[(6)] = c__31235__auto__);

return statearr_33474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto__))
);

return c__31235__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33479 = arguments.length;
switch (G__33479) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33484 = arguments.length;
switch (G__33484) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33490 = arguments.length;
switch (G__33490) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___34774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34774,out){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34774,out){
return (function (state_33545){
var state_val_33546 = (state_33545[(1)]);
if((state_val_33546 === (7))){
var inst_33536 = (state_33545[(2)]);
var state_33545__$1 = state_33545;
var statearr_33558_34775 = state_33545__$1;
(statearr_33558_34775[(2)] = inst_33536);

(statearr_33558_34775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (1))){
var inst_33508 = null;
var state_33545__$1 = (function (){var statearr_33565 = state_33545;
(statearr_33565[(7)] = inst_33508);

return statearr_33565;
})();
var statearr_33570_34776 = state_33545__$1;
(statearr_33570_34776[(2)] = null);

(statearr_33570_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (4))){
var inst_33518 = (state_33545[(8)]);
var inst_33518__$1 = (state_33545[(2)]);
var inst_33520 = (inst_33518__$1 == null);
var inst_33523 = cljs.core.not(inst_33520);
var state_33545__$1 = (function (){var statearr_33571 = state_33545;
(statearr_33571[(8)] = inst_33518__$1);

return statearr_33571;
})();
if(inst_33523){
var statearr_33572_34781 = state_33545__$1;
(statearr_33572_34781[(1)] = (5));

} else {
var statearr_33573_34786 = state_33545__$1;
(statearr_33573_34786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (6))){
var state_33545__$1 = state_33545;
var statearr_33574_34791 = state_33545__$1;
(statearr_33574_34791[(2)] = null);

(statearr_33574_34791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (3))){
var inst_33542 = (state_33545[(2)]);
var inst_33543 = cljs.core.async.close_BANG_(out);
var state_33545__$1 = (function (){var statearr_33576 = state_33545;
(statearr_33576[(9)] = inst_33542);

return statearr_33576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33545__$1,inst_33543);
} else {
if((state_val_33546 === (2))){
var state_33545__$1 = state_33545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33545__$1,(4),ch);
} else {
if((state_val_33546 === (11))){
var inst_33518 = (state_33545[(8)]);
var inst_33530 = (state_33545[(2)]);
var inst_33508 = inst_33518;
var state_33545__$1 = (function (){var statearr_33580 = state_33545;
(statearr_33580[(7)] = inst_33508);

(statearr_33580[(10)] = inst_33530);

return statearr_33580;
})();
var statearr_33581_34793 = state_33545__$1;
(statearr_33581_34793[(2)] = null);

(statearr_33581_34793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (9))){
var inst_33518 = (state_33545[(8)]);
var state_33545__$1 = state_33545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33545__$1,(11),out,inst_33518);
} else {
if((state_val_33546 === (5))){
var inst_33508 = (state_33545[(7)]);
var inst_33518 = (state_33545[(8)]);
var inst_33525 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33518,inst_33508);
var state_33545__$1 = state_33545;
if(inst_33525){
var statearr_33583_34795 = state_33545__$1;
(statearr_33583_34795[(1)] = (8));

} else {
var statearr_33584_34796 = state_33545__$1;
(statearr_33584_34796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (10))){
var inst_33533 = (state_33545[(2)]);
var state_33545__$1 = state_33545;
var statearr_33585_34797 = state_33545__$1;
(statearr_33585_34797[(2)] = inst_33533);

(statearr_33585_34797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (8))){
var inst_33508 = (state_33545[(7)]);
var tmp33582 = inst_33508;
var inst_33508__$1 = tmp33582;
var state_33545__$1 = (function (){var statearr_33586 = state_33545;
(statearr_33586[(7)] = inst_33508__$1);

return statearr_33586;
})();
var statearr_33587_34802 = state_33545__$1;
(statearr_33587_34802[(2)] = null);

(statearr_33587_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34774,out))
;
return ((function (switch__30976__auto__,c__31235__auto___34774,out){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_33588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33588[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_33588[(1)] = (1));

return statearr_33588;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_33545){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_33545);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e33589){if((e33589 instanceof Object)){
var ex__30980__auto__ = e33589;
var statearr_33590_34804 = state_33545;
(statearr_33590_34804[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34805 = state_33545;
state_33545 = G__34805;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_33545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_33545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34774,out))
})();
var state__31237__auto__ = (function (){var statearr_33591 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_33591[(6)] = c__31235__auto___34774);

return statearr_33591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34774,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33594 = arguments.length;
switch (G__33594) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___34823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34823,out){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34823,out){
return (function (state_33640){
var state_val_33641 = (state_33640[(1)]);
if((state_val_33641 === (7))){
var inst_33636 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33642_34835 = state_33640__$1;
(statearr_33642_34835[(2)] = inst_33636);

(statearr_33642_34835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (1))){
var inst_33602 = (new Array(n));
var inst_33603 = inst_33602;
var inst_33604 = (0);
var state_33640__$1 = (function (){var statearr_33643 = state_33640;
(statearr_33643[(7)] = inst_33603);

(statearr_33643[(8)] = inst_33604);

return statearr_33643;
})();
var statearr_33644_34843 = state_33640__$1;
(statearr_33644_34843[(2)] = null);

(statearr_33644_34843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (4))){
var inst_33607 = (state_33640[(9)]);
var inst_33607__$1 = (state_33640[(2)]);
var inst_33608 = (inst_33607__$1 == null);
var inst_33609 = cljs.core.not(inst_33608);
var state_33640__$1 = (function (){var statearr_33645 = state_33640;
(statearr_33645[(9)] = inst_33607__$1);

return statearr_33645;
})();
if(inst_33609){
var statearr_33648_34855 = state_33640__$1;
(statearr_33648_34855[(1)] = (5));

} else {
var statearr_33650_34859 = state_33640__$1;
(statearr_33650_34859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (15))){
var inst_33630 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33651_34864 = state_33640__$1;
(statearr_33651_34864[(2)] = inst_33630);

(statearr_33651_34864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (13))){
var state_33640__$1 = state_33640;
var statearr_33652_34865 = state_33640__$1;
(statearr_33652_34865[(2)] = null);

(statearr_33652_34865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (6))){
var inst_33604 = (state_33640[(8)]);
var inst_33625 = (inst_33604 > (0));
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33625)){
var statearr_33654_34869 = state_33640__$1;
(statearr_33654_34869[(1)] = (12));

} else {
var statearr_33655_34870 = state_33640__$1;
(statearr_33655_34870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (3))){
var inst_33638 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33640__$1,inst_33638);
} else {
if((state_val_33641 === (12))){
var inst_33603 = (state_33640[(7)]);
var inst_33628 = cljs.core.vec(inst_33603);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33640__$1,(15),out,inst_33628);
} else {
if((state_val_33641 === (2))){
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33640__$1,(4),ch);
} else {
if((state_val_33641 === (11))){
var inst_33619 = (state_33640[(2)]);
var inst_33620 = (new Array(n));
var inst_33603 = inst_33620;
var inst_33604 = (0);
var state_33640__$1 = (function (){var statearr_33656 = state_33640;
(statearr_33656[(10)] = inst_33619);

(statearr_33656[(7)] = inst_33603);

(statearr_33656[(8)] = inst_33604);

return statearr_33656;
})();
var statearr_33657_34872 = state_33640__$1;
(statearr_33657_34872[(2)] = null);

(statearr_33657_34872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (9))){
var inst_33603 = (state_33640[(7)]);
var inst_33617 = cljs.core.vec(inst_33603);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33640__$1,(11),out,inst_33617);
} else {
if((state_val_33641 === (5))){
var inst_33603 = (state_33640[(7)]);
var inst_33604 = (state_33640[(8)]);
var inst_33612 = (state_33640[(11)]);
var inst_33607 = (state_33640[(9)]);
var inst_33611 = (inst_33603[inst_33604] = inst_33607);
var inst_33612__$1 = (inst_33604 + (1));
var inst_33613 = (inst_33612__$1 < n);
var state_33640__$1 = (function (){var statearr_33660 = state_33640;
(statearr_33660[(12)] = inst_33611);

(statearr_33660[(11)] = inst_33612__$1);

return statearr_33660;
})();
if(cljs.core.truth_(inst_33613)){
var statearr_33662_34875 = state_33640__$1;
(statearr_33662_34875[(1)] = (8));

} else {
var statearr_33663_34877 = state_33640__$1;
(statearr_33663_34877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (14))){
var inst_33633 = (state_33640[(2)]);
var inst_33634 = cljs.core.async.close_BANG_(out);
var state_33640__$1 = (function (){var statearr_33665 = state_33640;
(statearr_33665[(13)] = inst_33633);

return statearr_33665;
})();
var statearr_33666_34878 = state_33640__$1;
(statearr_33666_34878[(2)] = inst_33634);

(statearr_33666_34878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (10))){
var inst_33623 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33668_34879 = state_33640__$1;
(statearr_33668_34879[(2)] = inst_33623);

(statearr_33668_34879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (8))){
var inst_33603 = (state_33640[(7)]);
var inst_33612 = (state_33640[(11)]);
var tmp33664 = inst_33603;
var inst_33603__$1 = tmp33664;
var inst_33604 = inst_33612;
var state_33640__$1 = (function (){var statearr_33669 = state_33640;
(statearr_33669[(7)] = inst_33603__$1);

(statearr_33669[(8)] = inst_33604);

return statearr_33669;
})();
var statearr_33670_34884 = state_33640__$1;
(statearr_33670_34884[(2)] = null);

(statearr_33670_34884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34823,out))
;
return ((function (switch__30976__auto__,c__31235__auto___34823,out){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_33672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33672[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_33672[(1)] = (1));

return statearr_33672;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_33640){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_33640);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e33673){if((e33673 instanceof Object)){
var ex__30980__auto__ = e33673;
var statearr_33674_34893 = state_33640;
(statearr_33674_34893[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34894 = state_33640;
state_33640 = G__34894;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_33640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_33640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34823,out))
})();
var state__31237__auto__ = (function (){var statearr_33676 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_33676[(6)] = c__31235__auto___34823);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34823,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33678 = arguments.length;
switch (G__33678) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31235__auto___34897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___34897,out){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___34897,out){
return (function (state_33721){
var state_val_33722 = (state_33721[(1)]);
if((state_val_33722 === (7))){
var inst_33717 = (state_33721[(2)]);
var state_33721__$1 = state_33721;
var statearr_33723_34898 = state_33721__$1;
(statearr_33723_34898[(2)] = inst_33717);

(statearr_33723_34898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (1))){
var inst_33679 = [];
var inst_33680 = inst_33679;
var inst_33681 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33721__$1 = (function (){var statearr_33724 = state_33721;
(statearr_33724[(7)] = inst_33681);

(statearr_33724[(8)] = inst_33680);

return statearr_33724;
})();
var statearr_33725_34899 = state_33721__$1;
(statearr_33725_34899[(2)] = null);

(statearr_33725_34899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (4))){
var inst_33684 = (state_33721[(9)]);
var inst_33684__$1 = (state_33721[(2)]);
var inst_33685 = (inst_33684__$1 == null);
var inst_33686 = cljs.core.not(inst_33685);
var state_33721__$1 = (function (){var statearr_33726 = state_33721;
(statearr_33726[(9)] = inst_33684__$1);

return statearr_33726;
})();
if(inst_33686){
var statearr_33727_34900 = state_33721__$1;
(statearr_33727_34900[(1)] = (5));

} else {
var statearr_33728_34901 = state_33721__$1;
(statearr_33728_34901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (15))){
var inst_33711 = (state_33721[(2)]);
var state_33721__$1 = state_33721;
var statearr_33731_34902 = state_33721__$1;
(statearr_33731_34902[(2)] = inst_33711);

(statearr_33731_34902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (13))){
var state_33721__$1 = state_33721;
var statearr_33732_34903 = state_33721__$1;
(statearr_33732_34903[(2)] = null);

(statearr_33732_34903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (6))){
var inst_33680 = (state_33721[(8)]);
var inst_33706 = inst_33680.length;
var inst_33707 = (inst_33706 > (0));
var state_33721__$1 = state_33721;
if(cljs.core.truth_(inst_33707)){
var statearr_33733_34904 = state_33721__$1;
(statearr_33733_34904[(1)] = (12));

} else {
var statearr_33734_34905 = state_33721__$1;
(statearr_33734_34905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (3))){
var inst_33719 = (state_33721[(2)]);
var state_33721__$1 = state_33721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33721__$1,inst_33719);
} else {
if((state_val_33722 === (12))){
var inst_33680 = (state_33721[(8)]);
var inst_33709 = cljs.core.vec(inst_33680);
var state_33721__$1 = state_33721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33721__$1,(15),out,inst_33709);
} else {
if((state_val_33722 === (2))){
var state_33721__$1 = state_33721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33721__$1,(4),ch);
} else {
if((state_val_33722 === (11))){
var inst_33688 = (state_33721[(10)]);
var inst_33684 = (state_33721[(9)]);
var inst_33699 = (state_33721[(2)]);
var inst_33700 = [];
var inst_33701 = inst_33700.push(inst_33684);
var inst_33680 = inst_33700;
var inst_33681 = inst_33688;
var state_33721__$1 = (function (){var statearr_33735 = state_33721;
(statearr_33735[(7)] = inst_33681);

(statearr_33735[(11)] = inst_33699);

(statearr_33735[(12)] = inst_33701);

(statearr_33735[(8)] = inst_33680);

return statearr_33735;
})();
var statearr_33736_34910 = state_33721__$1;
(statearr_33736_34910[(2)] = null);

(statearr_33736_34910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (9))){
var inst_33680 = (state_33721[(8)]);
var inst_33697 = cljs.core.vec(inst_33680);
var state_33721__$1 = state_33721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33721__$1,(11),out,inst_33697);
} else {
if((state_val_33722 === (5))){
var inst_33681 = (state_33721[(7)]);
var inst_33688 = (state_33721[(10)]);
var inst_33684 = (state_33721[(9)]);
var inst_33688__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33684) : f.call(null,inst_33684));
var inst_33689 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33688__$1,inst_33681);
var inst_33690 = cljs.core.keyword_identical_QMARK_(inst_33681,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33691 = ((inst_33689) || (inst_33690));
var state_33721__$1 = (function (){var statearr_33737 = state_33721;
(statearr_33737[(10)] = inst_33688__$1);

return statearr_33737;
})();
if(cljs.core.truth_(inst_33691)){
var statearr_33738_34911 = state_33721__$1;
(statearr_33738_34911[(1)] = (8));

} else {
var statearr_33739_34912 = state_33721__$1;
(statearr_33739_34912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (14))){
var inst_33714 = (state_33721[(2)]);
var inst_33715 = cljs.core.async.close_BANG_(out);
var state_33721__$1 = (function (){var statearr_33741 = state_33721;
(statearr_33741[(13)] = inst_33714);

return statearr_33741;
})();
var statearr_33742_34913 = state_33721__$1;
(statearr_33742_34913[(2)] = inst_33715);

(statearr_33742_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (10))){
var inst_33704 = (state_33721[(2)]);
var state_33721__$1 = state_33721;
var statearr_33743_34918 = state_33721__$1;
(statearr_33743_34918[(2)] = inst_33704);

(statearr_33743_34918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (8))){
var inst_33688 = (state_33721[(10)]);
var inst_33680 = (state_33721[(8)]);
var inst_33684 = (state_33721[(9)]);
var inst_33693 = inst_33680.push(inst_33684);
var tmp33740 = inst_33680;
var inst_33680__$1 = tmp33740;
var inst_33681 = inst_33688;
var state_33721__$1 = (function (){var statearr_33744 = state_33721;
(statearr_33744[(7)] = inst_33681);

(statearr_33744[(14)] = inst_33693);

(statearr_33744[(8)] = inst_33680__$1);

return statearr_33744;
})();
var statearr_33745_34922 = state_33721__$1;
(statearr_33745_34922[(2)] = null);

(statearr_33745_34922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31235__auto___34897,out))
;
return ((function (switch__30976__auto__,c__31235__auto___34897,out){
return (function() {
var cljs$core$async$state_machine__30977__auto__ = null;
var cljs$core$async$state_machine__30977__auto____0 = (function (){
var statearr_33746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33746[(0)] = cljs$core$async$state_machine__30977__auto__);

(statearr_33746[(1)] = (1));

return statearr_33746;
});
var cljs$core$async$state_machine__30977__auto____1 = (function (state_33721){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_33721);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e33747){if((e33747 instanceof Object)){
var ex__30980__auto__ = e33747;
var statearr_33748_34924 = state_33721;
(statearr_33748_34924[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34928 = state_33721;
state_33721 = G__34928;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
cljs$core$async$state_machine__30977__auto__ = function(state_33721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30977__auto____1.call(this,state_33721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30977__auto____0;
cljs$core$async$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30977__auto____1;
return cljs$core$async$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___34897,out))
})();
var state__31237__auto__ = (function (){var statearr_33749 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_33749[(6)] = c__31235__auto___34897);

return statearr_33749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___34897,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
