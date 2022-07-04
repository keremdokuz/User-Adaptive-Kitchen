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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookingRecipe */ \"./src/components/CookingRecipe.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  components: {\n    CookingRecipe: _CookingRecipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  computed: {\n    prediction() {\n      return this.currentPrediction ? this.currentPrediction : \"None\";\n    },\n\n    confidence() {\n      return this.currentConfidence > 0 ? `${this.currentConfidence}` : \"None\";\n    }\n\n  },\n  methods: {\n    async getPrediction() {\n      fetch(\"http://127.0.0.1:8000/predict\", {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'json'\n        }\n      }).then(res => console.log(res));\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/predict\").then(res => {\n        console.log(res);\n        this.currentPrediction = res['classLabel'];\n        this.currentConfidence = res['confidence'];\n      }).catch(err => console.log(err));\n    }\n\n  },\n  data: () => ({\n    currentPrediction: \"\",\n    currentConfidence: -1\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL0FwcEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBRkE7QUFuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVfZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvQXBwQmFzZS52dWU/YWQ5MSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2LWFwcC1iYXIgZGVuc2UgZGFyaz5cclxuICAgICAgPHYtdG9vbGJhci10aXRsZT5Vc2VyIEFkYXB0aXZlIEtpdGNoZW48L3YtdG9vbGJhci10aXRsZT5cclxuXHJcbiAgICAgIDx2LXRvb2xiYXItaXRlbXM+XHJcbiAgICAgICAgPHYtYnRuIEBjbGljaz1cImdldFByZWRpY3Rpb25cIiBjbGFzcz1cIm1sLTRcIiBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgPkdldCBQcmVkaWN0aW9uPC92LWJ0blxyXG4gICAgICAgID5cclxuICAgICAgPC92LXRvb2xiYXItaXRlbXM+XHJcblxyXG4gICAgICA8di1jYXJkLXRpdGxlPnt7IHByZWRpY3Rpb24gfX0ge3sgY29uZmlkZW5jZSB9fTwvdi1jYXJkLXRpdGxlPlxyXG4gICAgPC92LWFwcC1iYXI+XHJcblxyXG4gICAgPENvb2tpbmdSZWNpcGUgLz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raW5nUmVjaXBlIGZyb20gXCIuL0Nvb2tpbmdSZWNpcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkFwcFwiLFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDb29raW5nUmVjaXBlLFxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwcmVkaWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJlZGljdGlvbiA/IHRoaXMuY3VycmVudFByZWRpY3Rpb24gOiBcIk5vbmVcIjtcclxuICAgIH0sXHJcbiAgICBjb25maWRlbmNlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29uZmlkZW5jZSA+IDAgPyBgJHt0aGlzLmN1cnJlbnRDb25maWRlbmNlfWAgOiBcIk5vbmVcIjtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgZ2V0UHJlZGljdGlvbigpIHtcclxuICAgICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcHJlZGljdFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2pzb24nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcmVkaWN0XCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQcmVkaWN0aW9uID0gcmVzWydjbGFzc0xhYmVsJ107XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRDb25maWRlbmNlID0gcmVzWydjb25maWRlbmNlJ107XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRhdGE6ICgpID0+ICh7XHJcbiAgICBjdXJyZW50UHJlZGljdGlvbjogXCJcIixcclxuICAgIGN1cnJlbnRDb25maWRlbmNlOiAtMSxcclxuICB9KSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AppBase.vue?vue&type=script&lang=js&\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2b1dc5f6b38c4199"; }
/******/ }();
/******/ 
/******/ }
);