/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _css_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _css_card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);




function init(){
    const body =document.querySelector('body');

    const imageNumber = Math.floor((Math.random()*3)+1);

    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundImage=`url(../images/${imageNumber}.jpg)`;
    // body.style.backgroundImage='url(./images/' + imageNumber +'.jpg)';
    body.style.backgroundSize="cover";
    body.style.opacity="0.6";
    body.style.backgroundPosition="center";

    const main = document.createElement('main');
    main.classList.add('main-container');

    const mainitem = document.createElement('article');
    mainitem.classList.add('main-item');

    const gridcontainer = document.createElement('div');
    gridcontainer.classList.add('grid-container');

    mainitem.appendChild(gridcontainer);
    main.appendChild(mainitem);

    body.appendChild(main);
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.main-container{\r\n    height: 100vh; /* 화면 높이의 퍼센트 100vh->100% , 1vh->1%*/\r\n    display: flex;\r\n    display: -ms-flexbox;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.main-item{\r\n    height: 100vh;\r\n    width: 100vh;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 7 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item1{\r\n    background:#b46ae3; \r\n}\r\n\r\n.grid-container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr  1fr  1fr;\r\n    grid-template-columns: 1fr  1fr  1fr;\r\n    -ms-grid-rows: 1fr  1fr  1fr;\r\n    grid-template-rows: 1fr  1fr  1fr;\r\n    grid-gap: 10px;\r\n    height: 95vh;\r\n    margin-top: 10px;\r\n}\r\n.grid-container > *:nth-child(1){\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n}.grid-container > *:nth-child(2){\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n}.grid-container > *:nth-child(3){\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n}.grid-container > *:nth-child(4){\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n}.grid-container > *:nth-child(5){\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n}.grid-container > *:nth-child(6){\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 3;\r\n}.grid-container > *:nth-child(7){\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n}.grid-container > *:nth-child(8){\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 2;\r\n}.grid-container > *:nth-child(9){\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 3;\r\n}\r\n\r\n\r\n.item{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;        \r\n    overflow: hidden;\r\n    height: 100%;\r\n    background-color: #E0E0E0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.wrapper{\r\n    width: 95%;\r\n    height: 95%;\r\n    overflow: hidden;\r\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card{\r\n    display: grid;\r\n    display: -ms-grid;\r\n    height: 100%;\r\n    grid-gap: 3px;\r\n                        -ms-grid-rows: 35px 3px 73px 3px 74px 3px 74px;\r\n                        -ms-grid-columns: 1fr 3px 15px 3px 1fr;\r\n                            grid-template:\r\n    \"cityname cityname cityname\" 35px\r\n    \"tempair . airquality\" 73px \r\n    \"current-detail current-detail current-detail\" 74px\r\n    \"tommorrow tommorrow tommorrow\" 74px/\r\n    1fr  15px 1fr;\r\n}\r\n\r\n.cityname{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 5;\r\n    grid-area: cityname;\r\n    float: left;\r\n}\r\n\r\n.tempair{\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: tempair;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.airquality{\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 5;\r\n    grid-area: airquality;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.current-detail{\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 5;\r\n    grid-area: current-detail;\r\n    background-color: rosybrown;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    display: -ms-flexbox;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.tommorrow{\r\n    -ms-grid-row: 7;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 5;\r\n    grid-area: tommorrow;\r\n    background-color: rosybrown;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    display: -ms-flexbox;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.detail-wrapper{\r\n    width: 95%;\r\n    height: 85%;\r\n    overflow: hidden;\r\n}\r\n\r\n.detail-grid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    height: 100%;\r\n                    -ms-grid-rows: 18px 13px;\r\n                    -ms-grid-columns: 1fr 1fr 1fr;\r\n                        grid-template:\r\n        \"title title title title\" 18px\r\n        \"detail-item1 detail-item2 detail-item3 detail-item4\" 13px/\r\n         1fr 1fr 1fr;\r\n}\r\n\r\n.title{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 4;\r\n    grid-area: title;\r\n    float: left;\r\n}\r\n\r\n\r\n.detail-item1{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: detail-item1;\r\n    float: left;\r\n}\r\n\r\n.detail-item2{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: detail-item2;\r\n    float:right;\r\n}\r\n\r\n.detail-item3{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 3;\r\n    grid-area: detail-item3;\r\n    float: left;\r\n}\r\n\r\n.detail-item4{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 4;\r\n    grid-area: detail-item4;\r\n    float:right;\r\n}\r\n\r\nh2.title{\r\n    font-family: Arial, sans-serif;\r\n    margin: 0px;\r\n}\r\n\r\np.title{\r\n    font-size: 14px;\r\n    margin: 0px;\r\n    font-weight: 900;\r\n}\r\n\r\np.contents{\r\n    font-size: 12px;\r\n    margin: 0px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\np.percent{\r\n    font-family: 'Nanum Gothic Coding', monospace;\r\n    font-family: 'Noto Sans KR', sans-serif;\r\n    font-size: 30px;\r\n    margin: 0px;\r\n}\r\n\r\n.good{\r\n    color : #33CC33;\r\n}\r\n\r\n.bad{\r\n    color : #FF0000;\r\n}\r\n\r\n.normal{\r\n    color : #000000;\r\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherinit": () => (/* binding */ weatherinit)
/* harmony export */ });
const API_KEY = '58e9da005937758f4243219ec8dc3f2a';

const CITY = ['Ulsan','Busan','Seoul'];
const CITY_WEATHER = Array(CITY.length);

function weatherinit(){
    cityWeather();
}

const dateFormat = (date) =>{
    const hour = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
    const time = date.getMinutes() < 10 ? '0' +date.getMinutes() : date.getMinutes();

    return hour + ' : ' +time;
}

const  createItem = () =>{
    const gridcontainer = document.querySelector('.grid-container');
    CITY_WEATHER.forEach(function(value,idx){
        //title
        const title = document.createElement('h2');
        title.classList.add('title');
        title.innerText = CITY[idx];

        //cityName
        const cityName = document.createElement('div');
        cityName.classList.add('cityname');
        cityName.appendChild(title);

        //tempair
        const temperature = document.createElement('div');
        temperature.classList.add('tempair');

        //p.title
        const tempTitle = document.createElement('p');
        tempTitle.classList.add('title');
        tempTitle.innerText='Temperature';
        temperature.appendChild(tempTitle);

        //온도
        const percent = document.createElement('p');
        percent.classList.add('percent');
        percent.innerText=value.main.temp;
        temperature.appendChild(percent);

        //습도
        const humidity = document.createElement('div');
        humidity.classList.add('airquality');

        //p.title
        const humidityTitle = document.createElement('p');
        humidityTitle.classList.add('title');
        humidityTitle.innerText='Humidity';
        humidity.appendChild(humidityTitle);

        //온도
        const humiditypercent = document.createElement('p');
        humiditypercent.classList.add('percent');
        if(value.main.humidity > 40) humiditypercent.classList.add('good');
        humiditypercent.innerText=value.main.humidity;
        humidity.appendChild(humiditypercent);


        //deatil
        const detail = document.createElement('div');
        detail.classList.add('current-detail');

        //detailWrapper
        const detailWrapper = document.createElement('div');
        detailWrapper.classList.add('detail-wrapper');
        detail.appendChild(detailWrapper);

        //detail-grid
        const deatilGrid =document.createElement('div');
        deatilGrid.classList.add('detail-grid');
        detailWrapper.appendChild(deatilGrid);

        //title
        const detailTitle =document.createElement('div');
        detailTitle.classList.add('title');
        deatilGrid.appendChild(detailTitle);

        const pTitle = document.createElement('p');
        pTitle.classList.add('title');
        pTitle.innerText='Current Detail';
        detailTitle.appendChild(pTitle);

        //detail-item1
        const detailItem1 =document.createElement('div');
        detailItem1.classList.add('detail-item1');
        deatilGrid.appendChild(detailItem1);

        const item1Contents = document.createElement('p');
        item1Contents.classList.add('contents');
        item1Contents.innerText='Surise';
        detailItem1.appendChild(item1Contents);

        //detail-item2
        const detailItem2 =document.createElement('div');
        detailItem2.classList.add('detail-item2');
        deatilGrid.appendChild(detailItem2);

        const item2Contents = document.createElement('p');
        item2Contents.classList.add('contents');
        const sunriseDate = new Date(value.sys.sunrise*1000);
        item2Contents.innerText = dateFormat(sunriseDate);
        detailItem2.appendChild(item2Contents);

        //detail-item3
        const detailItem3 =document.createElement('div');
        detailItem3.classList.add('detail-item3');
        deatilGrid.appendChild(detailItem3);

        const item3Contents = document.createElement('p');
        item3Contents.classList.add('contents');
        item3Contents.innerText='Sunset';
        detailItem3.appendChild(item3Contents);

        //detail-item4
        const detailItem4 =document.createElement('div');
        detailItem4.classList.add('detail-item4');
        deatilGrid.appendChild(detailItem4);

        const item4Contents = document.createElement('p');
        item4Contents.classList.add('contents');
        const sunsetDate = new Date(value.sys.sunset*1000);
        item4Contents.innerText = dateFormat(sunsetDate);
        detailItem4.appendChild(item4Contents);

        //card
        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(cityName);
        card.appendChild(temperature);
        card.appendChild(humidity);
        card.appendChild(detail);

        //wrapper
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.appendChild(card);

        //item
        const item = document.createElement('div');
        item.classList.add('item');
        item.appendChild(wrapper);
        
        gridcontainer.appendChild(item);
    })
}

async  function cityWeather(){
    let idx =0;
    for(const cityName of CITY){
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(function(res){
            console.log(cityName);
            return res.json();
        })
        .then(function(json){
            CITY_WEATHER[idx]=json;
            idx++;
        })
        .catch(function(error){
            console.error('Error:', error)
        });
        
    }
    //item생성하기
    createItem();
}


/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_bodyonload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _load_weatherapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


(0,_load_bodyonload__WEBPACK_IMPORTED_MODULE_0__.init)();
(0,_load_weatherapi__WEBPACK_IMPORTED_MODULE_1__.weatherinit)();

})();

/******/ })()
;