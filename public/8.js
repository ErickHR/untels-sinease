(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
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
  props: {
    file: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    removeFile: function removeFile() {
      this.$emit('removeFile', file.id);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/FileForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/file/FileForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MultiselectComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/MultiselectComponent.vue */ "./resources/js/components/MultiselectComponent.vue");
/* harmony import */ var _components_FileComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/FileComponent.vue */ "./resources/js/components/FileComponent.vue");


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
//
//
//
//
//
//
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
    MultiselectComponent: _components_MultiselectComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FileComponent: _components_FileComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      action: 'search',
      dataForm: this.jsonDataForm(),
      idEdit: null,
      idSearchSelect: null,
      files: []
    };
  },
  methods: {
    removeFile: function removeFile(id) {
      $('#file').val('');
      this.files.splice(id, 1);
    },
    changeFile: function changeFile(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var document, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document = event.target.files[0];
                file = {
                  id: _this.files.length + 1,
                  file: document,
                  url: URL.createObjectURL(document)
                };

                _this.files.push(_objectSpread({}, file));

                $('#file').val('');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    selectOptionDirectory: function selectOptionDirectory(option) {
      this.dataForm.directory_id = option.id;
    },
    selectOption: function selectOption(option) {
      if (this.action == 'search') {
        this.idSearchSelect = option.id;
        return;
      }

      this.dataForm.standars_id = option.id;
    },
    showEditItem: function showEditItem(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("standar/".concat(id));

              case 3:
                _response = _context2.sent;

                if (_response.status == 200) {
                  if (_response.data.value) {
                    _this2.action = 'update';
                    _this2.idEdit = id;
                    _this2.dataForm.name = _response.data.data.name;
                  }
                }

                _context2.next = 9;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    apiForm: function apiForm() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, responseFile, _response2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.action == 'search')) {
                  _context3.next = 3;
                  break;
                }

                _this3.$emit('searchItem', {
                  name: _this3.dataForm.name,
                  idCategory: _this3.idSearchSelect
                });

                return _context3.abrupt("return");

              case 3:
                _context3.prev = 3;
                formData = new FormData();
                formData.append('file', _this3.files[0].file);
                _context3.next = 8;
                return axios.post('file-upload', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 8:
                responseFile = _context3.sent;

                if (!(responseFile.status == 200)) {
                  _context3.next = 36;
                  break;
                }

                if (!responseFile.data.value) {
                  _context3.next = 33;
                  break;
                }

                _context3.next = 13;
                return Alerts.success(responseFile.data.msg);

              case 13:
                _this3.dataForm.url = responseFile.data.data.url;
                _this3.dataForm.name_file = responseFile.data.data.name_file;
                _context3.next = 17;
                return _this3.axiosForm('file', '');

              case 17:
                _response2 = _context3.sent;

                if (!(_response2.status == 200)) {
                  _context3.next = 30;
                  break;
                }

                if (!_response2.data.value) {
                  _context3.next = 27;
                  break;
                }

                _context3.next = 22;
                return Alerts.success(_response2.data.msg);

              case 22:
                _this3.action = 'search';

                _this3.resetData();

                _this3.$emit('updateList');

                _context3.next = 28;
                break;

              case 27:
                Alerts.error(_response2.data.msg);

              case 28:
                _context3.next = 31;
                break;

              case 30:
                Alerts.error(_response2.data.msg);

              case 31:
                _context3.next = 34;
                break;

              case 33:
                Alerts.error(response.data.msg);

              case 34:
                _context3.next = 37;
                break;

              case 36:
                Alerts.error(response.status + ': Error, no especificado.');

              case 37:
                _context3.next = 42;
                break;

              case 39:
                _context3.prev = 39;
                _context3.t0 = _context3["catch"](3);
                Alerts.error('Perdida de conexión ó Error de sistema.');

              case 42:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 39]]);
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
    resetData: function resetData() {
      this.dataForm = this.jsonDataForm();
      this.files = [];
    },
    jsonDataForm: function jsonDataForm() {
      return {
        name: '',
        description: '',
        standars_id: null,
        name_file: null,
        url: null,
        directory_id: null
      };
    }
  },
  mounted: function mounted() {},
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/file/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileForm.vue */ "./resources/js/view/file/FileForm.vue");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileForm: _FileForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NavBarComponent: _components_NavBarComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    searchItem: function searchItem(data) {
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
                return _this.$router.push('file/list');

              case 3:
                _this.$refs.routerView.getApiList(data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(id) {
      this.$refs.fileForm.showEditItem(id);
    },
    changeToAddRegister: function changeToAddRegister() {
      this.$refs.fileForm.changeActionOfRegister('add');
    },
    updateList: function updateList() {
      this.$refs.routerView.actionGetDataHtml();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileComponent.vue?vue&type=template&id=33937606&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileComponent.vue?vue&type=template&id=33937606& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "file-wrapper position-relative m-3" }, [
    _c(
      "div",
      {
        staticClass:
          "icon icon-shape bg-danger text-white rounded-circle shadow file-remove",
        on: { click: _vm.removeFile },
      },
      [_c("i", { staticClass: "fas fa-minus" })]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "file-header d-flex justify-content-center align-items-center",
      },
      [
        _c(
          "a",
          {
            attrs: {
              href: _vm.file.url,
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          [_c("i", { staticClass: "far fa-file-pdf fa-5x" })]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/FileForm.vue?vue&type=template&id=ec535772&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/file/FileForm.vue?vue&type=template&id=ec535772& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "col-12 col-sm-12 col-xl-12 mt-3" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("label", { staticClass: "form-control-label col-12" }, [
                      _vm._v("STANDAR"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "input-widht col-12" },
                      [
                        _c("multiselect-component", {
                          attrs: { route: "standar-by-office" },
                          on: { selectOption: _vm.selectOption },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-sm-12 col-xl-12 mt-3" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("label", { staticClass: "form-control-label col-12" }, [
                      _vm._v("CARPETA"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "input-widht col-12" },
                      [
                        _c("multiselect-component", {
                          attrs: { route: "directory-mine" },
                          on: { selectOption: _vm.selectOptionDirectory },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]),
                _vm._v(" "),
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
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _vm.action != "search"
                  ? _c("div", { staticClass: "col-12 col-sm-12 col-xl-12 " }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c(
                          "label",
                          { staticClass: "form-control-label col-12" },
                          [_vm._v("DESCRIPCIÓN")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "input-widht col-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dataForm.description,
                                expression: "dataForm.description",
                              },
                            ],
                            staticClass: "form-control text-primary col-12",
                            attrs: {
                              type: "text",
                              placeholder:
                                "Coloque la descripción para " +
                                _vm.nameButton.toLowerCase(),
                            },
                            domProps: { value: _vm.dataForm.description },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.dataForm,
                                  "description",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.action != "search"
                  ? _c(
                      "div",
                      { staticClass: "col-12 col-sm-12 col-xl-12 mt-2 " },
                      [
                        _c("div", { staticClass: "form-row" }, [
                          _c("input", {
                            staticStyle: { display: "none" },
                            attrs: {
                              type: "file",
                              name: "file",
                              accept: ".pdf",
                              id: "file",
                            },
                            on: { change: _vm.changeFile },
                          }),
                          _vm._v(" "),
                          _vm._m(2),
                        ]),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.files.length != 0
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "col-12 col-sm-12 col-xl-12 mt-2 mt-4 pl-6",
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "form-row" },
                          _vm._l(_vm.files, function (file, index) {
                            return _c("file-component", {
                              key: "file" + index,
                              attrs: { file: file },
                              on: { removeFile: _vm.removeFile },
                            })
                          }),
                          1
                        ),
                      ]
                    )
                  : _vm._e(),
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
            "\n                                ARCHIVOS\n                            "
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
          " \n                            Estas son las categorias de las normas propuestas por SINEASE\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "btn btn-warning pl-2 pr-2 pt-1 pb-1",
        attrs: { for: "file" },
      },
      [
        _vm._v(
          "\n                                        Agregar una imagen del envío "
        ),
        _c("i", { staticClass: "fas fa-plus ml-2" }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/index.vue?vue&type=template&id=0cf2a39b&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/file/index.vue?vue&type=template&id=0cf2a39b& ***!
  \*******************************************************************************************************************************************************************************************************/
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
        _c("file-form", {
          ref: "fileForm",
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

/***/ "./resources/js/components/FileComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/FileComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileComponent_vue_vue_type_template_id_33937606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileComponent.vue?vue&type=template&id=33937606& */ "./resources/js/components/FileComponent.vue?vue&type=template&id=33937606&");
/* harmony import */ var _FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileComponent_vue_vue_type_template_id_33937606___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileComponent_vue_vue_type_template_id_33937606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FileComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileComponent.vue?vue&type=template&id=33937606&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FileComponent.vue?vue&type=template&id=33937606& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_template_id_33937606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FileComponent.vue?vue&type=template&id=33937606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileComponent.vue?vue&type=template&id=33937606&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_template_id_33937606___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_template_id_33937606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/file/FileForm.vue":
/*!*********************************************!*\
  !*** ./resources/js/view/file/FileForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileForm_vue_vue_type_template_id_ec535772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileForm.vue?vue&type=template&id=ec535772& */ "./resources/js/view/file/FileForm.vue?vue&type=template&id=ec535772&");
/* harmony import */ var _FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileForm.vue?vue&type=script&lang=js& */ "./resources/js/view/file/FileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileForm_vue_vue_type_template_id_ec535772___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileForm_vue_vue_type_template_id_ec535772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/file/FileForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/file/FileForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/view/file/FileForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/FileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/file/FileForm.vue?vue&type=template&id=ec535772&":
/*!****************************************************************************!*\
  !*** ./resources/js/view/file/FileForm.vue?vue&type=template&id=ec535772& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_template_id_ec535772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileForm.vue?vue&type=template&id=ec535772& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/FileForm.vue?vue&type=template&id=ec535772&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_template_id_ec535772___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_template_id_ec535772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/file/index.vue":
/*!******************************************!*\
  !*** ./resources/js/view/file/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0cf2a39b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0cf2a39b& */ "./resources/js/view/file/index.vue?vue&type=template&id=0cf2a39b&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/view/file/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0cf2a39b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0cf2a39b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/file/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/file/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/view/file/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/file/index.vue?vue&type=template&id=0cf2a39b&":
/*!*************************************************************************!*\
  !*** ./resources/js/view/file/index.vue?vue&type=template&id=0cf2a39b& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0cf2a39b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0cf2a39b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/file/index.vue?vue&type=template&id=0cf2a39b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0cf2a39b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0cf2a39b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);