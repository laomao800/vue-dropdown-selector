(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("has-values"), require("vue-property-decorator"));
	else if(typeof define === 'function' && define.amd)
		define("dropdown-selector", ["has-values", "vue-property-decorator"], factory);
	else if(typeof exports === 'object')
		exports["dropdown-selector"] = factory(require("has-values"), require("vue-property-decorator"));
	else
		root["DropdownSelector"] = factory(root["HasValues"], root["VuePropertyDecorator"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(9);

var _hasValues = __webpack_require__(10);

var _hasValues2 = _interopRequireDefault(_hasValues);

var _clickOutSide = __webpack_require__(11);

var _clickOutSide2 = _interopRequireDefault(_clickOutSide);

var _getScrollParent = __webpack_require__(12);

var _getScrollParent2 = _interopRequireDefault(_getScrollParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var isEmpty = function isEmpty(val) {
    return !(0, _hasValues2.default)(val);
};
var DropdownSelector = function (_Vue) {
    _inherits(DropdownSelector, _Vue);

    function DropdownSelector() {
        _classCallCheck(this, DropdownSelector);

        var _this = _possibleConstructorReturn(this, (DropdownSelector.__proto__ || Object.getPrototypeOf(DropdownSelector)).apply(this, arguments));

        _this.showDropdown = false;
        _this.popupPosition = {};
        _this.scrollParents = [];
        return _this;
    }

    _createClass(DropdownSelector, [{
        key: "visibleChanged",
        value: function visibleChanged(val) {
            this.showDropdown = val;
        }
    }, {
        key: "selectionChange",
        value: function selectionChange(val) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.$emit('change', val);
                                _context.next = 3;
                                return this.$nextTick();

                            case 3:
                                if (this.appendToBody) {
                                    this.updatePopupPosition();
                                }

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "mounted",
        value: function mounted() {
            var _this2 = this;

            if (this.appendToBody) {
                document.body.appendChild(this.$refs.popupContainer);
                // 需要获取所有滚动父级，以确保多层滚动条场景下定位准确
                this.$nextTick().then(function () {
                    var loopGetScrollParent = function loopGetScrollParent(parentEle) {
                        var parent = parentEle;
                        if (parentEle === window.document.body || parentEle === window.document.documentElement) {
                            parent = window;
                        } else {
                            loopGetScrollParent((0, _getScrollParent2.default)(parent));
                        }
                        _this2.scrollParents.push(parent);
                    };
                    loopGetScrollParent((0, _getScrollParent2.default)(_this2.$refs.popupTrigger));
                    _this2.scrollParents.forEach(function (element) {
                        element.addEventListener('scroll', _this2.updatePopupPosition);
                    });
                });
            }
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            var _this3 = this;

            this.scrollParents.forEach(function (element) {
                element.removeEventListener('scroll', _this3.updatePopupPosition);
            });
            if (this.appendToBody) {
                var popup = this.$refs.popupContainer;
                popup.parentElement.removeChild(popup);
            }
        }
    }, {
        key: "removeOption",
        value: function removeOption(index) {
            if (Array.isArray(this.selection)) {
                var newSelection = [].concat(_toConsumableArray(this.selection.slice(0, index)), _toConsumableArray(this.selection.slice(index + 1, this.selection.length)));
                this.$emit('update:selection', newSelection);
            }
        }
    }, {
        key: "handleShowDropdown",
        value: function handleShowDropdown() {
            this.showDropdown = true;
            this.$emit('update:dropdownVisible', true);
            this.$emit('show-dropdown');
            if (this.appendToBody) {
                this.updatePopupPosition();
            }
        }
    }, {
        key: "handleHideDropdown",
        value: function handleHideDropdown() {
            this.showDropdown = false;
            this.$emit('update:dropdownVisible', false);
            this.$emit('hide-dropdown');
        }
    }, {
        key: "toggleDropdown",
        value: function toggleDropdown() {
            var newStatus = !this.showDropdown;
            newStatus ? this.handleShowDropdown() : this.handleHideDropdown();
            this.$emit('update:dropdownVisible', newStatus);
        }
    }, {
        key: "getPopupPosition",
        value: function getPopupPosition() {
            var triggerBounding = this.$refs.popupTrigger.getBoundingClientRect();
            var offsetLeft = triggerBounding.left + window.scrollX;
            var offsetTop = triggerBounding.bottom + window.scrollY;
            return {
                left: offsetLeft + "px",
                top: offsetTop + "px",
                width: this.dropdownWidth ? this.dropdownWidth + "px" : triggerBounding.width + "px"
            };
        }
    }, {
        key: "updatePopupPosition",
        value: function updatePopupPosition() {
            if (this.isShowDropdown) {
                this.popupPosition = this.getPopupPosition();
            }
        }
    }, {
        key: "isShowDropdown",
        get: function get() {
            return this.showDropdown;
        }
    }, {
        key: "isSelectionEmpty",
        get: function get() {
            return isEmpty(this.selection);
        }
    }, {
        key: "isMultiple",
        get: function get() {
            return this.multilple && Array.isArray(this.selection);
        }
    }, {
        key: "popupStyle",
        get: function get() {
            return Object.assign({ width: this.dropdownWidth ? this.dropdownWidth + "px" : null, zIndex: this.zIndex + 2 }, this.popupPosition);
        }
    }]);

    return DropdownSelector;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ default: function _default() {
        return [];
    } })], DropdownSelector.prototype, "selection", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: true })], DropdownSelector.prototype, "multilple", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' })], DropdownSelector.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false })], DropdownSelector.prototype, "dropdownVisible", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number })], DropdownSelector.prototype, "width", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number })], DropdownSelector.prototype, "dropdownWidth", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 1000 })], DropdownSelector.prototype, "zIndex", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false })], DropdownSelector.prototype, "appendToBody", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('dropdownVisible', { immediate: true })], DropdownSelector.prototype, "visibleChanged", null);
__decorate([(0, _vuePropertyDecorator.Watch)('selection')], DropdownSelector.prototype, "selectionChange", null);
DropdownSelector = __decorate([(0, _vuePropertyDecorator.Component)({
    directives: {
        ClickOutside: _clickOutSide2.default
    }
})], DropdownSelector);
exports.default = DropdownSelector;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdownSelector = __webpack_require__(2);

var _dropdownSelector2 = _interopRequireDefault(_dropdownSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dropdownSelector2.default;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_dropdown_selector_ts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_dropdown_selector_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_dropdown_selector_ts__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_dropdown_selector_ts__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_dropdown_selector_ts__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d1099c8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_selector_vue__ = __webpack_require__(13);
function injectStyle (ssrContext) {
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_ts_loader_transpileOnly_false_dropdown_selector_ts___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d1099c8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_selector_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5e2f2775", content, true, {});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.dropdown-selector {\n  position: relative;\n}\n.dropdown-selector--inline {\n  display: inline-block;\n}\n.dropdown-selector .selector__selection {\n  position: relative;\n  background-color: #fff;\n  background-image: none;\n  border-radius: 4px;\n  border: 1px solid #dcdfe6;\n  padding: 4px 30px 8px 8px;\n  -webkit-transition: border .2s;\n  transition: border .2s;\n  cursor: pointer;\n}\n.dropdown-selector .selector__selection:hover {\n  border-color: #BEC3CA;\n}\n.dropdown-selector .selector__arrow {\n  position: absolute;\n  right: 7px;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border: solid #c0c0c0;\n  border-width: 0 0 1px 1px;\n  -webkit-transition: -webkit-transform .5s;\n  transition: -webkit-transform .5s;\n  transition: transform .5s;\n  transition: transform .5s, -webkit-transform .5s;\n}\n.dropdown-selector.dropdown-selector--active .selector__arrow {\n  -webkit-transform: translate(-50%, -50%) rotate(135deg);\n          transform: translate(-50%, -50%) rotate(135deg);\n}\n.dropdown-selector .selector__placeholder {\n  padding-top: 4px;\n  line-height: 24px;\n  font-size: 14px;\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.dropdown-selector .selector__multiple {\n  min-height: 28px;\n}\n.dropdown-selector .selector__multiple .selector__option {\n  position: relative;\n  margin: 4px 4px 0 0;\n  background-color: #f0f2f5;\n  border-radius: 4px;\n  color: #999;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 24px 0 8px;\n  display: inline-block;\n  white-space: nowrap;\n  max-width: calc(100% - 34px);\n  vertical-align: top;\n}\n.dropdown-selector .selector__multiple .selector__option-text {\n  color: #999;\n  cursor: default;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dropdown-selector .selector__multiple .selector__option-close {\n  position: absolute;\n  background-color: #999;\n  cursor: pointer;\n  width: 12px;\n  height: 12px;\n  border-radius: 12px;\n  vertical-align: middle;\n  opacity: .6;\n  right: 8px;\n  top: 50%;\n  margin-top: -6px;\n}\n.dropdown-selector .selector__multiple .selector__option-close:hover {\n  opacity: 1;\n}\n.dropdown-selector .selector__multiple .selector__option-close::before,\n.dropdown-selector .selector__multiple .selector__option-close::after {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 1px;\n  background-color: #fff;\n  left: 50%;\n  top: 50%;\n  margin-left: -4px;\n}\n.dropdown-selector .selector__multiple .selector__option-close::before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.dropdown-selector .selector__multiple .selector__option-close::after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.dropdown-selector .selector__single {\n  padding-top: 4px;\n  min-height: 24px;\n}\n.dropdown-selector .selector__single .selector__option-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dropdown-selector__container {\n  position: absolute;\n  width: 100%;\n  border: 1px solid #e4e7ed;\n  border-radius: 4px;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n}\n.selector__container-trans-enter-active,\n.selector__container-trans-leave-active {\n  opacity: 1;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n  -webkit-transition: opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transition: opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n}\n.selector__container-trans-enter,\n.selector__container-trans-leave-active {\n  opacity: 0;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function validate(binding) {
    if (typeof binding.value !== 'function') {
        // tslint:disable-next-line:no-console
        console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.');
        return false;
    }
    return true;
}
function isPopup(popupItem, elements) {
    if (!popupItem || !elements) {
        return false;
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;

            try {
                if (popupItem.contains(element)) {
                    return true;
                }
                if (element.contains(popupItem)) {
                    return false;
                }
            } catch (e) {
                return false;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
}
function isServer(vNode) {
    return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer;
}
var directive = {
    bind: function bind(el, binding, vNode) {
        if (!validate(binding)) return;
        // Define Handler and cache it on the element
        function handler(e) {
            if (!vNode.context) return;
            // some components may have related popup item, on which we shall prevent the click outside event handler.
            var elements = e.path || e.composedPath && e.composedPath();
            elements && elements.length > 0 && elements.unshift(e.target);
            if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return;
            el.__vueClickOutside__.callback(e);
        }
        // add Event Listeners
        el.__vueClickOutside__ = {
            handler: handler,
            callback: binding.value
        };
        !isServer(vNode) && document.addEventListener('click', handler);
    },
    update: function update(el, binding) {
        if (validate(binding)) el.__vueClickOutside__.callback = binding.value;
    },
    unbind: function unbind(el, binding, vNode) {
        // Remove Event Listeners
        !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler);
        delete el.__vueClickOutside__;
    }
};
exports.default = directive;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollParent;
var root = window;
function getStyleComputedProperty(element, property) {
    var css = root.getComputedStyle(element);
    return css[property];
}
function getScrollParent(element) {
    var parent = element.parentNode;
    if (!parent) {
        return element;
    }
    if (parent === root.document) {
        if (root.document.body.scrollTop || root.document.body.scrollLeft) {
            return root.document.body;
        } else {
            return root.document.documentElement;
        }
    }
    if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
        return parent;
    }
    return getScrollParent(element.parentNode);
}
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleHideDropdown),expression:"handleHideDropdown"}],class:['dropdown-selector', {
    'dropdown-selector--active': _vm.isShowDropdown,
    'dropdown-selector--inline': _vm.width
  }],style:({
    width: (_vm.width + "px"),
    zIndex: _vm.isShowDropdown ? _vm.zIndex + 1 : _vm.zIndex
  })},[_c('div',{ref:"popupTrigger",staticClass:"selector__selection",on:{"click":_vm.toggleDropdown}},[(_vm.isSelectionEmpty)?_c('div',{staticClass:"selector__placeholder"},[_vm._v(_vm._s(_vm.placeholder))]):[(_vm.isMultiple)?_c('div',{staticClass:"selector__multiple"},_vm._l((_vm.selection),function(option,index){return _c('div',{key:index,staticClass:"selector__option"},[_c('div',{staticClass:"selector__option-text"},[_vm._t("selection",[_vm._v(_vm._s(option))],{selection:option})],2),_vm._v(" "),_c('div',{staticClass:"selector__option-close",on:{"click":function($event){$event.stopPropagation();_vm.removeOption(index)}}})])})):_c('div',{staticClass:"selector__single"},[_c('div',{staticClass:"selector__option-text"},[_vm._t("selection",[_vm._v(_vm._s(_vm.selection))],{selection:_vm.selection})],2)])],_vm._v(" "),_c('div',{staticClass:"selector__arrow"})],2),_vm._v(" "),_c('transition',{attrs:{"name":"selector__container-trans"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowDropdown),expression:"isShowDropdown"}],ref:"popupContainer",staticClass:"dropdown-selector__container",style:(_vm.popupStyle),on:{"click":function($event){$event.stopPropagation();}}},[_vm._t("default")],2)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});