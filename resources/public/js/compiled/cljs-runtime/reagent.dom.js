goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__25336 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25337 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25337;

try{var G__25338 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__25339 = container;
var G__25340 = ((function (G__25338,G__25339,_STAR_always_update_STAR__orig_val__25336,_STAR_always_update_STAR__temp_val__25337){
return (function (){
var _STAR_always_update_STAR__orig_val__25341 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25342 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25342;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25341;
}});})(G__25338,G__25339,_STAR_always_update_STAR__orig_val__25336,_STAR_always_update_STAR__temp_val__25337))
;
return module$node_modules$react_dom$index.render(G__25338,G__25339,G__25340);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25336;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__25344 = arguments.length;
switch (G__25344) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__25346_25361 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__25347_25362 = null;
var count__25348_25363 = (0);
var i__25349_25364 = (0);
while(true){
if((i__25349_25364 < count__25348_25363)){
var v_25365 = chunk__25347_25362.cljs$core$IIndexed$_nth$arity$2(null,i__25349_25364);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_25365);


var G__25366 = seq__25346_25361;
var G__25367 = chunk__25347_25362;
var G__25368 = count__25348_25363;
var G__25369 = (i__25349_25364 + (1));
seq__25346_25361 = G__25366;
chunk__25347_25362 = G__25367;
count__25348_25363 = G__25368;
i__25349_25364 = G__25369;
continue;
} else {
var temp__5720__auto___25370 = cljs.core.seq(seq__25346_25361);
if(temp__5720__auto___25370){
var seq__25346_25371__$1 = temp__5720__auto___25370;
if(cljs.core.chunked_seq_QMARK_(seq__25346_25371__$1)){
var c__4550__auto___25372 = cljs.core.chunk_first(seq__25346_25371__$1);
var G__25373 = cljs.core.chunk_rest(seq__25346_25371__$1);
var G__25374 = c__4550__auto___25372;
var G__25375 = cljs.core.count(c__4550__auto___25372);
var G__25376 = (0);
seq__25346_25361 = G__25373;
chunk__25347_25362 = G__25374;
count__25348_25363 = G__25375;
i__25349_25364 = G__25376;
continue;
} else {
var v_25377 = cljs.core.first(seq__25346_25371__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_25377);


var G__25378 = cljs.core.next(seq__25346_25371__$1);
var G__25379 = null;
var G__25380 = (0);
var G__25381 = (0);
seq__25346_25361 = G__25378;
chunk__25347_25362 = G__25379;
count__25348_25363 = G__25380;
i__25349_25364 = G__25381;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
