webpackJsonp([1],{"/1V3":function(t,e){},"3iMh":function(t,e){},CWzW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("uMhA"),n("Q0/0");var a=n("7+uW"),r=new a.a({data:{appStyle:{background:"#c0ffee"}}}),o={name:"App",data:function(){return{style:r.appStyle}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main",style:this.style},[e("h1",[this._v(" True Colors ")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")(o,s,!1,function(t){n("wKiK")},"data-v-fe86f58a",null).exports,c=n("//Fk"),l=n.n(c);var u=function(){window.dataLayer.push(arguments)};var d={install:function(t,e){var n,a=e.trackId,r=e.disabled,o=e.log;if(r||(n="https://www.googletagmanager.com/gtag/js?id="+a,new l.a(function(t,e){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");r.async=!0,r.src=n,r.charset="utf8",a.appendChild(r),r.onload=t,r.onerror=e})),function(t){window.dataLayer=window.dataLayer||[],u("js",new Date),u("config",t)}(a),o){var s=u;u=function(){console.log(arguments),s(arguments)}}t.prototype.$ga=u,t.prototype.$gaEvent=function(t,e){var n=e.category,a=e.label,r=e.value;u("event",t,{event_category:n,event_label:a,value:r})}}},p=n("/ocq"),h=n("TQvf"),v=n.n(h),f={props:["label"],methods:{copy:function(t){var e=new v.a(".null",{text:function(){return t.target.innerHTML.trim()}});e.onClick(t),this.$gaEvent("copy",{category:this.label,label:this.label,value:t}),e.destroy()}},data:function(){return{}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copy-box"},[e("div",{staticClass:"label"},[this._v("\n    "+this._s(this.label)+"\n  ")]),this._v(" "),e("div",{staticClass:"slot",on:{click:this.copy}},[this._t("default")],2)])},staticRenderFns:[]};var m={components:{CopyBox:n("VU/8")(f,g,!1,function(t){n("CWzW")},"data-v-6fc2906e",null).exports},props:["value"],computed:{rgb:function(){return this.value},hex:function(){return"#"+function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/\d{0,3}\.?\d+%?/g)||[]}(this.value).map(function(t){return parseFloat(t)}).reduce(function(t,e){var n=e.toString(16);return t+(1===n.length?"0"+n:n)},"")}},data:function(){return{}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rgb-view"},[e("CopyBox",{attrs:{label:"RGB(A)"}},[this._v(" "+this._s(this.rgb)+" ")]),this._v(" "),e("CopyBox",{attrs:{label:"HEX"}},[this._v(" "+this._s(this.hex)+" ")])],1)},staticRenderFns:[]};var b=n("VU/8")(m,y,!1,function(t){n("3iMh")},"data-v-7d4138d3",null).exports,w=n("M4fF"),_={components:{RgbView:b},methods:{updateRaw:function(){var t=this.$el?getComputedStyle(this.$el):{};this.$set(this,"raw",t["background-color"]),this.$forceUpdate()}},watch:{"style.background":Object(w.debounce)(function(){this.updateRaw()},400)},created:function(){var t=this;setTimeout(function(){t.updateRaw()},20)},data:function(){return{raw:"",style:r.appStyle}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"host",style:t.style,attrs:{id:"id"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.style.background,expression:"style.background"}],staticClass:"hasha",attrs:{type:"text",placeholder:"Givme a #hashbar"},domProps:{value:t.style.background},on:{input:function(e){e.target.composing||t.$set(t.style,"background",e.target.value)}}}),t._v(" "),n("RgbView",{attrs:{value:t.raw}})],1)},staticRenderFns:[]};var k=n("VU/8")(_,C,!1,function(t){n("/1V3")},"data-v-366b3c4a",null).exports;a.a.use(p.a);var x=new p.a({routes:[{path:"/",name:"landing-page",component:k}]});a.a.use(d,{disabled:!0,log:!1,trackId:"UA-119133959-1"}),a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:i},template:"<App/>"})},"Q0/0":function(t,e){},uMhA:function(t,e){},wKiK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.89f1fbfc76ca08e3da11.js.map