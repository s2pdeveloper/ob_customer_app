"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth-layout_register_register_module_ts"],{

/***/ 9047:
/*!*****************************************************************!*\
  !*** ./src/app/auth-layout/register/register-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 974);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 458:
/*!*********************************************************!*\
  !*** ./src/app/auth-layout/register/register.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 9047);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 974);
/* harmony import */ var src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/validation-messages/validation-messages.module */ 4094);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);









let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_2__.ValidationMessagesPageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage],
    })
], RegisterPageModule);



/***/ }),

/***/ 974:
/*!*******************************************************!*\
  !*** ./src/app/auth-layout/register/register.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 9651);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 8794);













const {
  Device,
  Geolocation,
  Browser
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Plugins;
let RegisterPage = class RegisterPage {
  constructor(router, spinner, storageService, toaster, authService, translate) {
    var _this = this;

    this.router = router;
    this.spinner = spinner;
    this.storageService = storageService;
    this.toaster = toaster;
    this.authService = authService;
    this.translate = translate;
    this.submitted = false;
    this.showEye = false;
    this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      // id: new FormControl(),
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      // confirmPassword: new FormControl(''),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      role: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('CUSTOMER')
    });
    this.getDeviceInfo = /*#__PURE__*/(0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.deviceInfo = yield Device.getInfo();
      _this.deviceInfo.geoLocation = yield (yield Geolocation.getCurrentPosition()).coords;
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getDeviceInfo();
  }

  get form() {
    return this.registerForm.controls;
  }

  register() {
    console.log(this.registerForm.value);
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }

    this.spinner.showLoader();
    let newObj = Object.assign({
      deviceId: this.storageService.get('OBUserDeviceId')
    }, this.deviceInfo);
    let formData = this.registerForm.value;
    this.storageService.set('mobile', formData.mobile);
    formData.role = 'CUSTOMER';
    formData.deviceInfo = newObj;
    this.authService.createUser(formData).subscribe(success => {
      this.spinner.hideLoader();
      this.registerForm.reset();
      this.submitted = false;
      this.toaster.successToast('Register done successfully.');
      this.router.navigate(['/login']);
    });
  }

  open() {
    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Browser.open({
        url: ''
      });
    })();
  }

};

RegisterPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


/***/ }),

/***/ 167:
/*!********************************************************************!*\
  !*** ./src/app/auth-layout/register/register.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 100vh;\n}\nion-content ion-card {\n  margin: -2px;\n  border-radius: 1em;\n}\nion-content .eye-password {\n  font-size: 25px;\n  padding-top: 0px;\n  vertical-align: middle;\n  color: #030c0b;\n}\nion-content .input {\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n}\nion-content ion-button {\n  margin: 30px;\n}\nion-content h6 {\n  font-size: 17px;\n  margin-bottom: 20px;\n  margin-top: -8px;\n  padding: 13px;\n  word-spacing: 3px;\n}\nion-content h5 {\n  font-size: 17px;\n  margin-bottom: 20px;\n  margin-top: -18px;\n  padding: 13px;\n  word-spacing: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUZSO0FBTUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQVNJO0VBRUksWUFBQTtBQVJSO0FBYUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVhSO0FBY0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVpSIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZGY3ZTdlICFpbXBvcnRhbnQ7XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IC0ycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcblxuICAgIH1cblxuICAgIC5leWUtcGFzc3dvcmQge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiAjMDMwYzBiO1xuICAgIH1cblxuXG4gICAgLmlucHV0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuXG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogIzA2OWI4ZSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDMwcHg7XG5cblxuICAgIH1cblxuICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgICBwYWRkaW5nOiAxM3B4O1xuICAgICAgICB3b3JkLXNwYWNpbmc6IDNweDtcbiAgICB9XG5cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgICAgIHdvcmQtc3BhY2luZzogM3B4O1xuICAgIH1cblxuXG5cblxuXG5cbn0iXX0= */";

/***/ }),

/***/ 9651:
/*!********************************************************************!*\
  !*** ./src/app/auth-layout/register/register.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-card>\n    <div class=\"ion-text-center ion-margin-top\">\n      <img src=\"./assets/image/reg.webp\" alt=\"Logo\" height=\"250\" />\n    </div>\n\n    <form [formGroup]=\"registerForm\">\n      \n      <ion-item  class=\"input-class\" \n        [class.invalid]=\"!form.firstName.valid && (form.firstName.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'First Name' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input placeholder=\"{{ 'First Name' | translate}}\" formControlName=\"firstName\"></ion-input>\n      </ion-item>\n\n      <ion-item   class=\"input-class\"\n        [class.invalid]=\"!form.lastName.valid && (form.lastName.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'Last Name' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input placeholder=\"{{ 'Last Name' | translate}}\" formControlName=\"lastName\"></ion-input>\n      </ion-item>\n\n      <ion-item   class=\"input-class\"\n        [class.invalid]=\"!form.email.valid && (form.email.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'Email' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input placeholder=\"{{ 'Email' | translate}}\" formControlName=\"email\"></ion-input>\n      </ion-item>\n\n      <ion-item   class=\"input-class\" [class.invalid]=\"!form.mobile.valid && (form.mobile.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'Mobile Number' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input maxlength=\"10\" pattern=\"[0-9]{10}\" type=\"number\" placeholder=\"{{ 'Mobile Number' | translate}}\"\n          formControlName=\"mobile\" inputmode=\"number\"></ion-input>\n      </ion-item>\n\n      <ion-item  class=\"input-class\" \n        [class.invalid]=\"!form.password.valid && (form.password.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'password' | translate }}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input formControlName=\"password\" [type]=\"showEye ? 'password':'text'\" name=\"password\"\n          placeholder=\"{{ 'password' | translate }}\" autocomplete=\"on\" clearInput></ion-input>\n        <ion-icon class=\"input-icon eye-password\" slot=\"end\" name=\"eye\" *ngIf=\"!showEye\" (click)=\"showEye = !showEye\">\n        </ion-icon>\n        <ion-icon class=\"input-icon eye-password\" name=\"eye-off-outline\" slot=\"end\" *ngIf=\"showEye\"\n          (click)=\"showEye = !showEye\">\n        </ion-icon>\n      </ion-item>\n\n\n      <!-- <ion-item   class=\"input-class\"\n        [class.invalid]=\"!form.confirmPassword.valid && (form.confirmPassword.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'Confirm password' | translate }}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input formControlName=\"confirmPassword\" [type]=\"showEye ? 'password':'text'\" name=\"Confirm Password\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\" autocomplete=\"on\" clearInput></ion-input>\n        <ion-icon class=\"input-icon eye-password\" slot=\"end\" name=\"eye\" *ngIf=\"!showEye\" (click)=\"!showEye = showEye\">\n        </ion-icon>\n        <ion-icon class=\"input-icon eye-password\" name=\"eye-off-outline\" slot=\"end\" *ngIf=\"showEye\"\n          (click)=\"showEye = !showEye\">\n        </ion-icon>\n      </ion-item> -->\n\n\n      <div class=\"ion-text-center ion-margin-vertical\">\n        <ion-button color=\"primary\" expand=\"full\" shape=\"round\" class=\"btn\" (click)=\"register()\">\n          {{ 'register' | translate}}\n        </ion-button>\n      </div>\n    </form>\n    <div class=\"ion-text-center signup\">\n      <h5>\n        Already have an account?\n        <a href=\"javascript:void()\" routerLink=\"/login\">\n          <ion-label color=\"medium\">\n            <b>{{ 'login' | translate}} </b>\n          </ion-label>\n        </a>\n      </h5>\n    </div>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_auth-layout_register_register_module_ts.js.map