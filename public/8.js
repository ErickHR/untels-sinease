(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/PasswordForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/password/PasswordForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      action: 'search',
      dataForm: this.jsonData()
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var body, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.dataForm.passwordNew == _this.dataForm.passwordNewConfirmate)) {
                  _context.next = 3;
                  break;
                }

                Alerts.error('La confirmación de contraseña es incorrecta');
                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                body = _objectSpread({}, _this.dataForm);
                _context.next = 7;
                return axios.post('user-change-password', body);

              case 7:
                response = _context.sent;

                if (response.status == 200) {
                  if (response.data.value) {
                    Alerts.success(response.data.msg);

                    _this.resetForm();
                  } else {
                    Alerts.error(response.data.msg);
                  }
                } else {
                  Alerts.error(response.data.msg);
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                Alerts.error('Perdida de conexión ó Error de sistema.');

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }))();
    },
    resetForm: function resetForm() {
      this.dataForm = this.jsonData();
    },
    jsonData: function jsonData() {
      return {
        passwordCurrent: '',
        passwordNew: '',
        passwordNewConfirmate: ''
      };
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/password/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PasswordForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordForm.vue */ "./resources/js/view/password/PasswordForm.vue");
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
    PasswordForm: _PasswordForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
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
                return _this.$router.push('standar-category/list');

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
      this.$refs.passwordForm.showEditItem(id);
    },
    changeToAddRegister: function changeToAddRegister() {
      this.$refs.passwordForm.changeActionOfRegister('add');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/PasswordForm.vue?vue&type=template&id=773769a7&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/password/PasswordForm.vue?vue&type=template&id=773769a7& ***!
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
  return _c("div", { staticClass: "justify-content-center" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-10 col-md-10 col-sm-10 col-10 " }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              false
                ? undefined
                : _vm._e(),
              _vm._v(" "),
              _c("hr", { staticClass: "my-4" }),
              _vm._v(" "),
              _c("validation-observer", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var handleSubmit = ref.handleSubmit
                      return [
                        _c(
                          "form",
                          {
                            on: {
                              submit: function ($event) {
                                $event.preventDefault()
                                return handleSubmit(_vm.changePassword)
                              },
                            },
                          },
                          [
                            _c(
                              "h6",
                              { staticClass: "heading-small text-muted mb-4" },
                              [_vm._v("CONTRASEÑA")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "pl-lg-4" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "input-current-password" },
                                    },
                                    [_vm._v("CONTRASEÑA ACTUAL")]
                                  ),
                                  _vm._v(" "),
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "CONTRASEÑA ACTUAL",
                                      rules: "required|min:8",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.dataForm
                                                        .passwordCurrent,
                                                    expression:
                                                      "dataForm.passwordCurrent",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid":
                                                    errors.length != 0,
                                                  "form-control-alternative":
                                                    errors.length == 0,
                                                },
                                                attrs: {
                                                  type: "password",
                                                  placeholder:
                                                    "CONTRASEÑA ACTUAL",
                                                  value: "",
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.dataForm
                                                      .passwordCurrent,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.dataForm,
                                                      "passwordCurrent",
                                                      $event.target.value
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "input-password" },
                                    },
                                    [_vm._v("NUEVA CONTRASEÑA")]
                                  ),
                                  _vm._v(" "),
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "NUEVA CONTRASEÑA",
                                      rules: "required|min:8",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.dataForm.passwordNew,
                                                    expression:
                                                      "dataForm.passwordNew",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid":
                                                    errors.length != 0,
                                                  "form-control-alternative":
                                                    errors.length == 0,
                                                },
                                                attrs: {
                                                  type: "password",
                                                  placeholder:
                                                    "NUEVA CONTRASEÑA",
                                                  value: "",
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.dataForm.passwordNew,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.dataForm,
                                                      "passwordNew",
                                                      $event.target.value
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: {
                                        for: "input-password-confirmation",
                                      },
                                    },
                                    [_vm._v("CONFIRMAR NUEVA CONTRASEÑA")]
                                  ),
                                  _vm._v(" "),
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "CONFIRMAR NUEVA CONTRASEÑA",
                                      rules: "required|min:8",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.dataForm
                                                        .passwordNewConfirmate,
                                                    expression:
                                                      "dataForm.passwordNewConfirmate",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid":
                                                    errors.length != 0,
                                                  "form-control-alternative":
                                                    errors.length == 0,
                                                },
                                                attrs: {
                                                  type: "password",
                                                  placeholder:
                                                    "CONFIRMAR NUEVA CONTRASEÑA",
                                                  value: "",
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.dataForm
                                                      .passwordNewConfirmate,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.dataForm,
                                                      "passwordNewConfirmate",
                                                      $event.target.value
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-center" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-success mt-4",
                                    attrs: { type: "submit" },
                                  },
                                  [_vm._v("CAMBIAR CONTRASEÑA")]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
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
    return _c("div", { staticClass: "pl-lg-4" }, [
      _c("div", { staticClass: "form-group focused" }, [
        _c(
          "label",
          { staticClass: "form-control-label", attrs: { for: "input-name" } },
          [_vm._v("Name")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-alternative",
          attrs: {
            type: "text",
            name: "name",
            id: "input-name",
            placeholder: "Name",
            value: "Admin Admin",
            required: "",
            autofocus: "",
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group focused" }, [
        _c(
          "label",
          { staticClass: "form-control-label", attrs: { for: "input-email" } },
          [_vm._v("Email")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-alternative",
          attrs: {
            type: "email",
            name: "email",
            id: "input-email",
            placeholder: "Email",
            value: "admin@argon.com",
            required: "",
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c(
          "button",
          { staticClass: "btn btn-success mt-4", attrs: { type: "submit" } },
          [_vm._v("Save")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/index.vue?vue&type=template&id=a509a80c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/password/index.vue?vue&type=template&id=a509a80c& ***!
  \***********************************************************************************************************************************************************************************************************/
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
        _c("password-form", {
          ref: "passwordForm",
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

/***/ "./resources/js/view/password/PasswordForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/view/password/PasswordForm.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordForm_vue_vue_type_template_id_773769a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordForm.vue?vue&type=template&id=773769a7& */ "./resources/js/view/password/PasswordForm.vue?vue&type=template&id=773769a7&");
/* harmony import */ var _PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordForm.vue?vue&type=script&lang=js& */ "./resources/js/view/password/PasswordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordForm_vue_vue_type_template_id_773769a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordForm_vue_vue_type_template_id_773769a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/password/PasswordForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/password/PasswordForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/view/password/PasswordForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/PasswordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/password/PasswordForm.vue?vue&type=template&id=773769a7&":
/*!************************************************************************************!*\
  !*** ./resources/js/view/password/PasswordForm.vue?vue&type=template&id=773769a7& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_template_id_773769a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordForm.vue?vue&type=template&id=773769a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/PasswordForm.vue?vue&type=template&id=773769a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_template_id_773769a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordForm_vue_vue_type_template_id_773769a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/password/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/view/password/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a509a80c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a509a80c& */ "./resources/js/view/password/index.vue?vue&type=template&id=a509a80c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/view/password/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a509a80c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a509a80c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/password/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/password/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/view/password/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/password/index.vue?vue&type=template&id=a509a80c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/password/index.vue?vue&type=template&id=a509a80c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a509a80c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a509a80c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/password/index.vue?vue&type=template&id=a509a80c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a509a80c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a509a80c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);