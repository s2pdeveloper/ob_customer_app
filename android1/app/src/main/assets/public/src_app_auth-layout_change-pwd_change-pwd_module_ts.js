"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth-layout_change-pwd_change-pwd_module_ts"],{

/***/ 9731:
/*!*********************************************************************!*\
  !*** ./src/app/auth-layout/change-pwd/change-pwd-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePwdPageRoutingModule": () => (/* binding */ ChangePwdPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _change_pwd_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-pwd.page */ 4616);




const routes = [
    {
        path: '',
        component: _change_pwd_page__WEBPACK_IMPORTED_MODULE_0__.ChangePwdPage
    }
];
let ChangePwdPageRoutingModule = class ChangePwdPageRoutingModule {
};
ChangePwdPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePwdPageRoutingModule);



/***/ }),

/***/ 5239:
/*!*************************************************************!*\
  !*** ./src/app/auth-layout/change-pwd/change-pwd.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePwdPageModule": () => (/* binding */ ChangePwdPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _change_pwd_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-pwd-routing.module */ 9731);
/* harmony import */ var _change_pwd_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-pwd.page */ 4616);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/validation-messages/validation-messages.module */ 4094);









let ChangePwdPageModule = class ChangePwdPageModule {
};
ChangePwdPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _change_pwd_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePwdPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_3__.ValidationMessagesPageModule
        ],
        declarations: [_change_pwd_page__WEBPACK_IMPORTED_MODULE_1__.ChangePwdPage]
    })
], ChangePwdPageModule);



/***/ }),

/***/ 4616:
/*!***********************************************************!*\
  !*** ./src/app/auth-layout/change-pwd/change-pwd.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePwdPage": () => (/* binding */ ChangePwdPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _change_pwd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-pwd.page.html?ngResource */ 5115);
/* harmony import */ var _change_pwd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-pwd.page.scss?ngResource */ 8861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _app_core_validation_messages_validation_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/core/validation-messages/validation-messages.service */ 7488);













let ChangePwdPage = class ChangePwdPage {
    constructor(formBuilder, router, location, auth, spinner, toaster, localStorage, translate, validationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.location = location;
        this.auth = auth;
        this.spinner = spinner;
        this.toaster = toaster;
        this.localStorage = localStorage;
        this.translate = translate;
        this.validationService = validationService;
        this.showOld = false;
        this.showNew = false;
        this.showConfirm = false;
        this.submitted = false;
        this.loaded = true;
        this.passForm = this.formBuilder.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            confirmPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
        }, {
            validator: this.validationService.MustMatch('newPassword', 'confirmPass'),
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.passForm.controls.id.setValue(this.localStorage.get('OBCustomer').id);
    }
    ngOnDestroy() { }
    get form() {
        return this.passForm.controls;
    }
    // directly update password -- only for super admin
    setPassword() {
        // if (!this.isMatch) {
        // this.translate.get('changePassPage.error.notMatch').subscribe((msg) => {
        //   this.errorMsg = msg;
        // });
        //   return;
        // }
        this.submitted = true;
        if (this.passForm.invalid) {
            this.toaster.presentToast('warning', 'Please fill all valid field !');
            return;
        }
        this.loaded = false;
        this.auth.resetPassword(this.passForm.value).subscribe((success) => {
            this.loaded = true;
            this.passForm.reset();
            this.toaster.successToast('Password Change done successfully !!');
            this.router.navigate(['/login']);
        });
    }
    goBack() {
        this.location.back();
    }
};
ChangePwdPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _app_core_validation_messages_validation_messages_service__WEBPACK_IMPORTED_MODULE_6__.ValidationService }
];
ChangePwdPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-change-pwd',
        template: _change_pwd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_pwd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePwdPage);



/***/ }),

/***/ 8861:
/*!************************************************************************!*\
  !*** ./src/app/auth-layout/change-pwd/change-pwd.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: var(--ion-color-e4) !important;\n}\n\n.chip-reset-code {\n  width: 90%;\n  border-radius: 10px;\n  --background: #cdcdce;\n  margin-left: auto;\n  --ripple-color: #666666;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wd2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0RBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY2hhbmdlLXB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWU0KSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2hpcC1yZXNldC1jb2RlIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjY2RjZGNlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIC0tcmlwcGxlLWNvbG9yOiAjNjY2NjY2O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfSJdfQ== */";

/***/ }),

/***/ 5115:
/*!************************************************************************!*\
  !*** ./src/app/auth-layout/change-pwd/change-pwd.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\" class=\"\">\n    <ion-back-button defaultHref=\"landing-page\" mode=\"md\"></ion-back-button>\n  </ion-buttons>\n  <ion-title class=\"ion-text-capitalize\">\n    {{ 'changePassword' | translate}}\n  </ion-title>\n</ion-toolbar>\n\n<ion-content *ngIf=\"loaded\">\n  <form [formGroup]=\"passForm\">\n    <ion-item\n    class=\"input-class\"\n      lines=\"outline\"\n      [class.invalid]=\"!form.oldPassword.valid && (form.oldPassword.dirty || submitted)\"\n    >\n      <ion-label position=\"stacked\">\n        {{ 'oldPassword' | translate }}\n        <ion-note color=\"danger\">*</ion-note>\n      </ion-label>\n      <ion-input\n        formControlName=\"oldPassword\"\n        [type]=\"showOld ? 'password':'text'\"\n        name=\"password\"\n        placeholder=\"{{ 'oldPassword' | translate }}\"\n        autocomplete=\"on\"\n        clearInput\n      ></ion-input>\n      <ion-icon\n        class=\"input-icon eye-password\"\n        slot=\"end\"\n        name=\"eye\"\n        *ngIf=\"!showOld\"\n        (click)=\"showOld = !showOld\"\n      >\n      </ion-icon>\n      <ion-icon\n        class=\"input-icon eye-password\"\n        name=\"eye-off-outline\"\n        slot=\"end\"\n        *ngIf=\"showOld\"\n        (click)=\"showOld = !showOld\"\n      >\n      </ion-icon>\n    </ion-item>\n    <app-validation-messages [control]=\"form['oldPassword']\">\n    </app-validation-messages>\n\n    <ion-item\n    class=\"input-class\"\n      lines=\"outline\"\n      [class.invalid]=\"!form.newPassword.valid && (form.newPassword.dirty || submitted)\"\n    >\n      <ion-label position=\"stacked\">\n        {{ 'newPassword' | translate }}\n        <ion-note color=\"danger\">*</ion-note>\n      </ion-label>\n      <ion-input\n        formControlName=\"newPassword\"\n        [type]=\"showNew ? 'password':'text'\"\n        name=\"password\"\n        placeholder=\"{{ 'newPassword' | translate }}\"\n        autocomplete=\"on\"\n        clearInput\n      ></ion-input>\n      <ion-icon\n        class=\"input-icon eye-password\"\n        slot=\"end\"\n        name=\"eye\"\n        *ngIf=\"!showNew\"\n        (click)=\"showNew = !showNew\"\n      >\n      </ion-icon>\n      <ion-icon\n        class=\"input-icon eye-password\"\n        name=\"eye-off-outline\"\n        slot=\"end\"\n        *ngIf=\"showNew\"\n        (click)=\"showNew = !showNew\"\n      >\n      </ion-icon>\n    </ion-item>\n    <app-validation-messages [control]=\"form['newPassword']\">\n    </app-validation-messages>\n\n    <ion-item\n    class=\"input-class\"\n      lines=\"outline\"\n      [class.invalid]=\"!form.confirmPass.valid && (form.confirmPass.dirty || submitted)\"\n    >\n      <ion-label position=\"stacked\">\n        {{ 'confirmPassword' | translate }}\n        <ion-note color=\"danger\">*</ion-note>\n      </ion-label>\n      <ion-input\n        formControlName=\"confirmPass\"\n        [type]=\"showConfirm ? 'password':'text'\"\n        name=\"password\"\n        placeholder=\"{{ 'confirmPassword' | translate }}\"\n        autocomplete=\"on\"\n        clearInput\n      ></ion-input>\n      <ion-icon\n        class=\"input-icon eye-password\"\n        slot=\"end\"\n        name=\"eye\"\n        *ngIf=\"!showConfirm\"\n        (click)=\"showConfirm = !showConfirm\"\n      >\n      </ion-icon>\n      <ion-icon\n        class=\"input-icon eye-password\"\n        name=\"eye-off-outline\"\n        slot=\"end\"\n        *ngIf=\"showConfirm\"\n        (click)=\"showConfirm = !showConfirm\"\n      >\n      </ion-icon>\n    </ion-item>\n    <app-validation-messages [control]=\"form['confirmPass']\">\n    </app-validation-messages>\n\n    <div class=\"ion-text-center ion-margin-vertical\">\n      <ion-button\n        shape=\"round\"\n        (click)=\"setPassword()\"\n        color=\"primary\"\n        id=\"btn-e1\"\n        expand=\"block\"\n        type=\"submit\"\n      >\n        submit\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n<ion-content *ngIf=\"!loaded\">\n  <form >\n    <ion-item class=\"input-class\" lines=\"none\">\n      <ion-label position=\"stacked\">\n        <ion-skeleton-text\n          [animated]=\"true\"\n          style=\"width: 50%\"\n        ></ion-skeleton-text>\n      </ion-label>\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n    </ion-item>\n\n    <ion-item class=\"input-class\" lines=\"none\">\n      <ion-label position=\"stacked\">\n        <ion-skeleton-text\n          [animated]=\"true\"\n          style=\"width: 50%\"\n        ></ion-skeleton-text>\n      </ion-label>\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n    </ion-item>\n    <ion-item class=\"input-class\" lines=\"none\">\n      <ion-label position=\"stacked\">\n        <ion-skeleton-text\n          [animated]=\"true\"\n          style=\"width: 50%\"\n        ></ion-skeleton-text>\n      </ion-label>\n      <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n    </ion-item>\n\n    <div class=\"ion-text-center ion-margin-vertical\">\n      <ion-button color=\"primary\" expand=\"full\" shape=\"round\" class=\"btn\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-button>\n    </div>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_auth-layout_change-pwd_change-pwd_module_ts.js.map