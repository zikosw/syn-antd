goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28533){
var map__28537 = p__28533;
var map__28537__$1 = (((((!((map__28537 == null))))?(((((map__28537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28537):map__28537);
var m = map__28537__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28539_28708 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28540_28709 = null;
var count__28541_28710 = (0);
var i__28542_28711 = (0);
while(true){
if((i__28542_28711 < count__28541_28710)){
var f_28712 = chunk__28540_28709.cljs$core$IIndexed$_nth$arity$2(null,i__28542_28711);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28712], 0));


var G__28713 = seq__28539_28708;
var G__28714 = chunk__28540_28709;
var G__28715 = count__28541_28710;
var G__28716 = (i__28542_28711 + (1));
seq__28539_28708 = G__28713;
chunk__28540_28709 = G__28714;
count__28541_28710 = G__28715;
i__28542_28711 = G__28716;
continue;
} else {
var temp__5720__auto___28717 = cljs.core.seq(seq__28539_28708);
if(temp__5720__auto___28717){
var seq__28539_28718__$1 = temp__5720__auto___28717;
if(cljs.core.chunked_seq_QMARK_(seq__28539_28718__$1)){
var c__4550__auto___28719 = cljs.core.chunk_first(seq__28539_28718__$1);
var G__28720 = cljs.core.chunk_rest(seq__28539_28718__$1);
var G__28721 = c__4550__auto___28719;
var G__28722 = cljs.core.count(c__4550__auto___28719);
var G__28723 = (0);
seq__28539_28708 = G__28720;
chunk__28540_28709 = G__28721;
count__28541_28710 = G__28722;
i__28542_28711 = G__28723;
continue;
} else {
var f_28724 = cljs.core.first(seq__28539_28718__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28724], 0));


var G__28725 = cljs.core.next(seq__28539_28718__$1);
var G__28726 = null;
var G__28727 = (0);
var G__28728 = (0);
seq__28539_28708 = G__28725;
chunk__28540_28709 = G__28726;
count__28541_28710 = G__28727;
i__28542_28711 = G__28728;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28729 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28729], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28729)))?cljs.core.second(arglists_28729):arglists_28729)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28546_28737 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28547_28738 = null;
var count__28548_28739 = (0);
var i__28549_28740 = (0);
while(true){
if((i__28549_28740 < count__28548_28739)){
var vec__28563_28741 = chunk__28547_28738.cljs$core$IIndexed$_nth$arity$2(null,i__28549_28740);
var name_28742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28563_28741,(0),null);
var map__28566_28743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28563_28741,(1),null);
var map__28566_28744__$1 = (((((!((map__28566_28743 == null))))?(((((map__28566_28743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28566_28743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28566_28743):map__28566_28743);
var doc_28745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28566_28744__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28566_28744__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28742], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28746], 0));

if(cljs.core.truth_(doc_28745)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28745], 0));
} else {
}


var G__28751 = seq__28546_28737;
var G__28752 = chunk__28547_28738;
var G__28753 = count__28548_28739;
var G__28754 = (i__28549_28740 + (1));
seq__28546_28737 = G__28751;
chunk__28547_28738 = G__28752;
count__28548_28739 = G__28753;
i__28549_28740 = G__28754;
continue;
} else {
var temp__5720__auto___28755 = cljs.core.seq(seq__28546_28737);
if(temp__5720__auto___28755){
var seq__28546_28756__$1 = temp__5720__auto___28755;
if(cljs.core.chunked_seq_QMARK_(seq__28546_28756__$1)){
var c__4550__auto___28757 = cljs.core.chunk_first(seq__28546_28756__$1);
var G__28758 = cljs.core.chunk_rest(seq__28546_28756__$1);
var G__28759 = c__4550__auto___28757;
var G__28760 = cljs.core.count(c__4550__auto___28757);
var G__28761 = (0);
seq__28546_28737 = G__28758;
chunk__28547_28738 = G__28759;
count__28548_28739 = G__28760;
i__28549_28740 = G__28761;
continue;
} else {
var vec__28571_28762 = cljs.core.first(seq__28546_28756__$1);
var name_28763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571_28762,(0),null);
var map__28574_28764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571_28762,(1),null);
var map__28574_28765__$1 = (((((!((map__28574_28764 == null))))?(((((map__28574_28764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28574_28764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28574_28764):map__28574_28764);
var doc_28766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574_28765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28574_28765__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28763], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28767], 0));

if(cljs.core.truth_(doc_28766)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28766], 0));
} else {
}


var G__28774 = cljs.core.next(seq__28546_28756__$1);
var G__28775 = null;
var G__28776 = (0);
var G__28777 = (0);
seq__28546_28737 = G__28774;
chunk__28547_28738 = G__28775;
count__28548_28739 = G__28776;
i__28549_28740 = G__28777;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__28576 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28577 = null;
var count__28578 = (0);
var i__28579 = (0);
while(true){
if((i__28579 < count__28578)){
var role = chunk__28577.cljs$core$IIndexed$_nth$arity$2(null,i__28579);
var temp__5720__auto___28780__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28780__$1)){
var spec_28781 = temp__5720__auto___28780__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28781)], 0));
} else {
}


var G__28782 = seq__28576;
var G__28783 = chunk__28577;
var G__28784 = count__28578;
var G__28785 = (i__28579 + (1));
seq__28576 = G__28782;
chunk__28577 = G__28783;
count__28578 = G__28784;
i__28579 = G__28785;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__28576);
if(temp__5720__auto____$1){
var seq__28576__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28576__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28576__$1);
var G__28788 = cljs.core.chunk_rest(seq__28576__$1);
var G__28789 = c__4550__auto__;
var G__28790 = cljs.core.count(c__4550__auto__);
var G__28791 = (0);
seq__28576 = G__28788;
chunk__28577 = G__28789;
count__28578 = G__28790;
i__28579 = G__28791;
continue;
} else {
var role = cljs.core.first(seq__28576__$1);
var temp__5720__auto___28793__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28793__$2)){
var spec_28794 = temp__5720__auto___28793__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28794)], 0));
} else {
}


var G__28796 = cljs.core.next(seq__28576__$1);
var G__28797 = null;
var G__28798 = (0);
var G__28799 = (0);
seq__28576 = G__28796;
chunk__28577 = G__28797;
count__28578 = G__28798;
i__28579 = G__28799;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__28810 = cljs.core.ex_cause(t);
via = G__28809;
t = G__28810;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28597 = datafied_throwable;
var map__28597__$1 = (((((!((map__28597 == null))))?(((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28597):map__28597);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28597__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28597__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28597__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28598 = cljs.core.last(via);
var map__28598__$1 = (((((!((map__28598 == null))))?(((((map__28598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28598):map__28598);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28598__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28598__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28598__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28599 = data;
var map__28599__$1 = (((((!((map__28599 == null))))?(((((map__28599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28599):map__28599);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28599__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28599__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28599__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28600 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__28600__$1 = (((((!((map__28600 == null))))?(((((map__28600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28600):map__28600);
var top_data = map__28600__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__28608 = phase;
var G__28608__$1 = (((G__28608 instanceof cljs.core.Keyword))?G__28608.fqn:null);
switch (G__28608__$1) {
case "read-source":
var map__28609 = data;
var map__28609__$1 = (((((!((map__28609 == null))))?(((((map__28609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28609):map__28609);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28609__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28609__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28611 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__28611__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28611,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28611);
var G__28611__$2 = (cljs.core.truth_((function (){var fexpr__28614 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28614.cljs$core$IFn$_invoke$arity$1 ? fexpr__28614.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28614.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28611__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28611__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28611__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28611__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28616 = top_data;
var G__28616__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28616,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28616);
var G__28616__$2 = (cljs.core.truth_((function (){var fexpr__28618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28618.cljs$core$IFn$_invoke$arity$1 ? fexpr__28618.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28618.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28616__$1);
var G__28616__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28616__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28616__$2);
var G__28616__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28616__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28616__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28616__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28616__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28622 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622,(3),null);
var G__28625 = top_data;
var G__28625__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28625);
var G__28625__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28625__$1);
var G__28625__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28625__$2);
var G__28625__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28625__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28625__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28625__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28625__$4;
}

break;
case "execution":
var vec__28626 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28626,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28626,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28626,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28626,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__28626,source__$1,method,file,line,G__28608,G__28608__$1,map__28597,map__28597__$1,via,trace,phase,map__28598,map__28598__$1,type,message,data,map__28599,map__28599__$1,problems,fn,caller,map__28600,map__28600__$1,top_data,source){
return (function (p1__28593_SHARP_){
var or__4131__auto__ = (p1__28593_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__28633 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28633.cljs$core$IFn$_invoke$arity$1 ? fexpr__28633.cljs$core$IFn$_invoke$arity$1(p1__28593_SHARP_) : fexpr__28633.call(null,p1__28593_SHARP_));
}
});})(vec__28626,source__$1,method,file,line,G__28608,G__28608__$1,map__28597,map__28597__$1,via,trace,phase,map__28598,map__28598__$1,type,message,data,map__28599,map__28599__$1,problems,fn,caller,map__28600,map__28600__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28635 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28635__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28635,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28635);
var G__28635__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28635__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28635__$1);
var G__28635__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28635__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28635__$2);
var G__28635__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28635__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28635__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28635__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28635__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28608__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28638){
var map__28639 = p__28638;
var map__28639__$1 = (((((!((map__28639 == null))))?(((((map__28639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28639):map__28639);
var triage_data = map__28639__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28639__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28644 = phase;
var G__28644__$1 = (((G__28644 instanceof cljs.core.Keyword))?G__28644.fqn:null);
switch (G__28644__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__28645 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__28646 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28647 = loc;
var G__28648 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28649_28873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28650_28874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28651_28875 = true;
var _STAR_print_fn_STAR__temp_val__28652_28876 = ((function (_STAR_print_newline_STAR__orig_val__28649_28873,_STAR_print_fn_STAR__orig_val__28650_28874,_STAR_print_newline_STAR__temp_val__28651_28875,sb__4661__auto__,G__28645,G__28646,G__28647,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28649_28873,_STAR_print_fn_STAR__orig_val__28650_28874,_STAR_print_newline_STAR__temp_val__28651_28875,sb__4661__auto__,G__28645,G__28646,G__28647,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28651_28875;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28652_28876;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28649_28873,_STAR_print_fn_STAR__orig_val__28650_28874,_STAR_print_newline_STAR__temp_val__28651_28875,_STAR_print_fn_STAR__temp_val__28652_28876,sb__4661__auto__,G__28645,G__28646,G__28647,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28649_28873,_STAR_print_fn_STAR__orig_val__28650_28874,_STAR_print_newline_STAR__temp_val__28651_28875,_STAR_print_fn_STAR__temp_val__28652_28876,sb__4661__auto__,G__28645,G__28646,G__28647,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28636_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28636_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28649_28873,_STAR_print_fn_STAR__orig_val__28650_28874,_STAR_print_newline_STAR__temp_val__28651_28875,_STAR_print_fn_STAR__temp_val__28652_28876,sb__4661__auto__,G__28645,G__28646,G__28647,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28649_28873,_STAR_print_fn_STAR__orig_val__28650_28874,_STAR_print_newline_STAR__temp_val__28651_28875,_STAR_print_fn_STAR__temp_val__28652_28876,sb__4661__auto__,G__28645,G__28646,G__28647,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28650_28874;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28649_28873;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28645,G__28646,G__28647,G__28648) : format.call(null,G__28645,G__28646,G__28647,G__28648));

break;
case "macroexpansion":
var G__28661 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__28662 = cause_type;
var G__28663 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28664 = loc;
var G__28665 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28661,G__28662,G__28663,G__28664,G__28665) : format.call(null,G__28661,G__28662,G__28663,G__28664,G__28665));

break;
case "compile-syntax-check":
var G__28668 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__28669 = cause_type;
var G__28670 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28671 = loc;
var G__28672 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28668,G__28669,G__28670,G__28671,G__28672) : format.call(null,G__28668,G__28669,G__28670,G__28671,G__28672));

break;
case "compilation":
var G__28673 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__28674 = cause_type;
var G__28675 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28676 = loc;
var G__28677 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28673,G__28674,G__28675,G__28676,G__28677) : format.call(null,G__28673,G__28674,G__28675,G__28676,G__28677));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28678 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28679 = symbol;
var G__28680 = loc;
var G__28681 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28688_28891 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28689_28892 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28690_28893 = true;
var _STAR_print_fn_STAR__temp_val__28691_28894 = ((function (_STAR_print_newline_STAR__orig_val__28688_28891,_STAR_print_fn_STAR__orig_val__28689_28892,_STAR_print_newline_STAR__temp_val__28690_28893,sb__4661__auto__,G__28678,G__28679,G__28680,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28688_28891,_STAR_print_fn_STAR__orig_val__28689_28892,_STAR_print_newline_STAR__temp_val__28690_28893,sb__4661__auto__,G__28678,G__28679,G__28680,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28690_28893;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28691_28894;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28688_28891,_STAR_print_fn_STAR__orig_val__28689_28892,_STAR_print_newline_STAR__temp_val__28690_28893,_STAR_print_fn_STAR__temp_val__28691_28894,sb__4661__auto__,G__28678,G__28679,G__28680,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28688_28891,_STAR_print_fn_STAR__orig_val__28689_28892,_STAR_print_newline_STAR__temp_val__28690_28893,_STAR_print_fn_STAR__temp_val__28691_28894,sb__4661__auto__,G__28678,G__28679,G__28680,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28637_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28637_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28688_28891,_STAR_print_fn_STAR__orig_val__28689_28892,_STAR_print_newline_STAR__temp_val__28690_28893,_STAR_print_fn_STAR__temp_val__28691_28894,sb__4661__auto__,G__28678,G__28679,G__28680,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28688_28891,_STAR_print_fn_STAR__orig_val__28689_28892,_STAR_print_newline_STAR__temp_val__28690_28893,_STAR_print_fn_STAR__temp_val__28691_28894,sb__4661__auto__,G__28678,G__28679,G__28680,G__28644,G__28644__$1,loc,class_name,simple_class,cause_type,format,map__28639,map__28639__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28689_28892;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28688_28891;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28678,G__28679,G__28680,G__28681) : format.call(null,G__28678,G__28679,G__28680,G__28681));
} else {
var G__28696 = "Execution error%s at %s(%s).\n%s\n";
var G__28697 = cause_type;
var G__28698 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28699 = loc;
var G__28700 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28696,G__28697,G__28698,G__28699,G__28700) : format.call(null,G__28696,G__28697,G__28698,G__28699,G__28700));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28644__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
