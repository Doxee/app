(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59b62043"],{"10ab":function(t,e,i){},"1ee4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(t){t.preventDefault()}}},[i("fieldset",[i("legend",{staticClass:"style-3"},[t._v(t._s(t.$t("layouts-tabular-fields")))]),i("draggable",{attrs:{handle:".handle"},on:{end:t.sort},model:{value:t.sortList,callback:function(e){t.sortList=e},expression:"sortList"}},t._l(t.sortList,function(e){return i("div",{key:"tabular-layout-options-field-"+e.field,staticClass:"draggable"},[i("v-checkbox",{key:e.field,staticClass:"checkbox",attrs:{id:"tabular-layout-options-field-"+e.field,label:e.name,value:e.field,checked:t.fieldsInUse.includes(e.field)},on:{change:function(i){return t.toggleField(e.field)}}}),i("v-icon",{staticClass:"handle",attrs:{name:"drag_handle"}})],1)}),0)],1),i("label",{staticClass:"style-3",attrs:{for:"spacing"}},[t._v(t._s(t.$t("spacing")))]),i("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.spacing||"comfortable",options:{compact:t.$t("compact"),cozy:t.$t("cozy"),comfortable:t.$t("comfortable")},icon:"reorder"},on:{input:t.setSpacing}})],1)},s=[],l=i("cebc"),a=(i("6762"),i("2fdb"),i("75fc")),r=(i("28a5"),i("db0c")),o=i.n(r),c=i("c3ff"),f=i.n(c),u={mixins:[f.a],data:function(){return{sortList:null}},computed:{fieldsInUse:function(){var t=this;return this.viewQuery&&this.viewQuery.fields?""===this.viewQuery.fields?[]:this.viewQuery.fields.split(",").filter(function(e){return t.fields[e]}):o()(this.fields).filter(function(t){return!1===t.primary_key}).slice(0,5).map(function(t){return t.field})}},created:function(){this.initSortList()},methods:{setSpacing:function(t){this.$emit("options",{spacing:t})},toggleField:function(t){var e=Object(a["a"])(this.fieldsInUse);e.includes(t)?e.splice(e.indexOf(t),1):e.push(t);var i=this.sortList.map(function(t){return t.field}).filter(function(t){return e.includes(t)}).join();this.$emit("query",{fields:i})},sort:function(){var t=this;this.$emit("query",Object(l["a"])({},this.viewQuery,{fields:this.sortList.map(function(t){return t.field}).filter(function(e){return t.fieldsInUse.includes(e)}).join()}))},initSortList:function(){var t=this;this.sortList=[].concat(Object(a["a"])(this.fieldsInUse.map(function(e){return t.fields[e]})),Object(a["a"])(o()(this.fields).filter(function(e){return!t.fieldsInUse.includes(e.field)})))}},watch:{fields:function(){this.initSortList()}}},d=u,p=(i("f3a4"),i("2877")),h=Object(p["a"])(d,n,s,!1,null,"744aed56",null);e["default"]=h.exports},c3ff:function(t,e){t.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null}}}},f3a4:function(t,e,i){"use strict";var n=i("10ab"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-59b62043.5c158b4b.js.map