(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{299:function(e,t,n){"use strict";n.r(t);var r=n(15),o=(n(74),n(87)),c=n.n(o),d={data:function(){return{joke:""}},head:function(){return{title:this.joke,meta:[{hid:"description",name:"description",content:"Best place for corny dad jokes"}]}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Accept:"application/json"}},r=e.$route.params.id,t.prev=2,t.next=5,c.a.get("https://icanhazdadjoke.com/j/".concat(r),n);case 5:o=t.sent,e.joke=o.data.joke,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),alert(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},l=n(46),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nuxt-link",{attrs:{to:"/jokes"}},[e._v("Back To Jokes")]),e._v(" "),n("h2",[e._v(e._s(e.joke))]),e._v(" "),n("hr"),e._v(" "),n("small",[e._v("Joke ID: "+e._s(e.$route.params.id))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);