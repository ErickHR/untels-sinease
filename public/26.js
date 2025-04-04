(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/person/PersonList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/person/PersonList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dataList: []
    };
  },
  methods: {
    editItem: function editItem(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$emit('editItem', id);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    activeOrDesactiveItem: function activeOrDesactiveItem(id, status) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var body, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                body = {
                  id: id,
                  status: status
                };
                _context2.next = 4;
                return axios.post("person-active-desactive", body);

              case 4:
                response = _context2.sent;

                if (response.status == 200) {
                  if (response.data.value) {
                    _this2.getApiList();
                  }
                }

                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    showStatusItem: function showStatusItem(status) {
      return !status ? 'ACTIVAR' : 'DESACTIVAR';
    },
    changeToAddRegister: function changeToAddRegister() {
      this.$emit('changeToAddRegister', 'add');
    },
    getApiList: function getApiList(searchName) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var body, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                body = {
                  name: searchName
                };
                _context3.next = 4;
                return searchName;

              case 4:
                if (!_context3.sent) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return axios.post('person-search', body);

              case 7:
                _context3.t0 = _context3.sent;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return axios('person');

              case 12:
                _context3.t0 = _context3.sent;

              case 13:
                response = _context3.t0;

                if (response.status == 200) {
                  if (response.data.value) {
                    _this3.dataList = _objectSpread({}, response.data.data);
                  }
                }

                _context3.next = 19;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t1 = _context3["catch"](0);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 17]]);
      }))();
    },
    showStatus: function showStatus(status) {
      return status ? 'ACTIVO' : 'DESACTIVADO';
    },
    showIconStatus: function showIconStatus(status) {
      return status ? 'ACTIVO' : 'DESACTIVADO';
    }
  },
  mounted: function mounted() {
    this.getApiList();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/person/PersonList.vue?vue&type=template&id=1640837e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/person/PersonList.vue?vue&type=template&id=1640837e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "justify-content-center" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-10 col-md-10 col-sm-10 col-10 " }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header border-0" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-sm-right col-12 col-sm-9 mt-sm-0 mt-2" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success btn-icon",
                      attrs: { type: "button" },
                      on: { click: _vm.changeToAddRegister },
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v(
                          "\n                                        Agregar registro\n                                    "
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table align-items-center table-flush table-hover",
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.dataList, function (data, index) {
                    return _c("tr", { key: index, staticClass: "list" }, [
                      _c("td", { staticClass: "text-muted" }, [
                        _c("b", [_vm._v(_vm._s(data.full_name))]),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }, [
                        _c("b", [
                          _vm._v(
                            _vm._s(data.position ? data.position.name : "")
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-muted" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _c("div", { staticClass: "dropdown" }, [
                          _vm._m(3, true),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "dropdown-menu dropdown-menu-right dropdown-menu-arrow",
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "dropdown-item",
                                  on: {
                                    click: function ($event) {
                                      return _vm.activeOrDesactiveItem(
                                        data.id,
                                        !data.status
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.showStatusItem(data.status))
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              data.status
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "dropdown-item",
                                      on: {
                                        click: function ($event) {
                                          return _vm.editItem(data.id)
                                        },
                                      },
                                    },
                                    [_vm._v(" EDITAR ")]
                                  )
                                : _vm._e(),
                            ]
                          ),
                        ]),
                      ]),
                    ])
                  }),
                  0
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer py-4" }),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-sm-3" }, [
      _c("h3", { staticClass: "title-form" }, [_vm._v("Lista de Personas")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "fas fa-plus" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c(
          "th",
          { staticClass: "sort", attrs: { scope: "col", "data-sort": "name" } },
          [_vm._v("NOMBRE")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "sort",
            attrs: { scope: "col", "data-sort": "budget" },
          },
          [_vm._v("CARGO")]
        ),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-sm btn-icon-only text-light",
        attrs: {
          href: "#",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fas fa-ellipsis-v" })]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/person/PersonList.vue":
/*!*************************************************!*\
  !*** ./resources/js/view/person/PersonList.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonList_vue_vue_type_template_id_1640837e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonList.vue?vue&type=template&id=1640837e& */ "./resources/js/view/person/PersonList.vue?vue&type=template&id=1640837e&");
/* harmony import */ var _PersonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonList.vue?vue&type=script&lang=js& */ "./resources/js/view/person/PersonList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonList_vue_vue_type_template_id_1640837e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonList_vue_vue_type_template_id_1640837e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/person/PersonList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/person/PersonList.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/view/person/PersonList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/person/PersonList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/person/PersonList.vue?vue&type=template&id=1640837e&":
/*!********************************************************************************!*\
  !*** ./resources/js/view/person/PersonList.vue?vue&type=template&id=1640837e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonList_vue_vue_type_template_id_1640837e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonList.vue?vue&type=template&id=1640837e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/person/PersonList.vue?vue&type=template&id=1640837e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonList_vue_vue_type_template_id_1640837e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonList_vue_vue_type_template_id_1640837e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);