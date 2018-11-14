webpackJsonp([5],{

/***/ "+yVo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Mental Health Articles")]),_vm._v(" "),_c('p',[_vm._v("Learn more about your mental health with the articles below.")]),_vm._v(" "),_c('b-card-group',{attrs:{"deck":""}},_vm._l((_vm.mentalHealthArticles),function(article,index){return _c('article-card',{key:index,attrs:{"article":article}})}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "4qfg":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".section-content .content-img[data-v-dba688bc]{width:100%;margin:0 0 32px;transition:.3s}@media (min-width:576px){.section-content .content-img[data-v-dba688bc]{width:50%;margin:0 0 32px 32px}}@media (min-width:992px){.section-content .content-img[data-v-dba688bc]{width:30%}}", "", {"version":3,"sources":["/Users/alinawalling/Documents/GitHub/duke-caps-web-app/src/components/pages/resources-pages/ResourcesMentalHealth.vue"],"names":[],"mappings":"AACA,+CACI,WAAY,AACZ,gBAAmB,AACnB,cAAiB,CACpB,AACD,yBACA,+CACQ,UAAW,AACX,oBAAsB,CAC7B,CACA,AACD,yBACA,+CACQ,SAAW,CAClB,CACA","file":"ResourcesMentalHealth.vue","sourcesContent":["\n.section-content .content-img[data-v-dba688bc] {\n    width: 100%;\n    margin: 0 0 32px 0;\n    transition: 0.3s;\n}\n@media (min-width: 576px) {\n.section-content .content-img[data-v-dba688bc] {\n        width: 50%;\n        margin: 0 0 32px 32px;\n}\n}\n@media (min-width: 992px) {\n.section-content .content-img[data-v-dba688bc] {\n        width: 30%;\n}\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "7vkN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResourcesMentalHealth_vue__ = __webpack_require__("PSFA");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dba688bc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResourcesMentalHealth_vue__ = __webpack_require__("+yVo");
function injectStyle (ssrContext) {
  __webpack_require__("rh6h")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dba688bc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResourcesMentalHealth_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dba688bc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResourcesMentalHealth_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "PSFA":
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
    name: 'ResourcesMentalHealth',
    components: {
        ArticleCard: __WEBPACK_IMPORTED_MODULE_0__content_ArticleCard__["a" /* default */]
    },
    data() {
        return {
            articles: __WEBPACK_IMPORTED_MODULE_1__assets_data_articles_json___default.a.articles

        };
    },
    computed: {
        mentalHealthArticles() {
            var list = [];
            for (var article in this.articles) {
                if (this.articles[article].type === "mental-health") {
                    list.push(this.articles[article]);
                }
            }
            return list;
        }
    }
});

/***/ }),

/***/ "rh6h":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4qfg");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("d4bf2370", content, true, {});

/***/ })

});
//# sourceMappingURL=5.33972a730fd674adbb2f.js.map