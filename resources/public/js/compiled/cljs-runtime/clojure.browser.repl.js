goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.userAgent.product');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.repl');

/** @define {string} */
goog.define("clojure.browser.repl.HOST","localhost");

/** @define {number} */
goog.define("clojure.browser.repl.PORT",(9000));
clojure.browser.repl._STAR_repl_STAR_ = null;
clojure.browser.repl.xpc_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.browser.repl.parent_connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
clojure.browser.repl.print_queue = [];
clojure.browser.repl.flush_print_queue_BANG_ = (function clojure$browser$repl$flush_print_queue_BANG_(conn){
var seq__26657_26684 = cljs.core.seq(clojure.browser.repl.print_queue);
var chunk__26658_26685 = null;
var count__26659_26686 = (0);
var i__26660_26687 = (0);
while(true){
if((i__26660_26687 < count__26659_26686)){
var str_26688 = chunk__26658_26685.cljs$core$IIndexed$_nth$arity$2(null,i__26660_26687);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"print","print",1299562414),(function (){var G__26664 = ({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_26688});
return goog.json.serialize(G__26664);
})());


var G__26689 = seq__26657_26684;
var G__26690 = chunk__26658_26685;
var G__26691 = count__26659_26686;
var G__26692 = (i__26660_26687 + (1));
seq__26657_26684 = G__26689;
chunk__26658_26685 = G__26690;
count__26659_26686 = G__26691;
i__26660_26687 = G__26692;
continue;
} else {
var temp__5720__auto___26693 = cljs.core.seq(seq__26657_26684);
if(temp__5720__auto___26693){
var seq__26657_26694__$1 = temp__5720__auto___26693;
if(cljs.core.chunked_seq_QMARK_(seq__26657_26694__$1)){
var c__4550__auto___26695 = cljs.core.chunk_first(seq__26657_26694__$1);
var G__26696 = cljs.core.chunk_rest(seq__26657_26694__$1);
var G__26697 = c__4550__auto___26695;
var G__26698 = cljs.core.count(c__4550__auto___26695);
var G__26699 = (0);
seq__26657_26684 = G__26696;
chunk__26658_26685 = G__26697;
count__26659_26686 = G__26698;
i__26660_26687 = G__26699;
continue;
} else {
var str_26700 = cljs.core.first(seq__26657_26694__$1);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"print","print",1299562414),(function (){var G__26665 = ({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_26700});
return goog.json.serialize(G__26665);
})());


var G__26701 = cljs.core.next(seq__26657_26694__$1);
var G__26702 = null;
var G__26703 = (0);
var G__26704 = (0);
seq__26657_26684 = G__26701;
chunk__26658_26685 = G__26702;
count__26659_26686 = G__26703;
i__26660_26687 = G__26704;
continue;
}
} else {
}
}
break;
}

return goog.array.clear(clojure.browser.repl.print_queue);
});
clojure.browser.repl.repl_print = (function clojure$browser$repl$repl_print(data){
clojure.browser.repl.print_queue.push(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));

if(cljs.core.truth_(cljs.core.deref(clojure.browser.repl.parent_connected_QMARK_))){
return clojure.browser.repl.flush_print_queue_BANG_(cljs.core.deref(clojure.browser.repl.xpc_connection));
} else {
return null;
}
});
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core.set_print_fn_BANG_(clojure.browser.repl.repl_print);
cljs.core.set_print_err_fn_BANG_(clojure.browser.repl.repl_print);
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
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
/**
 * Process a single block of JavaScript received from the server
 */
clojure.browser.repl.evaluate_javascript = (function clojure$browser$repl$evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(block))], null);
}catch (e26666){var e = e26666;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.repl.error__GT_str(e)], null);
}})();
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 *   up to 10 times.
 */
clojure.browser.repl.send_print = (function clojure$browser$repl$send_print(var_args){
var G__26668 = arguments.length;
switch (G__26668) {
case 2:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2 = (function (url,data){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(0));
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn){
return (function (_){
if((n < (10))){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(n + (1)));
} else {
return console.log(["Could not send ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," attempts."].join(''));
}
});})(conn))
);

return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(conn,url,"POST",data,null,(0));
});

clojure.browser.repl.send_print.cljs$lang$maxFixedArity = 3;

clojure.browser.repl.order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(repl,t,data){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"repl","repl",-35398667),repl,new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"content","content",15833224),data,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.order,cljs.core.inc)], null)], 0));
});
/**
 * Start the REPL server connection.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__5718__auto__ = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5718__auto__)){
var repl_connection = temp__5718__auto__;
var connection = clojure.browser.net.xhr_connection();
var repl_connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var try_handshake = ((function (connection,repl_connected_QMARK_,repl_connection,temp__5718__auto__){
return (function clojure$browser$repl$start_evaluator_$_try_handshake(){
if(cljs.core.truth_(cljs.core.deref(repl_connected_QMARK_))){
return null;
} else {
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"start-handshake","start-handshake",359692894),null);

return setTimeout(clojure$browser$repl$start_evaluator_$_try_handshake,(10));
}
});})(connection,repl_connected_QMARK_,repl_connection,temp__5718__auto__))
;
clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,try_handshake);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"ack-handshake","ack-handshake",1651340387),((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__){
return (function (_){
if(cljs.core.truth_(cljs.core.deref(repl_connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(repl_connected_QMARK_,true);

return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(null,new cljs.core.Keyword(null,"ready","ready",1086465795),"ready"));
}
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,new cljs.core.Keyword(null,"success","success",1890645906),((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__){
return (function (e){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),e.currentTarget.getResponseText(cljs.core.List.EMPTY));
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__){
return (function (json){
var obj = goog.json.parse(json);
var repl = goog.object.get(obj,"repl");
var result = goog.object.get(obj,"result");
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(repl,new cljs.core.Keyword(null,"result","result",1415092211),result));
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__))
);

return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"print","print",1299562414),((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__){
return (function (json){
var obj = goog.json.parse(json);
var repl = goog.object.get(obj,"repl");
var str = goog.object.get(obj,"str");
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2(url,clojure.browser.repl.wrap_message(repl,new cljs.core.Keyword(null,"print","print",1299562414),str));
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5718__auto__))
);
} else {
return alert("No 'xpc' param provided to child iframe.");
}
});
clojure.browser.repl.load_queue = null;
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
clojure.browser.repl.bootstrap = (function clojure$browser$repl$bootstrap(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require__ = goog.require;

goog.isProvided_ = (function (name){
return false;
});

goog.constructNamespace_("cljs.user");

goog.writeScriptTag__ = (function (src,opt_sourceText){
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var onload = ((function (loaded){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = clojure.browser.repl.load_queue;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref(loaded) === false;
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.not);

if((clojure.browser.repl.load_queue.length === (0))){
return clojure.browser.repl.load_queue = null;
} else {
return goog.writeScriptTag__.apply(null,clojure.browser.repl.load_queue.shift());
}
} else {
return null;
}
});})(loaded))
;
return document.body.appendChild((function (){var script = document.createElement("script");
var script__$1 = (function (){var G__26671 = script;
goog.object.set(G__26671,"type","text/javascript");

goog.object.set(G__26671,"onload",onload);

goog.object.set(G__26671,"onreadystatechange",onload);

return G__26671;
})();
if((opt_sourceText == null)){
var G__26672 = script__$1;
goog.object.set(G__26672,"src",src);

return G__26672;
} else {
var G__26673 = script__$1;
goog.dom.setTextContext(G__26673,opt_sourceText);

return G__26673;
}
})());
});

goog.writeScriptTag_ = (function (src,opt_sourceText){
if(cljs.core.truth_(clojure.browser.repl.load_queue)){
return clojure.browser.repl.load_queue.push([src,opt_sourceText]);
} else {
clojure.browser.repl.load_queue = [];

return goog.writeScriptTag__(src,opt_sourceText);
}
});

if(cljs.core.truth_(goog.debugLoader_)){
CLOSURE_IMPORT_SCRIPT = goog.writeScriptTag_;
} else {
}

return goog.require = (function (src,reload){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

var reload_QMARK_ = (function (){var or__4131__auto__ = reload;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.cljsReloadAll__;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
if((!((goog.debugLoader_ == null)))){
var path_26707 = goog.debugLoader_.getPathFromDeps_(cljs.core.name);
var G__26674_26708 = goog.debugLoader_.written_;
var G__26675_26709 = path_26707;
goog.object.remove(G__26674_26708,G__26675_26709);

var G__26676_26710 = goog.debugLoader_.written_;
var G__26677_26711 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_26707)].join('');
goog.object.remove(G__26676_26710,G__26677_26711);
} else {
var path_26712 = goog.object.get(goog.dependencies_.nameToPath,src);
goog.object.remove(goog.dependencies_.visited,path_26712);

goog.object.remove(goog.dependencies_.written,path_26712);

var G__26678_26713 = goog.dependencies_.written;
var G__26679_26714 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_26712)].join('');
goog.object.remove(G__26678_26713,G__26679_26714);
}
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return ret;
});
}
});
/**
 * Connects to a REPL server from an HTML document. After the
 *   connection is made, the REPL will evaluate forms in the context of
 *   the document that called this function.
 */
clojure.browser.repl.connect = (function clojure$browser$repl$connect(repl_server_url){
var connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var repl_connection = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"peer_uri","peer_uri",910305997),repl_server_url], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.xpc_connection,cljs.core.constantly(repl_connection));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"start-handshake","start-handshake",359692894),((function (connected_QMARK_,repl_connection){
return (function (_){
if(cljs.core.truth_(cljs.core.deref(connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(connected_QMARK_,true);

cljs.core.reset_BANG_(clojure.browser.repl.parent_connected_QMARK_,true);

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"ack-handshake","ack-handshake",1651340387),null);

return clojure.browser.repl.flush_print_queue_BANG_(repl_connection);
}
});})(connected_QMARK_,repl_connection))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),((function (connected_QMARK_,repl_connection){
return (function (json){
var obj = goog.json.parse(json);
var repl = goog.object.get(obj,"repl");
var form = goog.object.get(obj,"form");
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),(function (){var G__26681 = ({"repl": repl, "result": (function (){var _STAR_repl_STAR__orig_val__26682 = clojure.browser.repl._STAR_repl_STAR_;
var _STAR_repl_STAR__temp_val__26683 = repl;
clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__temp_val__26683;

try{return clojure.browser.repl.evaluate_javascript(repl_connection,form);
}finally {clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__orig_val__26682;
}})()});
return goog.json.serialize(G__26681);
})());
});})(connected_QMARK_,repl_connection))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constantly(null),((function (connected_QMARK_,repl_connection){
return (function (iframe){
return iframe.style.display = "none";
});})(connected_QMARK_,repl_connection))
);

clojure.browser.repl.bootstrap();

return repl_connection;
});

//# sourceMappingURL=clojure.browser.repl.js.map
