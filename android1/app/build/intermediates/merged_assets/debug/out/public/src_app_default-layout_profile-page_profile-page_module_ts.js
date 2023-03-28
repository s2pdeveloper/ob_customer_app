"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_profile-page_profile-page_module_ts"],{

/***/ 1747:
/*!****************************************************************************!*\
  !*** ./src/app/default-layout/profile-page/profile-page-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePagePageRoutingModule": () => (/* binding */ ProfilePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page.page */ 9776);




const routes = [
    {
        path: '',
        component: _profile_page_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePagePage
    }
];
let ProfilePagePageRoutingModule = class ProfilePagePageRoutingModule {
};
ProfilePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePagePageRoutingModule);



/***/ }),

/***/ 8297:
/*!********************************************************************!*\
  !*** ./src/app/default-layout/profile-page/profile-page.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePagePageModule": () => (/* binding */ ProfilePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page-routing.module */ 1747);
/* harmony import */ var _profile_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-page.page */ 9776);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let ProfilePagePageModule = class ProfilePagePageModule {
};
ProfilePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePagePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_profile_page_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePagePage]
    })
], ProfilePagePageModule);



/***/ }),

/***/ 9776:
/*!******************************************************************!*\
  !*** ./src/app/default-layout/profile-page/profile-page.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePagePage": () => (/* binding */ ProfilePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page.page.html?ngResource */ 6002);
/* harmony import */ var _profile_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-page.page.scss?ngResource */ 9006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);









let ProfilePagePage = class ProfilePagePage {
    constructor(router, localStorage, authService, spinner, location) {
        this.router = router;
        this.localStorage = localStorage;
        this.authService = authService;
        this.spinner = spinner;
        this.location = location;
        this.userDetails = {};
        this.loaded = false;
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
            this.loaded = false;
        });
    }
    navigateTo(path, _id) {
        this.router.navigate([path], { queryParams: { _id } });
    }
    goBack() {
        this.location.back();
    }
};
ProfilePagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location }
];
ProfilePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile-page',
        template: _profile_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePagePage);



/***/ }),

/***/ 9006:
/*!*******************************************************************************!*\
  !*** ./src/app/default-layout/profile-page/profile-page.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".thumbnail-lg {\n  height: 250px;\n  width: 250px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbC1sZ3tcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgIFxufSJdfQ== */";

/***/ }),

/***/ 6002:
/*!*******************************************************************************!*\
  !*** ./src/app/default-layout/profile-page/profile-page.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-title>Profile Details</ion-title>\n  <ion-buttons slot=\"start\" class=\"\">\n    <ion-back-button defaultHref=\"landing-page\" mode=\"md\"></ion-back-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <div class=\"ion-text-center\">\n        <img src=\"./assets/image/profile.svg\" alt=\"Logo\" height=\"250\" />\n        <ion-button\n          color=\"primary\"\n          strong=\"true\"\n          shape=\"round\"\n          (click)=\"navigateTo('/edit-profile',null)\"\n        >\n          <ion-icon name=\"create\" class=\"ion-margin-end\"></ion-icon>\n          {{ 'editProfile' | translate}}\n        </ion-button>\n      </div>\n\n      <ion-item class=\"ion-margin-top\">\n        <ion-icon color=\"secondary\" name=\"customerName\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          <ion-text color=\"primary\" class=\"text-bold ion-text-capitalize\">\n            {{ userDetails?.customerName }}\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon color=\"secondary\" name=\"person-circle-sharp\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          <ion-text color=\"primary\" class=\"text-bold ion-text-capitalize\">\n            {{ userDetails.firstName }} {{ userDetails.lastName }}\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon class=\"\" name=\"call\" color=\"secondary\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          {{ userDetails.mobile }}\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon class=\"\" color=\"secondary\" name=\"location\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          {{ userDetails?.address?.line1 }}\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"loaded\">\n  <ion-card>\n    <ion-card-content>\n      <div class=\"ion-text-center\">\n        <img src=\"./assets/image/profile.svg\" alt=\"Logo\" height=\"250\" />\n        <ion-button\n          color=\"primary\"\n          strong=\"true\"\n          shape=\"round\"\n          (click)=\"navigateTo('/edit-profile',null)\"\n        >\n          <ion-icon name=\"create\" class=\"ion-margin-end\"></ion-icon>\n          {{ 'editProfile' | translate}}\n        </ion-button>\n      </div>\n\n      <ion-item class=\"ion-margin-top\">\n        <ion-icon color=\"secondary\" name=\"storefront-sharp\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          <ion-text color=\"primary\" class=\"text-bold ion-text-capitalize\">\n            {{ userDetails?.shopName }}\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon color=\"secondary\" name=\"person-circle-sharp\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          <ion-text color=\"primary\" class=\"text-bold ion-text-capitalize\">\n            {{ userDetails.name }}\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon class=\"\" name=\"call\" color=\"secondary\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          {{ userDetails.mobile }}\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon class=\"\" color=\"secondary\" name=\"location\"></ion-icon>\n        <ion-label class=\"ion-margin-start\">\n          {{ userDetails.address }}\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_profile-page_profile-page_module_ts.js.map