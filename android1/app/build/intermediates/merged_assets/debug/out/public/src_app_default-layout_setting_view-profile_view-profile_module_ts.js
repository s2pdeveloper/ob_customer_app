"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_setting_view-profile_view-profile_module_ts"],{

/***/ 977:
/*!************************************************************************************!*\
  !*** ./src/app/default-layout/setting/view-profile/view-profile-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProfilePageRoutingModule": () => (/* binding */ ViewProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _view_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-profile.page */ 4901);




const routes = [
    {
        path: '',
        component: _view_profile_page__WEBPACK_IMPORTED_MODULE_0__.ViewProfilePage
    }
];
let ViewProfilePageRoutingModule = class ViewProfilePageRoutingModule {
};
ViewProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewProfilePageRoutingModule);



/***/ }),

/***/ 8870:
/*!****************************************************************************!*\
  !*** ./src/app/default-layout/setting/view-profile/view-profile.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProfilePageModule": () => (/* binding */ ViewProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-profile-routing.module */ 977);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _view_profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-profile.page */ 4901);








let ViewProfilePageModule = class ViewProfilePageModule {
};
ViewProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewProfilePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        declarations: [_view_profile_page__WEBPACK_IMPORTED_MODULE_2__.ViewProfilePage]
    })
], ViewProfilePageModule);



/***/ }),

/***/ 4901:
/*!**************************************************************************!*\
  !*** ./src/app/default-layout/setting/view-profile/view-profile.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProfilePage": () => (/* binding */ ViewProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-profile.page.html?ngResource */ 6779);
/* harmony import */ var _view_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-profile.page.scss?ngResource */ 2400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services */ 8138);









let ViewProfilePage = class ViewProfilePage {
    constructor(authService, router, spinner, localStorage, translate) {
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.localStorage = localStorage;
        this.translate = translate;
        this.loaded = false;
        this.userDetails = {};
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.user = this.localStorage.get('OBCustomer');
        this.getById();
    }
    getById() {
        this.loaded = false;
        this.authService.profile(this.user._id).subscribe((success) => {
            this.userDetails = success;
            this.spinner.hideLoader();
            this.loaded = true;
        });
    }
    navigateTo(path, _id) {
        this.router.navigate([path], { queryParams: { _id } });
    }
    navigate(page) {
        this.router.navigate([`${page}`]);
    }
};
ViewProfilePage.ctorParameters = () => [
    { type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
ViewProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view-profile',
        template: _view_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewProfilePage);



/***/ }),

/***/ 2400:
/*!***************************************************************************************!*\
  !*** ./src/app/default-layout/setting/view-profile/view-profile.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".avatar {\n  margin: auto;\n  width: 5em;\n  height: 5em;\n}\n\n.center {\n  text-align: center;\n}\n\n.user-info .shop-name, .user-info .email, .user-info .mobile-number, .user-info .address {\n  --color: #0D276B;\n  color: #0D276B;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBS0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZSIiwiZmlsZSI6InZpZXctcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hdmF0YXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgaGVpZ2h0OiA1ZW07XG59XG5cbi5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi51c2VyLWluZm8ge1xuICAgIC5zaG9wLW5hbWUsIC5lbWFpbCwgLm1vYmlsZS1udW1iZXIsIC5hZGRyZXNzIHtcbiAgICAgICAgLS1jb2xvcjogIzBEMjc2QjtcbiAgICAgICAgY29sb3I6ICMwRDI3NkI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBcbiAgICAgICAgLy8gcHtcbiAgICAgICAgLy8gICAgIGNvbG9yOiAjMEQyNzZCXG4gICAgICAgIC8vIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 6779:
/*!***************************************************************************************!*\
  !*** ./src/app/default-layout/setting/view-profile/view-profile.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color-2\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/tabs/settings\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-capitalize ion-text-wrap\"\n      >{{ 'myProfile' | translate}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"text-center\">\n    <ion-avatar class=\"avatar\">\n      <img\n        [src]=\"userDetails?.image || 'assets/images/placeholder_profile.png'\"\n      />\n    </ion-avatar>\n    <ion-text>\n      <h2 class=\"ion-text-capitalize ion-text-wrap center\">\n        {{userDetails?.firstName}} {{userDetails?.lastName}}\n      </h2>\n    </ion-text>\n  </div>\n\n  <ion-card-content>\n    <ion-card class=\"user-info\">\n      <ion-item>\n        <i\n          ><img\n            src=\"../../../assets/icon/message.png\"\n            width=\"45px\"\n            alt=\"message img\"\n        /></i>\n        <ion-label class=\"ion-margin-start email\">\n          {{ 'email' | translate}}\n          <p>{{userDetails?.email}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <i\n          ><img\n            src=\"../../../assets/icon/phone-call.png\"\n            width=\"45px\"\n            alt=\"phone-call img\"\n        /></i>\n        <ion-label class=\"ion-margin-start mobile-number\">\n          {{ 'mobileNumber' | translate}}\n          <p>{{userDetails?.mobile}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <i\n          ><img\n            src=\"../../../assets/icon/address.png\"\n            width=\"45px\"\n            alt=\"address img\"\n        /></i>\n        <ion-label class=\"ion-margin-start address\">\n          {{ 'Address' | translate}}\n          <p>\n            {{userDetails?.address?.line1}} {{userDetails?.address?.city}}\n            <br>\n            {{userDetails?.address?.state}} {{userDetails?.address?.country}}\n            {{userDetails?.address?.pinCode}}\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <div class=\"ion-text-center ion-margin-vertical\">\n        <ion-button\n          color=\"primary\"\n          fill=\"outline\"\n          expand=\"block\"\n          strong=\"true\"\n          shape=\"round\"\n          (click)=\"navigate('edit-profile')\"\n        >\n          <ion-icon name=\"create\" class=\"ion-margin-end\"></ion-icon>\n          {{ 'editProfile' | translate}}\n        </ion-button>\n      </div>\n    </ion-card>\n  </ion-card-content>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_setting_view-profile_view-profile_module_ts.js.map