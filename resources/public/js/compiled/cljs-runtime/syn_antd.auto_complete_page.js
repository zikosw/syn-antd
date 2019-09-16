goog.provide('syn_antd.auto_complete_page');
goog.require('cljs.core');
goog.require('syn_antd.alert');
goog.require('syn_antd.button');
goog.require('syn_antd.auto_complete');
goog.require('syn_antd.dev');
goog.require('re_frame.core');
syn_antd.auto_complete_page.basic_auto_complete_element = (function syn_antd$auto_complete_page$basic_auto_complete_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete.auto_complete,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-search","on-search",-1282068148),(function (p1__26332_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__26332_SHARP_], 0));
})], null)], null);
});
syn_antd.auto_complete_page.basic_auto_complete = (function syn_antd$auto_complete_page$basic_auto_complete(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Uncontrolled auto-complete","(defn basic-auto-complete-element []\n  [auto-complete/auto-complete\n   {:on-search #(prn %)}])",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete_page.basic_auto_complete_element], null)], null);
});
syn_antd.auto_complete_page.controlled_rf_auto_complete_element = (function syn_antd$auto_complete_page$controlled_rf_auto_complete_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete.auto_complete,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__26336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.auto-complete-page","input1","syn-antd.auto-complete-page/input1",-804186889)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26336) : re_frame.core.subscribe.call(null,G__26336));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26334_SHARP_){
var G__26337 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.auto-complete-page","set-value","syn-antd.auto-complete-page/set-value",328233607),new cljs.core.Keyword("syn-antd.auto-complete-page","input1","syn-antd.auto-complete-page/input1",-804186889),p1__26334_SHARP_], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26337) : re_frame.core.dispatch_sync.call(null,G__26337));
}),new cljs.core.Keyword(null,"on-search","on-search",-1282068148),(function (p1__26335_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Search",p1__26335_SHARP_], 0));
})], null)], null);
});
syn_antd.auto_complete_page.controlled_rf_auto_complete = (function syn_antd$auto_complete_page$controlled_rf_auto_complete(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled auto-complete","(defn controlled-rf-auto-complete-element []\n  [auto-complete/auto-complete\n   {:value     @(re-frame/subscribe [::input1])\n    :on-change #(re-frame/dispatch-sync [::set-value ::input1 %])\n    :on-search #(prn \"Search\" %)}])",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete_page.controlled_rf_auto_complete_element], null)], null);
});
syn_antd.auto_complete_page.controlled_rf_auto_complete2_element = (function syn_antd$auto_complete_page$controlled_rf_auto_complete2_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete.auto_complete,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__26342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.auto-complete-page","input2","syn-antd.auto-complete-page/input2",-288985339)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26342) : re_frame.core.subscribe.call(null,G__26342));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26340_SHARP_){
var G__26343 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.auto-complete-page","set-value","syn-antd.auto-complete-page/set-value",328233607),new cljs.core.Keyword("syn-antd.auto-complete-page","input2","syn-antd.auto-complete-page/input2",-288985339),p1__26340_SHARP_], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26343) : re_frame.core.dispatch_sync.call(null,G__26343));
}),new cljs.core.Keyword(null,"on-search","on-search",-1282068148),(function (p1__26341_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Search",p1__26341_SHARP_], 0));
})], null)], null);
});
syn_antd.auto_complete_page.controlled_rf_auto_complete2 = (function syn_antd$auto_complete_page$controlled_rf_auto_complete2(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled auto-complete with default values","(defn controlled-rf-auto-complete2-element []\n  [auto-complete/auto-complete\n   {:value     @(re-frame/subscribe [::input2])\n    :on-change #(re-frame/dispatch-sync [::set-value ::input2 %])\n    :on-search #(prn \"Search\" %)}])",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__26346 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.auto-complete-page","set-value","syn-antd.auto-complete-page/set-value",328233607),new cljs.core.Keyword("syn-antd.auto-complete-page","input2","syn-antd.auto-complete-page/input2",-288985339),"Test"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26346) : re_frame.core.dispatch.call(null,G__26346));
})], null),"Set to 'Test'"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__26347 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.auto-complete-page","set-value","syn-antd.auto-complete-page/set-value",328233607),new cljs.core.Keyword("syn-antd.auto-complete-page","input2","syn-antd.auto-complete-page/input2",-288985339),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26347) : re_frame.core.dispatch.call(null,G__26347));
})], null),"Set to nil"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete_page.controlled_rf_auto_complete2_element], null)], null)], null);
});
syn_antd.auto_complete_page.test_auto_complete_page = (function syn_antd$auto_complete_page$test_auto_complete_page(){
return syn_antd.dev.demo_page(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"syn-antd.auto-complete",new cljs.core.Keyword(null,"link","link",-1769163468),"https://ant.design/components/auto-complete/",new cljs.core.Keyword(null,"link-title","link-title",-691477229),"antd Documentation - AutoComplete",new cljs.core.Keyword(null,"alerts","alerts",-2121664427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.alert.alert,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"info",new cljs.core.Keyword(null,"message","message",-406056002),"Note for re-frame use",new cljs.core.Keyword(null,"description","description",-1428560544),"Very fast typing, or slow rendering, can cause cursor jumping when managing input field state via re-frame. To avoid this, you have to synchronously trigger re-frame events, i.e. re-frame/dispatch-sync instead of re-frame/dispatch. See code below for examples"], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete_page.basic_auto_complete], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete_page.controlled_rf_auto_complete], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.auto_complete_page.controlled_rf_auto_complete2], null)], null)], null));
});
var G__26348_26356 = new cljs.core.Keyword("syn-antd.auto-complete-page","input1","syn-antd.auto-complete-page/input1",-804186889);
var G__26349_26357 = ((function (G__26348_26356){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.auto-complete-page","input1","syn-antd.auto-complete-page/input1",-804186889).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26348_26356))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26348_26356,G__26349_26357) : re_frame.core.reg_sub.call(null,G__26348_26356,G__26349_26357));
var G__26350_26359 = new cljs.core.Keyword("syn-antd.auto-complete-page","input2","syn-antd.auto-complete-page/input2",-288985339);
var G__26351_26360 = ((function (G__26350_26359){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.auto-complete-page","input2","syn-antd.auto-complete-page/input2",-288985339).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26350_26359))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26350_26359,G__26351_26360) : re_frame.core.reg_sub.call(null,G__26350_26359,G__26351_26360));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("syn-antd.auto-complete-page","init","syn-antd.auto-complete-page/init",-1929824405),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("syn-antd.auto-complete-page","input1","syn-antd.auto-complete-page/input1",-804186889),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("syn-antd.auto-complete-page","input2","syn-antd.auto-complete-page/input2",-288985339),"Test"], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("syn-antd.auto-complete-page","set-value","syn-antd.auto-complete-page/set-value",328233607),(function (db,p__26352){
var vec__26353 = p__26352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26353,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26353,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26353,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));

//# sourceMappingURL=syn_antd.auto_complete_page.js.map
