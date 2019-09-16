goog.provide('syn_antd.input_page');
goog.require('cljs.core');
goog.require('syn_antd.alert');
goog.require('syn_antd.button');
goog.require('syn_antd.input');
goog.require('syn_antd.dev');
goog.require('re_frame.core');
syn_antd.input_page.event_value = (function syn_antd$input_page$event_value(e){
return e.target.value;
});
syn_antd.input_page.basic_input_element = (function syn_antd$input_page$basic_input_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25986_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([syn_antd.input_page.event_value(p1__25986_SHARP_)], 0));
})], null)], null);
});
syn_antd.input_page.basic_input = (function syn_antd$input_page$basic_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Uncontrolled input","(defn basic-input-element []\n  [input/input\n   {:on-change #(prn (event-value %))}])",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.basic_input_element], null)], null);
});
syn_antd.input_page.rf_controls = (function syn_antd$input_page$rf_controls(k){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25998 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),k,"Test"], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__25998) : re_frame.core.dispatch_sync.call(null,G__25998));
})], null),"Reset input to 'Test'"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.button.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__26000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),k,null], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26000) : re_frame.core.dispatch_sync.call(null,G__26000));
})], null),"Reset input to nil"], null)], null);
});
syn_antd.input_page.controlled_rf_input_element = (function syn_antd$input_page$controlled_rf_input_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__26002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input1","syn-antd.input-page/input1",1634663690)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26002) : re_frame.core.subscribe.call(null,G__26002));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26001_SHARP_){
var G__26003 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),new cljs.core.Keyword("syn-antd.input-page","input1","syn-antd.input-page/input1",1634663690),syn_antd.input_page.event_value(p1__26001_SHARP_)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26003) : re_frame.core.dispatch_sync.call(null,G__26003));
})], null)], null);
});
syn_antd.input_page.controlled_rf_input = (function syn_antd$input_page$controlled_rf_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled input (re-frame)","(defn controlled-rf-input-element []\n  [input/input\n   {:value     @(re-frame/subscribe [::input1])\n    :on-change #(re-frame/dispatch-sync [::set-value ::input1 (event-value %)])}])",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.rf_controls,new cljs.core.Keyword("syn-antd.input-page","input1","syn-antd.input-page/input1",1634663690)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_input_element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value: ",cljs.core.deref((function (){var G__26013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input1","syn-antd.input-page/input1",1634663690)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26013) : re_frame.core.subscribe.call(null,G__26013));
})())], null)], null)], null);
});
syn_antd.input_page.controlled_rf_input2_element = (function syn_antd$input_page$controlled_rf_input2_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__26020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input2","syn-antd.input-page/input2",10241906)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26020) : re_frame.core.subscribe.call(null,G__26020));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26014_SHARP_){
var G__26024 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),new cljs.core.Keyword("syn-antd.input-page","input2","syn-antd.input-page/input2",10241906),syn_antd.input_page.event_value(p1__26014_SHARP_)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26024) : re_frame.core.dispatch_sync.call(null,G__26024));
})], null)], null);
});
syn_antd.input_page.controlled_rf_input2 = (function syn_antd$input_page$controlled_rf_input2(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled input with default value (re-frame)","(defn controlled-rf-input2-element []\n  [input/input\n   {:value     @(re-frame/subscribe [::input2])\n    :on-change #(re-frame/dispatch-sync [::set-value ::input2 (event-value %)])}])",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.rf_controls,new cljs.core.Keyword("syn-antd.input-page","input2","syn-antd.input-page/input2",10241906)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_input2_element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value: ",cljs.core.deref((function (){var G__26026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input2","syn-antd.input-page/input2",10241906)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26026) : re_frame.core.subscribe.call(null,G__26026));
})())], null)], null)], null);
});
syn_antd.input_page.controlled_rf_password_input_element = (function syn_antd$input_page$controlled_rf_password_input_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input_password,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__26028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input3","syn-antd.input-page/input3",-932508926)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26028) : re_frame.core.subscribe.call(null,G__26028));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26027_SHARP_){
var G__26031 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),new cljs.core.Keyword("syn-antd.input-page","input3","syn-antd.input-page/input3",-932508926),syn_antd.input_page.event_value(p1__26027_SHARP_)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26031) : re_frame.core.dispatch_sync.call(null,G__26031));
})], null)], null);
});
syn_antd.input_page.controlled_rf_password_input = (function syn_antd$input_page$controlled_rf_password_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled password input (re-frame)","(defn controlled-rf-password-input-element []\n  [input/input-password\n   {:value     @(re-frame/subscribe [::input3])\n    :on-change #(re-frame/dispatch-sync [::set-value ::input3 (event-value %)])}])",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.rf_controls,new cljs.core.Keyword("syn-antd.input-page","input3","syn-antd.input-page/input3",-932508926)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_password_input_element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value: ",cljs.core.deref((function (){var G__26039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input3","syn-antd.input-page/input3",-932508926)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26039) : re_frame.core.subscribe.call(null,G__26039));
})())], null)], null)], null);
});
syn_antd.input_page.controlled_rf_search_input_element = (function syn_antd$input_page$controlled_rf_search_input_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input_search,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__26041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input4","syn-antd.input-page/input4",-1708895085)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26041) : re_frame.core.subscribe.call(null,G__26041));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26040_SHARP_){
var G__26042 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),new cljs.core.Keyword("syn-antd.input-page","input4","syn-antd.input-page/input4",-1708895085),syn_antd.input_page.event_value(p1__26040_SHARP_)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26042) : re_frame.core.dispatch_sync.call(null,G__26042));
})], null)], null);
});
syn_antd.input_page.controlled_rf_search_input = (function syn_antd$input_page$controlled_rf_search_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled search input (re-frame)","(defn controlled-rf-search-input-element []\n  [input/input-search\n   {:value     @(re-frame/subscribe [::input4])\n    :on-change #(re-frame/dispatch-sync [::set-value ::input4 (event-value %)])}])",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.rf_controls,new cljs.core.Keyword("syn-antd.input-page","input4","syn-antd.input-page/input4",-1708895085)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_search_input_element], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value: ",cljs.core.deref((function (){var G__26044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input4","syn-antd.input-page/input4",-1708895085)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26044) : re_frame.core.subscribe.call(null,G__26044));
})())], null)], null)], null);
});
syn_antd.input_page.controlled_rf_text_area_input_element = (function syn_antd$input_page$controlled_rf_text_area_input_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input_text_area,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref((function (){var G__26046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input5","syn-antd.input-page/input5",402446858)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26046) : re_frame.core.subscribe.call(null,G__26046));
})()),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26045_SHARP_){
var G__26047 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),new cljs.core.Keyword("syn-antd.input-page","input5","syn-antd.input-page/input5",402446858),syn_antd.input_page.event_value(p1__26045_SHARP_)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26047) : re_frame.core.dispatch_sync.call(null,G__26047));
})], null)], null);
});
syn_antd.input_page.controlled_rf_text_area_input = (function syn_antd$input_page$controlled_rf_text_area_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.dev.demo_element,"Controlled text area input (re-frame)","(defn controlled-rf-text-area-input-element []\n  [input/input-text-area\n   {:value     @(re-frame/subscribe [::input5])\n    :on-change #(re-frame/dispatch-sync [::set-value ::input5 (event-value %)])}])",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.rf_controls,new cljs.core.Keyword("syn-antd.input-page","input5","syn-antd.input-page/input5",402446858)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_text_area_input_element], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Value:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.deref((function (){var G__26049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.input-page","input5","syn-antd.input-page/input5",402446858)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26049) : re_frame.core.subscribe.call(null,G__26049));
})())], null)], null)], null);
});
syn_antd.input_page.test_input_page = (function syn_antd$input_page$test_input_page(){
return syn_antd.dev.demo_page(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"syn-antd.input",new cljs.core.Keyword(null,"link","link",-1769163468),"https://ant.design/components/input/",new cljs.core.Keyword(null,"link-title","link-title",-691477229),"antd Documentation - Input",new cljs.core.Keyword(null,"alerts","alerts",-2121664427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.alert.alert,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"info",new cljs.core.Keyword(null,"message","message",-406056002),"Note for re-frame use",new cljs.core.Keyword(null,"description","description",-1428560544),"Very fast typing, or slow rendering, can cause cursor jumping when managing input field state via re-frame. To avoid this, you have to synchronously trigger re-frame events, i.e. re-frame/dispatch-sync instead of re-frame/dispatch. See code below for examples"], null)], null),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.basic_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_input2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_password_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_search_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.controlled_rf_text_area_input], null)], null)], null));
});
var G__26050_26073 = new cljs.core.Keyword("syn-antd.input-page","input1","syn-antd.input-page/input1",1634663690);
var G__26051_26074 = ((function (G__26050_26073){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.input-page","input1","syn-antd.input-page/input1",1634663690).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26050_26073))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26050_26073,G__26051_26074) : re_frame.core.reg_sub.call(null,G__26050_26073,G__26051_26074));
var G__26052_26075 = new cljs.core.Keyword("syn-antd.input-page","input2","syn-antd.input-page/input2",10241906);
var G__26053_26076 = ((function (G__26052_26075){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.input-page","input2","syn-antd.input-page/input2",10241906).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26052_26075))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26052_26075,G__26053_26076) : re_frame.core.reg_sub.call(null,G__26052_26075,G__26053_26076));
var G__26054_26077 = new cljs.core.Keyword("syn-antd.input-page","input3","syn-antd.input-page/input3",-932508926);
var G__26055_26078 = ((function (G__26054_26077){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.input-page","input3","syn-antd.input-page/input3",-932508926).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26054_26077))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26054_26077,G__26055_26078) : re_frame.core.reg_sub.call(null,G__26054_26077,G__26055_26078));
var G__26056_26079 = new cljs.core.Keyword("syn-antd.input-page","input4","syn-antd.input-page/input4",-1708895085);
var G__26057_26080 = ((function (G__26056_26079){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.input-page","input4","syn-antd.input-page/input4",-1708895085).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26056_26079))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26056_26079,G__26057_26080) : re_frame.core.reg_sub.call(null,G__26056_26079,G__26057_26080));
var G__26058_26081 = new cljs.core.Keyword("syn-antd.input-page","input5","syn-antd.input-page/input5",402446858);
var G__26059_26082 = ((function (G__26058_26081){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.input-page","input5","syn-antd.input-page/input5",402446858).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26058_26081))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26058_26081,G__26059_26082) : re_frame.core.reg_sub.call(null,G__26058_26081,G__26059_26082));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("syn-antd.input-page","init","syn-antd.input-page/init",2061971144),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("syn-antd.input-page","input1","syn-antd.input-page/input1",1634663690),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("syn-antd.input-page","input2","syn-antd.input-page/input2",10241906),"Test",new cljs.core.Keyword("syn-antd.input-page","input3","syn-antd.input-page/input3",-932508926),"",new cljs.core.Keyword("syn-antd.input-page","input4","syn-antd.input-page/input4",-1708895085),"",new cljs.core.Keyword("syn-antd.input-page","input5","syn-antd.input-page/input5",402446858),""], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("syn-antd.input-page","set-value","syn-antd.input-page/set-value",1176140086),(function (db,p__26060){
var vec__26061 = p__26060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));

//# sourceMappingURL=syn_antd.input_page.js.map
