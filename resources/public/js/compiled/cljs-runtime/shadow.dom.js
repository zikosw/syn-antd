goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33786 = coll;
var G__33787 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33786,G__33787) : shadow.dom.lazy_native_coll_seq.call(null,G__33786,G__33787));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33816 = arguments.length;
switch (G__33816) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33830 = arguments.length;
switch (G__33830) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33845 = arguments.length;
switch (G__33845) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33872 = arguments.length;
switch (G__33872) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33874 = document;
var G__33875 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33874,G__33875);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33880 = shadow.dom.dom_node(parent);
var G__33881 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33880,G__33881);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33886 = shadow.dom.dom_node(el);
var G__33887 = cls;
return goog.dom.classlist.add(G__33886,G__33887);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33889 = shadow.dom.dom_node(el);
var G__33890 = cls;
return goog.dom.classlist.remove(G__33889,G__33890);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33896 = arguments.length;
switch (G__33896) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33897 = shadow.dom.dom_node(el);
var G__33898 = cls;
return goog.dom.classlist.toggle(G__33897,G__33898);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33911){if((e33911 instanceof Object)){
var e = e33911;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33911;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33912 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33913 = null;
var count__33914 = (0);
var i__33915 = (0);
while(true){
if((i__33915 < count__33914)){
var el = chunk__33913.cljs$core$IIndexed$_nth$arity$2(null,i__33915);
var handler_34570__$1 = ((function (seq__33912,chunk__33913,count__33914,i__33915,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33912,chunk__33913,count__33914,i__33915,el))
;
var G__33928_34571 = el;
var G__33929_34572 = cljs.core.name(ev);
var G__33930_34573 = handler_34570__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33928_34571,G__33929_34572,G__33930_34573) : shadow.dom.dom_listen.call(null,G__33928_34571,G__33929_34572,G__33930_34573));


var G__34575 = seq__33912;
var G__34576 = chunk__33913;
var G__34577 = count__33914;
var G__34578 = (i__33915 + (1));
seq__33912 = G__34575;
chunk__33913 = G__34576;
count__33914 = G__34577;
i__33915 = G__34578;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33912);
if(temp__5720__auto__){
var seq__33912__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33912__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33912__$1);
var G__34579 = cljs.core.chunk_rest(seq__33912__$1);
var G__34580 = c__4550__auto__;
var G__34581 = cljs.core.count(c__4550__auto__);
var G__34582 = (0);
seq__33912 = G__34579;
chunk__33913 = G__34580;
count__33914 = G__34581;
i__33915 = G__34582;
continue;
} else {
var el = cljs.core.first(seq__33912__$1);
var handler_34585__$1 = ((function (seq__33912,chunk__33913,count__33914,i__33915,el,seq__33912__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33912,chunk__33913,count__33914,i__33915,el,seq__33912__$1,temp__5720__auto__))
;
var G__33935_34588 = el;
var G__33936_34589 = cljs.core.name(ev);
var G__33937_34590 = handler_34585__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33935_34588,G__33936_34589,G__33937_34590) : shadow.dom.dom_listen.call(null,G__33935_34588,G__33936_34589,G__33937_34590));


var G__34592 = cljs.core.next(seq__33912__$1);
var G__34593 = null;
var G__34594 = (0);
var G__34595 = (0);
seq__33912 = G__34592;
chunk__33913 = G__34593;
count__33914 = G__34594;
i__33915 = G__34595;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33951 = arguments.length;
switch (G__33951) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33957 = shadow.dom.dom_node(el);
var G__33958 = cljs.core.name(ev);
var G__33959 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33957,G__33958,G__33959) : shadow.dom.dom_listen.call(null,G__33957,G__33958,G__33959));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33962 = shadow.dom.dom_node(el);
var G__33963 = cljs.core.name(ev);
var G__33964 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33962,G__33963,G__33964) : shadow.dom.dom_listen_remove.call(null,G__33962,G__33963,G__33964));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33970 = cljs.core.seq(events);
var chunk__33971 = null;
var count__33972 = (0);
var i__33973 = (0);
while(true){
if((i__33973 < count__33972)){
var vec__33985 = chunk__33971.cljs$core$IIndexed$_nth$arity$2(null,i__33973);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33985,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34605 = seq__33970;
var G__34606 = chunk__33971;
var G__34607 = count__33972;
var G__34608 = (i__33973 + (1));
seq__33970 = G__34605;
chunk__33971 = G__34606;
count__33972 = G__34607;
i__33973 = G__34608;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33970);
if(temp__5720__auto__){
var seq__33970__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33970__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33970__$1);
var G__34609 = cljs.core.chunk_rest(seq__33970__$1);
var G__34610 = c__4550__auto__;
var G__34611 = cljs.core.count(c__4550__auto__);
var G__34612 = (0);
seq__33970 = G__34609;
chunk__33971 = G__34610;
count__33972 = G__34611;
i__33973 = G__34612;
continue;
} else {
var vec__33990 = cljs.core.first(seq__33970__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34614 = cljs.core.next(seq__33970__$1);
var G__34615 = null;
var G__34616 = (0);
var G__34617 = (0);
seq__33970 = G__34614;
chunk__33971 = G__34615;
count__33972 = G__34616;
i__33973 = G__34617;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33997 = cljs.core.seq(styles);
var chunk__33998 = null;
var count__33999 = (0);
var i__34000 = (0);
while(true){
if((i__34000 < count__33999)){
var vec__34020 = chunk__33998.cljs$core$IIndexed$_nth$arity$2(null,i__34000);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34020,(1),null);
var G__34023_34622 = dom;
var G__34024_34623 = cljs.core.name(k);
var G__34025_34624 = (((v == null))?"":v);
goog.style.setStyle(G__34023_34622,G__34024_34623,G__34025_34624);


var G__34626 = seq__33997;
var G__34627 = chunk__33998;
var G__34628 = count__33999;
var G__34629 = (i__34000 + (1));
seq__33997 = G__34626;
chunk__33998 = G__34627;
count__33999 = G__34628;
i__34000 = G__34629;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33997);
if(temp__5720__auto__){
var seq__33997__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33997__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33997__$1);
var G__34631 = cljs.core.chunk_rest(seq__33997__$1);
var G__34632 = c__4550__auto__;
var G__34633 = cljs.core.count(c__4550__auto__);
var G__34634 = (0);
seq__33997 = G__34631;
chunk__33998 = G__34632;
count__33999 = G__34633;
i__34000 = G__34634;
continue;
} else {
var vec__34028 = cljs.core.first(seq__33997__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34028,(1),null);
var G__34031_34636 = dom;
var G__34032_34637 = cljs.core.name(k);
var G__34033_34638 = (((v == null))?"":v);
goog.style.setStyle(G__34031_34636,G__34032_34637,G__34033_34638);


var G__34639 = cljs.core.next(seq__33997__$1);
var G__34640 = null;
var G__34641 = (0);
var G__34642 = (0);
seq__33997 = G__34639;
chunk__33998 = G__34640;
count__33999 = G__34641;
i__34000 = G__34642;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34036_34643 = key;
var G__34036_34644__$1 = (((G__34036_34643 instanceof cljs.core.Keyword))?G__34036_34643.fqn:null);
switch (G__34036_34644__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34650 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34650,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34650,"aria-");
}
})())){
el.setAttribute(ks_34650,value);
} else {
(el[ks_34650] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__34044 = shadow.dom.dom_node(el);
var G__34045 = cls;
return goog.dom.classlist.contains(G__34044,G__34045);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34055){
var map__34056 = p__34055;
var map__34056__$1 = (((((!((map__34056 == null))))?(((((map__34056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34056):map__34056);
var props = map__34056__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34056__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34060 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34063 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34063,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34063;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34069 = arguments.length;
switch (G__34069) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34078){
var vec__34079 = p__34078;
var seq__34080 = cljs.core.seq(vec__34079);
var first__34081 = cljs.core.first(seq__34080);
var seq__34080__$1 = cljs.core.next(seq__34080);
var nn = first__34081;
var first__34081__$1 = cljs.core.first(seq__34080__$1);
var seq__34080__$2 = cljs.core.next(seq__34080__$1);
var np = first__34081__$1;
var nc = seq__34080__$2;
var node = vec__34079;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34083 = nn;
var G__34084 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34083,G__34084) : create_fn.call(null,G__34083,G__34084));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34085 = nn;
var G__34086 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34085,G__34086) : create_fn.call(null,G__34085,G__34086));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34087 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34087,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34087,(1),null);
var seq__34091_34676 = cljs.core.seq(node_children);
var chunk__34092_34677 = null;
var count__34093_34678 = (0);
var i__34094_34679 = (0);
while(true){
if((i__34094_34679 < count__34093_34678)){
var child_struct_34682 = chunk__34092_34677.cljs$core$IIndexed$_nth$arity$2(null,i__34094_34679);
var children_34683 = shadow.dom.dom_node(child_struct_34682);
if(cljs.core.seq_QMARK_(children_34683)){
var seq__34130_34685 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34683));
var chunk__34132_34686 = null;
var count__34133_34687 = (0);
var i__34134_34688 = (0);
while(true){
if((i__34134_34688 < count__34133_34687)){
var child_34689 = chunk__34132_34686.cljs$core$IIndexed$_nth$arity$2(null,i__34134_34688);
if(cljs.core.truth_(child_34689)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34689);


var G__34690 = seq__34130_34685;
var G__34691 = chunk__34132_34686;
var G__34692 = count__34133_34687;
var G__34693 = (i__34134_34688 + (1));
seq__34130_34685 = G__34690;
chunk__34132_34686 = G__34691;
count__34133_34687 = G__34692;
i__34134_34688 = G__34693;
continue;
} else {
var G__34694 = seq__34130_34685;
var G__34695 = chunk__34132_34686;
var G__34696 = count__34133_34687;
var G__34697 = (i__34134_34688 + (1));
seq__34130_34685 = G__34694;
chunk__34132_34686 = G__34695;
count__34133_34687 = G__34696;
i__34134_34688 = G__34697;
continue;
}
} else {
var temp__5720__auto___34698 = cljs.core.seq(seq__34130_34685);
if(temp__5720__auto___34698){
var seq__34130_34699__$1 = temp__5720__auto___34698;
if(cljs.core.chunked_seq_QMARK_(seq__34130_34699__$1)){
var c__4550__auto___34701 = cljs.core.chunk_first(seq__34130_34699__$1);
var G__34703 = cljs.core.chunk_rest(seq__34130_34699__$1);
var G__34704 = c__4550__auto___34701;
var G__34705 = cljs.core.count(c__4550__auto___34701);
var G__34706 = (0);
seq__34130_34685 = G__34703;
chunk__34132_34686 = G__34704;
count__34133_34687 = G__34705;
i__34134_34688 = G__34706;
continue;
} else {
var child_34707 = cljs.core.first(seq__34130_34699__$1);
if(cljs.core.truth_(child_34707)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34707);


var G__34708 = cljs.core.next(seq__34130_34699__$1);
var G__34709 = null;
var G__34710 = (0);
var G__34711 = (0);
seq__34130_34685 = G__34708;
chunk__34132_34686 = G__34709;
count__34133_34687 = G__34710;
i__34134_34688 = G__34711;
continue;
} else {
var G__34712 = cljs.core.next(seq__34130_34699__$1);
var G__34713 = null;
var G__34714 = (0);
var G__34715 = (0);
seq__34130_34685 = G__34712;
chunk__34132_34686 = G__34713;
count__34133_34687 = G__34714;
i__34134_34688 = G__34715;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34683);
}


var G__34721 = seq__34091_34676;
var G__34722 = chunk__34092_34677;
var G__34723 = count__34093_34678;
var G__34724 = (i__34094_34679 + (1));
seq__34091_34676 = G__34721;
chunk__34092_34677 = G__34722;
count__34093_34678 = G__34723;
i__34094_34679 = G__34724;
continue;
} else {
var temp__5720__auto___34725 = cljs.core.seq(seq__34091_34676);
if(temp__5720__auto___34725){
var seq__34091_34726__$1 = temp__5720__auto___34725;
if(cljs.core.chunked_seq_QMARK_(seq__34091_34726__$1)){
var c__4550__auto___34727 = cljs.core.chunk_first(seq__34091_34726__$1);
var G__34728 = cljs.core.chunk_rest(seq__34091_34726__$1);
var G__34729 = c__4550__auto___34727;
var G__34730 = cljs.core.count(c__4550__auto___34727);
var G__34731 = (0);
seq__34091_34676 = G__34728;
chunk__34092_34677 = G__34729;
count__34093_34678 = G__34730;
i__34094_34679 = G__34731;
continue;
} else {
var child_struct_34733 = cljs.core.first(seq__34091_34726__$1);
var children_34734 = shadow.dom.dom_node(child_struct_34733);
if(cljs.core.seq_QMARK_(children_34734)){
var seq__34159_34735 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34734));
var chunk__34161_34736 = null;
var count__34162_34737 = (0);
var i__34163_34738 = (0);
while(true){
if((i__34163_34738 < count__34162_34737)){
var child_34739 = chunk__34161_34736.cljs$core$IIndexed$_nth$arity$2(null,i__34163_34738);
if(cljs.core.truth_(child_34739)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34739);


var G__34740 = seq__34159_34735;
var G__34741 = chunk__34161_34736;
var G__34742 = count__34162_34737;
var G__34743 = (i__34163_34738 + (1));
seq__34159_34735 = G__34740;
chunk__34161_34736 = G__34741;
count__34162_34737 = G__34742;
i__34163_34738 = G__34743;
continue;
} else {
var G__34745 = seq__34159_34735;
var G__34746 = chunk__34161_34736;
var G__34747 = count__34162_34737;
var G__34748 = (i__34163_34738 + (1));
seq__34159_34735 = G__34745;
chunk__34161_34736 = G__34746;
count__34162_34737 = G__34747;
i__34163_34738 = G__34748;
continue;
}
} else {
var temp__5720__auto___34749__$1 = cljs.core.seq(seq__34159_34735);
if(temp__5720__auto___34749__$1){
var seq__34159_34750__$1 = temp__5720__auto___34749__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34159_34750__$1)){
var c__4550__auto___34751 = cljs.core.chunk_first(seq__34159_34750__$1);
var G__34752 = cljs.core.chunk_rest(seq__34159_34750__$1);
var G__34753 = c__4550__auto___34751;
var G__34754 = cljs.core.count(c__4550__auto___34751);
var G__34755 = (0);
seq__34159_34735 = G__34752;
chunk__34161_34736 = G__34753;
count__34162_34737 = G__34754;
i__34163_34738 = G__34755;
continue;
} else {
var child_34756 = cljs.core.first(seq__34159_34750__$1);
if(cljs.core.truth_(child_34756)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34756);


var G__34757 = cljs.core.next(seq__34159_34750__$1);
var G__34758 = null;
var G__34759 = (0);
var G__34760 = (0);
seq__34159_34735 = G__34757;
chunk__34161_34736 = G__34758;
count__34162_34737 = G__34759;
i__34163_34738 = G__34760;
continue;
} else {
var G__34761 = cljs.core.next(seq__34159_34750__$1);
var G__34762 = null;
var G__34763 = (0);
var G__34764 = (0);
seq__34159_34735 = G__34761;
chunk__34161_34736 = G__34762;
count__34162_34737 = G__34763;
i__34163_34738 = G__34764;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34734);
}


var G__34765 = cljs.core.next(seq__34091_34726__$1);
var G__34766 = null;
var G__34767 = (0);
var G__34768 = (0);
seq__34091_34676 = G__34765;
chunk__34092_34677 = G__34766;
count__34093_34678 = G__34767;
i__34094_34679 = G__34768;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__34180 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__34180);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34184 = cljs.core.seq(node);
var chunk__34185 = null;
var count__34186 = (0);
var i__34187 = (0);
while(true){
if((i__34187 < count__34186)){
var n = chunk__34185.cljs$core$IIndexed$_nth$arity$2(null,i__34187);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34777 = seq__34184;
var G__34778 = chunk__34185;
var G__34779 = count__34186;
var G__34780 = (i__34187 + (1));
seq__34184 = G__34777;
chunk__34185 = G__34778;
count__34186 = G__34779;
i__34187 = G__34780;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34184);
if(temp__5720__auto__){
var seq__34184__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34184__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34184__$1);
var G__34782 = cljs.core.chunk_rest(seq__34184__$1);
var G__34783 = c__4550__auto__;
var G__34784 = cljs.core.count(c__4550__auto__);
var G__34785 = (0);
seq__34184 = G__34782;
chunk__34185 = G__34783;
count__34186 = G__34784;
i__34187 = G__34785;
continue;
} else {
var n = cljs.core.first(seq__34184__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34787 = cljs.core.next(seq__34184__$1);
var G__34788 = null;
var G__34789 = (0);
var G__34790 = (0);
seq__34184 = G__34787;
chunk__34185 = G__34788;
count__34186 = G__34789;
i__34187 = G__34790;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__34196 = shadow.dom.dom_node(new$);
var G__34197 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__34196,G__34197);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34201 = arguments.length;
switch (G__34201) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34205 = arguments.length;
switch (G__34205) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34216 = arguments.length;
switch (G__34216) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34806 = arguments.length;
var i__4731__auto___34807 = (0);
while(true){
if((i__4731__auto___34807 < len__4730__auto___34806)){
args__4736__auto__.push((arguments[i__4731__auto___34807]));

var G__34808 = (i__4731__auto___34807 + (1));
i__4731__auto___34807 = G__34808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34240_34810 = cljs.core.seq(nodes);
var chunk__34241_34811 = null;
var count__34242_34812 = (0);
var i__34243_34813 = (0);
while(true){
if((i__34243_34813 < count__34242_34812)){
var node_34817 = chunk__34241_34811.cljs$core$IIndexed$_nth$arity$2(null,i__34243_34813);
fragment.appendChild(shadow.dom._to_dom(node_34817));


var G__34818 = seq__34240_34810;
var G__34819 = chunk__34241_34811;
var G__34820 = count__34242_34812;
var G__34821 = (i__34243_34813 + (1));
seq__34240_34810 = G__34818;
chunk__34241_34811 = G__34819;
count__34242_34812 = G__34820;
i__34243_34813 = G__34821;
continue;
} else {
var temp__5720__auto___34822 = cljs.core.seq(seq__34240_34810);
if(temp__5720__auto___34822){
var seq__34240_34824__$1 = temp__5720__auto___34822;
if(cljs.core.chunked_seq_QMARK_(seq__34240_34824__$1)){
var c__4550__auto___34825 = cljs.core.chunk_first(seq__34240_34824__$1);
var G__34826 = cljs.core.chunk_rest(seq__34240_34824__$1);
var G__34827 = c__4550__auto___34825;
var G__34828 = cljs.core.count(c__4550__auto___34825);
var G__34829 = (0);
seq__34240_34810 = G__34826;
chunk__34241_34811 = G__34827;
count__34242_34812 = G__34828;
i__34243_34813 = G__34829;
continue;
} else {
var node_34830 = cljs.core.first(seq__34240_34824__$1);
fragment.appendChild(shadow.dom._to_dom(node_34830));


var G__34831 = cljs.core.next(seq__34240_34824__$1);
var G__34832 = null;
var G__34833 = (0);
var G__34834 = (0);
seq__34240_34810 = G__34831;
chunk__34241_34811 = G__34832;
count__34242_34812 = G__34833;
i__34243_34813 = G__34834;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq34236){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34236));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34250_34836 = cljs.core.seq(scripts);
var chunk__34251_34837 = null;
var count__34252_34838 = (0);
var i__34253_34839 = (0);
while(true){
if((i__34253_34839 < count__34252_34838)){
var vec__34263_34840 = chunk__34251_34837.cljs$core$IIndexed$_nth$arity$2(null,i__34253_34839);
var script_tag_34841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263_34840,(0),null);
var script_body_34842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263_34840,(1),null);
eval(script_body_34842);


var G__34844 = seq__34250_34836;
var G__34845 = chunk__34251_34837;
var G__34846 = count__34252_34838;
var G__34847 = (i__34253_34839 + (1));
seq__34250_34836 = G__34844;
chunk__34251_34837 = G__34845;
count__34252_34838 = G__34846;
i__34253_34839 = G__34847;
continue;
} else {
var temp__5720__auto___34848 = cljs.core.seq(seq__34250_34836);
if(temp__5720__auto___34848){
var seq__34250_34849__$1 = temp__5720__auto___34848;
if(cljs.core.chunked_seq_QMARK_(seq__34250_34849__$1)){
var c__4550__auto___34850 = cljs.core.chunk_first(seq__34250_34849__$1);
var G__34851 = cljs.core.chunk_rest(seq__34250_34849__$1);
var G__34852 = c__4550__auto___34850;
var G__34853 = cljs.core.count(c__4550__auto___34850);
var G__34854 = (0);
seq__34250_34836 = G__34851;
chunk__34251_34837 = G__34852;
count__34252_34838 = G__34853;
i__34253_34839 = G__34854;
continue;
} else {
var vec__34268_34856 = cljs.core.first(seq__34250_34849__$1);
var script_tag_34857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34268_34856,(0),null);
var script_body_34858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34268_34856,(1),null);
eval(script_body_34858);


var G__34860 = cljs.core.next(seq__34250_34849__$1);
var G__34861 = null;
var G__34862 = (0);
var G__34863 = (0);
seq__34250_34836 = G__34860;
chunk__34251_34837 = G__34861;
count__34252_34838 = G__34862;
i__34253_34839 = G__34863;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__34271){
var vec__34272 = p__34271;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__34275 = shadow.dom.dom_node(el);
var G__34276 = cls;
return goog.dom.getAncestorByClass(G__34275,G__34276);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34278 = arguments.length;
switch (G__34278) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__34279 = shadow.dom.dom_node(el);
var G__34280 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__34279,G__34280);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__34283 = shadow.dom.dom_node(el);
var G__34285 = cljs.core.name(tag);
var G__34286 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__34283,G__34285,G__34286);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__34288 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__34288);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__34291 = shadow.dom.dom_node(dom);
var G__34292 = value;
return goog.dom.forms.setValue(G__34291,G__34292);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34293 = cljs.core.seq(style_keys);
var chunk__34294 = null;
var count__34295 = (0);
var i__34296 = (0);
while(true){
if((i__34296 < count__34295)){
var it = chunk__34294.cljs$core$IIndexed$_nth$arity$2(null,i__34296);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34880 = seq__34293;
var G__34881 = chunk__34294;
var G__34882 = count__34295;
var G__34883 = (i__34296 + (1));
seq__34293 = G__34880;
chunk__34294 = G__34881;
count__34295 = G__34882;
i__34296 = G__34883;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34293);
if(temp__5720__auto__){
var seq__34293__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34293__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34293__$1);
var G__34885 = cljs.core.chunk_rest(seq__34293__$1);
var G__34886 = c__4550__auto__;
var G__34887 = cljs.core.count(c__4550__auto__);
var G__34888 = (0);
seq__34293 = G__34885;
chunk__34294 = G__34886;
count__34295 = G__34887;
i__34296 = G__34888;
continue;
} else {
var it = cljs.core.first(seq__34293__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34889 = cljs.core.next(seq__34293__$1);
var G__34890 = null;
var G__34891 = (0);
var G__34892 = (0);
seq__34293 = G__34889;
chunk__34294 = G__34890;
count__34295 = G__34891;
i__34296 = G__34892;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34298,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34302 = k34298;
var G__34302__$1 = (((G__34302 instanceof cljs.core.Keyword))?G__34302.fqn:null);
switch (G__34302__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34298,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34303){
var vec__34304 = p__34303;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34304,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34304,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34297){
var self__ = this;
var G__34297__$1 = this;
return (new cljs.core.RecordIter((0),G__34297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34317 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34317(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34299,other34300){
var self__ = this;
var this34299__$1 = this;
return (((!((other34300 == null)))) && ((this34299__$1.constructor === other34300.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34299__$1.x,other34300.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34299__$1.y,other34300.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34299__$1.__extmap,other34300.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34297){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34322 = cljs.core.keyword_identical_QMARK_;
var expr__34323 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34325 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__34326 = expr__34323;
return (pred__34322.cljs$core$IFn$_invoke$arity$2 ? pred__34322.cljs$core$IFn$_invoke$arity$2(G__34325,G__34326) : pred__34322.call(null,G__34325,G__34326));
})())){
return (new shadow.dom.Coordinate(G__34297,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34328 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__34329 = expr__34323;
return (pred__34322.cljs$core$IFn$_invoke$arity$2 ? pred__34322.cljs$core$IFn$_invoke$arity$2(G__34328,G__34329) : pred__34322.call(null,G__34328,G__34329));
})())){
return (new shadow.dom.Coordinate(self__.x,G__34297,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34297),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34297){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34297,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34301){
var extmap__4424__auto__ = (function (){var G__34338 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34301,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34301)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34338);
} else {
return G__34338;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34301),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__34343 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__34343);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__34346 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__34346);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__34347 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__34347);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34349,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34357 = k34349;
var G__34357__$1 = (((G__34357 instanceof cljs.core.Keyword))?G__34357.fqn:null);
switch (G__34357__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34349,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34361){
var vec__34363 = p__34361;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34363,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34363,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34348){
var self__ = this;
var G__34348__$1 = this;
return (new cljs.core.RecordIter((0),G__34348__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34373 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34373(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34350,other34351){
var self__ = this;
var this34350__$1 = this;
return (((!((other34351 == null)))) && ((this34350__$1.constructor === other34351.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34350__$1.w,other34351.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34350__$1.h,other34351.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34350__$1.__extmap,other34351.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34348){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34378 = cljs.core.keyword_identical_QMARK_;
var expr__34380 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34382 = new cljs.core.Keyword(null,"w","w",354169001);
var G__34383 = expr__34380;
return (pred__34378.cljs$core$IFn$_invoke$arity$2 ? pred__34378.cljs$core$IFn$_invoke$arity$2(G__34382,G__34383) : pred__34378.call(null,G__34382,G__34383));
})())){
return (new shadow.dom.Size(G__34348,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34384 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__34385 = expr__34380;
return (pred__34378.cljs$core$IFn$_invoke$arity$2 ? pred__34378.cljs$core$IFn$_invoke$arity$2(G__34384,G__34385) : pred__34378.call(null,G__34384,G__34385));
})())){
return (new shadow.dom.Size(self__.w,G__34348,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34348),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34348){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34348,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34352){
var extmap__4424__auto__ = (function (){var G__34386 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34352,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34352)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34386);
} else {
return G__34386;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34352),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34352),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__34388 = shadow.dom.dom_node(el);
return goog.style.getSize(G__34388);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34939 = (i + (1));
var G__34940 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34939;
ret = G__34940;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34394){
var vec__34395 = p__34394;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34399 = arguments.length;
switch (G__34399) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34407_34944 = new_node;
var G__34408_34945 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__34407_34944,G__34408_34945);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34412_34946 = new_node;
var G__34413_34947 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__34412_34946,G__34413_34947);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34948 = ps;
var G__34949 = (i + (1));
el__$1 = G__34948;
i = G__34949;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__34421 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__34421);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__34426 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__34426);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__34428 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__34428);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34431 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34435_34951 = cljs.core.seq(props);
var chunk__34436_34952 = null;
var count__34437_34953 = (0);
var i__34438_34954 = (0);
while(true){
if((i__34438_34954 < count__34437_34953)){
var vec__34447_34955 = chunk__34436_34952.cljs$core$IIndexed$_nth$arity$2(null,i__34438_34954);
var k_34956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34447_34955,(0),null);
var v_34957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34447_34955,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34956);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34956),v_34957);


var G__34958 = seq__34435_34951;
var G__34959 = chunk__34436_34952;
var G__34960 = count__34437_34953;
var G__34961 = (i__34438_34954 + (1));
seq__34435_34951 = G__34958;
chunk__34436_34952 = G__34959;
count__34437_34953 = G__34960;
i__34438_34954 = G__34961;
continue;
} else {
var temp__5720__auto___34962 = cljs.core.seq(seq__34435_34951);
if(temp__5720__auto___34962){
var seq__34435_34963__$1 = temp__5720__auto___34962;
if(cljs.core.chunked_seq_QMARK_(seq__34435_34963__$1)){
var c__4550__auto___34964 = cljs.core.chunk_first(seq__34435_34963__$1);
var G__34965 = cljs.core.chunk_rest(seq__34435_34963__$1);
var G__34966 = c__4550__auto___34964;
var G__34967 = cljs.core.count(c__4550__auto___34964);
var G__34968 = (0);
seq__34435_34951 = G__34965;
chunk__34436_34952 = G__34966;
count__34437_34953 = G__34967;
i__34438_34954 = G__34968;
continue;
} else {
var vec__34452_34969 = cljs.core.first(seq__34435_34963__$1);
var k_34970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452_34969,(0),null);
var v_34971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452_34969,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34970);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34970),v_34971);


var G__34972 = cljs.core.next(seq__34435_34963__$1);
var G__34973 = null;
var G__34974 = (0);
var G__34975 = (0);
seq__34435_34951 = G__34972;
chunk__34436_34952 = G__34973;
count__34437_34953 = G__34974;
i__34438_34954 = G__34975;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34459 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34459,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34459,(1),null);
var seq__34462_34978 = cljs.core.seq(node_children);
var chunk__34464_34979 = null;
var count__34465_34980 = (0);
var i__34466_34981 = (0);
while(true){
if((i__34466_34981 < count__34465_34980)){
var child_struct_34982 = chunk__34464_34979.cljs$core$IIndexed$_nth$arity$2(null,i__34466_34981);
if((!((child_struct_34982 == null)))){
if(typeof child_struct_34982 === 'string'){
var text_34983 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34983),child_struct_34982].join(''));
} else {
var children_34984 = shadow.dom.svg_node(child_struct_34982);
if(cljs.core.seq_QMARK_(children_34984)){
var seq__34494_34985 = cljs.core.seq(children_34984);
var chunk__34496_34986 = null;
var count__34497_34987 = (0);
var i__34498_34988 = (0);
while(true){
if((i__34498_34988 < count__34497_34987)){
var child_34989 = chunk__34496_34986.cljs$core$IIndexed$_nth$arity$2(null,i__34498_34988);
if(cljs.core.truth_(child_34989)){
node.appendChild(child_34989);


var G__34990 = seq__34494_34985;
var G__34991 = chunk__34496_34986;
var G__34992 = count__34497_34987;
var G__34993 = (i__34498_34988 + (1));
seq__34494_34985 = G__34990;
chunk__34496_34986 = G__34991;
count__34497_34987 = G__34992;
i__34498_34988 = G__34993;
continue;
} else {
var G__34994 = seq__34494_34985;
var G__34995 = chunk__34496_34986;
var G__34996 = count__34497_34987;
var G__34997 = (i__34498_34988 + (1));
seq__34494_34985 = G__34994;
chunk__34496_34986 = G__34995;
count__34497_34987 = G__34996;
i__34498_34988 = G__34997;
continue;
}
} else {
var temp__5720__auto___34998 = cljs.core.seq(seq__34494_34985);
if(temp__5720__auto___34998){
var seq__34494_34999__$1 = temp__5720__auto___34998;
if(cljs.core.chunked_seq_QMARK_(seq__34494_34999__$1)){
var c__4550__auto___35000 = cljs.core.chunk_first(seq__34494_34999__$1);
var G__35001 = cljs.core.chunk_rest(seq__34494_34999__$1);
var G__35002 = c__4550__auto___35000;
var G__35003 = cljs.core.count(c__4550__auto___35000);
var G__35004 = (0);
seq__34494_34985 = G__35001;
chunk__34496_34986 = G__35002;
count__34497_34987 = G__35003;
i__34498_34988 = G__35004;
continue;
} else {
var child_35005 = cljs.core.first(seq__34494_34999__$1);
if(cljs.core.truth_(child_35005)){
node.appendChild(child_35005);


var G__35006 = cljs.core.next(seq__34494_34999__$1);
var G__35007 = null;
var G__35008 = (0);
var G__35009 = (0);
seq__34494_34985 = G__35006;
chunk__34496_34986 = G__35007;
count__34497_34987 = G__35008;
i__34498_34988 = G__35009;
continue;
} else {
var G__35011 = cljs.core.next(seq__34494_34999__$1);
var G__35012 = null;
var G__35013 = (0);
var G__35014 = (0);
seq__34494_34985 = G__35011;
chunk__34496_34986 = G__35012;
count__34497_34987 = G__35013;
i__34498_34988 = G__35014;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34984);
}
}


var G__35015 = seq__34462_34978;
var G__35016 = chunk__34464_34979;
var G__35017 = count__34465_34980;
var G__35018 = (i__34466_34981 + (1));
seq__34462_34978 = G__35015;
chunk__34464_34979 = G__35016;
count__34465_34980 = G__35017;
i__34466_34981 = G__35018;
continue;
} else {
var G__35019 = seq__34462_34978;
var G__35020 = chunk__34464_34979;
var G__35021 = count__34465_34980;
var G__35022 = (i__34466_34981 + (1));
seq__34462_34978 = G__35019;
chunk__34464_34979 = G__35020;
count__34465_34980 = G__35021;
i__34466_34981 = G__35022;
continue;
}
} else {
var temp__5720__auto___35023 = cljs.core.seq(seq__34462_34978);
if(temp__5720__auto___35023){
var seq__34462_35024__$1 = temp__5720__auto___35023;
if(cljs.core.chunked_seq_QMARK_(seq__34462_35024__$1)){
var c__4550__auto___35025 = cljs.core.chunk_first(seq__34462_35024__$1);
var G__35026 = cljs.core.chunk_rest(seq__34462_35024__$1);
var G__35027 = c__4550__auto___35025;
var G__35028 = cljs.core.count(c__4550__auto___35025);
var G__35029 = (0);
seq__34462_34978 = G__35026;
chunk__34464_34979 = G__35027;
count__34465_34980 = G__35028;
i__34466_34981 = G__35029;
continue;
} else {
var child_struct_35034 = cljs.core.first(seq__34462_35024__$1);
if((!((child_struct_35034 == null)))){
if(typeof child_struct_35034 === 'string'){
var text_35035 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35035),child_struct_35034].join(''));
} else {
var children_35036 = shadow.dom.svg_node(child_struct_35034);
if(cljs.core.seq_QMARK_(children_35036)){
var seq__34504_35038 = cljs.core.seq(children_35036);
var chunk__34506_35039 = null;
var count__34507_35040 = (0);
var i__34508_35041 = (0);
while(true){
if((i__34508_35041 < count__34507_35040)){
var child_35042 = chunk__34506_35039.cljs$core$IIndexed$_nth$arity$2(null,i__34508_35041);
if(cljs.core.truth_(child_35042)){
node.appendChild(child_35042);


var G__35043 = seq__34504_35038;
var G__35044 = chunk__34506_35039;
var G__35045 = count__34507_35040;
var G__35046 = (i__34508_35041 + (1));
seq__34504_35038 = G__35043;
chunk__34506_35039 = G__35044;
count__34507_35040 = G__35045;
i__34508_35041 = G__35046;
continue;
} else {
var G__35047 = seq__34504_35038;
var G__35048 = chunk__34506_35039;
var G__35049 = count__34507_35040;
var G__35050 = (i__34508_35041 + (1));
seq__34504_35038 = G__35047;
chunk__34506_35039 = G__35048;
count__34507_35040 = G__35049;
i__34508_35041 = G__35050;
continue;
}
} else {
var temp__5720__auto___35051__$1 = cljs.core.seq(seq__34504_35038);
if(temp__5720__auto___35051__$1){
var seq__34504_35052__$1 = temp__5720__auto___35051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34504_35052__$1)){
var c__4550__auto___35053 = cljs.core.chunk_first(seq__34504_35052__$1);
var G__35054 = cljs.core.chunk_rest(seq__34504_35052__$1);
var G__35055 = c__4550__auto___35053;
var G__35056 = cljs.core.count(c__4550__auto___35053);
var G__35057 = (0);
seq__34504_35038 = G__35054;
chunk__34506_35039 = G__35055;
count__34507_35040 = G__35056;
i__34508_35041 = G__35057;
continue;
} else {
var child_35058 = cljs.core.first(seq__34504_35052__$1);
if(cljs.core.truth_(child_35058)){
node.appendChild(child_35058);


var G__35060 = cljs.core.next(seq__34504_35052__$1);
var G__35061 = null;
var G__35062 = (0);
var G__35063 = (0);
seq__34504_35038 = G__35060;
chunk__34506_35039 = G__35061;
count__34507_35040 = G__35062;
i__34508_35041 = G__35063;
continue;
} else {
var G__35064 = cljs.core.next(seq__34504_35052__$1);
var G__35065 = null;
var G__35066 = (0);
var G__35067 = (0);
seq__34504_35038 = G__35064;
chunk__34506_35039 = G__35065;
count__34507_35040 = G__35066;
i__34508_35041 = G__35067;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35036);
}
}


var G__35069 = cljs.core.next(seq__34462_35024__$1);
var G__35070 = null;
var G__35071 = (0);
var G__35072 = (0);
seq__34462_34978 = G__35069;
chunk__34464_34979 = G__35070;
count__34465_34980 = G__35071;
i__34466_34981 = G__35072;
continue;
} else {
var G__35076 = cljs.core.next(seq__34462_35024__$1);
var G__35077 = null;
var G__35078 = (0);
var G__35079 = (0);
seq__34462_34978 = G__35076;
chunk__34464_34979 = G__35077;
count__34465_34980 = G__35078;
i__34466_34981 = G__35079;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__34517_35080 = shadow.dom._to_svg;
var G__34518_35081 = "string";
var G__34519_35082 = ((function (G__34517_35080,G__34518_35081){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__34517_35080,G__34518_35081))
;
goog.object.set(G__34517_35080,G__34518_35081,G__34519_35082);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__34524_35083 = shadow.dom._to_svg;
var G__34525_35084 = "null";
var G__34526_35085 = ((function (G__34524_35083,G__34525_35084){
return (function (_){
return null;
});})(G__34524_35083,G__34525_35084))
;
goog.object.set(G__34524_35083,G__34525_35084,G__34526_35085);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35086 = arguments.length;
var i__4731__auto___35087 = (0);
while(true){
if((i__4731__auto___35087 < len__4730__auto___35086)){
args__4736__auto__.push((arguments[i__4731__auto___35087]));

var G__35088 = (i__4731__auto___35087 + (1));
i__4731__auto___35087 = G__35088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq34528){
var G__34529 = cljs.core.first(seq34528);
var seq34528__$1 = cljs.core.next(seq34528);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34529,seq34528__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34535 = arguments.length;
switch (G__34535) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__34539_35091 = shadow.dom.dom_node(el);
var G__34540_35092 = cljs.core.name(event);
var G__34541_35093 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34539_35091,G__34540_35092,G__34541_35093) : shadow.dom.dom_listen.call(null,G__34539_35091,G__34540_35092,G__34541_35093));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__31235__auto___35097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31235__auto___35097,buf,chan,event_fn){
return (function (){
var f__31236__auto__ = (function (){var switch__30976__auto__ = ((function (c__31235__auto___35097,buf,chan,event_fn){
return (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34548__$1,(2),once_or_cleanup);
} else {
if((state_val_34549 === (2))){
var inst_34545 = (state_34548[(2)]);
var inst_34546 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34548__$1 = (function (){var statearr_34553 = state_34548;
(statearr_34553[(7)] = inst_34545);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34548__$1,inst_34546);
} else {
return null;
}
}
});})(c__31235__auto___35097,buf,chan,event_fn))
;
return ((function (switch__30976__auto__,c__31235__auto___35097,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30977__auto__ = null;
var shadow$dom$state_machine__30977__auto____0 = (function (){
var statearr_34555 = [null,null,null,null,null,null,null,null];
(statearr_34555[(0)] = shadow$dom$state_machine__30977__auto__);

(statearr_34555[(1)] = (1));

return statearr_34555;
});
var shadow$dom$state_machine__30977__auto____1 = (function (state_34548){
while(true){
var ret_value__30978__auto__ = (function (){try{while(true){
var result__30979__auto__ = switch__30976__auto__(state_34548);
if(cljs.core.keyword_identical_QMARK_(result__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30979__auto__;
}
break;
}
}catch (e34557){if((e34557 instanceof Object)){
var ex__30980__auto__ = e34557;
var statearr_34558_35102 = state_34548;
(statearr_34558_35102[(5)] = ex__30980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35103 = state_34548;
state_34548 = G__35103;
continue;
} else {
return ret_value__30978__auto__;
}
break;
}
});
shadow$dom$state_machine__30977__auto__ = function(state_34548){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30977__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30977__auto____1.call(this,state_34548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30977__auto____0;
shadow$dom$state_machine__30977__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30977__auto____1;
return shadow$dom$state_machine__30977__auto__;
})()
;})(switch__30976__auto__,c__31235__auto___35097,buf,chan,event_fn))
})();
var state__31237__auto__ = (function (){var statearr_34560 = (f__31236__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31236__auto__.cljs$core$IFn$_invoke$arity$0() : f__31236__auto__.call(null));
(statearr_34560[(6)] = c__31235__auto___35097);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31237__auto__);
});})(c__31235__auto___35097,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
