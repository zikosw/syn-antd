goog.provide('syn_antd.dev');
goog.require('cljs.core');
var module$node_modules$react_syntax_highlighter$dist$cjs$index=shadow.js.require("module$node_modules$react_syntax_highlighter$dist$cjs$index", {});
var module$node_modules$react_syntax_highlighter$dist$esm$styles$prism$index=shadow.js.require("module$node_modules$react_syntax_highlighter$dist$esm$styles$prism$index", {});
goog.require('re_frame.core');
goog.require('syn_antd.alert');
goog.require('syn_antd.card');
goog.require('syn_antd.col');
goog.require('syn_antd.divider');
goog.require('syn_antd.icon');
goog.require('syn_antd.row');
goog.require('syn_antd.tooltip');
goog.require('reagent.core');
syn_antd.dev.code_highlighting = reagent.core.adapt_react_class(module$node_modules$react_syntax_highlighter$dist$cjs$index.PrismAsync);
syn_antd.dev.code_block = (function syn_antd$dev$code_block(code){
if((!((code == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.code_highlighting,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"style","style",-496642736),module$node_modules$react_syntax_highlighter$dist$esm$styles$prism$index.base16AteliersulphurpoolLight], null),code], null);
} else {
return null;
}
});
syn_antd.dev.demo_element = (function syn_antd$dev$demo_element(title,source_code,body){
var with_let25968 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let25968","with-let25968",-1369117039));
var temp__5724__auto___25973 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___25973 == null)){
} else {
var c__24899__auto___25974 = temp__5724__auto___25973;
if((with_let25968.generation === c__24899__auto___25974.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let25968.generation = c__24899__auto___25974.ratomGeneration;
}


var init25969 = (with_let25968.length === (0));
var show_code_QMARK_ = ((init25969)?(with_let25968[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let25968[(0)]));
var res__24900__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.col.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),(12)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.card.card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.tooltip.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(cljs.core.deref(show_code_QMARK_))?"Hide source":"Show source")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"code",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init25969,show_code_QMARK_,with_let25968){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_code_QMARK_,cljs.core.not);
});})(init25969,show_code_QMARK_,with_let25968))
], null)], null)], null))], null)], null),body,(cljs.core.truth_(cljs.core.deref(show_code_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.code_block,source_code], null):null)], null)], null);

return res__24900__auto__;
});
syn_antd.dev.demo_page = (function syn_antd$dev$demo_page(p__25970){
var map__25971 = p__25970;
var map__25971__$1 = (((((!((map__25971 == null))))?(((((map__25971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25971):map__25971);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25971__$1,new cljs.core.Keyword(null,"title","title",636505583));
var alerts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25971__$1,new cljs.core.Keyword(null,"alerts","alerts",-2121664427));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25971__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var link_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25971__$1,new cljs.core.Keyword(null,"link-title","link-title",-691477229));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25971__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p>a","p>a",-1325888013),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),link_title], null),(((!((alerts == null))))?alerts:null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.divider.divider], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.row.row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutter","gutter",1047805662),(16)], null),elements], null)], null);
});

//# sourceMappingURL=syn_antd.dev.js.map
