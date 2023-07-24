/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/font/BarefoodSignBrush.ttf */ \"./src/font/BarefoodSignBrush.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  font-family: \"Poppins\", sans-serif;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* colors */\n:root {\n  --HeaderTextColor: white;\n  --ColorPalette1: #081826;\n  --ColorPalette2: #073359;\n  --ColorPalette3: #3f688c;\n  --ColorPalette4: #a68c6d;\n  --ColorPalette5: #f2ccb6;\n}\n@font-face {\n  font-family: BarefoodSignBrush;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n/* Header */\n#headerNavbar {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: space-around;\n}\n.headerNavbarChild a {\n  text-decoration: none;\n}\n.headerNavbarChild {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--HeaderTextColor);\n}\n#headerNavbarImg {\n  height: 2rem;\n}\nheader {\n  background-color: var(--ColorPalette1);\n  padding: 1rem;\n  height: 4vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--ColorPalette3);\n}\n\n/* sections */\n.section1 {\n  display: block;\n  position: relative;\n  height: 60vh;\n}\n#section1Background {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60vh;\n  object-fit: cover;\n  object-position: 0 20%;\n  /* z-index: -1; */\n  filter: opacity(50%);\n  box-shadow: var(--ColorPalette1) 0px 0px 10px 3px;\n}\n#section1Title {\n  position: absolute;\n  color: var(--ColorPalette5);\n  text-shadow: #081826 0px 0px 10px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1.5rem;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -70%);\n  /* z-index: 1; */\n}\n\n.section2 {\n  display: flex;\n  padding: 1rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* height: 80vh; */\n  background-color: black;\n  gap: 1rem;\n  color: var(--ColorPalette5);\n}\n\n#section2Title {\n  font-size: 7rem;\n  font-weight: 300;\n  text-align: center;\n  /* margin-bottom: 1rem; */\n  font-family: BarefoodSignBrush;\n  color: white;\n}\n#section2Text {\n  width: 50%;\n  font-weight: 200;\n}\n.section2Img {\n  width: 60%;\n  height: auto;\n  object-fit: cover;\n  filter: opacity(100%);\n  box-shadow: var(--ColorPalette4) 0px 0px 10px 1px;\n}\n.indexSection2 {\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  filter: opacity(100%);\n  box-shadow: var(--ColorPalette4) 0px 0px 10px 1px;\n}\n\n/* book */\n#bookImg {\n  width: 50%;\n  height: auto;\n  object-fit: cover;\n  filter: opacity(100%);\n  box-shadow: var(--ColorPalette4) 0px 0px 10px 1px;\n}\n#buyButton {\n  background-color: var(--ColorPalette2);\n  color: var(--ColorPalette5);\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  font-size: 1.2rem;\n  font-weight: 300;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n/* contact */\n.contactLogos {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n/* footer */\nfooter {\n  background-color: var(--ColorPalette1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--ColorPalette5);\n  padding: 1rem;\n  height: 4vh;\n  gap: 0.5rem;\n}\n.footerText,\n.footerText h2 {\n  display: inline;\n  font-size: 0.8rem;\n  font-weight: 100;\n  text-align: center;\n}\n.footerSpan {\n  text-decoration: solid underline var(--ColorPalette5) 1px;\n  /* text-decoration: ; */\n  font-weight: 300;\n  /* font-size: 0.8rem; */\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBook: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_book_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/book.jpg */ \"./src/img/book.jpg\");\n\n\n\n\nfunction render() {\n  const $section1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"section2\"], null);\n  const $h1Book = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\", \"section2Title\", null, \"Book\");\n  const $imgBook = new Image();\n  $imgBook.src = _img_book_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  $imgBook.setAttribute(\"id\", \"bookImg\");\n  const $h3section2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h3\",\n    \"section2Text\",\n    null,\n    \"Just a french guy cooking, my personal cookbook. By buying this book not only you support me but you gain extra knowledge i have learned thoughout the years as a chef! You can buy it on Amazon via this button!\"\n  );\n  const buyButton = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"button\", \"buyButton\", null, \"Buy now!\");\n\n  buyButton.addEventListener(\"click\", () => {\n    window.open(\n      \"https://www.amazon.com/Just-French-Guy-Cooking-Recipes/dp/1787132234\"\n    );\n  });\n\n  $section1.appendChild($h1Book);\n  $section1.appendChild($imgBook);\n  $section1.appendChild($h3section2);\n  $section1.appendChild(buyButton);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($section1);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/book.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_ramenShot_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/ramenShot.jpg */ \"./src/img/ramenShot.jpg\");\n\n\n\n\nfunction render() {\n  const $section1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"section1\"], null);\n  const $img = new Image();\n  $img.src = _img_ramenShot_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  $img.id = \"section1Background\";\n  $section1.appendChild($img);\n  const $h1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\", \"section1Title\", null, \"Contact me!\");\n  $section1.appendChild($h1);\n\n  const $section2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"section2\"], null);\n  const $h2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", \"section2Title\", null, \"Social Media\");\n\n  const $twitterLogo = new Image();\n  $twitterLogo.src = \"https://img.icons8.com/fluent/48/000000/twitter.png\";\n  $twitterLogo.classList.add(\"contactLogo\");\n  $twitterLogo.addEventListener(\"click\", () => {\n    window.open(\"https://twitter.com/frenchguycookin\");\n  });\n  const $h3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h3\",\n    \"section2Text\",\n    [\"contactLogos\"],\n    \"@FrenchGuyCookin\"\n  );\n  $h3.appendChild($twitterLogo);\n\n  const $youtubeLogo = new Image();\n  $youtubeLogo.src = \"https://img.icons8.com/fluent/48/000000/youtube-play.png\";\n  $youtubeLogo.classList.add(\"contactLogo\");\n  $youtubeLogo.addEventListener(\"click\", () => {\n    window.open(\"https://www.youtube.com/channel/UCPzFLpOblZEaIx2lpym1l1A\");\n  });\n  const $h4 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h3\",\n    \"section2Text\",\n    [\"contactLogos\"],\n    \"@FrenchGuyCooking\"\n  );\n  $h4.appendChild($youtubeLogo);\n\n  const $instagramLogo = new Image();\n  $instagramLogo.src =\n    \"https://img.icons8.com/fluent/48/000000/instagram-new.png\";\n  $instagramLogo.classList.add(\"contactLogo\");\n  $instagramLogo.addEventListener(\"click\", () => {\n    window.open(\"https://www.instagram.com/frenchguycooking/\");\n  });\n  const $h5 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h3\",\n    \"section2Text\",\n    [\"contactLogos\"],\n    \"@frenchguycooking\"\n  );\n  $h5.appendChild($instagramLogo);\n\n  $section2.appendChild($h2);\n  $section2.appendChild($h3);\n  $section2.appendChild($h4);\n  $section2.appendChild($h5);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($section1);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($section2);\n  // $content.appendChild();\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nfunction render() {\n  const $footer = document.createElement(\"footer\");\n  const $h2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", null, [\"footerText\"], \"Made by \");\n  const $a = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"a\", null, [\"footerSpan\"], \"Ayman Rebai\");\n  $a.style.display = \"inline\";\n  $a.href = \"https://www.linkedin.com/in/rebai-ayman/\";\n  $a.target = \"_blank\";\n  $h2.appendChild($a);\n  $h2.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", null, null, \" Following \"));\n  const $span = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"span\", null, [\"footerSpan\"], null);\n  const $a2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"a\", null, null, \"The Odin Project\");\n  $a2.href = \"https://www.theodinproject.com/\";\n  $a2.target = \"_blank\";\n  $span.appendChild($a2);\n  $h2.appendChild($span);\n  $h2.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h2\", null, null, \" cirriculum.\"));\n  $footer.appendChild($h2);\n\n  const $h22 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h2\",\n    null,\n    [\"footerText\"],\n    \"All of the images are taken from \"\n  );\n  const $span2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"span\", null, [\"footerSpan\"], null);\n  const $a3 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"a\", null, null, \"Alexis Gabriel Aïnouz\");\n  $a3.href = \"https://www.youtube.com/@FrenchGuyCooking\";\n  $a3.target = \"_blank\";\n  $span2.appendChild($a3);\n  $h22.appendChild($span2);\n  $footer.appendChild($h22);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($footer);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_AlexTheFrench_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/AlexTheFrench.jpg */ \"./src/img/AlexTheFrench.jpg\");\n/* harmony import */ var _img_chefImg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/chefImg.jpg */ \"./src/img/chefImg.jpg\");\n\n\n\n\n\nfunction render() {\n  const $section1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"section1\"], null);\n  const img = new Image();\n  img.src = _img_AlexTheFrench_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  img.id = \"section1Background\";\n  $section1.appendChild(img);\n  const $h1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h1\",\n    \"section1Title\",\n    null,\n    \"Salut! I'm Alex, aka \\\"French Guy Cooking.\\\" Passionate about cuisine, I'm here to bring a world of international flavors to your kitchen. Let's embark on a culinary adventure together and explore the art of cooking, with a global twist!\"\n  );\n  $section1.appendChild($h1);\n\n  const $section2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"section2\"], null);\n  const img2 = new Image();\n  img2.src = _img_chefImg_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  img2.classList.add(\"indexSection2\");\n  $section2.appendChild(img2);\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($section1);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($section2);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $content: () => (/* binding */ $content),\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst $content = document.getElementById(\"content\");\n\nfunction createHtmlElement(type, id, arrayClasses, content) {\n  const element = document.createElement(type);\n  if (id) element.id = id;\n  if (arrayClasses)\n    arrayClasses.forEach((clase) => element.classList.add(clase));\n  if (content) element.textContent = content;\n  return element;\n}\nfunction home() {\n  $content.innerHTML = \"\";\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)();\n  (0,_home__WEBPACK_IMPORTED_MODULE_2__.createHome)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\n}\nfunction menu() {\n  $content.innerHTML = \"\";\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenu)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\n}\nfunction book() {\n  $content.innerHTML = \"\";\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)();\n  (0,_book__WEBPACK_IMPORTED_MODULE_4__.createBook)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\n}\nfunction contact() {\n  $content.innerHTML = \"\";\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_5__.createContact)();\n  (0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\n}\nfunction github() {\n  window.open(\"https://github.com/HappySlappyFace\", \"_blank\");\n}\n\ndocument.addEventListener(\"click\", (e) => {\n  const target = e.target.dataset.target;\n  //   console.log(\"wtf\", event.target.dataset.target);\n  if (target === \"Home\") home();\n  if (target === \"Menu\") menu();\n  if (target === \"Book\") book();\n  if (target === \"Contact\") contact();\n  if (target === \"Github\") github();\n});\ncontact();\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_ramenNoodles_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/ramenNoodles.webp */ \"./src/img/ramenNoodles.webp\");\n/* harmony import */ var _img_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pasta.jpg */ \"./src/img/pasta.jpg\");\n\n\n\n\n\nfunction render() {\n  const $section2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"section2\"], null);\n  const $h1Ramen = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\", \"section2Title\", null, \"Ramen\");\n  const $imgRamen = new Image();\n  $imgRamen.src = _img_ramenNoodles_webp__WEBPACK_IMPORTED_MODULE_2__;\n\n  $imgRamen.classList.add(\"section2Img\");\n  const $h3section2 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h3\",\n    \"section2Text\",\n    null,\n    \"Perfecting ramen noodles was no easy task. I faced countless trials, experimenting with broth and tirelessly kneading dough. Join me in unraveling the secrets of homemade ramen, where passion meets obsession. Get ready to be captivated by the enchanting world of ramen!\"\n  );\n  $section2.appendChild($h1Ramen);\n  $section2.appendChild($imgRamen);\n  $section2.appendChild($h3section2);\n\n  const $h1Pasta = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"h1\", \"section2Title\", null, \"Pasta\");\n  const $imgPasta = new Image();\n  $imgPasta.src = _img_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  $imgPasta.classList.add(\"section2Img\");\n  const $h3section2Pasta = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\n    \"h3\",\n    \"section2Text\",\n    null,\n    \"Pasta is a staple in my kitchen. I love experimenting with different shapes and flavors, and I'm always on the lookout for new pasta recipes. Join me in exploring the world of pasta, where we'll learn how to make pasta from scratch and discover the secrets of the perfect sauce.\"\n  );\n  $section2.appendChild($h1Pasta);\n  $section2.appendChild($imgPasta);\n  $section2.appendChild($h3section2Pasta);\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($section2);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNavbar: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n\n\n\n\nfunction render() {\n  const navbarItems = [\"Menu\", \"Book\", \"Contact\", \"Github\"];\n  const $header = document.createElement(\"header\");\n  const $ul = document.createElement(\"ul\");\n  $ul.setAttribute(\"id\", \"headerNavbar\");\n\n  const $li = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"li\", null, null, null);\n  const $img = new Image();\n  $img.id = \"headerNavbarImg\";\n  $img.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_2__;\n  $img.dataset.target = \"Home\";\n  $li.appendChild($img);\n  $li.classList.add(\"headerNavbarChild\");\n\n  $ul.appendChild($li);\n\n  navbarItems.forEach((item) => {\n    const $li = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"li\", null, null, item);\n    $li.dataset.target = item;\n    $li.classList.add(\"headerNavbarChild\");\n    $ul.appendChild($li);\n  });\n\n  $header.appendChild($ul);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($header);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/font/BarefoodSignBrush.ttf":
/*!****************************************!*\
  !*** ./src/font/BarefoodSignBrush.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"38a865fc25720b9ebb65.ttf\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/font/BarefoodSignBrush.ttf?");

/***/ }),

/***/ "./src/img/AlexTheFrench.jpg":
/*!***********************************!*\
  !*** ./src/img/AlexTheFrench.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76f87043d6085aeeafb6.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/AlexTheFrench.jpg?");

/***/ }),

/***/ "./src/img/book.jpg":
/*!**************************!*\
  !*** ./src/img/book.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5179917fbb70d3922bad.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/book.jpg?");

/***/ }),

/***/ "./src/img/chefImg.jpg":
/*!*****************************!*\
  !*** ./src/img/chefImg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f31f1e6c77104ce14ce.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/chefImg.jpg?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"207a6e4fba2d65bbef13.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/pasta.jpg":
/*!***************************!*\
  !*** ./src/img/pasta.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73a40c673254e073cebb.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/pasta.jpg?");

/***/ }),

/***/ "./src/img/ramenNoodles.webp":
/*!***********************************!*\
  !*** ./src/img/ramenNoodles.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b95f5dc1b12ba2087e1b.webp\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/ramenNoodles.webp?");

/***/ }),

/***/ "./src/img/ramenShot.jpg":
/*!*******************************!*\
  !*** ./src/img/ramenShot.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9547baf603e20284339b.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/img/ramenShot.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;