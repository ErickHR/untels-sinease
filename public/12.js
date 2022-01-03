(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBarComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavBarComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getPermissions'])),
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.getPermissions();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getUserData', 'getUserPermissions']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/RolForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/rol/RolForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      action: 'search',
      dataForm: {
        name: '',
        permissions_list: []
      },
      idEdit: null,
      moduleList: []
    };
  },
  methods: {
    removeOption: function removeOption(option) {
      this.idSearchSelect = null;
    },
    selectOption: function selectOption(option) {
      if (this.action == 'search') {
        this.idSearchSelect = option.id;
        return;
      }

      this.dataForm.permissions_list = option.id;
    },
    showEditItem: function showEditItem(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;

                _this.resetForm();

                _context.prev = 2;
                _context.next = 5;
                return axios.get("rol/".concat(id));

              case 5:
                response = _context.sent;

                if (response.status == 200) {
                  if (response.data.value) {
                    _this2.action = 'update';
                    _this2.idEdit = id;
                    _this2.dataForm.name = response.data.data.name, response.data.data.permissions.forEach(function (item, index) {
                      _this.dataForm.permissions_list.push(item.id);
                    });
                  }
                }

                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    },
    apiForm: function apiForm() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3.action == 'search')) {
                  _context2.next = 3;
                  break;
                }

                _this3.$emit('searchItem', _this3.dataForm.name);

                return _context2.abrupt("return");

              case 3:
                _context2.prev = 3;
                _context2.next = 6;
                return _this3.axiosForm('rol', '');

              case 6:
                response = _context2.sent;

                if (response.status == 200) {
                  if (response.data.value) {
                    _this3.resetForm();

                    _this3.$emit('updateList');
                  }
                }

                _context2.next = 12;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](3);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 10]]);
      }))();
    },
    axiosForm: function axiosForm(url) {
      if (this.action == 'search') {
        return axios.get(url);
      }

      if (this.action == 'update') {
        var body = _objectSpread({}, this.dataForm);

        return axios.put("".concat(url, "/").concat(this.idEdit), body);
      }

      if (this.action == 'add') {
        var _body = _objectSpread({}, this.dataForm);

        return axios.post(url, _body);
      }
    },
    changeActionOfRegister: function changeActionOfRegister(action) {
      this.action = action;
    },
    apiPermissions: function apiPermissions() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios('module-with-permissions');

              case 3:
                response = _context3.sent;

                if (response.status == 200) {
                  if (response.data.value) {
                    _this4.moduleList = _objectSpread({}, response.data.data);
                  }
                }

                _context3.next = 9;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    resetForm: function resetForm() {
      this.changeActionOfRegister('search');
      this.dataForm.name = '';
      this.dataForm.permissions_list = [], this.isEdit = null;
    }
  },
  mounted: function mounted() {
    this.apiPermissions();
  },
  computed: {
    nameButton: function nameButton() {
      if (this.action == 'search') {
        return 'Buscar';
      }

      if (this.action == 'update') {
        return 'Editar';
      }

      if (this.action == 'add') {
        return 'Agregar';
      }
    },
    iconButton: function iconButton() {
      if (this.action == 'search') {
        return 'fa-search';
      }

      if (this.action == 'update') {
        return 'fa-pencil';
      }

      if (this.action == 'add') {
        return 'fa-plus';
      }
    },
    colorButton: function colorButton() {
      if (this.action == 'search') {
        return 'btn-primary';
      }

      if (this.action == 'update') {
        return 'btn-warning';
      }

      if (this.action == 'add') {
        return 'btn-success';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/rol/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RolForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolForm.vue */ "./resources/js/view/rol/RolForm.vue");
/* harmony import */ var _components_NavBarComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/NavBarComponent.vue */ "./resources/js/components/NavBarComponent.vue");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RolForm: _RolForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NavBarComponent: _components_NavBarComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    searchItem: function searchItem(name) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.$route.fullPath.includes('/list')) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.$router.push('rol/list');

              case 3:
                _this.$refs.routerView.getApiList(name);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(id) {
      this.$refs.rolForm.showEditItem(id);
    },
    changeToAddRegister: function changeToAddRegister() {
      this.$refs.rolForm.changeActionOfRegister('add');
    },
    updateList: function updateList() {
      this.$refs.routerView.getApiList();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBarComponent.vue?vue&type=template&id=1614d4d2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavBarComponent.vue?vue&type=template&id=1614d4d2& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return !_vm.getUserPermissions
    ? _c("div")
    : _c(
        "div",
        {
          staticClass:
            "navbar_container text-ellipsis background_secondary_untels py-3",
        },
        _vm._l(_vm.getUserPermissions, function (permission, index) {
          return _c(
            "ul",
            { key: "permissions_" + index, staticClass: "nav flex-column" },
            [
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link collapsed text-ellipsis",
                      attrs: {
                        "data-toggle": "collapse",
                        href: "#" + permission.name.replaceAll(" ", "-"),
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _c("div", { staticClass: "navbar_item" }, [
                        _c("div", { staticClass: "navbar_item-icons w-18" }, [
                          _c("i", {
                            staticClass: "fa-w-20 fa-9px",
                            class: permission.icon,
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "small",
                            {
                              staticClass:
                                "nav-link style-text color_secondary_untels",
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(permission.name) +
                                  "\n                        "
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(
                    permission.permissions_auth,
                    function (permissionAuth, index) {
                      return _c(
                        "div",
                        {
                          key: "permissions-auth_" + index,
                          staticClass: "collapse ",
                          staticStyle: { height: "auto" },
                          attrs: {
                            id: "" + permission.name.replaceAll(" ", "-"),
                          },
                        },
                        [
                          _c("ul", { staticClass: "nav" }, [
                            _c(
                              "li",
                              { staticClass: "nav-item " },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link",
                                    attrs: { to: permissionAuth.url },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "navbar_sub-item" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "navbar_item-icons" },
                                          [
                                            _c("i", {
                                              staticClass: "fa-w-20 fa-9px",
                                              class: permissionAuth.icon,
                                            }),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "style-text color_secondary_untels",
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(permissionAuth.name) +
                                                "\n                                "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]
                      )
                    }
                  ),
                ],
                2
              ),
            ]
          )
        }),
        0
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/RolForm.vue?vue&type=template&id=3d8dea67&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/rol/RolForm.vue?vue&type=template&id=3d8dea67& ***!
  \********************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-body" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "origen-section " }, [
              _c("div", { staticClass: "row pr-3" }, [
                _c("div", { staticClass: "col-12 col-sm-12 col-xl-12 " }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("label", { staticClass: "form-control-label col-12" }, [
                      _vm._v("NOMBRE"),
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "input-widht col-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.dataForm.name,
                            expression: "dataForm.name",
                          },
                        ],
                        staticClass: "form-control text-primary col-12",
                        attrs: {
                          type: "text",
                          placeholder:
                            "Coloque el nombre para " +
                            _vm.nameButton.toLowerCase(),
                        },
                        domProps: { value: _vm.dataForm.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.dataForm, "name", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "is-invalid-numero text-red" }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.action != "search",
                        expression: " action != 'search' ",
                      },
                    ],
                    staticClass: "col-12 col-sm-12 col-xl-12 mt-4",
                  },
                  [
                    _c("div", { staticClass: "form-row" }, [
                      _c(
                        "label",
                        { staticClass: "form-control-label col-12" },
                        [_vm._v("LISTA DE  PERMISOS")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-sm-12 col-xl-12" },
                        _vm._l(_vm.moduleList, function (module, index) {
                          return _c(
                            "div",
                            {
                              key: index + "permissions",
                              staticClass: "form-row mx-3",
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "form-control-label col-12" },
                                [_vm._v(_vm._s(module.name))]
                              ),
                              _vm._v(" "),
                              _vm._l(
                                module.permissions,
                                function (permission, index) {
                                  return _c(
                                    "div",
                                    {
                                      key: index + "permissions",
                                      staticClass: "col-md-3 col-12 mx-3",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "custom-control custom-control-alternative custom-checkbox mb-3",
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.dataForm.permissions_list,
                                                expression:
                                                  "dataForm.permissions_list",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              id: "permission-" + permission.id,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              value: permission.id,
                                              checked: Array.isArray(
                                                _vm.dataForm.permissions_list
                                              )
                                                ? _vm._i(
                                                    _vm.dataForm
                                                      .permissions_list,
                                                    permission.id
                                                  ) > -1
                                                : _vm.dataForm.permissions_list,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a =
                                                    _vm.dataForm
                                                      .permissions_list,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = permission.id,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.dataForm,
                                                        "permissions_list",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.dataForm,
                                                        "permissions_list",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.dataForm,
                                                    "permissions_list",
                                                    $$c
                                                  )
                                                }
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label",
                                              attrs: {
                                                for:
                                                  "permission-" + permission.id,
                                              },
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(permission.name) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                }
                              ),
                            ],
                            2
                          )
                        }),
                        0
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-2 col-sm-2 col-xl-2" }, [
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      class: [_vm.colorButton],
                      attrs: { type: "button" },
                      on: { click: _vm.apiForm },
                    },
                    [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.nameButton) +
                          " "
                      ),
                      _c("i", { staticClass: "fas", class: [_vm.iconButton] }),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("h3", { staticClass: "mb-2 title-form d-inline-block" }, [
          _vm._v(
            "\n                                ROLES\n                            "
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "opciones-section mt-1 pb-2" }, [
      _c("small", { staticClass: "text-muted" }, [
        _c("strong", [
          _vm._v(
            "\n                                Descripción:\n                            "
          ),
        ]),
        _vm._v(
          " \n                            Estas son roles\n                        "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/index.vue?vue&type=template&id=7e8a27a6&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/rol/index.vue?vue&type=template&id=7e8a27a6& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row mx-0" }, [
    _c("div", [_c("nav-bar-component")], 1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col scroll-auto" },
      [
        _c("rol-form", {
          ref: "rolForm",
          on: { updateList: _vm.updateList, searchItem: _vm.searchItem },
        }),
        _vm._v(" "),
        _c("router-view", {
          ref: "routerView",
          on: {
            changeToAddRegister: _vm.changeToAddRegister,
            editItem: _vm.editItem,
          },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/NavBarComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/NavBarComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBarComponent_vue_vue_type_template_id_1614d4d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBarComponent.vue?vue&type=template&id=1614d4d2& */ "./resources/js/components/NavBarComponent.vue?vue&type=template&id=1614d4d2&");
/* harmony import */ var _NavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/NavBarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBarComponent_vue_vue_type_template_id_1614d4d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBarComponent_vue_vue_type_template_id_1614d4d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavBarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavBarComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/NavBarComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavBarComponent.vue?vue&type=template&id=1614d4d2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/NavBarComponent.vue?vue&type=template&id=1614d4d2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBarComponent_vue_vue_type_template_id_1614d4d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavBarComponent.vue?vue&type=template&id=1614d4d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavBarComponent.vue?vue&type=template&id=1614d4d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBarComponent_vue_vue_type_template_id_1614d4d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBarComponent_vue_vue_type_template_id_1614d4d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/rol/RolForm.vue":
/*!*******************************************!*\
  !*** ./resources/js/view/rol/RolForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RolForm_vue_vue_type_template_id_3d8dea67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolForm.vue?vue&type=template&id=3d8dea67& */ "./resources/js/view/rol/RolForm.vue?vue&type=template&id=3d8dea67&");
/* harmony import */ var _RolForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolForm.vue?vue&type=script&lang=js& */ "./resources/js/view/rol/RolForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RolForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RolForm_vue_vue_type_template_id_3d8dea67___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RolForm_vue_vue_type_template_id_3d8dea67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/rol/RolForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/rol/RolForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/view/rol/RolForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RolForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/RolForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/rol/RolForm.vue?vue&type=template&id=3d8dea67&":
/*!**************************************************************************!*\
  !*** ./resources/js/view/rol/RolForm.vue?vue&type=template&id=3d8dea67& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolForm_vue_vue_type_template_id_3d8dea67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RolForm.vue?vue&type=template&id=3d8dea67& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/RolForm.vue?vue&type=template&id=3d8dea67&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolForm_vue_vue_type_template_id_3d8dea67___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolForm_vue_vue_type_template_id_3d8dea67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/rol/index.vue":
/*!*****************************************!*\
  !*** ./resources/js/view/rol/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7e8a27a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7e8a27a6& */ "./resources/js/view/rol/index.vue?vue&type=template&id=7e8a27a6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/view/rol/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7e8a27a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7e8a27a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/rol/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/rol/index.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/view/rol/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/rol/index.vue?vue&type=template&id=7e8a27a6&":
/*!************************************************************************!*\
  !*** ./resources/js/view/rol/index.vue?vue&type=template&id=7e8a27a6& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e8a27a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7e8a27a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/rol/index.vue?vue&type=template&id=7e8a27a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e8a27a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e8a27a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);