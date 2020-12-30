webpackJsonp([17],{

/***/ "07PK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HelloWorld',
  data: function () {
    return {
      title: '内部管理平台'
    };
  }
});

/***/ }),

/***/ "5FAi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluesdk_logger__ = __webpack_require__("eUKg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("7t+N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);



let pagePlugin = {};
pagePlugin.install = function (Vue, options) {
  if (!Vue.utilPluginInstalled) {
    __WEBPACK_IMPORTED_MODULE_0_bluesdk_logger__["default"].error('you should install bluesdk-vue-util first');
    return;
  }
  if (!Vue.httpPluginInstalled) {
    __WEBPACK_IMPORTED_MODULE_0_bluesdk_logger__["default"].error('you should install bluesdk-vue-http first');
    return;
  }
  Vue.pagePluginInstalled = true;

  Vue.mixin({
    created: function () {
      if (this.$data['usePagePlugin']) {
        if (!this.query) this.query = {};
        if (!this.query.pageNum) {
          this.query.pageNum = this.$url.getPara('pageNum', 1);
        }
        this.$data['defaultQuery'] = this.$copyObject(this.query);
        let cQuery = this.$url.getQuery();
        for (let i in cQuery) {
          if (this.query.hasOwnProperty(i)) {
            this.query[i] = cQuery[i];
          }
        }
        this.fetchData(this.getServerUrl(this.query));
      }
    },
    watch: {
      '$route': function (route) {
        if (!this.$data['usePagePlugin']) return;
        let query = this.$copyObject(route.query);
        if (this.$isEmptyObject(route.query)) {
          this.query = this.$copyObject(this.$data['defaultQuery']);
        }
        for (let i in this.$data['defaultQuery']) {
          if (!route.query.hasOwnProperty(i)) {
            query[i] = this.$data['defaultQuery'][i];
          }
        }
        this.fetchData(this.getServerUrl(query));
      }
    },
    methods: {
      /**
       * elementUI 的排序方法
       */
      elSort({ column, prop, order }) {
        this.query.orderColumn = prop;
        if (order === 'ascending') {
          this.query.orderType = 'ASC';
        } else if (order === 'descending') {
          this.query.orderType = 'DESC';
        } else {
          this.query.orderType = '';
          this.query.orderColumn = '';
        }
        this.query.pageNum = 1;
        return this.search();
      },
      sort: function (event) {
        if (!this.query) {
          return;
        }
        let e = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.target);
        let column = e.data('column');
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.sorting_asc').each(function () {
          let t = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this);
          if (t.data('column') !== column) {
            t.removeClass('sorting_asc').addClass('sorting');
          }
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.sorting_desc').each(function () {
          let t = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this);
          if (t.data('column') !== column) {
            t.removeClass('sorting_desc').addClass('sorting');
          }
        });

        if (!e.hasClass('sorting_desc')) {
          e.removeClass('sorting').removeClass('sorting_asc').addClass('sorting_desc');
          this.query.orderType = 'DESC';
        } else {
          e.removeClass('sorting').removeClass('sorting_desc').addClass('sorting_asc');
          this.query.orderType = 'ASC';
        }
        this.query.orderColumn = column;
        this.query.pageNum = 1;
        return this.search();
      },
      refreshPage: function (para) {
        this.fetchData(this.getServerUrl(this.getSearchQuery(para)), true);
      },
      search: function (para) {
        this.$router.push({ path: this.$url.getUri(), query: this.getSearchQuery(para) });
      },
      getServerUrl: function (query) {
        // 服务器真实地址
        let url = this.$data['queryUrl'] || this.$url.getUri();
        return url + '?' + this.$url.queryToStr(query);
      },
      fetchData: function (url) {
        this.$getJson({ url: url });
      },
      getSearchQuery(para) {
        para = para || {};
        para['_t'] = new Date().getTime();
        if (para['pageNum'] === undefined) {
          para['pageNum'] = 1;
        }
        for (let key in para) {
          this.query[key] = para[key].toString().trim();
        }
        return this.query;
      }
    }
  });
};
/* harmony default export */ __webpack_exports__["a"] = (pagePlugin);

/***/ }),

/***/ "8sJK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IAux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "IcnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluesdk_url__ = __webpack_require__("prl1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluesdk_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bluesdk_url__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
let vm2 = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"](); // 实例化一个vue对象，为了在actions里面使用挂载在vue实例上的方法
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    // excel下载相关
    downloadFiles: {
      openTimerTask: false, // 是否启用定时获取下载列表任务
      isSureOpen: false // 是否确定允许打开弹窗
    }
  },
  getters: {},
  mutations: {
    changeStateVal({ downloadFiles }, { key, value }) {
      downloadFiles[key] = value;
    }
  },
  actions: {
    /**
     *  @url:表格下载接口地址
     *  @params：表格下载参数
     * */
    excelDownLoad({ commit }, { url, params }) {
      vm2.$getJson({
        url: url + '?' + __WEBPACK_IMPORTED_MODULE_2_bluesdk_url___default.a.queryToStr(params),
        cache: true,
        callback: function (vue, res) {
          if (res.content.downUrl) {
            window.location.href = res.content.downUrl;
          } else {
            commit('changeStateVal', { key: 'isSureOpen', value: true }); // 没有url则自动弹出下载列表
          }
        }
      });
      commit('changeStateVal', { key: 'openTimerTask', value: true }); // 开启下载列表定时服务
    }
  }
}));

/***/ }),

/***/ "KAJg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 一些公用方法
 */
let commonPlugin = {};
commonPlugin.install = function (Vue, options) {};
/* harmony default export */ __webpack_exports__["a"] = (commonPlugin);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28ce5acf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("IAux");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28ce5acf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_index_css__ = __webpack_require__("tvR6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_global_css__ = __webpack_require__("8sJK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluesdk_vue_util__ = __webpack_require__("HQjT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluesdk_vue_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bluesdk_vue_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bluesdk_vue_url__ = __webpack_require__("/MV4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bluesdk_vue_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bluesdk_vue_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plugins_httpPlugin__ = __webpack_require__("zG9y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plugins_pagePlugin__ = __webpack_require__("5FAi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_bluesdk_vue_format__ = __webpack_require__("Tqim");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_bluesdk_vue_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_bluesdk_vue_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bluesdk_vue_title__ = __webpack_require__("uEXE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bluesdk_vue_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_bluesdk_vue_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bluesdk_vue_enum__ = __webpack_require__("WBIY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bluesdk_vue_enum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_bluesdk_vue_enum__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__plugins_common__ = __webpack_require__("KAJg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__App_vue__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_notifier_page_notifierPage__ = __webpack_require__("dGPj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store__ = __webpack_require__("IcnI");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.















 // 引入store

__webpack_require__("hKoQ").polyfill();
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_11_bluesdk_vue_enum___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_bluesdk_vue_util___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_bluesdk_vue_url___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7__plugins_httpPlugin__["a" /* default */], {
  serverUrl: '/api',
  loginUrl: '#/userAuth/login',
  csrfUrl: '/common/csrf.action'
});
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8__plugins_pagePlugin__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_9_bluesdk_vue_format___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_bluesdk_vue_title___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_12__plugins_common__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_15__store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_13__App_vue__["a" /* default */] },
  mounted: function () {
    document.getElementById('page-loading').style.display = 'none';
    document.getElementById('body').style.display = 'block';
  }
});

__WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].beforeEach((to, from, next) => {
  __WEBPACK_IMPORTED_MODULE_14__modules_notifier_page_notifierPage__["a" /* default */].loading();
  next();
});

__WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].afterEach(route => {
  __WEBPACK_IMPORTED_MODULE_14__modules_notifier_page_notifierPage__["a" /* default */].hide();
  let arr = document.getElementsByClassName('_bluesdk_notifier');
  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i].remove();
  }
  window.scrollTo(0, 0);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$getCsrfToken();
});

/***/ }),

/***/ "WjAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluesdk_validator__ = __webpack_require__("GgCO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluesdk_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluesdk_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluesdk_notifier_arrow__ = __webpack_require__("foZd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluesdk_notifier_arrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluesdk_notifier_arrow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluesdk_mask_layer__ = __webpack_require__("LrNv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluesdk_post__ = __webpack_require__("TPJG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("7t+N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);






function FormUtil(validatorConfig, eventConfig) {
  let self = this;
  validatorConfig = validatorConfig || {};
  eventConfig = eventConfig || {};
  /**
   * 自定义某个字段的错误消息显示方式
   * @type Object {fieldName:notifier}
   */
  let specifyNotifier = eventConfig['specifyNotifier'] || {};
  /**
   * 默认错误信息提示器
   */
  this.notifier = eventConfig['notifier'] || __WEBPACK_IMPORTED_MODULE_1_bluesdk_notifier_arrow___default.a;
  if (typeof validatorConfig['form'] === 'string') {
    validatorConfig['form'] = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#' + validatorConfig['form']);
  }
  this.validator = new __WEBPACK_IMPORTED_MODULE_0_bluesdk_validator___default.a(validatorConfig);
  this.validator.onError = eventConfig['onError'] || function (event) {
    if (event['eventType'] === 'change') return;
    let name = event['name'];
    if (specifyNotifier[name]) {
      specifyNotifier[name].error(event['errorMsg'], event['validator'].getEl(name));
    } else {
      self.notifier.error(event['errorMsg'], event['validator'].getEl(name));
    }
  };
  this.validator.onSuccess = eventConfig['onSuccess'] || function (event) {
    if (specifyNotifier[event['name']]) {
      specifyNotifier[event['name']].hide(event['validator'].getEl(event['name']));
    } else {
      self.notifier.hide(event['validator'].getEl(event['name']));
    }
  };
  if (eventConfig['afterValidate']) {
    this.validator.afterValidate = eventConfig['afterValidate'];
  }
  let form = validatorConfig['form'];
  let showLoading = form.find('._loading').length;
  this.submitBtn = validatorConfig['buttonId'] ? __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#' + validatorConfig['buttonId']) : form.find(':submit');
  // 请求成功后
  let responseSuccess = function () {
    if (form.find('._lock').length) {
      __WEBPACK_IMPORTED_MODULE_2_bluesdk_mask_layer__["a" /* default */].show();
    }

    let tipEl = form.find('._tip');
    if (tipEl.length > 0) {
      self.notifier.success(tipEl.val());
    }
    let redirectEl = form.find('._redirect');
    if (redirectEl.length > 0) {
      let timeout = form.find('._timeout').val() || 1000;
      setTimeout(function () {
        window.location.href = redirectEl.val();
      }, timeout);
    }
  };

  self.fail = function (res) {
    if (res['errors']) {
      for (let name in res['errors']) {
        if (!res['errors'].hasOwnProperty(name)) continue;
        self.validator.addError(self.validator.errorEvent({ name: name, errorMsg: res['errors'][name] }));
      }
    } else {
      self.notifier.error(res['msg']);
    }
  };

  // 服务器处理 返回失败
  if (!eventConfig['fail']) {
    eventConfig['fail'] = self.fail;
  }

  if (!eventConfig['filter']) {
    eventConfig['filter'] = function (res) {
      return res['code'] === '00';
    };
  }

  // 调用验证
  self.validate = function () {
    if (eventConfig['beforeValidate'] && !eventConfig['beforeValidate'](self)) return false;
    return self.validator.run();
  };

  // 提交表单
  self.submit = function () {
    if (eventConfig['beforeSubmit'] && !eventConfig['beforeSubmit'](self)) {
      return false;
    }
    self.post();
  };
  self.post = function () {
    if (showLoading) {
      let tip = form.find('._loading').data('tip') || '提交中...';
      self.notifier.loading(tip, 60000);
    }
    // 对数据做转换
    let data;
    if (eventConfig['converter'] !== undefined) {
      let items = form.serializeArray();
      data = [];
      for (let i = 0, len = items.length; i < len; i++) {
        data.push(items[i].name + '=' + encodeURIComponent(eventConfig['converter'](items[i])));
      }
      data = data.join('&');
    } else {
      data = form.serialize();
    }

    Object(__WEBPACK_IMPORTED_MODULE_3_bluesdk_post__["a" /* post */])({
      'btn': self.submitBtn,
      'url': form.attr('action'),
      'data': data,
      'success': function (res) {
        responseSuccess();
        if (eventConfig['success']) {
          eventConfig['success'](res);
        }
      },
      'fail': function (res) {
        if (eventConfig['fail']) {
          eventConfig['fail'](res);
        }
      },
      'filter': function (res) {
        self.notifier.clear();
        if (eventConfig['filter']) {
          return eventConfig['filter'](res);
        }
      },
      'afterPost': function (res) {
        if (eventConfig['afterPost']) {
          eventConfig['afterPost'](res);
        }
      }
    });
  };

  this.submitBtn.click(function (e) {
    if (self.validate()) {
      if (!form.attr('onsubmit')) return true;
      self.submit();
    }
    return false;
  });
}

/* harmony default export */ __webpack_exports__["a"] = (FormUtil);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HelloWorld__ = __webpack_require__("gORT");




const PopPanel = resolve => __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Jwdq")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const ColumnTwo = resolve => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("hYxL")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);

//  账号相关
const UserAuthLogin = resolve => __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("6U7W")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const UserAuthActive = resolve => __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("UxJz")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const UpdatePasswd = resolve => __webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mnbf")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const UserCreate = resolve => __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("/03J")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const UserList = resolve => __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("+39n")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const UserUpdate = resolve => __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("4+0K")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);

// 类别管理
const StatGoods = resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("TYkZ")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const LogList = resolve => __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("epzS")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const ListSummaryDaily = resolve => __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("JHvq")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
// 任务中心
const TaskAdminList = resolve => __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("/B6o")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const TaskUserList = resolve => __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("RAMO")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const TaskAdminDone = resolve => __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("CGPe")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const TaskUserDone = resolve => __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("3829")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const TaskSubmit = resolve => __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Uog3")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: { name: 'home' }
  }, {
    path: '/userAuth',
    component: PopPanel,
    children: [{ name: 'userAuthLogin', path: 'login', component: UserAuthLogin }]
  }, {
    path: '/userAuth',
    component: PopPanel,
    children: [{ name: 'userAuthActive', path: 'active', component: UserAuthActive }]
  }, {
    path: '/',
    component: ColumnTwo,
    children: [{ name: 'updatePassword', path: 'user/updatePassword', component: UpdatePasswd },
    // 员工账号
    { name: 'userList', path: 'user/list.do', component: UserList }, { name: 'userCreate', path: 'user/create.do', component: UserCreate }, { name: 'userUpdate', path: 'user/update.do/:userId', component: UserUpdate },
    // 统计数据
    { name: 'statGoods', path: 'goods/stat.do', component: StatGoods }, { name: 'LogList', path: 'visitLog/list.do', component: LogList }, { name: 'listSummaryDaily', path: 'goods/listSummaryDaily.do', component: ListSummaryDaily },
    // 任务中心
    { name: 'taskAdminList', path: 'task/adminList.do', component: TaskAdminList }, { name: 'taskAdminDone', path: 'task/adminDone.do', component: TaskAdminDone }, { name: 'taskUserDone', path: 'task/userDone.do', component: TaskUserDone }, { name: 'taskUserList', path: 'task/userList.do', component: TaskUserList }, { name: 'taskSubmit', path: 'task/submit.do/:taskId', component: TaskSubmit }, { name: 'home', path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_HelloWorld__["a" /* default */] }]
  }]
}));

/***/ }),

/***/ "dGPj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter__ = __webpack_require__("JUJc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter__);


function NotifierPage() {
  let self = this;
  // 开放方法
  self.error = function (msg, el) {
    __WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter___default.a.error(msg);
  };

  self.info = function (msg) {
    __WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter___default.a.info(msg);
  };

  self.success = function (msg) {
    __WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter___default.a.success(msg);
  };

  self.loading = function (msg, timeout) {
    let e = document.getElementById('nav-loading');
    if (e) {
      e.style.display = 'block';
    }
    if (timeout) {
      setTimeout(function () {
        self.hide();
      }, timeout);
    }
  };

  self.hide = function (el) {
    let e = document.getElementById('nav-loading');
    if (e) {
      e.style.display = 'none';
    }
    __WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter___default.a.hide();
  };

  self.clear = function () {
    let e = document.getElementById('nav-loading');
    if (e) {
      e.style.display = 'none';
    }
    __WEBPACK_IMPORTED_MODULE_0_bluesdk_notifier_alter___default.a.clear();
  };
}

/* harmony default export */ __webpack_exports__["a"] = (new NotifierPage());

/***/ }),

/***/ "gORT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__ = __webpack_require__("07PK");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b491d4d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__ = __webpack_require__("tBZV");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b491d4d2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "mSD7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tBZV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  欢迎回来！\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "we5c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),

/***/ "zG9y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormUtil__ = __webpack_require__("WjAr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("7t+N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluesdk_notifier_alter__ = __webpack_require__("JUJc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluesdk_notifier_alter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bluesdk_notifier_alter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluesdk_post__ = __webpack_require__("TPJG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bluesdk_logger__ = __webpack_require__("eUKg");






let httpPlugin = {};
/**
 * options.serverUrl function
 * options.loginUrl
 * @param Vue
 * @param options
 */
httpPlugin.install = function (Vue, options) {
  if (!Vue.urlPluginInstalled) {
    __WEBPACK_IMPORTED_MODULE_4_bluesdk_logger__["default"].error('you should install bluesdk-vue-url first');
    return;
  }

  let notifier = options['notifier'] || __WEBPACK_IMPORTED_MODULE_2_bluesdk_notifier_alter___default.a;

  if (!options['login']) {
    options['login'] = function (res) {
      let loginUrl = options.loginUrl + '?fromUrl=' + encodeURIComponent(window.location.href);
      setTimeout(function () {
        notifier.error(res['msg']);
        window.location.href = loginUrl;
      }, 2000);
    };
  }
  Vue.httpPluginInstalled = true;
  /**
   * 对服务器响应数据进行过滤
   */
  Vue.prototype.$responseFilter = function (res) {
    if (res['code'] === '12') {
      if (options.csrfUrl) {
        Vue.prototype.$getJson({
          url: options.csrfUrl,
          callback: function (vue, res) {},
          loading: false,
          filter: function (res) {
            return res['code'] === '00';
          },
          fail: function () {}
        });
      }
    }
    if (res['code'] === '10') {
      options['login'](res);
    }
    if (res['code'] === '00') {
      window['csrf_pass'] = true;
      return true;
    }
    return false;
  };

  Vue.prototype.$httpErrorHandle = function (res) {
    res = res || { msg: '请求失败' };
    notifier.error(res['errors'] ? res['errors'] : res['msg']);
  };

  /**
   * 表单验证，事件绑定
   */
  Vue.prototype.$formValidate = function (validatorConfig, eventConfig) {
    if (!eventConfig) {
      eventConfig = {};
    }
    if (!eventConfig['filter']) {
      eventConfig['filter'] = this.$responseFilter;
    }
    let util = new __WEBPACK_IMPORTED_MODULE_0__FormUtil__["a" /* default */](validatorConfig, eventConfig);

    let self = this;
    setTimeout(function () {
      let input = document.createElement('input');
      input.name = '_token';
      input.type = 'hidden';
      if (window['csrf_pass'] && window['crsf_token']) {
        input.value = window['crsf_token'];
        validatorConfig['form'].append(input);
      } else {
        self.$getCsrfToken(function (token) {
          input.value = token;
          validatorConfig['form'].append(input);
        });
      }
    }, 1000);
    return util;
  };

  /**
   * 获取后端真实地址
   */
  Vue.prototype.$getReqUrl = function (url) {
    return options.serverUrl + url;
  };

  /**
   * 从服务器获取json数据
   */
  Vue.prototype.$getJson = function (params) {
    if (!params) params = {};
    let vue = this;
    if (!params['url']) {
      params['url'] = this.$url.getCurrentUrl();
    }
    if (params['cache'] === undefined) {
      params['cache'] = false;
    }
    if (params['data'] !== undefined) {
      let query = this.$url.queryToStr(params['data']);
      if (params['url'].indexOf('?') > 0) {
        params['url'] += '&' + query;
      } else {
        params['url'] += '?' + query;
      }
    }
    if (!params['cache']) {
      if (params['url'].indexOf('?') > 0) {
        params['url'] += '&_t=' + new Date().getTime();
      } else {
        params['url'] += '?_t=' + new Date().getTime();
      }
    }

    if (!params['callback']) {
      params['callback'] = function (vue, res) {
        vue.$data['content'] = res['data'];
      };
    }
    if (!params['filter']) {
      params['filter'] = this.$responseFilter;
    }
    if (!params['fail']) {
      params['fail'] = this.$httpErrorHandle;
    }

    if (params['loading'] === undefined) {
      params['loading'] = true;
    }

    if (params['loading']) {
      notifier.loading('加载中...');
    }

    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.getJSON(vue.$getReqUrl(params['url']), function (res) {
      if (params['loading']) {
        notifier.hide();
      }
      if (params['filter'](res)) {
        if (params['callback']) {
          params['callback'](vue, res);
        }
      } else {
        params['fail'](res);
      }
    }).fail(function () {
      params['fail']();
    }).always(function () {
      if (params['always']) {
        params['always']();
      }
    });
  };

  Vue.prototype.$post = function (config) {
    config['url'] = this.$getReqUrl(config['url']);
    if (!config['filter']) {
      config['filter'] = this.$responseFilter;
    }
    if (!config['beforePost']) {
      config['beforePost'] = function () {
        notifier.loading(config['loading-msg'] || '处理中...');
      };
    }
    if (!config['afterPost']) {
      config['afterPost'] = function () {
        notifier.hide();
      };
    }
    if (!config['success']) {
      config['success'] = function () {
        notifier.success(config['success-msg'] || '处理成功！');
      };
    }

    if (!config['fail']) {
      config['fail'] = this.$httpErrorHandle;
    }

    if (window['csrf_pass'] && window['crsf_token']) {
      config['data']['_token'] = window['crsf_token'];
      Object(__WEBPACK_IMPORTED_MODULE_3_bluesdk_post__["a" /* post */])(config);
    } else {
      this.$getCsrfToken(function (token) {
        config['data']['_token'] = token;
        Object(__WEBPACK_IMPORTED_MODULE_3_bluesdk_post__["a" /* post */])(config);
      }, function () {
        notifier.error('网络错误，请稍后重试。');
      });
    }
  };

  Vue.prototype.$getCsrfToken = function (success, fail) {
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.getJSON(this.$getReqUrl(options.csrfUrl) + '?_t=' + new Date().getTime(), function (res) {
      window['crsf_token'] = res.data;
      if (success) {
        success(res.data);
      }
    }).fail(function () {
      if (fail) {
        fail();
      }
    });
  };
};
/* harmony default export */ __webpack_exports__["a"] = (httpPlugin);

/***/ })

},["NHnr"]);