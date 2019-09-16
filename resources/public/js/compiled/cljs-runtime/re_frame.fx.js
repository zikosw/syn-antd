goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__26270 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26271 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26271;

try{try{var seq__26275 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__26276 = null;
var count__26277 = (0);
var i__26278 = (0);
while(true){
if((i__26278 < count__26277)){
var vec__26286 = chunk__26276.cljs$core$IIndexed$_nth$arity$2(null,i__26278);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26286,(1),null);
var temp__5718__auto___26349 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26349)){
var effect_fn_26350 = temp__5718__auto___26349;
(effect_fn_26350.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26350.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26350.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26351 = seq__26275;
var G__26352 = chunk__26276;
var G__26353 = count__26277;
var G__26354 = (i__26278 + (1));
seq__26275 = G__26351;
chunk__26276 = G__26352;
count__26277 = G__26353;
i__26278 = G__26354;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26275);
if(temp__5720__auto__){
var seq__26275__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26275__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26275__$1);
var G__26355 = cljs.core.chunk_rest(seq__26275__$1);
var G__26356 = c__4550__auto__;
var G__26357 = cljs.core.count(c__4550__auto__);
var G__26358 = (0);
seq__26275 = G__26355;
chunk__26276 = G__26356;
count__26277 = G__26357;
i__26278 = G__26358;
continue;
} else {
var vec__26290 = cljs.core.first(seq__26275__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290,(1),null);
var temp__5718__auto___26359 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26359)){
var effect_fn_26360 = temp__5718__auto___26359;
(effect_fn_26360.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26360.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26360.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26361 = cljs.core.next(seq__26275__$1);
var G__26362 = null;
var G__26363 = (0);
var G__26364 = (0);
seq__26275 = G__26361;
chunk__26276 = G__26362;
count__26277 = G__26363;
i__26278 = G__26364;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__25946__auto___26365 = re_frame.interop.now();
var duration__25947__auto___26366 = (end__25946__auto___26365 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25947__auto___26366,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__25946__auto___26365);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26270;
}} else {
var seq__26295 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__26296 = null;
var count__26297 = (0);
var i__26298 = (0);
while(true){
if((i__26298 < count__26297)){
var vec__26307 = chunk__26296.cljs$core$IIndexed$_nth$arity$2(null,i__26298);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26307,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26307,(1),null);
var temp__5718__auto___26367 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26367)){
var effect_fn_26368 = temp__5718__auto___26367;
(effect_fn_26368.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26368.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26368.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26369 = seq__26295;
var G__26370 = chunk__26296;
var G__26371 = count__26297;
var G__26372 = (i__26298 + (1));
seq__26295 = G__26369;
chunk__26296 = G__26370;
count__26297 = G__26371;
i__26298 = G__26372;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26295);
if(temp__5720__auto__){
var seq__26295__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26295__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26295__$1);
var G__26373 = cljs.core.chunk_rest(seq__26295__$1);
var G__26374 = c__4550__auto__;
var G__26375 = cljs.core.count(c__4550__auto__);
var G__26376 = (0);
seq__26295 = G__26373;
chunk__26296 = G__26374;
count__26297 = G__26375;
i__26298 = G__26376;
continue;
} else {
var vec__26310 = cljs.core.first(seq__26295__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26310,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26310,(1),null);
var temp__5718__auto___26377 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___26377)){
var effect_fn_26378 = temp__5718__auto___26377;
(effect_fn_26378.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26378.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26378.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26379 = cljs.core.next(seq__26295__$1);
var G__26380 = null;
var G__26381 = (0);
var G__26382 = (0);
seq__26295 = G__26379;
chunk__26296 = G__26380;
count__26297 = G__26381;
i__26298 = G__26382;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__26313 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26314 = null;
var count__26315 = (0);
var i__26316 = (0);
while(true){
if((i__26316 < count__26315)){
var map__26322 = chunk__26314.cljs$core$IIndexed$_nth$arity$2(null,i__26316);
var map__26322__$1 = (((((!((map__26322 == null))))?(((((map__26322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26322):map__26322);
var effect = map__26322__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26322__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26322__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__26313,chunk__26314,count__26315,i__26316,map__26322,map__26322__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__26313,chunk__26314,count__26315,i__26316,map__26322,map__26322__$1,effect,ms,dispatch))
,ms);
}


var G__26383 = seq__26313;
var G__26384 = chunk__26314;
var G__26385 = count__26315;
var G__26386 = (i__26316 + (1));
seq__26313 = G__26383;
chunk__26314 = G__26384;
count__26315 = G__26385;
i__26316 = G__26386;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26313);
if(temp__5720__auto__){
var seq__26313__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26313__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26313__$1);
var G__26387 = cljs.core.chunk_rest(seq__26313__$1);
var G__26388 = c__4550__auto__;
var G__26389 = cljs.core.count(c__4550__auto__);
var G__26390 = (0);
seq__26313 = G__26387;
chunk__26314 = G__26388;
count__26315 = G__26389;
i__26316 = G__26390;
continue;
} else {
var map__26326 = cljs.core.first(seq__26313__$1);
var map__26326__$1 = (((((!((map__26326 == null))))?(((((map__26326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26326):map__26326);
var effect = map__26326__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26326__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26326__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__26313,chunk__26314,count__26315,i__26316,map__26326,map__26326__$1,effect,ms,dispatch,seq__26313__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__26313,chunk__26314,count__26315,i__26316,map__26326,map__26326__$1,effect,ms,dispatch,seq__26313__$1,temp__5720__auto__))
,ms);
}


var G__26393 = cljs.core.next(seq__26313__$1);
var G__26394 = null;
var G__26395 = (0);
var G__26396 = (0);
seq__26313 = G__26393;
chunk__26314 = G__26394;
count__26315 = G__26395;
i__26316 = G__26396;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__26328 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26329 = null;
var count__26330 = (0);
var i__26331 = (0);
while(true){
if((i__26331 < count__26330)){
var event = chunk__26329.cljs$core$IIndexed$_nth$arity$2(null,i__26331);
re_frame.router.dispatch(event);


var G__26398 = seq__26328;
var G__26399 = chunk__26329;
var G__26400 = count__26330;
var G__26401 = (i__26331 + (1));
seq__26328 = G__26398;
chunk__26329 = G__26399;
count__26330 = G__26400;
i__26331 = G__26401;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26328);
if(temp__5720__auto__){
var seq__26328__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26328__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26328__$1);
var G__26403 = cljs.core.chunk_rest(seq__26328__$1);
var G__26404 = c__4550__auto__;
var G__26405 = cljs.core.count(c__4550__auto__);
var G__26406 = (0);
seq__26328 = G__26403;
chunk__26329 = G__26404;
count__26330 = G__26405;
i__26331 = G__26406;
continue;
} else {
var event = cljs.core.first(seq__26328__$1);
re_frame.router.dispatch(event);


var G__26407 = cljs.core.next(seq__26328__$1);
var G__26408 = null;
var G__26409 = (0);
var G__26410 = (0);
seq__26328 = G__26407;
chunk__26329 = G__26408;
count__26330 = G__26409;
i__26331 = G__26410;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__26333 = cljs.core.seq(value);
var chunk__26334 = null;
var count__26335 = (0);
var i__26336 = (0);
while(true){
if((i__26336 < count__26335)){
var event = chunk__26334.cljs$core$IIndexed$_nth$arity$2(null,i__26336);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__26412 = seq__26333;
var G__26413 = chunk__26334;
var G__26414 = count__26335;
var G__26415 = (i__26336 + (1));
seq__26333 = G__26412;
chunk__26334 = G__26413;
count__26335 = G__26414;
i__26336 = G__26415;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26333);
if(temp__5720__auto__){
var seq__26333__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26333__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26333__$1);
var G__26417 = cljs.core.chunk_rest(seq__26333__$1);
var G__26418 = c__4550__auto__;
var G__26419 = cljs.core.count(c__4550__auto__);
var G__26420 = (0);
seq__26333 = G__26417;
chunk__26334 = G__26418;
count__26335 = G__26419;
i__26336 = G__26420;
continue;
} else {
var event = cljs.core.first(seq__26333__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__26421 = cljs.core.next(seq__26333__$1);
var G__26422 = null;
var G__26423 = (0);
var G__26424 = (0);
seq__26333 = G__26421;
chunk__26334 = G__26422;
count__26335 = G__26423;
i__26336 = G__26424;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
