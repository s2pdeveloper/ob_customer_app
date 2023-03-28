"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth-layout_login_login_module_ts"],{

/***/ 5227:
/*!***********************************************************!*\
  !*** ./src/app/auth-layout/login/login-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 338);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 3869:
/*!***************************************************!*\
  !*** ./src/app/auth-layout/login/login.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5227);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 338);
/* harmony import */ var src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/validation-messages/validation-messages.module */ 4094);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_2__.ValidationMessagesPageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 338:
/*!*************************************************!*\
  !*** ./src/app/auth-layout/login/login.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 8588);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 2363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 8794);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);













const {
  Device,
  Geolocation
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Plugins;
let LoginPage = class LoginPage {
  constructor(router, localStorage, route, spinner, toaster, authService, translate) {
    var _this = this;

    this.router = router;
    this.localStorage = localStorage;
    this.route = route;
    this.spinner = spinner;
    this.toaster = toaster;
    this.authService = authService;
    this.translate = translate;
    this.submitted = false;
    this.showEye = false;
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
    });
    this.getDeviceInfo = /*#__PURE__*/(0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.deviceInfo = yield Device.getInfo();
      _this.deviceInfo.geoLocation = yield (yield Geolocation.getCurrentPosition()).coords;
    });
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.returnUrl = _this2.route.snapshot.queryParams[`returnUrl`] || '/landing-page';
    })();
  }

  get form() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }

    this.spinner.showLoader();
    this.authService.login(this.loginForm.value).subscribe(success => {
      this.localStorage.set('OBCustomer', success);
      this.router.navigate([`/app/tabs/landing-page`], {
        replaceUrl: true
      });
      this.saveDeviceToken(success._id);
      this.spinner.hideLoader();
    });
  }

  saveDeviceToken(id) {
    let newObj = Object.assign({
      customerId: id,
      deviceId: this.localStorage.get('OBUserDeviceId')
    }, this.deviceInfo);
    newObj.deviceId && this.authService.createAndUpdateUserDevice(newObj).subscribe();
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService
}, {
  type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 2363:
/*!**************************************************************!*\
  !*** ./src/app/auth-layout/login/login.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 100vh;\n}\nion-content ion-card {\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 2rem;\n  --background: transparent;\n  background: transparent;\n  box-shadow: none;\n}\nion-content ion-card ion-card-content {\n  padding-top: 0;\n}\nion-content ion-card ion-card-content form {\n  padding: 0 5px;\n}\nion-content ion-card .forget-text {\n  text-align: end;\n  padding: 1rem 0;\n}\nion-content ion-card h5 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ007RUFDSSxjQUFBO0FBQ1Y7QUFDVTtFQUNJLGNBQUE7QUFDZDtBQUdNO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFEVjtBQUlNO0VBQ0ksa0JBQUE7QUFGViIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgaW9uLWNhcmQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb3JnZXQtdGV4dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgIH1cblxuICAgICAgaDUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgIFxuICAgICAgfVxuICB9XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 8588:
/*!**************************************************************!*\
  !*** ./src/app/auth-layout/login/login.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-card>\n\n    <div class=\"ion-text-center\">\n      <img src=\"./assets/image/login.svg\" alt=\"Logo\" height=\"350\" />\n    </div>\n\n    <form [formGroup]=\"loginForm\">\n      <ion-item class=\"input-class\" [class.invalid]=\"!form.mobile.valid && (form.mobile.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'Mobile Number' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input maxlength=\"10\" pattern=\"[0-9]{10}\" type=\"number\" placeholder=\"{{ 'Mobile Number' | translate}}\"\n          formControlName=\"mobile\" inputmode=\"number\"></ion-input>\n      </ion-item>\n      <app-validation-messages [control]=\"form.mobile\">\n      </app-validation-messages>\n\n      <ion-item class=\"input-class\" [class.invalid]=\"!form.password.valid && (form.password.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'password' | translate }}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input formControlName=\"password\" [type]=\"showEye ? 'password':'text'\" name=\"password\"\n          placeholder=\"{{ 'password' | translate }}\" autocomplete=\"on\" clearInput></ion-input>\n        <ion-icon class=\"input-icon eye-password\" slot=\"end\" name=\"eye\" *ngIf=\"!showEye\" (click)=\"showEye = !showEye\">\n        </ion-icon>\n        <ion-icon class=\"input-icon eye-password\" name=\"eye-off-outline\" slot=\"end\" *ngIf=\"showEye\"\n          (click)=\"showEye = !showEye\">\n        </ion-icon>\n      </ion-item>\n\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-end\">\n          <a href=\"javascript:void()\" routerLink=\"/forget-pwd\" routerLinkActive=\"active\">\n            <strong>{{'forgotPassword'|translate}}</strong>\n          </a>\n        </ion-col>\n      </ion-row>\n      <div class=\"ion-text-center\">\n        <ion-button expand=\"full\" shape=\"round\" class=\"\" color=\"primary\" (click)=\"login()\">\n          {{'login'|translate}}\n        </ion-button>\n        <h5 class=\"ion-no-padding\">\n          Not have an account Yet?\n          <a href=\"javascript:void()\" routerLink=\"/register\">\n            <ion-label>\n              {{ 'SignUp' | translate}}\n            </ion-label>\n          </a>\n        </h5>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_auth-layout_login_login_module_ts.js.map