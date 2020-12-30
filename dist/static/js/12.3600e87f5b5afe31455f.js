webpackJsonp([12],{

/***/ "2XD/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskBreadcrumb__ = __webpack_require__("7lUe");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'TaskSubmit',
  components: { TaskBreadcrumb: __WEBPACK_IMPORTED_MODULE_0__TaskBreadcrumb__["a" /* default */] },
  data() {
    return {
      title: '完成任务',
      model: {},
      remember: false
    };
  },
  mounted() {
    let self = this;
    this.$formValidate({
      'rules': {
        'wangwang': 'required|maxLength:64',
        'goodsName': 'required|maxLength:128',
        'keyword': 'required|maxLength:128',
        'orderTime': 'required|maxLength:128',
        'remark': 'maxLength:64'
      },
      'focus': true,
      'blockMode': true,
      'form': 'validateForm'
    }, {
      success: function () {
        if (self.remember) {
          document.getElementById('validateForm').reset();
        } else {
          self.$router.back();
        }
      }
    });
  }
});

/***/ }),

/***/ "2c/R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_BreadcrumbContainer__ = __webpack_require__("95Po");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: {
      type: String
    }
  },
  components: { BreadcrumbContainer: __WEBPACK_IMPORTED_MODULE_0__common_BreadcrumbContainer__["a" /* default */] }
});

/***/ }),

/***/ "4O2i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('task-breadcrumb',{attrs:{"title":_vm.title}}),_vm._v(" "),_c('el-form',{ref:"form",attrs:{"method":"post","action":_vm.$getReqUrl('/taskItem/create.do'),"id":"validateForm","onsubmit":"return false","label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"任务ID"}},[_c('el-col',{attrs:{"span":6}},[_vm._v("\n        "+_vm._s(_vm.$route.params.taskId)+"\n      ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"旺旺"}},[_c('el-col',{attrs:{"span":6}},[_c('el-input',{attrs:{"name":"wangwang","id":"wangwang","type":"text","placeholder":"旺旺"},model:{value:(_vm.model.wangwang),callback:function ($$v) {_vm.$set(_vm.model, "wangwang", $$v)},expression:"model.wangwang"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商品名称"}},[_c('el-col',{attrs:{"span":6}},[_c('el-input',{attrs:{"name":"goodsName","id":"goodsName","type":"text","placeholder":"商品名称"},model:{value:(_vm.model.goodsName),callback:function ($$v) {_vm.$set(_vm.model, "goodsName", $$v)},expression:"model.goodsName"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"关键字"}},[_c('el-col',{attrs:{"span":6}},[_c('el-input',{attrs:{"name":"keyword","id":"keyword","type":"text","placeholder":"关键字"},model:{value:(_vm.model.keyword),callback:function ($$v) {_vm.$set(_vm.model, "keyword", $$v)},expression:"model.keyword"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"订单时间"}},[_c('el-col',{attrs:{"span":6}},[_c('el-date-picker',{attrs:{"name":"orderTime","type":"datetime","placeholder":"选择日期时间"},model:{value:(_vm.model.orderTime),callback:function ($$v) {_vm.$set(_vm.model, "orderTime", $$v)},expression:"model.orderTime"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注"}},[_c('el-col',{attrs:{"span":6}},[_c('el-input',{attrs:{"name":"remark","id":"remark","type":"text","placeholder":"备注"},model:{value:(_vm.model.remark),callback:function ($$v) {_vm.$set(_vm.model, "remark", $$v)},expression:"model.remark"}})],1)],1),_vm._v(" "),_c('el-form-item',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$route.params.taskId),expression:"$route.params.taskId"}],attrs:{"type":"hidden","name":"taskId"},domProps:{"value":(_vm.$route.params.taskId)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$route.params, "taskId", $event.target.value)}}}),_vm._v(" "),_c('input',{staticClass:"_tip",attrs:{"type":"hidden","value":"提交成功！"}}),_vm._v(" "),_c('input',{staticClass:"_loading",attrs:{"type":"hidden","value":"1"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","native-type":"submit"}},[_vm._v("提交")]),_vm._v(" "),_c('el-checkbox',{model:{value:(_vm.remember),callback:function ($$v) {_vm.remember=$$v},expression:"remember"}},[_vm._v("提交后继续录入当前任务完成数据")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7lUe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TaskBreadcrumb_vue__ = __webpack_require__("2c/R");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b7bd4fe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TaskBreadcrumb_vue__ = __webpack_require__("ri3K");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TaskBreadcrumb_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b7bd4fe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TaskBreadcrumb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "95Po":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BreadcrumbContainer_vue__ = __webpack_require__("ydxt");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61b8e798_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BreadcrumbContainer_vue__ = __webpack_require__("kEFP");
function injectStyle (ssrContext) {
  __webpack_require__("L0cE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61b8e798"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BreadcrumbContainer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61b8e798_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BreadcrumbContainer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "L0cE":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("X4Iu");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("f42b5a18", content, true, {});

/***/ }),

/***/ "Uog3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Submit_vue__ = __webpack_require__("2XD/");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48bc322a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Submit_vue__ = __webpack_require__("4O2i");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Submit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48bc322a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Submit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "X4Iu":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".container[data-v-61b8e798]{position:relative;height:40px}.breadcrumb[data-v-61b8e798]{position:absolute;top:5px}.right-part[data-v-61b8e798]{position:absolute;right:0;top:-10px}", ""]);

// exports


/***/ }),

/***/ "kEFP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._t("breadcrumb"),_vm._v(" "),_c('div',{staticClass:"right-part"},[_vm._t("rightPart")],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ri3K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('breadcrumb-container',[_c('template',{slot:"breadcrumb"},[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',[_vm._v("任务中心")]),_vm._v(" "),(_vm.title)?[_c('el-breadcrumb-item',[_vm._v(_vm._s(_vm.title))])]:_vm._e()],2)],1),_vm._v(" "),_c('template',{slot:"rightPart"},[_vm._t("rightPart")],2)],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ydxt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'BreadcrumbContainer'
});

/***/ })

});