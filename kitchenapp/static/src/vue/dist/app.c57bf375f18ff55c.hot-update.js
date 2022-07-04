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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookingRecipe */ \"./src/components/CookingRecipe.vue\");\n/* harmony import */ var _MicrophoneSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MicrophoneSelection */ \"./src/components/MicrophoneSelection.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    CookingRecipe: _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MicrophoneSelection: _MicrophoneSelection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  computed: {\n    listenText() {\n      return this.listen ? \"Stop Listening\" : \"Start Listening\";\n    },\n\n    prediction() {\n      return this.currentPrediction ? this.currentPrediction : \"None\";\n    },\n\n    confidence() {\n      return this.currentConfidence > 0 ? `${this.currentConfidence}` : \"None\";\n    }\n\n  },\n  methods: {\n    handleListening() {\n      this.listen = !this.listen;\n\n      if (this.listen) {\n        this.getPrediction();\n      }\n    },\n\n    async getPrediction() {\n      this.isLoading = true;\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/predict\").then(res => {\n        console.log(res);\n        this.currentPrediction = res.data[\"classLabel\"];\n        this.currentConfidence = res.data[\"confidence\"];\n        this.isLoading = false;\n\n        if (this.listen) {\n          this.getPrediction();\n        }\n      }).catch(err => console.log(err));\n    }\n\n  },\n  data: () => ({\n    currentPrediction: \"\",\n    currentConfidence: -1,\n    isLoading: false,\n    listen: false\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQTJCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBWUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBdEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTdDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZV9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9BcHBCYXNlLnZ1ZT9hZDkxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHYtYXBwLWJhciBkZW5zZSBkYXJrPlxyXG4gICAgICA8di10b29sYmFyLXRpdGxlPlVzZXIgQWRhcHRpdmUgS2l0Y2hlbjwvdi10b29sYmFyLXRpdGxlPlxyXG5cclxuICAgICAgPHYtdG9vbGJhci1pdGVtcz5cclxuICAgICAgICA8TWljcm9waG9uZVNlbGVjdGlvbiAvPlxyXG5cclxuICAgICAgICA8di1idG4gdi1yaXBwbGUgQGNsaWNrPVwiaGFuZGxlTGlzdGVuaW5nXCIgY2xhc3M9XCJtbC00XCIgY29sb3I9XCJibHVlXCI+XHJcbiAgICAgICAgICB7eyBsaXN0ZW5UZXh0IH19XHJcbiAgICAgICAgPC92LWJ0bj5cclxuXHJcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgIHByZWRpY3Rpb246e3sgcHJlZGljdGlvbiB9fSBjb25maWRlbmNlOnt7IGNvbmZpZGVuY2UgfX1cclxuICAgICAgICAgIDx2LXByb2dyZXNzLWNpcmN1bGFyIHYtaWY9XCJpc0xvYWRpbmdcIiBpbmRldGVybWluYXRlIC8+XHJcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxyXG4gICAgPC92LWFwcC1iYXI+XHJcblxyXG4gICAgPHYtcm93PlxyXG4gICAgICA8di1jb2wgY29scz1cIjEwXCI+PENvb2tpbmdSZWNpcGUgLz48L3YtY29sPlxyXG4gICAgICA8di1jb2wgY29scz1cIjFcIj5oZWxsbzwvdi1jb2w+XHJcbiAgICA8L3Ytcm93PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2luZ1JlY2lwZSBmcm9tIFwiLi9Db29raW5nUmVjaXBlXCI7XHJcbmltcG9ydCBNaWNyb3Bob25lU2VsZWN0aW9uIGZyb20gXCIuL01pY3JvcGhvbmVTZWxlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkFwcFwiLFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDb29raW5nUmVjaXBlLFxyXG4gICAgTWljcm9waG9uZVNlbGVjdGlvbixcclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgbGlzdGVuVGV4dCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuID8gXCJTdG9wIExpc3RlbmluZ1wiIDogXCJTdGFydCBMaXN0ZW5pbmdcIjtcclxuICAgIH0sXHJcbiAgICBwcmVkaWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJlZGljdGlvbiA/IHRoaXMuY3VycmVudFByZWRpY3Rpb24gOiBcIk5vbmVcIjtcclxuICAgIH0sXHJcbiAgICBjb25maWRlbmNlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29uZmlkZW5jZSA+IDAgPyBgJHt0aGlzLmN1cnJlbnRDb25maWRlbmNlfWAgOiBcIk5vbmVcIjtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgaGFuZGxlTGlzdGVuaW5nKCkge1xyXG4gICAgICB0aGlzLmxpc3RlbiA9ICF0aGlzLmxpc3RlbjtcclxuICAgICAgaWYgKHRoaXMubGlzdGVuKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcmVkaWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZ2V0UHJlZGljdGlvbigpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcHJlZGljdFwiKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQcmVkaWN0aW9uID0gcmVzLmRhdGFbXCJjbGFzc0xhYmVsXCJdO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Q29uZmlkZW5jZSA9IHJlcy5kYXRhW1wiY29uZmlkZW5jZVwiXTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5saXN0ZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQcmVkaWN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRhdGE6ICgpID0+ICh7XHJcbiAgICBjdXJyZW50UHJlZGljdGlvbjogXCJcIixcclxuICAgIGN1cnJlbnRDb25maWRlbmNlOiAtMSxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsaXN0ZW46IGZhbHNlLFxyXG4gIH0pLFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"v-app-bar\", {\n    attrs: {\n      dense: \"\",\n      dark: \"\"\n    }\n  }, [_c(\"v-toolbar-title\", [_vm._v(\"User Adaptive Kitchen\")]), _c(\"v-toolbar-items\", [_c(\"MicrophoneSelection\"), _c(\"v-btn\", {\n    directives: [{\n      name: \"ripple\",\n      rawName: \"v-ripple\"\n    }],\n    staticClass: \"ml-4\",\n    attrs: {\n      color: \"blue\"\n    },\n    on: {\n      click: _vm.handleListening\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.listenText) + \" \")]), _c(\"v-card-title\", [_vm._v(\" prediction:\" + _vm._s(_vm.prediction) + \" confidence:\" + _vm._s(_vm.confidence) + \" \"), _vm.isLoading ? _c(\"v-progress-circular\", {\n    attrs: {\n      indeterminate: \"\"\n    }\n  }) : _vm._e()], 1)], 1)], 1), _c(\"v-row\", [_c(\"v-col\", {\n    attrs: {\n      cols: \"10\"\n    }\n  }, [_c(\"CookingRecipe\")], 1), _c(\"v-col\", {\n    attrs: {\n      cols: \"1\"\n    }\n  }, [_vm._v(\"hello\")])], 1)], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvQXBwQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJkNTk1OTImLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUFBOztBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQW9CQTtBQUFBO0FBQUE7QUFEQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7O0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZV9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP2UwOTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1hcHAtYmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZGVuc2U6IFwiXCIsIGRhcms6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgW192bS5fdihcIlVzZXIgQWRhcHRpdmUgS2l0Y2hlblwiKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXItaXRlbXNcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJNaWNyb3Bob25lU2VsZWN0aW9uXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW3sgbmFtZTogXCJyaXBwbGVcIiwgcmF3TmFtZTogXCJ2LXJpcHBsZVwiIH1dLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtNFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZUxpc3RlbmluZyB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0ubGlzdGVuVGV4dCkgKyBcIiBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIiBwcmVkaWN0aW9uOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByZWRpY3Rpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBjb25maWRlbmNlOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmNvbmZpZGVuY2UpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc0xvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcHJvZ3Jlc3MtY2lyY3VsYXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaW5kZXRlcm1pbmF0ZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LWNvbFwiLCB7IGF0dHJzOiB7IGNvbHM6IFwiMTBcIiB9IH0sIFtfYyhcIkNvb2tpbmdSZWNpcGVcIildLCAxKSxcbiAgICAgICAgICBfYyhcInYtY29sXCIsIHsgYXR0cnM6IHsgY29sczogXCIxXCIgfSB9LCBbX3ZtLl92KFwiaGVsbG9cIildKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=template&id=5bd59592&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2d404d874569cbbb"; }
/******/ }();
/******/ 
/******/ }
);