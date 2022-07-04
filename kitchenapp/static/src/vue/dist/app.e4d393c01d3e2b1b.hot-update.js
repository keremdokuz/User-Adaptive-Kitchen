"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_frontend"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookingRecipe */ \"./src/components/CookingRecipe.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    CookingRecipe: _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  computed: {\n    prediction() {\n      return this.currentPrediction ? this.currentPrediction : \"None\";\n    },\n\n    confidence() {\n      return this.currentConfidence > 0 ? `${this.currentConfidence}` : \"None\";\n    }\n\n  },\n  methods: {\n    async getPrediction() {\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/predict\").then(res => {\n        console.log(res);\n        this.currentPrediction = res['classLabel'];\n        this.currentConfidence = res['confidence'];\n      }).catch(err => console.log(err));\n    }\n\n  },\n  data: () => ({\n    currentPrediction: \"\",\n    currentConfidence: -1\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUZBO0FBN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlX2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP2FkOTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8di1hcHAtYmFyIGRlbnNlIGRhcms+XHJcbiAgICAgIDx2LXRvb2xiYXItdGl0bGU+VXNlciBBZGFwdGl2ZSBLaXRjaGVuPC92LXRvb2xiYXItdGl0bGU+XHJcblxyXG4gICAgICA8di10b29sYmFyLWl0ZW1zPlxyXG4gICAgICAgIDx2LWJ0biBAY2xpY2s9XCJnZXRQcmVkaWN0aW9uXCIgY2xhc3M9XCJtbC00XCIgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgID5HZXQgUHJlZGljdGlvbjwvdi1idG5cclxuICAgICAgICA+XHJcbiAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxyXG5cclxuICAgICAgPHYtY2FyZC10aXRsZT57eyBwcmVkaWN0aW9uIH19IHt7IGNvbmZpZGVuY2UgfX08L3YtY2FyZC10aXRsZT5cclxuICAgIDwvdi1hcHAtYmFyPlxyXG5cclxuICAgIDxDb29raW5nUmVjaXBlIC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2luZ1JlY2lwZSBmcm9tIFwiLi9Db29raW5nUmVjaXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJBcHBcIixcclxuXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQ29va2luZ1JlY2lwZSxcclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgcHJlZGljdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFByZWRpY3Rpb24gPyB0aGlzLmN1cnJlbnRQcmVkaWN0aW9uIDogXCJOb25lXCI7XHJcbiAgICB9LFxyXG4gICAgY29uZmlkZW5jZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudENvbmZpZGVuY2UgPiAwID8gYCR7dGhpcy5jdXJyZW50Q29uZmlkZW5jZX1gIDogXCJOb25lXCI7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFByZWRpY3Rpb24oKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcmVkaWN0XCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQcmVkaWN0aW9uID0gcmVzWydjbGFzc0xhYmVsJ107XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRDb25maWRlbmNlID0gcmVzWydjb25maWRlbmNlJ107XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRhdGE6ICgpID0+ICh7XHJcbiAgICBjdXJyZW50UHJlZGljdGlvbjogXCJcIixcclxuICAgIGN1cnJlbnRDb25maWRlbmNlOiAtMSxcclxuICB9KSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"v-app-bar\", {\n    attrs: {\n      dense: \"\",\n      dark: \"\"\n    }\n  }, [_c(\"v-toolbar-title\", [_vm._v(\"User Adaptive Kitchen\")]), _c(\"v-toolbar-items\", [_c(\"v-btn\", {\n    staticClass: \"ml-4\",\n    attrs: {\n      color: \"blue\"\n    },\n    on: {\n      click: _vm.getPrediction\n    }\n  }, [_vm._v(\"Get Prediction\")])], 1), _c(\"v-card-title\", [_vm._v(_vm._s(_vm.prediction) + \" \" + _vm._s(_vm.confidence))])], 1), _c(\"CookingRecipe\")], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvQXBwQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJkNTk1OTImLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUFBOztBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFvQkE7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZV9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP2UwOTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1hcHAtYmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZGVuc2U6IFwiXCIsIGRhcms6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgW192bS5fdihcIlVzZXIgQWRhcHRpdmUgS2l0Y2hlblwiKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItaXRlbXNcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5nZXRQcmVkaWN0aW9uIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR2V0IFByZWRpY3Rpb25cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJlZGljdGlvbikgKyBcIiBcIiArIF92bS5fcyhfdm0uY29uZmlkZW5jZSkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJDb29raW5nUmVjaXBlXCIpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3071886e6ab49da7"; }
/******/ }();
/******/ 
/******/ }
);