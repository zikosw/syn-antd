goog.provide('syn_antd.test_page');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('syn_antd.input_shim');
goog.require('syn_antd.layout');
goog.require('syn_antd.menu');
goog.require('syn_antd.auto_complete_page');
goog.require('syn_antd.input_page');
goog.require('syn_antd.input_number_page');
var G__26358_26390 = new cljs.core.Keyword("syn-antd.test-page","active-page","syn-antd.test-page/active-page",-1975120876);
var G__26361_26391 = ((function (G__26358_26390){
return (function (db,_){
return new cljs.core.Keyword("syn-antd.test-page","active-page","syn-antd.test-page/active-page",-1975120876).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26358_26390))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26358_26390,G__26361_26391) : re_frame.core.reg_sub.call(null,G__26358_26390,G__26361_26391));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("syn-antd.test-page","change-page","syn-antd.test-page/change-page",559680560),(function (p__26362,p__26363){
var map__26364 = p__26362;
var map__26364__$1 = (((((!((map__26364 == null))))?(((((map__26364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26364):map__26364);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26364__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26365 = p__26363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26365,(0),null);
var new_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26365,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26365,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("syn-antd.test-page","active-page","syn-antd.test-page/active-page",-1975120876),new_page)], null);
}));
syn_antd.test_page.pages = new cljs.core.PersistentArrayMap(null, 3, ["auto-complete",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"auto-complete",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Var(function(){return syn_antd.auto_complete_page.test_auto_complete_page;},new cljs.core.Symbol("syn-antd.auto-complete-page","test-auto-complete-page","syn-antd.auto-complete-page/test-auto-complete-page",72305820,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"syn-antd.auto-complete-page","syn-antd.auto-complete-page",1633554271,null),new cljs.core.Symbol(null,"test-auto-complete-page","test-auto-complete-page",458260429,null),"syn_antd/auto_complete_page.cljs",30,1,54,54,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(syn_antd.auto_complete_page.test_auto_complete_page)?syn_antd.auto_complete_page.test_auto_complete_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"change-handler","change-handler",2122037637),new cljs.core.Keyword("syn-antd.auto-complete-page","init","syn-antd.auto-complete-page/init",-1929824405),new cljs.core.Keyword(null,"label","label",1718410804),"AutoComplete"], null),"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Var(function(){return syn_antd.input_page.test_input_page;},new cljs.core.Symbol("syn-antd.input-page","test-input-page","syn-antd.input-page/test-input-page",-158669102,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"syn-antd.input-page","syn-antd.input-page",1866557853,null),new cljs.core.Symbol(null,"test-input-page","test-input-page",769270256,null),"syn_antd/input_page.cljs",22,1,105,105,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(syn_antd.input_page.test_input_page)?syn_antd.input_page.test_input_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"change-handler","change-handler",2122037637),new cljs.core.Keyword("syn-antd.input-page","init","syn-antd.input-page/init",2061971144),new cljs.core.Keyword(null,"label","label",1718410804),"Input"], null),"input-number",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"input-number",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Var(function(){return syn_antd.input_number_page.test_input_page;},new cljs.core.Symbol("syn-antd.input-number-page","test-input-page","syn-antd.input-number-page/test-input-page",-368816300,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"syn-antd.input-number-page","syn-antd.input-number-page",-2080247208,null),new cljs.core.Symbol(null,"test-input-page","test-input-page",769270256,null),"syn_antd/input_number_page.cljs",22,1,53,53,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(syn_antd.input_number_page.test_input_page)?syn_antd.input_number_page.test_input_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"change-handler","change-handler",2122037637),new cljs.core.Keyword("syn-antd.input-number-page","init","syn-antd.input-number-page/init",-955279558),new cljs.core.Keyword(null,"label","label",1718410804),"InputNumber"], null)], null);
syn_antd.test_page.menu_item = (function syn_antd$test_page$menu_item(p__26369){
var map__26370 = p__26369;
var map__26370__$1 = (((((!((map__26370 == null))))?(((((map__26370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26370):map__26370);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26370__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26370__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return null;
});
syn_antd.test_page.test_page = (function syn_antd$test_page$test_page(){
var active_page = cljs.core.deref((function (){var G__26372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.test-page","active-page","syn-antd.test-page/active-page",-1975120876)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26372) : re_frame.core.subscribe.call(null,G__26372));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.layout.layout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.layout.layout_sider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.menu.menu,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),"dark",new cljs.core.Keyword(null,"mode","mode",654403691),"inline",new cljs.core.Keyword(null,"selected-keys","selected-keys",1351833857),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_page], null),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (active_page){
return (function (k){
var map__26373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(syn_antd.test_page.pages,(k["key"]));
var map__26373__$1 = (((((!((map__26373 == null))))?(((((map__26373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26373):map__26373);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26373__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var change_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26373__$1,new cljs.core.Keyword(null,"change-handler","change-handler",2122037637));
var G__26375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("syn-antd.test-page","change-page","syn-antd.test-page/change-page",559680560),key,change_handler], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26375) : re_frame.core.dispatch.call(null,G__26375));
});})(active_page))
], null),(function (){var iter__4523__auto__ = ((function (active_page){
return (function syn_antd$test_page$test_page_$_iter__26376(s__26377){
return (new cljs.core.LazySeq(null,((function (active_page){
return (function (){
var s__26377__$1 = s__26377;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26377__$1);
if(temp__5720__auto__){
var s__26377__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26377__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26377__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26379 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26378 = (0);
while(true){
if((i__26378 < size__4522__auto__)){
var vec__26380 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26378);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(0),null);
var map__26383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(1),null);
var map__26383__$1 = (((((!((map__26383 == null))))?(((((map__26383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26383):map__26383);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26383__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26383__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__26379,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.menu.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__26392 = (i__26378 + (1));
i__26378 = G__26392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26379),syn_antd$test_page$test_page_$_iter__26376(cljs.core.chunk_rest(s__26377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26379),null);
}
} else {
var vec__26385 = cljs.core.first(s__26377__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385,(0),null);
var map__26388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385,(1),null);
var map__26388__$1 = (((((!((map__26388 == null))))?(((((map__26388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26388):map__26388);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26388__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26388__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.menu.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),syn_antd$test_page$test_page_$_iter__26376(cljs.core.rest(s__26377__$2)));
}
} else {
return null;
}
break;
}
});})(active_page))
,null,null));
});})(active_page))
;
return iter__4523__auto__(syn_antd.test_page.pages);
})()], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.layout.layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"200px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.layout.layout_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"syn-antd"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.layout.layout_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"24px 16px 0px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"initial"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"24px",new cljs.core.Keyword(null,"background","background",-863952629),"#fff"], null)], null),(((!((active_page == null))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(syn_antd.test_page.pages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_page,new cljs.core.Keyword(null,"render-fn","render-fn",398796518)], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Select a page from the right to begin"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.layout.layout_footer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 16px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://gitlab.com/synqrinus/syn-antd"], null),"Source"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 16px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://ant.design/"], null),"antd Docs"], null)], null)], null)], null)], null)], null);
});
syn_antd.test_page.mount_components = (function syn_antd$test_page$mount_components(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return syn_antd.test_page.test_page;},new cljs.core.Symbol("syn-antd.test-page","test-page","syn-antd.test-page/test-page",1571115397,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"syn-antd.test-page","syn-antd.test-page",-288533881,null),new cljs.core.Symbol(null,"test-page","test-page",-619820853,null),"syn_antd/test_page.cljs",16,1,38,38,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(syn_antd.test_page.test_page)?syn_antd.test_page.test_page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
syn_antd.test_page.init_BANG_ = (function syn_antd$test_page$init_BANG_(){
return syn_antd.test_page.mount_components();
});

//# sourceMappingURL=syn_antd.test_page.js.map
