webpackJsonp([6],{

/***/ "1GVU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".section-content .content-img[data-v-76ef493f]{width:100%;margin:0 0 32px;transition:.3s}@media (min-width:576px){.section-content .content-img[data-v-76ef493f]{width:50%;margin:0 0 32px 32px}}@media (min-width:992px){.section-content .content-img[data-v-76ef493f]{width:30%}}.article-card[data-v-76ef493f]{max-width:calc(50% - 30px)}", "", {"version":3,"sources":["/Users/alinawalling/Documents/GitHub/duke-caps-web-app/src/components/pages/resources-pages/ResourcesHome.vue"],"names":[],"mappings":"AACA,+CACI,WAAY,AACZ,gBAAmB,AACnB,cAAiB,CACpB,AACD,yBACA,+CACQ,UAAW,AACX,oBAAsB,CAC7B,CACA,AACD,yBACA,+CACQ,SAAW,CAClB,CACA,AACD,+BACE,0BAA4B,CAC7B","file":"ResourcesHome.vue","sourcesContent":["\n.section-content .content-img[data-v-76ef493f] {\n    width: 100%;\n    margin: 0 0 32px 0;\n    transition: 0.3s;\n}\n@media (min-width: 576px) {\n.section-content .content-img[data-v-76ef493f] {\n        width: 50%;\n        margin: 0 0 32px 32px;\n}\n}\n@media (min-width: 992px) {\n.section-content .content-img[data-v-76ef493f] {\n        width: 30%;\n}\n}\n.article-card[data-v-76ef493f] {\n  max-width: calc(50% - 30px);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "J6/s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Resources")]),_vm._v(" "),_c('p',[_vm._v("\n        These self-help pages are another dimension of our service to the Duke community. We realize that many members of the community may want to learn more about certain mental health topics or about overall well-being. Regardless of your reasons, we hope you find these pages and links helpful.\n    ")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"divider"}),_vm._v(" "),_c('h1',[_vm._v("Resources for Parents, Family, and Friends")]),_vm._v(" "),_c('p',[_vm._v("Parents, siblings, friends, roommates, and romantic partners are often the first to notice that a student is struggling.  However, it is often difficult to determine the best way to help the student. We are available to talk you through some of your concerns and answer some of the questions you might have about how to approach a struggling student.")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',[_vm._v("If you are concerned about a student and wish to speak with a mental health professional, please call (919) 660-1000.")]),_vm._v(" "),_c('b-card-group',{attrs:{"deck":""}},_vm._l((_vm.parentsArticles),function(article,index){return _c('article-card',{key:index,attrs:{"article":article}})}))],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("For "),_c('strong',[_vm._v("student resources")]),_vm._v(", please check out the different sections of resources tailored to your specfic needs. If you're a parent or family member of a Duke student, you might want to check out the resources below.")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v("Some common reasons for using our Consultation Services include:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("Concern that a student is showing signs of impairment in daily functioning")]),_vm._v(" "),_c('li',[_vm._v("questions about a student’s development (academically or socially)")]),_vm._v(" "),_c('li',[_vm._v("alarm that a student is showing indications of self-destructive or unusual behaviors")]),_vm._v(" "),_c('li',[_vm._v("concern about a student whose family is experiencing a crisis")]),_vm._v(" "),_c('li',[_vm._v("need for information about referrals for more specialized services in the community")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Ui3p":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1GVU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5235266c", content, true, {});

/***/ }),

/***/ "jLKC":
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
    name: 'ResourcesHome',
    components: {
        ArticleCard: __WEBPACK_IMPORTED_MODULE_0__content_ArticleCard__["a" /* default */]
    },
    data() {
        return {
            articles: __WEBPACK_IMPORTED_MODULE_1__assets_data_articles_json___default.a.articles

        };
    },
    computed: {
        parentsArticles() {
            var list = [];
            for (var article in this.articles) {
                if (this.articles[article].type === "parent") {
                    list.push(this.articles[article]);
                }
            }
            return list;
        }
    }
});

/***/ }),

/***/ "vRts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResourcesHome_vue__ = __webpack_require__("jLKC");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76ef493f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResourcesHome_vue__ = __webpack_require__("J6/s");
function injectStyle (ssrContext) {
  __webpack_require__("Ui3p")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76ef493f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ResourcesHome_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76ef493f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ResourcesHome_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=6.b811ad652403d898f2a8.js.map