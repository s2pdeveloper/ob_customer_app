"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth-layout_forget-pwd_forget-pwd_module_ts"],{

/***/ 9778:
/*!*********************************************************************!*\
  !*** ./src/app/auth-layout/forget-pwd/forget-pwd-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPwdPageRoutingModule": () => (/* binding */ ForgetPwdPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forget_pwd_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-pwd.page */ 5233);




const routes = [
    {
        path: '',
        component: _forget_pwd_page__WEBPACK_IMPORTED_MODULE_0__.ForgetPwdPage
    }
];
let ForgetPwdPageRoutingModule = class ForgetPwdPageRoutingModule {
};
ForgetPwdPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetPwdPageRoutingModule);



/***/ }),

/***/ 7578:
/*!*************************************************************!*\
  !*** ./src/app/auth-layout/forget-pwd/forget-pwd.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPwdPageModule": () => (/* binding */ ForgetPwdPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forget_pwd_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-pwd-routing.module */ 9778);
/* harmony import */ var _forget_pwd_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-pwd.page */ 5233);
/* harmony import */ var src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/validation-messages/validation-messages.module */ 4094);








let ForgetPwdPageModule = class ForgetPwdPageModule {
};
ForgetPwdPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _forget_pwd_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPwdPageRoutingModule,
            src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_2__.ValidationMessagesPageModule
        ],
        declarations: [_forget_pwd_page__WEBPACK_IMPORTED_MODULE_1__.ForgetPwdPage]
    })
], ForgetPwdPageModule);



/***/ }),

/***/ 5233:
/*!***********************************************************!*\
  !*** ./src/app/auth-layout/forget-pwd/forget-pwd.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPwdPage": () => (/* binding */ ForgetPwdPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forget_pwd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-pwd.page.html?ngResource */ 2040);
/* harmony import */ var _forget_pwd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-pwd.page.scss?ngResource */ 3533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);









let ForgetPwdPage = class ForgetPwdPage {
    constructor(router, authService, spinner, toaster) {
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.submitted = false;
        this.forgetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
        });
    }
    ngOnInit() { }
    get form() {
        return this.forgetForm.controls;
    }
    forget() {
        let obj = {
            mobile: this.forgetForm.value.mobile,
        };
        this.authService.forgetPassword(obj).subscribe((success) => {
            this.toaster.successToast('Please check your mobile to reset password');
            this.router.navigate(['/change-pwd'], { queryParams: success.data });
        }, (error) => {
            // console.log(error);
            this.toaster.errorToast('Mail Could not be sent!');
        });
    }
};
ForgetPwdPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService }
];
ForgetPwdPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-forget-pwd',
        template: _forget_pwd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forget_pwd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetPwdPage);



/***/ }),

/***/ 3533:
/*!************************************************************************!*\
  !*** ./src/app/auth-layout/forget-pwd/forget-pwd.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 100vh;\n}\nion-content ion-card {\n  margin: -2px;\n  border-radius: 1em;\n  height: 41rem;\n}\nion-content .eye-password {\n  font-size: 25px;\n  padding-top: 0px;\n  vertical-align: middle;\n  color: #030c0b;\n}\nion-content .input {\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n}\nion-content h6 {\n  font-size: 17px;\n  margin-bottom: 20px;\n  margin-top: -8px;\n}\nion-content .center {\n  text-align: center;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wd2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQUFKO0FBRUU7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQU47QUFFRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0U7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUtFO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUpKIiwiZmlsZSI6ImZvcmdldC1wd2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICBpb24tY2FyZCB7ICBcbiAgICAgIG1hcmdpbjogLTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgIGhlaWdodDogNDFyZW07XG4gIH1cbiAgLmV5ZS1wYXNzd29yZCB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGNvbG9yOiMwMzBjMGI7XG4gIH1cbiAgXG4gIC5pbnB1dHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gIFxuICBoNiB7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgfSAgICAgXG4gIFxuICAuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgXG4gIH1cbiBcbiAgICBcbn1cblxuXG5cblxuXG5cbiJdfQ== */";

/***/ }),

/***/ 2040:
/*!************************************************************************!*\
  !*** ./src/app/auth-layout/forget-pwd/forget-pwd.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"login\" class=\"text\"></ion-back-button>\n  </ion-buttons>\n  <ion-title class=\"abc\">Forgot Password</ion-title>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <div class=\"ion-text-center\">\n        <img src=\"./assets/image/forgot password.svg\" alt=\"Logo\" height=\"360\" />\n      </div>\n\n      <p class=\"center\">Enter your registered mobile number below to receive password reset instruction.\n      </p>\n\n      <form [formGroup]=\"forgetForm\">\n        <ion-item   class=\"input-class\" [class.invalid]=\"!form.mobile.valid && (form.mobile.dirty || submitted)\">\n          <ion-label position=\"stacked\">\n            Enter mobile\n            <ion-note color=\"danger\">*</ion-note>\n          </ion-label>\n          <ion-input maxlength=\"10\" pattern=\"[0-9]{10}\" type=\"number\" placeholder=\"Enter mobile\"\n            formControlName=\"mobile\" inputmode=\"number\"></ion-input>\n        </ion-item>\n        <app-validation-messages [control]=\"form.mobile\">\n        </app-validation-messages>\n        <div class=\"ion-text-center \">\n          <ion-button expand=\"full\" shape=\"round\" (click)=\"forget()\">Submit\n          </ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth-layout_forget-pwd_forget-pwd_module_ts.js.map