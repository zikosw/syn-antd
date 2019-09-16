goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36032 = arguments.length;
var i__4731__auto___36033 = (0);
while(true){
if((i__4731__auto___36033 < len__4730__auto___36032)){
args__4736__auto__.push((arguments[i__4731__auto___36033]));

var G__36034 = (i__4731__auto___36033 + (1));
i__4731__auto___36033 = G__36034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35871){
var G__35872 = cljs.core.first(seq35871);
var seq35871__$1 = cljs.core.next(seq35871);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35872,seq35871__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35884){
var map__35885 = p__35884;
var map__35885__$1 = (((((!((map__35885 == null))))?(((((map__35885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35885):map__35885);
var src = map__35885__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35885__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35885__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35887 = cljs.core.seq(sources);
var chunk__35888 = null;
var count__35889 = (0);
var i__35890 = (0);
while(true){
if((i__35890 < count__35889)){
var map__35895 = chunk__35888.cljs$core$IIndexed$_nth$arity$2(null,i__35890);
var map__35895__$1 = (((((!((map__35895 == null))))?(((((map__35895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35895):map__35895);
var src = map__35895__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__36035 = seq__35887;
var G__36036 = chunk__35888;
var G__36037 = count__35889;
var G__36038 = (i__35890 + (1));
seq__35887 = G__36035;
chunk__35888 = G__36036;
count__35889 = G__36037;
i__35890 = G__36038;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35887);
if(temp__5720__auto__){
var seq__35887__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35887__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35887__$1);
var G__36039 = cljs.core.chunk_rest(seq__35887__$1);
var G__36040 = c__4550__auto__;
var G__36041 = cljs.core.count(c__4550__auto__);
var G__36042 = (0);
seq__35887 = G__36039;
chunk__35888 = G__36040;
count__35889 = G__36041;
i__35890 = G__36042;
continue;
} else {
var map__35899 = cljs.core.first(seq__35887__$1);
var map__35899__$1 = (((((!((map__35899 == null))))?(((((map__35899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35899):map__35899);
var src = map__35899__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35899__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35899__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35899__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35899__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__36043 = cljs.core.next(seq__35887__$1);
var G__36044 = null;
var G__36045 = (0);
var G__36046 = (0);
seq__35887 = G__36043;
chunk__35888 = G__36044;
count__35889 = G__36045;
i__35890 = G__36046;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35903 = cljs.core.seq(js_requires);
var chunk__35904 = null;
var count__35905 = (0);
var i__35906 = (0);
while(true){
if((i__35906 < count__35905)){
var js_ns = chunk__35904.cljs$core$IIndexed$_nth$arity$2(null,i__35906);
var require_str_36047 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36047);


var G__36048 = seq__35903;
var G__36049 = chunk__35904;
var G__36050 = count__35905;
var G__36051 = (i__35906 + (1));
seq__35903 = G__36048;
chunk__35904 = G__36049;
count__35905 = G__36050;
i__35906 = G__36051;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35903);
if(temp__5720__auto__){
var seq__35903__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35903__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35903__$1);
var G__36052 = cljs.core.chunk_rest(seq__35903__$1);
var G__36053 = c__4550__auto__;
var G__36054 = cljs.core.count(c__4550__auto__);
var G__36055 = (0);
seq__35903 = G__36052;
chunk__35904 = G__36053;
count__35905 = G__36054;
i__35906 = G__36055;
continue;
} else {
var js_ns = cljs.core.first(seq__35903__$1);
var require_str_36056 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36056);


var G__36057 = cljs.core.next(seq__35903__$1);
var G__36058 = null;
var G__36059 = (0);
var G__36060 = (0);
seq__35903 = G__36057;
chunk__35904 = G__36058;
count__35905 = G__36059;
i__35906 = G__36060;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35907 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35907) : callback.call(null,G__35907));
} else {
var G__35908 = shadow.cljs.devtools.client.env.files_url();
var G__35909 = ((function (G__35908){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35908))
;
var G__35910 = "POST";
var G__35911 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35912 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35908,G__35909,G__35910,G__35911,G__35912);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35914){
var map__35915 = p__35914;
var map__35915__$1 = (((((!((map__35915 == null))))?(((((map__35915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35915):map__35915);
var msg = map__35915__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35915__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35915__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35917 = info;
var map__35917__$1 = (((((!((map__35917 == null))))?(((((map__35917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35917):map__35917);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35917__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35917__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35919(s__35920){
return (new cljs.core.LazySeq(null,((function (map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info){
return (function (){
var s__35920__$1 = s__35920;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35920__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35925 = cljs.core.first(xs__6277__auto__);
var map__35925__$1 = (((((!((map__35925 == null))))?(((((map__35925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35925):map__35925);
var src = map__35925__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35920__$1,map__35925,map__35925__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35919_$_iter__35921(s__35922){
return (new cljs.core.LazySeq(null,((function (s__35920__$1,map__35925,map__35925__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info){
return (function (){
var s__35922__$1 = s__35922;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35922__$1);
if(temp__5720__auto____$1){
var s__35922__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35922__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35922__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35924 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35923 = (0);
while(true){
if((i__35923 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35923);
cljs.core.chunk_append(b__35924,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36061 = (i__35923 + (1));
i__35923 = G__36061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35924),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35919_$_iter__35921(cljs.core.chunk_rest(s__35922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35924),null);
}
} else {
var warning = cljs.core.first(s__35922__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35919_$_iter__35921(cljs.core.rest(s__35922__$2)));
}
} else {
return null;
}
break;
}
});})(s__35920__$1,map__35925,map__35925__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info))
,null,null));
});})(s__35920__$1,map__35925,map__35925__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35919(cljs.core.rest(s__35920__$1)));
} else {
var G__36062 = cljs.core.rest(s__35920__$1);
s__35920__$1 = G__36062;
continue;
}
} else {
var G__36063 = cljs.core.rest(s__35920__$1);
s__35920__$1 = G__36063;
continue;
}
} else {
return null;
}
break;
}
});})(map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info))
,null,null));
});})(map__35917,map__35917__$1,sources,compiled,map__35915,map__35915__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35927_36064 = cljs.core.seq(warnings);
var chunk__35928_36065 = null;
var count__35929_36066 = (0);
var i__35930_36067 = (0);
while(true){
if((i__35930_36067 < count__35929_36066)){
var map__35937_36068 = chunk__35928_36065.cljs$core$IIndexed$_nth$arity$2(null,i__35930_36067);
var map__35937_36069__$1 = (((((!((map__35937_36068 == null))))?(((((map__35937_36068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35937_36068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35937_36068):map__35937_36068);
var w_36070 = map__35937_36069__$1;
var msg_36071__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937_36069__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937_36069__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937_36069__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35937_36069__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36074)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36072),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36073),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36071__$1)].join(''));


var G__36075 = seq__35927_36064;
var G__36076 = chunk__35928_36065;
var G__36077 = count__35929_36066;
var G__36078 = (i__35930_36067 + (1));
seq__35927_36064 = G__36075;
chunk__35928_36065 = G__36076;
count__35929_36066 = G__36077;
i__35930_36067 = G__36078;
continue;
} else {
var temp__5720__auto___36079 = cljs.core.seq(seq__35927_36064);
if(temp__5720__auto___36079){
var seq__35927_36080__$1 = temp__5720__auto___36079;
if(cljs.core.chunked_seq_QMARK_(seq__35927_36080__$1)){
var c__4550__auto___36081 = cljs.core.chunk_first(seq__35927_36080__$1);
var G__36082 = cljs.core.chunk_rest(seq__35927_36080__$1);
var G__36083 = c__4550__auto___36081;
var G__36084 = cljs.core.count(c__4550__auto___36081);
var G__36085 = (0);
seq__35927_36064 = G__36082;
chunk__35928_36065 = G__36083;
count__35929_36066 = G__36084;
i__35930_36067 = G__36085;
continue;
} else {
var map__35939_36086 = cljs.core.first(seq__35927_36080__$1);
var map__35939_36087__$1 = (((((!((map__35939_36086 == null))))?(((((map__35939_36086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35939_36086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35939_36086):map__35939_36086);
var w_36088 = map__35939_36087__$1;
var msg_36089__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36087__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36087__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36087__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36087__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36092)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36090),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36091),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36089__$1)].join(''));


var G__36093 = cljs.core.next(seq__35927_36080__$1);
var G__36094 = null;
var G__36095 = (0);
var G__36096 = (0);
seq__35927_36064 = G__36093;
chunk__35928_36065 = G__36094;
count__35929_36066 = G__36095;
i__35930_36067 = G__36096;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info){
return (function (p__35941){
var map__35942 = p__35941;
var map__35942__$1 = (((((!((map__35942 == null))))?(((((map__35942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35942):map__35942);
var src = map__35942__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35942__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35942__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info){
return (function (p__35944){
var map__35945 = p__35944;
var map__35945__$1 = (((((!((map__35945 == null))))?(((((map__35945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35945):map__35945);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info){
return (function (p__35947){
var map__35948 = p__35947;
var map__35948__$1 = (((((!((map__35948 == null))))?(((((map__35948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35948):map__35948);
var rc = map__35948__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info){
return (function (p1__35913_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35913_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35917,map__35917__$1,sources,compiled,warnings,map__35915,map__35915__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35950){
var map__35951 = p__35950;
var map__35951__$1 = (((((!((map__35951 == null))))?(((((map__35951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35951):map__35951);
var msg = map__35951__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35953 = cljs.core.seq(updates);
var chunk__35955 = null;
var count__35956 = (0);
var i__35957 = (0);
while(true){
if((i__35957 < count__35956)){
var path = chunk__35955.cljs$core$IIndexed$_nth$arity$2(null,i__35957);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35983_36097 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35986_36098 = null;
var count__35987_36099 = (0);
var i__35988_36100 = (0);
while(true){
if((i__35988_36100 < count__35987_36099)){
var node_36101 = chunk__35986_36098.cljs$core$IIndexed$_nth$arity$2(null,i__35988_36100);
var path_match_36102 = shadow.cljs.devtools.client.browser.match_paths(node_36101.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36102)){
var new_link_36103 = (function (){var G__35993 = node_36101.cloneNode(true);
G__35993.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36102),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35993;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36102], 0));

goog.dom.insertSiblingAfter(new_link_36103,node_36101);

goog.dom.removeNode(node_36101);


var G__36104 = seq__35983_36097;
var G__36105 = chunk__35986_36098;
var G__36106 = count__35987_36099;
var G__36107 = (i__35988_36100 + (1));
seq__35983_36097 = G__36104;
chunk__35986_36098 = G__36105;
count__35987_36099 = G__36106;
i__35988_36100 = G__36107;
continue;
} else {
var G__36108 = seq__35983_36097;
var G__36109 = chunk__35986_36098;
var G__36110 = count__35987_36099;
var G__36111 = (i__35988_36100 + (1));
seq__35983_36097 = G__36108;
chunk__35986_36098 = G__36109;
count__35987_36099 = G__36110;
i__35988_36100 = G__36111;
continue;
}
} else {
var temp__5720__auto___36112 = cljs.core.seq(seq__35983_36097);
if(temp__5720__auto___36112){
var seq__35983_36113__$1 = temp__5720__auto___36112;
if(cljs.core.chunked_seq_QMARK_(seq__35983_36113__$1)){
var c__4550__auto___36114 = cljs.core.chunk_first(seq__35983_36113__$1);
var G__36115 = cljs.core.chunk_rest(seq__35983_36113__$1);
var G__36116 = c__4550__auto___36114;
var G__36117 = cljs.core.count(c__4550__auto___36114);
var G__36118 = (0);
seq__35983_36097 = G__36115;
chunk__35986_36098 = G__36116;
count__35987_36099 = G__36117;
i__35988_36100 = G__36118;
continue;
} else {
var node_36119 = cljs.core.first(seq__35983_36113__$1);
var path_match_36120 = shadow.cljs.devtools.client.browser.match_paths(node_36119.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36120)){
var new_link_36121 = (function (){var G__35994 = node_36119.cloneNode(true);
G__35994.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36120),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35994;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36120], 0));

goog.dom.insertSiblingAfter(new_link_36121,node_36119);

goog.dom.removeNode(node_36119);


var G__36122 = cljs.core.next(seq__35983_36113__$1);
var G__36123 = null;
var G__36124 = (0);
var G__36125 = (0);
seq__35983_36097 = G__36122;
chunk__35986_36098 = G__36123;
count__35987_36099 = G__36124;
i__35988_36100 = G__36125;
continue;
} else {
var G__36126 = cljs.core.next(seq__35983_36113__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__35983_36097 = G__36126;
chunk__35986_36098 = G__36127;
count__35987_36099 = G__36128;
i__35988_36100 = G__36129;
continue;
}
}
} else {
}
}
break;
}


var G__36130 = seq__35953;
var G__36131 = chunk__35955;
var G__36132 = count__35956;
var G__36133 = (i__35957 + (1));
seq__35953 = G__36130;
chunk__35955 = G__36131;
count__35956 = G__36132;
i__35957 = G__36133;
continue;
} else {
var G__36134 = seq__35953;
var G__36135 = chunk__35955;
var G__36136 = count__35956;
var G__36137 = (i__35957 + (1));
seq__35953 = G__36134;
chunk__35955 = G__36135;
count__35956 = G__36136;
i__35957 = G__36137;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35953);
if(temp__5720__auto__){
var seq__35953__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35953__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35953__$1);
var G__36138 = cljs.core.chunk_rest(seq__35953__$1);
var G__36139 = c__4550__auto__;
var G__36140 = cljs.core.count(c__4550__auto__);
var G__36141 = (0);
seq__35953 = G__36138;
chunk__35955 = G__36139;
count__35956 = G__36140;
i__35957 = G__36141;
continue;
} else {
var path = cljs.core.first(seq__35953__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35995_36142 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35998_36143 = null;
var count__35999_36144 = (0);
var i__36000_36145 = (0);
while(true){
if((i__36000_36145 < count__35999_36144)){
var node_36146 = chunk__35998_36143.cljs$core$IIndexed$_nth$arity$2(null,i__36000_36145);
var path_match_36147 = shadow.cljs.devtools.client.browser.match_paths(node_36146.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36147)){
var new_link_36148 = (function (){var G__36005 = node_36146.cloneNode(true);
G__36005.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36147),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36005;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36147], 0));

goog.dom.insertSiblingAfter(new_link_36148,node_36146);

goog.dom.removeNode(node_36146);


var G__36149 = seq__35995_36142;
var G__36150 = chunk__35998_36143;
var G__36151 = count__35999_36144;
var G__36152 = (i__36000_36145 + (1));
seq__35995_36142 = G__36149;
chunk__35998_36143 = G__36150;
count__35999_36144 = G__36151;
i__36000_36145 = G__36152;
continue;
} else {
var G__36153 = seq__35995_36142;
var G__36154 = chunk__35998_36143;
var G__36155 = count__35999_36144;
var G__36156 = (i__36000_36145 + (1));
seq__35995_36142 = G__36153;
chunk__35998_36143 = G__36154;
count__35999_36144 = G__36155;
i__36000_36145 = G__36156;
continue;
}
} else {
var temp__5720__auto___36157__$1 = cljs.core.seq(seq__35995_36142);
if(temp__5720__auto___36157__$1){
var seq__35995_36158__$1 = temp__5720__auto___36157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35995_36158__$1)){
var c__4550__auto___36159 = cljs.core.chunk_first(seq__35995_36158__$1);
var G__36160 = cljs.core.chunk_rest(seq__35995_36158__$1);
var G__36161 = c__4550__auto___36159;
var G__36162 = cljs.core.count(c__4550__auto___36159);
var G__36163 = (0);
seq__35995_36142 = G__36160;
chunk__35998_36143 = G__36161;
count__35999_36144 = G__36162;
i__36000_36145 = G__36163;
continue;
} else {
var node_36164 = cljs.core.first(seq__35995_36158__$1);
var path_match_36165 = shadow.cljs.devtools.client.browser.match_paths(node_36164.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36165)){
var new_link_36166 = (function (){var G__36006 = node_36164.cloneNode(true);
G__36006.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36165),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36006;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36165], 0));

goog.dom.insertSiblingAfter(new_link_36166,node_36164);

goog.dom.removeNode(node_36164);


var G__36167 = cljs.core.next(seq__35995_36158__$1);
var G__36168 = null;
var G__36169 = (0);
var G__36170 = (0);
seq__35995_36142 = G__36167;
chunk__35998_36143 = G__36168;
count__35999_36144 = G__36169;
i__36000_36145 = G__36170;
continue;
} else {
var G__36171 = cljs.core.next(seq__35995_36158__$1);
var G__36172 = null;
var G__36173 = (0);
var G__36174 = (0);
seq__35995_36142 = G__36171;
chunk__35998_36143 = G__36172;
count__35999_36144 = G__36173;
i__36000_36145 = G__36174;
continue;
}
}
} else {
}
}
break;
}


var G__36175 = cljs.core.next(seq__35953__$1);
var G__36176 = null;
var G__36177 = (0);
var G__36178 = (0);
seq__35953 = G__36175;
chunk__35955 = G__36176;
count__35956 = G__36177;
i__35957 = G__36178;
continue;
} else {
var G__36179 = cljs.core.next(seq__35953__$1);
var G__36180 = null;
var G__36181 = (0);
var G__36182 = (0);
seq__35953 = G__36179;
chunk__35955 = G__36180;
count__35956 = G__36181;
i__35957 = G__36182;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36007){
var map__36008 = p__36007;
var map__36008__$1 = (((((!((map__36008 == null))))?(((((map__36008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36008):map__36008);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__36008,map__36008__$1,id,js){
return (function (){
return eval(js);
});})(map__36008,map__36008__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36010){
var map__36011 = p__36010;
var map__36011__$1 = (((((!((map__36011 == null))))?(((((map__36011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36011):map__36011);
var msg = map__36011__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36011,map__36011__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__36013){
var map__36014 = p__36013;
var map__36014__$1 = (((((!((map__36014 == null))))?(((((map__36014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36014):map__36014);
var src = map__36014__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36014__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__36011,map__36011__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__36011,map__36011__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__36011,map__36011__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36016){
var map__36017 = p__36016;
var map__36017__$1 = (((((!((map__36017 == null))))?(((((map__36017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36017):map__36017);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__36017,map__36017__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__36017,map__36017__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36019){
var map__36020 = p__36019;
var map__36020__$1 = (((((!((map__36020 == null))))?(((((map__36020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36020):map__36020);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36022){
var map__36023 = p__36022;
var map__36023__$1 = (((((!((map__36023 == null))))?(((((map__36023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36023):map__36023);
var msg = map__36023__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36023__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36025 = type;
var G__36025__$1 = (((G__36025 instanceof cljs.core.Keyword))?G__36025.fqn:null);
switch (G__36025__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36026 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__36027 = ((function (G__36026){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__36026))
;
var G__36028 = "POST";
var G__36029 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36030 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36026,G__36027,G__36028,G__36029,G__36030);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e36031){var e = e36031;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___36184 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___36184)){
var s_36185 = temp__5720__auto___36184;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_36185.onclose = ((function (s_36185,temp__5720__auto___36184){
return (function (e){
return null;
});})(s_36185,temp__5720__auto___36184))
;

s_36185.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
