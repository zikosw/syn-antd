goog.provide('syn_antd.reagent_utils');
goog.require('cljs.core');
goog.require('reagent.core');
syn_antd.reagent_utils.fixed_async_input = (function syn_antd$reagent_utils$fixed_async_input(original_component){
return (function syn_antd$reagent_utils$fixed_async_input_$_fixed_component(p__26140){
var map__26141 = p__26140;
var map__26141__$1 = (((((!((map__26141 == null))))?(((((map__26141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26141):map__26141);
var _props = map__26141__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,new cljs.core.Keyword(null,"value","value",305978217));
var local_value = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"AntdReagentInput",new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163),((function (local_value,map__26141,map__26141__$1,_props,value){
return (function (_,p__26143,p__26144){
var vec__26145 = p__26143;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26145,(0),null);
var old_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26145,(1),null);
var vec__26148 = p__26144;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26148,(0),null);
var new_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26148,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new_props),cljs.core.deref(local_value))){
cljs.core.reset_BANG_(local_value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new_props));

return true;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_props,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_props,new cljs.core.Keyword(null,"value","value",305978217)));
}
});})(local_value,map__26141,map__26141__$1,_props,value))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (local_value,map__26141,map__26141__$1,_props,value){
return (function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_component,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.core.props(this$),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(local_value)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (local_value,map__26141,map__26141__$1,_props,value){
return (function syn_antd$reagent_utils$fixed_async_input_$_fixed_component_$_wrap_on_change(original_on_change){
return ((function (local_value,map__26141,map__26141__$1,_props,value){
return (function syn_antd$reagent_utils$fixed_async_input_$_fixed_component_$_wrap_on_change_$_wrapped_on_change(e){
cljs.core.reset_BANG_(local_value,(function (){var temp__5718__auto__ = e.target;
if(cljs.core.truth_(temp__5718__auto__)){
var target = temp__5718__auto__;
return target.value;
} else {
return e;
}
})());

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1(this$);

if((!((original_on_change == null)))){
return (original_on_change.cljs$core$IFn$_invoke$arity$1 ? original_on_change.cljs$core$IFn$_invoke$arity$1(e) : original_on_change.call(null,e));
} else {
return null;
}
});
;})(local_value,map__26141,map__26141__$1,_props,value))
});})(local_value,map__26141,map__26141__$1,_props,value))
)], null);
});})(local_value,map__26141,map__26141__$1,_props,value))
], null));
});
});

//# sourceMappingURL=syn_antd.reagent_utils.js.map
