webpackJsonp([4],{

/***/ "/sd1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_ArticleCard__ = __webpack_require__("AdHv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_articles_json__ = __webpack_require__("W6qa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_data_articles_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_data_articles_json__);
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
    name: 'ResourcesStudent',
    components: {
        ArticleCard: __WEBPACK_IMPORTED_MODULE_0__content_ArticleCard__["a" /* default */]
    },
    data() {
        return {
            articles: __WEBPACK_IMPORTED_MODULE_1__assets_data_articles_json___default.a.articles

        };
    },
    computed: {
        studentArticles() {
            var list = [];
            for (var article in this.articles) {
                if (this.articles[article].type === "student") {
                    list.push(this.articles[article]);
                }
            }
            return list;
        }
    }
});

/***/ }),

/***/ "5p1R":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("I+tp");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("38fa6b12", content, true, {});

/***/ }),

/***/ "I+tp":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".section-content .content-img[data-v-6a1a9f06]{width:100%;margin:0 0 32px;transition:.3s}@media (min-width:576px){.section-content .content-img[data-v-6a1a9f06]{width:50%;margin:0 0 32px 32px}}@media (min-width:992px){.section-content .content-img[data-v-6a1a9f06]{width:30%}}", "", {"version":3,"sources":["/Users/alinawalling/Documents/GitHub/duke-caps-web-app/src/components/pages/resources-pages/ResourcesStudent.vue"],"names":[],"mappings":"AACA,+CACI,WAAY,AACZ,gBAAmB,AACnB,cAAiB,CACpB,AACD,yBACA,+CACM,UAAW,AACX,oBAAsB,CAC3B,CACA,AACD,yBACA,+CACM,SAAW,CAChB,CACA","file":"ResourcesStudent.vue","sourcesContent":["\n.section-content .content-img[data-v-6a1a9f06] {\n    width: 100%;\n    margin: 0 0 32px 0;\n    transition: 0.3s;\n}\n@media (min-width: 576px) {\n.section-content .content-img[data-v-6a1a9f06] {\n      width: 50%;\n      margin: 0 0 32px 32px;\n}\n}\n@media (min-width: 992px) {\n.section-content .content-img[data-v-6a1a9f06] {\n      width: 30%;\n}\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "sHsi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Student Wellbeing Articles")]),_vm._v(" "),_c('p',[_vm._v("These self-help pages are another dimension of our service to the Duke community. We realize that many members of the community may want to learn more about overall well-being. Regardless of your reasons, we hope you find these pages and links helpful.")]),_vm._v(" "),_c('b-card-group',{attrs:{"deck":""}},_vm._l((_vm.studentArticles),function(article,index){return _c('article-card',{key:index,attrs:{"article":article}})}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "uyrh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResourcesStudent_vue__ = __webpack_require__("/sd1");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a1a9f06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResourcesStudent_vue__ = __webpack_require__("sHsi");
function injectStyle (ssrContext) {
  __webpack_require__("5p1R")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a1a9f06"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResourcesStudent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a1a9f06_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResourcesStudent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=4.6692f89ab8fc60d8f1a9.js.map