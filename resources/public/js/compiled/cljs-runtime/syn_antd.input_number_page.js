goog.provide('syn_antd.input_number_page');
goog.require('cljs.core');
goog.require('syn_antd.button');
goog.require('syn_antd.input_number');
goog.require('syn_antd.dev');
goog.require('re_frame.core');
syn_antd.input_number_page.controlled_rf_input_number_element = (function syn_antd$input_number_page$controlled_rf_input_number_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_number.input_number,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__25976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25976) : re_frame.core.subscribe.call(null,G__25976));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25975_SHARP_){
var G__25977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","set-value","syn-antd.input-number-page/set-value",1504187060),new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868),p1__25975_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25977) : re_frame.core.dispatch.call(null,G__25977));
})], null)], null);
});
syn_antd.input_number_page.controlled_rf_input_number_input = (function syn_antd$input_number_page$controlled_rf_input_number_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled input-number (re-frame)","(defn controlled-rf-input-number-element []\n  [input-number/input-number\n   {:value     @(re-frame/subscribe [::input1])\n    :on-change #(re-frame/dispatch [::set-value ::input1 %])}])",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25980 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","set-value","syn-antd.input-number-page/set-value",1504187060),new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868),(999)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25980) : re_frame.core.dispatch.call(null,G__25980));
})], null),"Set to 999"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25981 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","set-value","syn-antd.input-number-page/set-value",1504187060),new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25981) : re_frame.core.dispatch.call(null,G__25981));
})], null),"Set to nil"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_number_page.controlled_rf_input_number_element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value: ",cljs.core.deref((function (){var G__25982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25982) : re_frame.core.subscribe.call(null,G__25982));
})())], null)], null)], null);
});
syn_antd.input_number_page.controlled_rf_input_number2_element = (function syn_antd$input_number_page$controlled_rf_input_number2_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_number.input_number,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__25985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25985) : re_frame.core.subscribe.call(null,G__25985));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25983_SHARP_){
var G__25989 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","set-value","syn-antd.input-number-page/set-value",1504187060),new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480),p1__25983_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25989) : re_frame.core.dispatch.call(null,G__25989));
})], null)], null);
});
syn_antd.input_number_page.controlled_rf_input_number2_input = (function syn_antd$input_number_page$controlled_rf_input_number2_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled input-number with initial value (re-frame)","(defn controlled-rf-input-number2-element []\n  [input-number/input-number\n   {:value     @(re-frame/subscribe [::input2])\n    :on-change #(re-frame/dispatch [::set-value ::input2 %])}])",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25996 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","set-value","syn-antd.input-number-page/set-value",1504187060),new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480),(999)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25996) : re_frame.core.dispatch.call(null,G__25996));
})], null),"Set to 999"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25997 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","set-value","syn-antd.input-number-page/set-value",1504187060),new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25997) : re_frame.core.dispatch.call(null,G__25997));
})], null),"Set to nil"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_number_page.controlled_rf_input_number2_element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value: ",cljs.core.deref((function (){var G__25999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25999) : re_frame.core.subscribe.call(null,G__25999));
})())], null)], null)], null);
});
syn_antd.input_number_page.test_input_page = (function syn_antd$input_number_page$test_input_page(){
return syn_antd.dev.demo_page(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"syn-antd.input-number",new cljs.core.Keyword(null,"link","link",-1769163468),"https://ant.design/components/input-number/",new cljs.core.Keyword(null,"link-title","link-title",-691477229),"antd Documentation - InputNumber",new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_number_page.controlled_rf_input_number_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_number_page.controlled_rf_input_number2_input], null)], null)], null));
});
var G__26004_26034 = new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868);
var G__26005_26035 = ((function (G__26004_26034){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26004_26034))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26004_26034,G__26005_26035) : re_frame.core.reg_sub.call(null,G__26004_26034,G__26005_26035));
var G__26008_26037 = new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480);
var G__26009_26038 = ((function (G__26008_26037){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26008_26037))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26008_26037,G__26009_26038) : re_frame.core.reg_sub.call(null,G__26008_26037,G__26009_26038));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("syn-antd.input-number-page","init","syn-antd.input-number-page/init",-955279558),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("syn-antd.input-number-page","input1","syn-antd.input-number-page/input1",-1913151868),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("syn-antd.input-number-page","input2","syn-antd.input-number-page/input2",885919480),(42)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("syn-antd.input-number-page","set-value","syn-antd.input-number-page/set-value",1504187060),(function (db,p__26015){
var vec__26021 = p__26015;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26021,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26021,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26021,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));

//# sourceMappingURL=syn_antd.input_number_page.js.map
