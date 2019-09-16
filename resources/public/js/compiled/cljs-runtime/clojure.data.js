goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__31320){
var vec__31325 = p__31320;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31325,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__31339 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31339,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31339,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31339,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__31343 = arguments.length;
switch (G__31343) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__31358_31434 = clojure.data.equality_partition;
var G__31359_31435 = "null";
var G__31360_31436 = ((function (G__31358_31434,G__31359_31435){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31358_31434,G__31359_31435))
;
goog.object.set(G__31358_31434,G__31359_31435,G__31360_31436);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__31361_31439 = clojure.data.equality_partition;
var G__31362_31440 = "string";
var G__31363_31441 = ((function (G__31361_31439,G__31362_31440){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31361_31439,G__31362_31440))
;
goog.object.set(G__31361_31439,G__31362_31440,G__31363_31441);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__31368_31442 = clojure.data.equality_partition;
var G__31369_31443 = "number";
var G__31370_31444 = ((function (G__31368_31442,G__31369_31443){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31368_31442,G__31369_31443))
;
goog.object.set(G__31368_31442,G__31369_31443,G__31370_31444);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__31373_31445 = clojure.data.equality_partition;
var G__31374_31446 = "array";
var G__31375_31447 = ((function (G__31373_31445,G__31374_31446){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__31373_31445,G__31374_31446))
;
goog.object.set(G__31373_31445,G__31374_31446,G__31375_31447);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__31376_31448 = clojure.data.equality_partition;
var G__31377_31449 = "function";
var G__31378_31450 = ((function (G__31376_31448,G__31377_31449){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31376_31448,G__31377_31449))
;
goog.object.set(G__31376_31448,G__31377_31449,G__31378_31450);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__31379_31451 = clojure.data.equality_partition;
var G__31380_31452 = "boolean";
var G__31381_31453 = ((function (G__31379_31451,G__31380_31452){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__31379_31451,G__31380_31452))
;
goog.object.set(G__31379_31451,G__31380_31452,G__31381_31453);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__31382_31454 = clojure.data.equality_partition;
var G__31383_31455 = "_";
var G__31384_31456 = ((function (G__31382_31454,G__31383_31455){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__31382_31454,G__31383_31455))
;
goog.object.set(G__31382_31454,G__31383_31455,G__31384_31456);
goog.object.set(clojure.data.Diff,"null",true);

var G__31390_31459 = clojure.data.diff_similar;
var G__31391_31460 = "null";
var G__31392_31461 = ((function (G__31390_31459,G__31391_31460){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31390_31459,G__31391_31460))
;
goog.object.set(G__31390_31459,G__31391_31460,G__31392_31461);

goog.object.set(clojure.data.Diff,"string",true);

var G__31393_31465 = clojure.data.diff_similar;
var G__31394_31466 = "string";
var G__31395_31467 = ((function (G__31393_31465,G__31394_31466){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31393_31465,G__31394_31466))
;
goog.object.set(G__31393_31465,G__31394_31466,G__31395_31467);

goog.object.set(clojure.data.Diff,"number",true);

var G__31396_31468 = clojure.data.diff_similar;
var G__31397_31469 = "number";
var G__31398_31470 = ((function (G__31396_31468,G__31397_31469){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31396_31468,G__31397_31469))
;
goog.object.set(G__31396_31468,G__31397_31469,G__31398_31470);

goog.object.set(clojure.data.Diff,"array",true);

var G__31399_31472 = clojure.data.diff_similar;
var G__31400_31473 = "array";
var G__31401_31474 = ((function (G__31399_31472,G__31400_31473){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__31399_31472,G__31400_31473))
;
goog.object.set(G__31399_31472,G__31400_31473,G__31401_31474);

goog.object.set(clojure.data.Diff,"function",true);

var G__31402_31476 = clojure.data.diff_similar;
var G__31403_31477 = "function";
var G__31404_31478 = ((function (G__31402_31476,G__31403_31477){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31402_31476,G__31403_31477))
;
goog.object.set(G__31402_31476,G__31403_31477,G__31404_31478);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__31405_31481 = clojure.data.diff_similar;
var G__31406_31482 = "boolean";
var G__31407_31483 = ((function (G__31405_31481,G__31406_31482){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31405_31481,G__31406_31482))
;
goog.object.set(G__31405_31481,G__31406_31482,G__31407_31483);

goog.object.set(clojure.data.Diff,"_",true);

var G__31411_31486 = clojure.data.diff_similar;
var G__31412_31487 = "_";
var G__31413_31488 = ((function (G__31411_31486,G__31412_31487){
return (function (a,b){
var fexpr__31416 = (function (){var G__31417 = clojure.data.equality_partition(a);
var G__31417__$1 = (((G__31417 instanceof cljs.core.Keyword))?G__31417.fqn:null);
switch (G__31417__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31417__$1)].join('')));

}
})();
return (fexpr__31416.cljs$core$IFn$_invoke$arity$2 ? fexpr__31416.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__31416.call(null,a,b));
});})(G__31411_31486,G__31412_31487))
;
goog.object.set(G__31411_31486,G__31412_31487,G__31413_31488);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
