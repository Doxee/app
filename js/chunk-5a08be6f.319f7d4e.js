(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a08be6f"],{"035b":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-many-to-many"},[!1===e.relationSetup?i("div",{staticClass:"notice"},[i("p",[i("v-icon",{attrs:{name:"warning"}}),e._v("\n      "+e._s(e.$t("interfaces-many-to-many-relation_not_setup"))+"\n    ")],1)]):e._e(),[e.items.length?i("div",{staticClass:"table"},[i("div",{staticClass:"header"},[i("div",{staticClass:"row"},e._l(e.columns,function(t){return i("button",{key:t.field,staticClass:"style-4",attrs:{type:"button"},on:{click:function(i){return e.changeSort(t.field)}}},[e._v("\n            "+e._s(t.name)+"\n            "),e.sort.field===t.field?i("v-icon",{attrs:{name:e.sort.asc?"arrow_downward":"arrow_upward"}}):e._e()],1)}),0)]),i("div",{staticClass:"body"},e._l(e.items,function(t){return i("div",{key:t[e.junctionPrimaryKey],staticClass:"row",on:{click:function(i){e.editExisting=t}}},[e._l(e.columns,function(n){return i("div",{key:n.field,staticClass:"no-wrap"},[i("v-ext-display",{attrs:{"interface-type":(n.fieldInfo||{}).interface||null,name:n.field,type:n.fieldInfo.type,datatype:n.fieldInfo.datatype,options:n.fieldInfo.options,value:t[e.junctionRelatedKey][n.field]}})],1)}),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("remove_related"),expression:"$t('remove_related')"}],staticClass:"remove-item",attrs:{type:"button"},on:{click:function(i){return i.stopPropagation(),e.removeRelated({junctionKey:t[e.junctionPrimaryKey],relatedKey:t[e.junctionRelatedKey][e.relatedKey],item:t})}}},[i("v-icon",{attrs:{name:"close"}})],1)],2)}),0)]):e._e(),i("button",{staticClass:"style-btn select",attrs:{type:"button"},on:{click:function(t){e.addNew=!0}}},[i("v-icon",{attrs:{name:"add"}}),e._v("\n      "+e._s(e.$t("add_new"))+"\n    ")],1),i("button",{staticClass:"style-btn select",attrs:{type:"button"},on:{click:function(t){e.selectExisting=!0}}},[i("v-icon",{attrs:{name:"playlist_add"}}),i("span",[e._v(e._s(e.$t("select_existing")))])],1)],e.selectExisting?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("select_existing"),buttons:{save:{text:"Save",color:"accent",loading:e.selectionSaving}},"action-required":""},on:{close:e.dismissSelection,save:e.saveSelection}},[i("div",{staticClass:"search"},[i("v-input",{staticClass:"search-input",attrs:{type:"search",placeholder:e.$t("search")},on:{input:e.onSearchInput}})],1),i("v-items",{staticClass:"items",attrs:{collection:e.relatedCollection,filters:e.filters,"view-query":e.viewQuery,"view-type":e.viewType,"view-options":e.viewOptions,selection:e.selection},on:{options:e.setViewOptions,query:e.setViewQuery,select:function(t){e.selection=t}}})],1)],1):e._e(),e.editExisting?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("editing_item"),buttons:{save:{text:"Save",color:"accent",loading:e.selectionSaving}}},on:{close:function(t){e.editExisting=!1},save:e.saveEdits}},[i("div",{staticClass:"edit-modal-body"},[i("v-form",{attrs:{fields:e.relatedCollectionFields,values:e.editExisting[e.junctionRelatedKey]},on:{"stage-value":e.stageValue}})],1)])],1):e._e(),e.addNew?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("creating_item"),buttons:{save:{text:"Save",color:"accent",loading:e.selectionSaving}}},on:{close:function(t){e.addNew=null},save:e.addNewItem}},[i("div",{staticClass:"edit-modal-body"},[i("v-form",{attrs:{"new-item":"",fields:e.relatedCollectionFields,values:e.relatedDefaultsWithEdits},on:{"stage-value":e.stageValue}})],1)])],1):e._e()],2)},s=[],l=(i("ac6a"),i("a745")),o=i.n(l),a=i("795b"),r=i.n(a),c=i("bd86"),u=(i("6762"),i("2fdb"),i("75fc")),d=i("cebc"),f=(i("55dd"),i("28a5"),i("7514"),i("8db2")),h=i.n(f),v={mixins:[h.a],name:"interface-many-to-many",data:function(){return{sort:{field:null,asc:!0},selectExisting:!1,selectionSaving:!1,selection:[],editExisting:null,addNew:null,edits:{},viewOptionsOverride:{},viewTypeOverride:null,viewQueryOverride:{},filtersOverride:[]}},computed:{relationSetup:function(){return!!this.relation},currentCollection:function(){return this.relation.collection_one.collection},relatedCollection:function(){return this.relation.junction.collection_one.collection},relatedCollectionFields:function(){return this.relation.junction.collection_one.fields},junctionCollectionFields:function(){return this.relation.collection_many.fields},relatedKey:function(){return this.$lodash.find(this.relation.junction.collection_one.fields,{primary_key:!0}).field},junctionPrimaryKey:function(){return this.$lodash.find(this.relation.collection_many.fields,{primary_key:!0}).field},junctionRelatedKey:function(){return this.relation.junction.field_many.field},visibleFields:function(){return!1===this.relationSetup?[]:this.options.fields?this.options.fields.split(",").map(function(e){return e.trim()}):[]},items:function(){var e=this;return!1===this.relationSetup?null:this.$lodash.orderBy((this.value||[]).filter(function(e){return!e.$delete}).filter(function(t){return null!=t[e.junctionRelatedKey]}),function(t){return t[e.junctionRelatedKey][e.sort.field]},this.sort.asc?"asc":"desc")},columns:function(){var e=this;return!1===this.relationSetup?null:this.visibleFields.map(function(t){return{fieldInfo:e.relatedCollectionFields[t],field:t,name:e.$helpers.formatTitle(t)}})},relatedDefaultValues:function(){return!1===this.relationSetup?null:this.relatedCollectionFields?this.$lodash.mapValues(this.relatedCollectionFields,function(e){return e.default_value}):null},relatedDefaultsWithEdits:function(){return!1===this.relationSetup?null:this.relatedDefaultValues?Object(d["a"])({},this.relatedDefaultValues,this.edits):null},filters:function(){return!1===this.relationSetup?null:[].concat(Object(u["a"])(this.options.preferences&&this.options.preferences.filters||[]),Object(u["a"])(this.filtersOverride))},viewOptions:function(){if(!1===this.relationSetup)return null;var e=this.options.preferences&&this.options.preferences.viewOptions||{};return Object(d["a"])({},e,this.viewOptionsOverride)},viewType:function(){return!1===this.relationSetup?null:this.viewTypeOverride?this.viewTypeOverride:this.options.preferences&&this.options.preferences.viewType||"tabular"},viewQuery:function(){if(!1===this.relationSetup)return null;var e=this.options.preferences&&this.options.preferences.viewQuery||{};return Object(d["a"])({},e,this.viewQueryOverride)}},created:function(){this.relationSetup&&(this.sort.field=this.visibleFields&&this.visibleFields[0],this.setSelection()),this.onSearchInput=this.$lodash.debounce(this.onSearchInput,200)},watch:{value:function(){this.setSelection()},relation:function(){this.relationSetup&&(this.sort.field=this.visibleFields&&this.visibleFields[0],this.setSelection())}},methods:{setViewOptions:function(e){this.viewOptionsOverride=Object(d["a"])({},this.viewOptionsOverride,e)},setViewQuery:function(e){this.viewQueryOverride=Object(d["a"])({},this.viewQueryOverride,e)},setSelection:function(){var e=this;this.value&&(this.selection=this.value.filter(function(e){return!e.$delete}).filter(function(t){return null!=t[e.junctionRelatedKey]}).map(function(t){return t[e.junctionRelatedKey]}))},changeSort:function(e){this.sort.field!==e?(this.sort.asc=!0,this.sort.field=e):this.sort.asc=!this.sort.asc},saveSelection:function(){var e=this;this.selectionSaving=!0;var t=(this.value||[]).filter(function(e){return!e.$delete}).filter(function(t){return t[e.junctionRelatedKey]}).map(function(t){return t[e.junctionRelatedKey][e.relatedKey]}),i=this.selection.map(function(t){return t[e.relatedKey]}),n=(this.value||[]).map(function(t){var n,s=(t[e.junctionRelatedKey]||{})[e.relatedKey];if(!s)return t;if(!1===i.includes(s))return n={},Object(c["a"])(n,e.junctionPrimaryKey,t[e.junctionPrimaryKey]),Object(c["a"])(n,"$delete",!0),n;if(t.$delete&&i.includes(s)){var l=Object(d["a"])({},t);return delete l.$delete,l}return t}),s=i.filter(function(e){return!1===t.includes(e)});(s.length>0?this.$api.getItem(this.relatedCollection,s.join(",")):r.a.resolve()).then(function(e){return e?e.data:null}).then(function(t){t&&(o()(t)?t.forEach(function(t){return n.push(Object(c["a"])({},e.junctionRelatedKey,t))}):n.push(Object(c["a"])({},e.junctionRelatedKey,t))),e.$emit("input",n),e.selectExisting=!1,e.selectionSaving=!1}).catch(function(t){e.$events.emit("error",{notify:e.$t("something_went_wrong_body"),error:t}),e.selectionSaving=!1,e.selectExisting=!1})},dismissSelection:function(){this.setSelection(),this.selectExisting=!1},stageValue:function(e){var t=e.field,i=e.value;this.$set(this.edits,t,i)},saveEdits:function(){var e=this;this.$emit("input",Object(u["a"])((this.value||[]||[]).map(function(t){return t.id===e.editExisting[e.junctionPrimaryKey]?Object(d["a"])({},t,Object(c["a"])({},e.junctionRelatedKey,Object(d["a"])({},t[e.junctionRelatedKey],e.edits))):t}))),this.edits={},this.editExisting=!1},addNewItem:function(){this.$emit("input",[].concat(Object(u["a"])(this.value||[]),[Object(c["a"])({},this.junctionRelatedKey,this.edits)])),this.edits={},this.addNew=!1},removeRelated:function(e){var t=this,i=e.junctionKey,n=e.relatedKey,s=e.item;i?this.$emit("input",(this.value||[]).map(function(e){var n;return e[t.junctionPrimaryKey]===i?(n={},Object(c["a"])(n,t.junctionPrimaryKey,e[t.junctionPrimaryKey]),Object(c["a"])(n,"$delete",!0),n):e})):i||n?this.$emit("input",(this.value||[]).filter(function(e){return(e[t.junctionRelatedKey]||{})[t.relatedKey]!==n})):this.$emit("input",(this.value||[]).filter(function(e){return!1===t.$lodash.isEqual(e,s)}))},onSearchInput:function(e){this.setViewQuery({q:e})}}},p=v,y=(i("e3cd"),i("2877")),m=Object(y["a"])(p,n,s,!1,null,"0d7ff018",null);t["default"]=m.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},"93ce":function(e,t,i){},e3cd:function(e,t,i){"use strict";var n=i("93ce"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-5a08be6f.319f7d4e.js.map