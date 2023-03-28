"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_landing-page_landing-page_module_ts"],{

/***/ 3064:
/*!****************************************************************************!*\
  !*** ./src/app/default-layout/landing-page/landing-page-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageRoutingModule": () => (/* binding */ LandingPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.page */ 4115);




const routes = [
    {
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_0__.LandingPagePage
    }
];
let LandingPagePageRoutingModule = class LandingPagePageRoutingModule {
};
LandingPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPagePageRoutingModule);



/***/ }),

/***/ 9582:
/*!********************************************************************!*\
  !*** ./src/app/default-layout/landing-page/landing-page.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageModule": () => (/* binding */ LandingPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page-routing.module */ 3064);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page */ 4115);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let LandingPagePageModule = class LandingPagePageModule {
};
LandingPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPagePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_1__.LandingPagePage]
    })
], LandingPagePageModule);



/***/ }),

/***/ 4115:
/*!******************************************************************!*\
  !*** ./src/app/default-layout/landing-page/landing-page.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePage": () => (/* binding */ LandingPagePage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _landing_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page.html?ngResource */ 5937);
/* harmony import */ var _landing_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.page.scss?ngResource */ 6895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_service_advertise_advertise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/advertise/advertise.service */ 134);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);
/* harmony import */ var src_app_service_category_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/category/category.service */ 9659);
/* harmony import */ var src_app_service_offer_offer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/offer/offer.service */ 6167);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4350);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 8794);















const {
  Geolocation
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Plugins;
let LandingPagePage = class LandingPagePage {
  constructor(router, translate, categoryService, offerService, advertiseService, localStorage, authService) {
    this.router = router;
    this.translate = translate;
    this.categoryService = categoryService;
    this.offerService = offerService;
    this.advertiseService = advertiseService;
    this.localStorage = localStorage;
    this.authService = authService;
    this.disabledScroll = false;
    this.businessArr = [];
    this.categoryArr = [];
    this.search = '';
    this.offerArr = [];
    this.advertiseArr = [];
    this.user = '';
    this.userDetails = [];
    this.buttonSlide = {
      slidesPerView: 4,
      slideShadows: true,
      initialSlide: 0,
      speed: 400,
      loop: true,
      // autoplay: {
      //   delay: 5000,
      // },
      spaceBetween: 10
    };
    this.buttonSlide1 = {
      slidesPerView: 1,
      slideShadows: true,
      initialSlide: 0,
      speed: 300,
      autoplay: {
        delay: 5000
      },
      spaceBetween: 25
    };
    this.buttonSlide2 = {
      slidesPerView: 1,
      slideShadows: true,
      initialSlide: 0,
      speed: 400,
      autoplay: {
        delay: 3000
      },
      spaceBetween: 25
    };
    this.currentLocation = {};
  }

  ngOnInit() {}

  ionViewWillEnter() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.search = '';
      _this.user = _this.localStorage.get('OBCustomer');

      _this.getAllDataParallel();

      _this.geolocation = yield (yield Geolocation.getCurrentPosition()).coords;

      _this.getCurrentLocation();
    })();
  }

  doInfinite($event) {}

  getCurrentLocation() {
    let obj = {
      latitude: this.geolocation.latitude,
      longitude: this.geolocation.longitude
    };
    this.authService.getCurrentLocation(obj).subscribe(success => {
      this.currentLocation = success.response.results[0];
    });
  }

  getAllDataParallel() {
    let response1 = this.categoryService.getAll({});
    let response2 = this.offerService.getAll({});
    let response3 = this.advertiseService.getAll({});
    let response4 = this.authService.profile(this.user._id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([response1, response2, response3, response4]).subscribe(success => {
      this.categoryArr = success[0].rows;
      this.offerArr = success[1].rows;
      this.advertiseArr = success[2].rows;
      this.userDetails = success[3];
    });
  }

  navigateToSearchShop(search) {
    this.router.navigate(['/app/tabs/search-shop'], {
      queryParams: {
        search: this.search
      }
    });
  }

  seeAllCategory() {
    this.router.navigate(['/category']);
  }

  navigateToProfilePage() {
    this.router.navigate(['/view-profile']);
  }

  navigateToMap() {
    this.router.navigate(['/map']);
  }

  doRefresh(event) {
    this.advertiseArr = [];
    this.getAllDataParallel();
    event.target.complete();
  }

  categoryToCategoryPage(c) {
    this.router.navigate(['/category'], {
      queryParams: {
        categoryId: c
      }
    });
  }

};

LandingPagePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
}, {
  type: src_app_service_category_category_service__WEBPACK_IMPORTED_MODULE_6__.CategoryService
}, {
  type: src_app_service_offer_offer_service__WEBPACK_IMPORTED_MODULE_7__.OfferService
}, {
  type: src_app_service_advertise_advertise_service__WEBPACK_IMPORTED_MODULE_4__.AdvertiseService
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}];

LandingPagePage.propDecorators = {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInfiniteScroll, {
      static: false
    }]
  }]
};
LandingPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-landing-page',
  template: _landing_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_landing_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LandingPagePage);


/***/ }),

/***/ 134:
/*!********************************************************!*\
  !*** ./src/app/service/advertise/advertise.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvertiseService": () => (/* binding */ AdvertiseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 8138);



let AdvertiseService = class AdvertiseService {
    constructor(http) {
        this.http = http;
        this.routes = {
            getAllPath: `advertise/getAll`,
        };
    }
    getAll(payload) {
        return this.http.get(this.routes.getAllPath, payload);
    }
};
AdvertiseService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
AdvertiseService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], AdvertiseService);



/***/ }),

/***/ 6167:
/*!************************************************!*\
  !*** ./src/app/service/offer/offer.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferService": () => (/* binding */ OfferService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 8138);



let OfferService = class OfferService {
    constructor(http) {
        this.http = http;
        this.routes = {
            getAllPath: `offer/getAll`,
        };
    }
    getAll(payload) {
        return this.http.get(this.routes.getAllPath, payload);
    }
};
OfferService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
OfferService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], OfferService);



/***/ }),

/***/ 6895:
/*!*******************************************************************************!*\
  !*** ./src/app/default-layout/landing-page/landing-page.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 0 !important;\n}\nion-content .card-pad {\n  padding-bottom: 10px;\n  height: 100%;\n}\n.sc-ion-searchbar-md-h {\n  padding-left: 8px;\n  padding-left: 35px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 20px;\n}\n.heading {\n  font-weight: bold;\n}\n.businessTypeActive ion-note {\n  color: red;\n}\n.ion-note {\n  text-align: center;\n}\n.business {\n  text-align: center;\n}\n.business-font-size {\n  font-size: small;\n  font-weight: bold;\n}\n.swiper-slide img {\n  width: 60px;\n  border-radius: 25%;\n  height: 60px;\n}\n.offerImage {\n  border-radius: 1rem !important;\n  height: 9.5rem !important;\n  width: 22rem !important;\n  object-fit: cover !important;\n}\n.advertiseImage {\n  border-radius: 1rem !important;\n  height: 7rem !important;\n  width: 22rem !important;\n  object-fit: cover !important;\n  padding: 0px !important;\n}\n.location {\n  font-size: 0.7rem !important;\n}\n.location-icon {\n  margin: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBSUU7RUFDRSxVQUFBO0FBREo7QUFNQTtFQUNFLGtCQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0FBSEY7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUhGO0FBTUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLQTtFQUNFLDRCQUFBO0FBRkY7QUFJQTtFQUNFLHNCQUFBO0FBREYiLCJmaWxlIjoibGFuZGluZy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuXG4gIC5jYXJkLXBhZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnVzaW5lc3NUeXBlQWN0aXZlIHtcbiAgaW9uLW5vdGUge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cblxuXG4uaW9uLW5vdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXNpbmVzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1c2luZXNzLWZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLm9mZmVySW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOS41cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMnJlbSAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uYWR2ZXJ0aXNlSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogN3JlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjJyZW0gIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9jYXRpb257XG4gIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XG59XG4ubG9jYXRpb24taWNvbntcbiAgbWFyZ2luOiAycHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 5937:
/*!*******************************************************************************!*\
  !*** ./src/app/default-layout/landing-page/landing-page.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"font-poppins\">\n  <ion-item lines=\"none\">\n    <ion-icon class=\"location-icon\" color=\"primary\" name=\"location\" slot=\"start\" (click)=\"navigateToMap()\"></ion-icon>\n    <span class=\"location\">{{currentLocation?.formatted_address |truncate: 30}}</span>\n    <ion-avatar slot=\"end\">\n      <img [src]=\"userDetails?.image || 'assets/images/placeholder_profile.png'\" alt=\"profile\"\n        (click)=\"navigateToProfilePage()\" />\n    </ion-avatar>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-searchbar class=\"search-box ion-no-padding\" [(ngModel)]=\"search\" searchIcon animated type=\"text\"\n      showCancelButton=\"never\" placeholder=\"{{ 'Search' | translate}}\" autocomplete=\"on\" autocorrect=\"on\">\n    </ion-searchbar>\n    <ion-icon name=\"checkmark-done-circle-outline\" slot=\"end\" (click)=\"navigateToSearchShop(search)\"></ion-icon>\n  </ion-item>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- advertise -->\n  <ion-slides [options]=\"buttonSlide2\" class=\"ion-margin-bottom\" autoplay=\"true\" loop=\"true\" pager>\n    <ion-slide *ngFor=\"let a of advertiseArr\">\n      <div class=\"advertise ion-no-padding\">\n        <img class=\"advertiseImage\" src=\"{{a.imageUrl}} \" /><br />\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- category -->\n  <ion-item lines=\"none\">\n    <ion-title class=\"ion-no-padding heading\" color=\"primary\">{{'Category' | translate}}</ion-title>\n    <ion-label (click)=\"seeAllCategory()\" slot=\"end\">{{'See all' | translate}}</ion-label>\n  </ion-item>\n  <ion-slides [options]=\"buttonSlide\">\n    <ion-slide *ngFor=\"let c of categoryArr\">\n      <div class=\"\">\n        <img src=\"{{c.imageUrl}} \" (click)=\"categoryToCategoryPage(c._id)\" /><br />\n        <ion-note class=\"business-font-size ion-text-capitalize ion-text-wrap\">{{c.name}}</ion-note>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- offers -->\n  <ion-item lines=\"none\">\n    <ion-title class=\"ion-no-padding heading\" color=\"primary\">{{'Offers' | translate}}</ion-title>\n  </ion-item>\n  <ion-slides [options]=\"buttonSlide1\" autoplay=\"true\" loop=\"true\" class=\"ion-margin-bottom\" pager>\n    <ion-slide *ngFor=\"let o of offerArr\">\n      <div class=\"offer\">\n        <img class=\"offerImage\" src=\"{{o.imageUrl}} \" /><br />\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_landing-page_landing-page_module_ts.js.map