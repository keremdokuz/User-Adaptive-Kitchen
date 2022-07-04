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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookingRecipe */ \"./src/components/CookingRecipe.vue\");\n/* harmony import */ var _MicrophoneSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MicrophoneSelection */ \"./src/components/MicrophoneSelection.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    CookingRecipe: _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MicrophoneSelection: _MicrophoneSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  computed: {\n    prediction() {\n      return this.currentPrediction ? this.currentPrediction : \"None\";\n    },\n\n    confidence() {\n      return this.currentConfidence > 0 ? `${this.currentConfidence}` : \"None\";\n    }\n\n  },\n  methods: {\n    handleListening() {\n      this.listen = !this.listen;\n\n      if (this.listen) {\n        this.getPrediction();\n      }\n    },\n\n    async getPrediction() {\n      this.isLoading = true;\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/predict\").then(res => {\n        console.log(res);\n        this.currentPrediction = res.data[\"classLabel\"];\n        this.currentConfidence = res.data[\"confidence\"];\n        this.isLoading = false;\n\n        if (this.listen) {\n          this.getPrediction();\n        }\n      }).catch(err => console.log(err));\n    }\n\n  },\n  data: () => ({\n    currentPrediction: \"\",\n    currentConfidence: -1,\n    isLoading: false,\n    listen: false\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQTBCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7QUFTQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUF0QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBMUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlX2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP2FkOTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8di1hcHAtYmFyIGRlbnNlIGRhcms+XHJcbiAgICAgIDx2LXRvb2xiYXItdGl0bGU+VXNlciBBZGFwdGl2ZSBLaXRjaGVuPC92LXRvb2xiYXItdGl0bGU+XHJcblxyXG4gICAgICA8di10b29sYmFyLWl0ZW1zPlxyXG4gICAgICAgIDxNaWNyb3Bob25lU2VsZWN0aW9uIC8+XHJcblxyXG4gICAgICAgIDx2LWJ0biBAY2xpY2s9XCJoYW5kbGVMaXN0ZW5pbmdcIiBjbGFzcz1cIm1sLTRcIiBjb2xvcj1cImJsdWVcIj5cclxuICAgICAgICAgIEdldCBQcmVkaWN0aW9uIE5vdyEhXHJcbiAgICAgICAgPC92LWJ0bj5cclxuXHJcbiAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgcHJlZGljdGlvbjp7eyBwcmVkaWN0aW9uIH19IGNvbmZpZGVuY2U6e3sgY29uZmlkZW5jZSB9fVxyXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgPHYtcHJvZ3Jlc3MtY2lyY3VsYXIgdi1pZj1cImlzTG9hZGluZ1wiIGluZGV0ZXJtaW5hdGUgLz5cclxuICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxyXG4gICAgPC92LWFwcC1iYXI+XHJcblxyXG4gICAgPENvb2tpbmdSZWNpcGUgLz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpbmdSZWNpcGUgZnJvbSBcIi4vQ29va2luZ1JlY2lwZVwiO1xyXG5pbXBvcnQgTWljcm9waG9uZVNlbGVjdGlvbiBmcm9tIFwiLi9NaWNyb3Bob25lU2VsZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJBcHBcIixcclxuXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQ29va2luZ1JlY2lwZSxcclxuICAgIE1pY3JvcGhvbmVTZWxlY3Rpb24sXHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHByZWRpY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcmVkaWN0aW9uID8gdGhpcy5jdXJyZW50UHJlZGljdGlvbiA6IFwiTm9uZVwiO1xyXG4gICAgfSxcclxuICAgIGNvbmZpZGVuY2UoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDb25maWRlbmNlID4gMCA/IGAke3RoaXMuY3VycmVudENvbmZpZGVuY2V9YCA6IFwiTm9uZVwiO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBoYW5kbGVMaXN0ZW5pbmcoKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuID0gIXRoaXMubGlzdGVuO1xyXG4gICAgICBpZiAodGhpcy5saXN0ZW4pIHtcclxuICAgICAgICB0aGlzLmdldFByZWRpY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSwgIFxyXG5cclxuICAgIGFzeW5jIGdldFByZWRpY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcmVkaWN0XCIpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByZWRpY3Rpb24gPSByZXMuZGF0YVtcImNsYXNzTGFiZWxcIl07XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbmZpZGVuY2UgPSByZXMuZGF0YVtcImNvbmZpZGVuY2VcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3Rlbikge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlZGljdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgY3VycmVudFByZWRpY3Rpb246IFwiXCIsXHJcbiAgICBjdXJyZW50Q29uZmlkZW5jZTogLTEsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlzdGVuOiBmYWxzZSxcclxuICB9KSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"v-app-bar\", {\n    attrs: {\n      dense: \"\",\n      dark: \"\"\n    }\n  }, [_c(\"v-toolbar-title\", [_vm._v(\"User Adaptive Kitchen\")]), _c(\"v-toolbar-items\", [_c(\"MicrophoneSelection\"), _c(\"v-btn\", {\n    staticClass: \"ml-4\",\n    attrs: {\n      color: \"blue\"\n    },\n    on: {\n      click: _vm.handleListening\n    }\n  }, [_vm._v(\" Get Prediction Now!! \")]), _c(\"v-card-title\", [_c(\"v-card-text\", [_vm._v(\" prediction:\" + _vm._s(_vm.prediction) + \" confidence:\" + _vm._s(_vm.confidence) + \" \")]), _vm.isLoading ? _c(\"v-progress-circular\", {\n    attrs: {\n      indeterminate: \"\"\n    }\n  }) : _vm._e()], 1)], 1)], 1), _c(\"CookingRecipe\")], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvQXBwQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJkNTk1OTImLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUFBOztBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFxQkE7QUFBQTtBQUFBO0FBREE7QUFpQkE7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZV9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP2UwOTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1hcHAtYmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZGVuc2U6IFwiXCIsIGRhcms6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgW192bS5fdihcIlVzZXIgQWRhcHRpdmUgS2l0Y2hlblwiKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItaXRlbXNcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJNaWNyb3Bob25lU2VsZWN0aW9uXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtNFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZUxpc3RlbmluZyB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiBHZXQgUHJlZGljdGlvbiBOb3chISBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIiBwcmVkaWN0aW9uOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJlZGljdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgY29uZmlkZW5jZTpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmNvbmZpZGVuY2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc0xvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcHJvZ3Jlc3MtY2lyY3VsYXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaW5kZXRlcm1pbmF0ZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcIkNvb2tpbmdSZWNpcGVcIiksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1f6afce13064bfe6"; }
/******/ }();
/******/ 
/******/ }
);