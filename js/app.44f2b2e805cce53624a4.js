webpackJsonp([1],{"/1V3":function(t,e){},"3iMh":function(t,e){},"43wN":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("uMhA"),n("Q0/0");var a=n("7+uW"),s=new a.a({data:{appStyle:{background:"#c0ffee"}}}),r={name:"App",data:function(){return{style:s.appStyle}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main",style:this.style},[e("h1",[this._v(" True Colors ")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(r,i,!1,function(t){n("wKiK")},"data-v-fe86f58a",null).exports,c=n("/ocq"),u=n("TQvf"),l=n.n(u),d={props:["label"],methods:{copy:function(t){var e=new l.a(".null",{text:function(){return t.target.innerHTML.trim()}});e.onClick(t),e.destroy()}},data:function(){return{}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copy-box"},[e("div",{staticClass:"label"},[this._v("\n    "+this._s(this.label)+"\n  ")]),this._v(" "),e("div",{staticClass:"slot",on:{click:this.copy}},[this._t("default")],2)])},staticRenderFns:[]};var h={components:{CopyBox:n("VU/8")(d,p,!1,function(t){n("43wN")},"data-v-64e043fb",null).exports},props:["value"],computed:{rgb:function(){return this.value},hex:function(){return"#"+function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/\d{0,3}\.?\d+%?/g)||[]}(this.value).map(function(t){return parseFloat(t)}).reduce(function(t,e){var n=e.toString(16);return t+(1===n.length?"0"+n:n)},"")}},data:function(){return{}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rgb-view"},[e("CopyBox",{attrs:{label:"RGB(A)"}},[this._v(" "+this._s(this.rgb)+" ")]),this._v(" "),e("CopyBox",{attrs:{label:"HEX"}},[this._v(" "+this._s(this.hex)+" ")])],1)},staticRenderFns:[]};var f=n("VU/8")(h,v,!1,function(t){n("3iMh")},"data-v-7d4138d3",null).exports,m=n("M4fF"),b={components:{RgbView:f},methods:{updateRaw:function(){var t=this.$el?getComputedStyle(this.$el):{};this.$set(this,"raw",t["background-color"]),this.$forceUpdate()}},watch:{"style.background":Object(m.debounce)(function(){this.updateRaw()},400)},created:function(){var t=this;setTimeout(function(){t.updateRaw()},20)},data:function(){return{raw:"",style:s.appStyle}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"host",style:t.style,attrs:{id:"id"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.style.background,expression:"style.background"}],staticClass:"hasha",attrs:{type:"text",placeholder:"Givme a #hashbar"},domProps:{value:t.style.background},on:{input:function(e){e.target.composing||t.$set(t.style,"background",e.target.value)}}}),t._v(" "),n("RgbView",{attrs:{value:t.raw}})],1)},staticRenderFns:[]};var y=n("VU/8")(b,g,!1,function(t){n("/1V3")},"data-v-366b3c4a",null).exports;a.a.use(c.a);var _=new c.a({routes:[{path:"/",name:"landing-page",component:y}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:o},template:"<App/>"})},"Q0/0":function(t,e){},uMhA:function(t,e){},wKiK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.44f2b2e805cce53624a4.js.map