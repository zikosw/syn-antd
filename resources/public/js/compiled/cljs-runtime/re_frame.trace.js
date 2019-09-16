goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__25966){
var map__25967 = p__25966;
var map__25967__$1 = (((((!((map__25967 == null))))?(((((map__25967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25967):map__25967);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25967__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25967__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25967__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25967__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__25969_25996 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__25970_25997 = null;
var count__25971_25998 = (0);
var i__25972_25999 = (0);
while(true){
if((i__25972_25999 < count__25971_25998)){
var vec__25983_26000 = chunk__25970_25997.cljs$core$IIndexed$_nth$arity$2(null,i__25972_25999);
var k_26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25983_26000,(0),null);
var cb_26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25983_26000,(1),null);
try{var G__25987_26003 = cljs.core.deref(re_frame.trace.traces);
(cb_26002.cljs$core$IFn$_invoke$arity$1 ? cb_26002.cljs$core$IFn$_invoke$arity$1(G__25987_26003) : cb_26002.call(null,G__25987_26003));
}catch (e25986){var e_26004 = e25986;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26001,"while storing",cljs.core.deref(re_frame.trace.traces),e_26004], 0));
}

var G__26005 = seq__25969_25996;
var G__26006 = chunk__25970_25997;
var G__26007 = count__25971_25998;
var G__26008 = (i__25972_25999 + (1));
seq__25969_25996 = G__26005;
chunk__25970_25997 = G__26006;
count__25971_25998 = G__26007;
i__25972_25999 = G__26008;
continue;
} else {
var temp__5720__auto___26009 = cljs.core.seq(seq__25969_25996);
if(temp__5720__auto___26009){
var seq__25969_26010__$1 = temp__5720__auto___26009;
if(cljs.core.chunked_seq_QMARK_(seq__25969_26010__$1)){
var c__4550__auto___26011 = cljs.core.chunk_first(seq__25969_26010__$1);
var G__26012 = cljs.core.chunk_rest(seq__25969_26010__$1);
var G__26013 = c__4550__auto___26011;
var G__26014 = cljs.core.count(c__4550__auto___26011);
var G__26015 = (0);
seq__25969_25996 = G__26012;
chunk__25970_25997 = G__26013;
count__25971_25998 = G__26014;
i__25972_25999 = G__26015;
continue;
} else {
var vec__25988_26016 = cljs.core.first(seq__25969_26010__$1);
var k_26017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25988_26016,(0),null);
var cb_26018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25988_26016,(1),null);
try{var G__25992_26019 = cljs.core.deref(re_frame.trace.traces);
(cb_26018.cljs$core$IFn$_invoke$arity$1 ? cb_26018.cljs$core$IFn$_invoke$arity$1(G__25992_26019) : cb_26018.call(null,G__25992_26019));
}catch (e25991){var e_26020 = e25991;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26017,"while storing",cljs.core.deref(re_frame.trace.traces),e_26020], 0));
}

var G__26021 = cljs.core.next(seq__25969_26010__$1);
var G__26022 = null;
var G__26023 = (0);
var G__26024 = (0);
seq__25969_25996 = G__26021;
chunk__25970_25997 = G__26022;
count__25971_25998 = G__26023;
i__25972_25999 = G__26024;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
