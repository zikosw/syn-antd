goog.provide('syn_antd.test_page');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('syn_antd.input_shim');
goog.require('syn_antd.input_page');
syn_antd.test_page.test_page = (function syn_antd$test_page$test_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"syn-antd"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://gitlab.com/synqrinus/syn-antd"], null),"syn-antd Gitlab"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://ant.design/"], null),"antd docs"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input_page.test_input_page], null)], null);
});
syn_antd.test_page.mount_components = (function syn_antd$test_page$mount_components(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return syn_antd.test_page.test_page;},new cljs.core.Symbol("syn-antd.test-page","test-page","syn-antd.test-page/test-page",1571115397,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"syn-antd.test-page","syn-antd.test-page",-288533881,null),new cljs.core.Symbol(null,"test-page","test-page",-619820853,null),"syn_antd/test_page.cljs",16,1,9,9,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(syn_antd.test_page.test_page)?syn_antd.test_page.test_page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
syn_antd.test_page.init_BANG_ = (function syn_antd$test_page$init_BANG_(){
return syn_antd.test_page.mount_components();
});

//# sourceMappingURL=syn_antd.test_page.js.map
