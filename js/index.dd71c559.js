/*! @laomao800/vue-dropdown-selector v1.0.0 */(function(e){function t(t){for(var i,r,s=t[0],c=t[1],a=t[2],d=0,u=[];d<s.length;d++)r=s[d],n[r]&&u.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(u.length)u.shift()();return l.push.apply(l,a||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],i=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(i=!1)}i&&(l.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},n={index:0},l=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var p=c;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("e35a")},"32ee":function(e,t,o){var i=o("f8d5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("499e").default;n("8fef79ac",i,!0,{sourceMap:!1,shadowMode:!1})},4282:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,'.dropdown-selector{position:relative}.dropdown-selector--inline{display:inline-block}.dropdown-selector .selector__selection{position:relative;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;padding:4px 30px 8px 8px;-webkit-transition:border .2s;transition:border .2s;cursor:pointer}.dropdown-selector .selector__selection:hover{border-color:#bec3ca}.dropdown-selector .selector__arrow{position:absolute;right:7px;top:50%;-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg);display:inline-block;width:7px;height:7px;border:solid silver;border-width:0 0 1px 1px;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.dropdown-selector.dropdown-selector--active .selector__arrow{-webkit-transform:translate(-50%,-50%) rotate(135deg);transform:translate(-50%,-50%) rotate(135deg)}.dropdown-selector .selector__placeholder{padding-top:4px;line-height:24px;font-size:14px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dropdown-selector .selector__multiple{min-height:28px;line-height:1}.dropdown-selector .selector__multiple .selector__option{position:relative;margin:4px 4px 0 0;background-color:#f0f2f5;border-radius:4px;color:#999;font-size:14px;height:24px;line-height:24px;padding:0 24px 0 8px;display:inline-block;white-space:nowrap;max-width:calc(100% - 34px);vertical-align:top}.dropdown-selector .selector__multiple .selector__option-text{color:#999;cursor:default;text-overflow:ellipsis;overflow:hidden}.dropdown-selector .selector__multiple .selector__option-close{position:absolute;background-color:#999;cursor:pointer;width:12px;height:12px;border-radius:12px;vertical-align:middle;opacity:.6;right:8px;top:50%;margin-top:-6px}.dropdown-selector .selector__multiple .selector__option-close:hover{opacity:1}.dropdown-selector .selector__multiple .selector__option-close:after,.dropdown-selector .selector__multiple .selector__option-close:before{content:"";position:absolute;width:8px;height:1px;background-color:#fff;left:50%;top:50%;margin-left:-4px}.dropdown-selector .selector__multiple .selector__option-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.dropdown-selector .selector__multiple .selector__option-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.dropdown-selector .selector__single{padding-top:4px;min-height:24px;line-height:24px}.dropdown-selector .selector__single .selector__option-text{text-overflow:ellipsis;overflow:hidden}.dropdown-selector__container{overflow:hidden;position:absolute;width:100%;border:1px solid #e4e7ed;border-radius:4px;background-color:#fff;-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-shadow:0 2px 12px 0 rgba(0,0,0,.1);-webkit-box-sizing:border-box;box-sizing:border-box;margin:5px 0 0}.selector__container-trans-enter-active,.selector__container-trans-leave-active{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1),-webkit-transform .3s cubic-bezier(.23,1,.32,1);-webkit-transform-origin:center top;transform-origin:center top}.selector__container-trans-enter,.selector__container-trans-leave-active{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}',""])},a7e2:function(e,t,o){"use strict";var i=o("32ee"),n=o.n(i);n.a},cd4d:function(e,t,o){var i=o("4282");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("499e").default;n("1e082da6",i,!0,{sourceMap:!1,shadowMode:!1})},e35a:function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var i=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e._m(0),o("div",{staticClass:"wrap"},[o("div",{staticClass:"selector"},[o("dropdown-selector",{attrs:{selection:e.selectionWithList,multilple:!0,placeholder:"Select Items","append-to-body":!0},on:{"update:selection":function(t){e.selectionWithList=t}},scopedSlots:e._u([{key:"selection",fn:function(t){return[e._v(e._s(t.selection.label))]}}])},[o("ItemListSelector",{attrs:{data:e.listData},model:{value:e.selectionWithList,callback:function(t){e.selectionWithList=t},expression:"selectionWithList"}})],1)],1),o("div",{staticClass:"result"},[e._v(e._s(e.selectionWithList))])]),o("h2",[e._v("Single selection")]),o("div",{staticClass:"wrap"},[o("div",{staticClass:"selector"},[o("dropdown-selector",{attrs:{selection:e.selectionSingle,multilple:!1,placeholder:"Select single value","append-to-body":!0},on:{"update:selection":function(t){e.selectionSingle=t}}},[o("div",{staticClass:"dropdown-selector",staticStyle:{padding:"15px"}},[o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionSingle,expression:"selectionSingle"}],attrs:{name:"selectionSingle",type:"radio",value:"value1"},domProps:{checked:e._q(e.selectionSingle,"value1")},on:{change:function(t){e.selectionSingle="value1"}}}),e._v("value1\n          ")]),o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionSingle,expression:"selectionSingle"}],attrs:{name:"selectionSingle",type:"radio",value:"value2"},domProps:{checked:e._q(e.selectionSingle,"value2")},on:{change:function(t){e.selectionSingle="value2"}}}),e._v("value2\n          ")]),o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionSingle,expression:"selectionSingle"}],attrs:{name:"selectionSingle",type:"radio",value:"value3"},domProps:{checked:e._q(e.selectionSingle,"value3")},on:{change:function(t){e.selectionSingle="value3"}}}),e._v("value3\n          ")]),o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionSingle,expression:"selectionSingle"}],attrs:{name:"selectionSingle",type:"radio",value:"value4"},domProps:{checked:e._q(e.selectionSingle,"value4")},on:{change:function(t){e.selectionSingle="value4"}}}),e._v("value4\n          ")])])])],1),o("div",{staticClass:"result"},[e._v(e._s(e.selectionSingle))])]),o("h2",[e._v("Multiple selection")]),o("div",{staticClass:"wrap"},[o("div",{staticClass:"selector"},[o("dropdown-selector",{attrs:{selection:e.selectionMultiple,multilple:!0,placeholder:"Select multiple value"},on:{"update:selection":function(t){e.selectionMultiple=t}}},[o("div",{staticClass:"dropdown-selector",staticStyle:{padding:"15px"}},[o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionMultiple,expression:"selectionMultiple"}],attrs:{name:"selectionMultiple",type:"checkbox",value:"value1"},domProps:{checked:Array.isArray(e.selectionMultiple)?e._i(e.selectionMultiple,"value1")>-1:e.selectionMultiple},on:{change:function(t){var o=e.selectionMultiple,i=t.target,n=!!i.checked;if(Array.isArray(o)){var l="value1",r=e._i(o,l);i.checked?r<0&&(e.selectionMultiple=o.concat([l])):r>-1&&(e.selectionMultiple=o.slice(0,r).concat(o.slice(r+1)))}else e.selectionMultiple=n}}}),e._v("value1\n          ")]),o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionMultiple,expression:"selectionMultiple"}],attrs:{name:"selectionMultiple",type:"checkbox",value:"value2"},domProps:{checked:Array.isArray(e.selectionMultiple)?e._i(e.selectionMultiple,"value2")>-1:e.selectionMultiple},on:{change:function(t){var o=e.selectionMultiple,i=t.target,n=!!i.checked;if(Array.isArray(o)){var l="value2",r=e._i(o,l);i.checked?r<0&&(e.selectionMultiple=o.concat([l])):r>-1&&(e.selectionMultiple=o.slice(0,r).concat(o.slice(r+1)))}else e.selectionMultiple=n}}}),e._v("value2\n          ")]),o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionMultiple,expression:"selectionMultiple"}],attrs:{name:"selectionMultiple",type:"checkbox",value:"value3"},domProps:{checked:Array.isArray(e.selectionMultiple)?e._i(e.selectionMultiple,"value3")>-1:e.selectionMultiple},on:{change:function(t){var o=e.selectionMultiple,i=t.target,n=!!i.checked;if(Array.isArray(o)){var l="value3",r=e._i(o,l);i.checked?r<0&&(e.selectionMultiple=o.concat([l])):r>-1&&(e.selectionMultiple=o.slice(0,r).concat(o.slice(r+1)))}else e.selectionMultiple=n}}}),e._v("value3\n          ")]),o("label",{staticStyle:{"margin-right":"10px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectionMultiple,expression:"selectionMultiple"}],attrs:{name:"selectionMultiple",type:"checkbox",value:"value4"},domProps:{checked:Array.isArray(e.selectionMultiple)?e._i(e.selectionMultiple,"value4")>-1:e.selectionMultiple},on:{change:function(t){var o=e.selectionMultiple,i=t.target,n=!!i.checked;if(Array.isArray(o)){var l="value4",r=e._i(o,l);i.checked?r<0&&(e.selectionMultiple=o.concat([l])):r>-1&&(e.selectionMultiple=o.slice(0,r).concat(o.slice(r+1)))}else e.selectionMultiple=n}}}),e._v("value4\n          ")])])])],1),o("div",{staticClass:"result"},[e._v(e._s(e.selectionMultiple))])]),o("h2",[e._v("Object data selection")]),o("div",{staticClass:"wrap"},[o("div",{staticClass:"selector"},[o("dropdown-selector",{attrs:{selection:e.selectionObject,multilple:!0,placeholder:"Select months","append-to-body":!0},on:{"update:selection":function(t){e.selectionObject=t}},scopedSlots:e._u([{key:"selection",fn:function(t){return[e._v(e._s(t.selection.short))]}}])},[o("div",{staticClass:"dropdown-selector",staticStyle:{padding:"15px"}},e._l(e.months,function(t){return o("label",{key:t.value,staticStyle:{display:"inline-block",width:"30%","margin-right":"10px"}},[o("input",{attrs:{type:"checkbox"},domProps:{checked:e.selectionObject.indexOf(t)>-1},on:{change:function(o){e.handleMonthSelect(o,t)}}}),e._v("\n            "+e._s(t.label)+"\n          ")])}),0)])],1),o("div",{staticClass:"result"},[e._v(e._s(e.selectionObject))])])])},l=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h2",[e._v("\n    Work with\n    "),o("a",{attrs:{href:"https://github.com/laomao800/vue-item-list-selector",target:"_blank"}},[e._v("vue-item-list-selector")])])}],r=(o("20d6"),o("6c7b"),o("6b54"),o("2909")),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.handleHideDropdown,expression:"handleHideDropdown"}],class:["dropdown-selector",{"dropdown-selector--active":e.showDropdown,"dropdown-selector--inline":e.width}],style:e.triggerStyle},[o("div",{ref:"popupTrigger",staticClass:"selector__selection",on:{click:e.toggleDropdown}},[e.isSelectionEmpty?o("div",{staticClass:"selector__placeholder"},[e._v(e._s(e.placeholder))]):[e.isMultiple?o("div",{staticClass:"selector__multiple"},e._l(e.selection,function(t,i){return o("div",{key:i,staticClass:"selector__option"},[o("div",{staticClass:"selector__option-text"},[e._t("selection",[e._v(e._s(t))],{selection:t})],2),o("div",{staticClass:"selector__option-close",on:{click:function(t){t.stopPropagation(),e.removeOption(i)}}})])}),0):o("div",{staticClass:"selector__single"},[o("div",{staticClass:"selector__option-text"},[e._t("selection",[e._v(e._s(e.selection))],{selection:e.selection})],2)])],o("div",{staticClass:"selector__arrow"})],2),o("transition",{attrs:{name:"selector__container-trans"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showDropdown,expression:"showDropdown"}],ref:"popupContainer",staticClass:"dropdown-selector__container",style:e.popupStyle,on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)])],1)},c=[],a=(o("ac6a"),o("96cf"),o("1da1")),p=o("be94"),d=(o("c5f6"),o("8213")),u=o.n(d);o("ac4d"),o("8a81");function h(e){return"function"===typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function v(e,t){if(!e||!t)return!1;var o=!0,i=!1,n=void 0;try{for(var l,r=t[Symbol.iterator]();!(o=(l=r.next()).done);o=!0){var s=l.value;try{if(e.contains(s))return!0;if(s.contains(e))return!1}catch(c){return!1}}}catch(a){i=!0,n=a}finally{try{o||null==r.return||r.return()}finally{if(i)throw n}}return!1}function f(e){return"undefined"!==typeof e.componentInstance&&e.componentInstance.$isServer}var m={bind:function(e,t,o){function i(t){if(o.context){var i=t.path||t.composedPath&&t.composedPath();i&&i.length>0&&i.unshift(t.target),e.contains(t.target)||v(o.context.popupItem,i)||e.__vueClickOutside__.callback(t)}}h(t)&&(e.__vueClickOutside__={handler:i,callback:t.value},!f(o)&&document.addEventListener("click",i))},update:function(e,t){h(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){!f(o)&&document.removeEventListener("click",e.__vueClickOutside__.handler),delete e.__vueClickOutside__}},b=m,w=window;function _(e,t){var o=w.getComputedStyle(e);return o[t]}function g(e){var t=e.parentNode;return t?t===w.document?w.document.body.scrollTop||w.document.body.scrollLeft?w.document.body:w.document.documentElement:["scroll","auto"].indexOf(_(t,"overflow"))>-1||["scroll","auto"].indexOf(_(t,"overflow-x"))>-1||["scroll","auto"].indexOf(_(t,"overflow-y"))>-1?t:g(e.parentNode):e}o("cd4d");var x=function(e){return!u()(e)};function y(e){var t=/\d+%/.test(e),o=parseInt(e,10);return o?"".concat(o,t?"%":"px"):null}var k={name:"DropdownSelector",directives:{clickOutside:b},props:{selection:{default:function(){return[]}},multilple:{type:Boolean,default:!0},placeholder:{type:String,default:""},dropdownVisible:{type:Boolean,default:!1},width:{type:[Number,String]},dropdownWidth:{type:Number},dropdownZIndex:{type:Number,default:1e3},appendToBody:{type:Boolean,default:!1}},data:function(){return{showDropdown:!1,popupPosition:{},scrollParents:[]}},computed:{isSelectionEmpty:function(){return x(this.selection)},isMultiple:function(){return this.multilple&&Array.isArray(this.selection)},triggerStyle:function(){return{width:y(this.dropdownWidth)}},popupStyle:function(){return Object(p["a"])({width:y(this.dropdownWidth),zIndex:this.zIndex+2},this.popupPosition)}},watch:{dropdownVisible:{immediate:!0,handler:function(e){this.showDropdown=e}},selection:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$emit("change",t),e.next=3,this.$nextTick();case 3:this.appendToBody&&this.updatePopupPosition();case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;this.appendToBody&&(document.body.appendChild(this.$refs.popupContainer),this.$nextTick().then(function(){var t=function t(o){var i=o;o===window.document.body||o===window.document.documentElement?i=window:t(g(i)),e.scrollParents.push(i)};t(g(e.$refs.popupTrigger)),e.scrollParents.forEach(function(t){t.addEventListener("scroll",e.updatePopupPosition)}),window.addEventListener("resize",e.updatePopupPosition)}))},beforeDestroy:function(){var e=this;if(this.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updatePopupPosition)}),this.appendToBody){var t=this.$refs.popupContainer;t.parentElement.removeChild(t),window.removeEventListener("resize",this.updatePopupPosition)}},methods:{removeOption:function(e){if(Array.isArray(this.selection)){var t=[].concat(Object(r["a"])(this.selection.slice(0,e)),Object(r["a"])(this.selection.slice(e+1,this.selection.length)));this.$emit("update:selection",t)}},handleShowDropdown:function(){this.showDropdown=!0,this.$emit("update:dropdownVisible",!0),this.$emit("show-dropdown"),this.appendToBody&&this.updatePopupPosition()},handleHideDropdown:function(){this.showDropdown=!1,this.$emit("update:dropdownVisible",!1),this.$emit("hide-dropdown")},toggleDropdown:function(){var e=!this.showDropdown;e?this.handleShowDropdown():this.handleHideDropdown(),this.$emit("update:dropdownVisible",e)},getPopupPosition:function(){var e=this.$refs.popupTrigger.getBoundingClientRect(),t=e.left+window.scrollX,o=e.bottom+window.scrollY;return{left:"".concat(t,"px"),top:"".concat(o,"px"),width:this.dropdownWidth?"".concat(this.dropdownWidth,"px"):"".concat(e.width,"px")}},updatePopupPosition:function(){this.showDropdown&&(this.popupPosition=this.getPopupPosition())}}},S=k,M=o("2877"),P=Object(M["a"])(S,s,c,!1,null,null,null);P.options.__file="index.vue";var O=P.exports,C=o("b530"),A=o.n(C);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return Object(r["a"])(Array(e)).map(function(e){return(~~(36*Math.random())).toString(36)}).join("")}var D={name:"App",components:{DropdownSelector:O,ItemListSelector:A.a},data:function(){return{listData:Array(6e3).fill().map(function(e,t){return{label:"".concat(t," - ").concat(j(3)),value:t}}),selectionSingle:"",selectionMultiple:[],selectionObject:[],selectionWithList:[],months:[{label:"January",short:"Jan",value:1},{label:"February",short:"Feb",value:2},{label:"March",short:"Mar",value:3},{label:"April",short:"Apr",value:4},{label:"May",short:"May",value:5},{label:"June",short:"Jun",value:6},{label:"July",short:"Jul",value:7},{label:"August",short:"Aug",value:8},{label:"September",short:"Sep",value:9},{label:"October",short:"Oct",value:10},{label:"November",short:"Nov",value:11},{label:"December",short:"Dec",value:12}]}},methods:{handleMonthSelect:function(e,t){if(e.target.checked)this.selectionObject.push(t);else{var o=this.selectionObject.findIndex(function(e){return e===t});o>-1&&this.selectionObject.splice(o,1)}}}},z=D,$=(o("a7e2"),Object(M["a"])(z,n,l,!1,null,null,null));$.options.__file="App.vue";var N=$.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(N)}}).$mount("#app")},f8d5:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".wrap{display:-webkit-box;display:-ms-flexbox;display:flex}.selector{width:400px}.result{white-space:pre-wrap;margin-left:20px;height:150px;overflow:auto;padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:12px;border:1px solid #eee}",""])}});