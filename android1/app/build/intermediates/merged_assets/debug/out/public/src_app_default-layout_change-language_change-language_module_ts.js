"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_change-language_change-language_module_ts"],{

/***/ 2348:
/*!**********************************************************************************!*\
  !*** ./src/app/default-layout/change-language/change-language-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeLanguagePageRoutingModule": () => (/* binding */ ChangeLanguagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _change_language_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-language.page */ 187);




const routes = [
    {
        path: '',
        component: _change_language_page__WEBPACK_IMPORTED_MODULE_0__.ChangeLanguagePage
    }
];
let ChangeLanguagePageRoutingModule = class ChangeLanguagePageRoutingModule {
};
ChangeLanguagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangeLanguagePageRoutingModule);



/***/ }),

/***/ 6502:
/*!**************************************************************************!*\
  !*** ./src/app/default-layout/change-language/change-language.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeLanguagePageModule": () => (/* binding */ ChangeLanguagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _change_language_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-language-routing.module */ 2348);
/* harmony import */ var _change_language_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-language.page */ 187);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let ChangeLanguagePageModule = class ChangeLanguagePageModule {
};
ChangeLanguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _change_language_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeLanguagePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_change_language_page__WEBPACK_IMPORTED_MODULE_1__.ChangeLanguagePage]
    })
], ChangeLanguagePageModule);



/***/ }),

/***/ 187:
/*!************************************************************************!*\
  !*** ./src/app/default-layout/change-language/change-language.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeLanguagePage": () => (/* binding */ ChangeLanguagePage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _change_language_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-language.page.html?ngResource */ 6506);
/* harmony import */ var _change_language_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-language.page.scss?ngResource */ 1616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/language.service */ 7524);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);









let ChangeLanguagePage = class ChangeLanguagePage {
  constructor(router, toastService, langService, translate) {
    this.router = router;
    this.toastService = toastService;
    this.langService = langService;
    this.translate = translate;
    this.selectedLanguage = '';
    this.languages = [{
      label: 'English',
      value: 'en'
    }, {
      label: 'हिंदी',
      value: 'hi'
    }, {
      label: 'मराठी',
      value: 'mr'
    }];
  }

  ngOnInit() {
    this.selectedLanguage = this.langService.getLang();
  }

  setLanguage($event) {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.selectedLanguage = $event.target.value;

      if (_this.selectedLanguage != _this.langService.getLang()) {
        yield _this.toastService.successToast('Language Change Successfully');
      }

      _this.langService.setLang(_this.selectedLanguage);
    })();
  }

};

ChangeLanguagePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: src_app_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}];

ChangeLanguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-change-language',
  template: _change_language_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_change_language_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ChangeLanguagePage);


/***/ }),

/***/ 1616:
/*!*************************************************************************************!*\
  !*** ./src/app/default-layout/change-language/change-language.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtbGFuZ3VhZ2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6506:
/*!*************************************************************************************!*\
  !*** ./src/app/default-layout/change-language/change-language.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/tabs/settings\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"text-color-4 ion-text-capitalize ion-text-wrap\">{{ 'selectLanguage' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list lines=\"none\" appAnimateItems className=\"fadeInLeft\">\n          <ion-item class=\"animation-normal\">\n            <ion-radio-group [(ngModel)]=\"selectedLanguage\" (ionChange)=\"setLanguage($event)\">\n              <ion-item *ngFor=\"let item of languages\">\n                <ion-label class=\"ion-text-capitalize ion-text-wrap\" color=\"black\">\n                  {{item.label}}\n                </ion-label>\n                <ion-radio slot=\"start\" class=\"btn-radio-color-1\" [value]=\"item.value\" color=\"primary\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_change-language_change-language_module_ts.js.map