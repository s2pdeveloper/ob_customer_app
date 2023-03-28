"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_default-layout_favorite_favorite_module_ts"],{

/***/ 6100:
/*!********************************************************************!*\
  !*** ./src/app/default-layout/favorite/favorite-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageRoutingModule": () => (/* binding */ FavoritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.page */ 359);




const routes = [
    {
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_0__.FavoritePage
    }
];
let FavoritePageRoutingModule = class FavoritePageRoutingModule {
};
FavoritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritePageRoutingModule);



/***/ }),

/***/ 6200:
/*!************************************************************!*\
  !*** ./src/app/default-layout/favorite/favorite.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageModule": () => (/* binding */ FavoritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-routing.module */ 6100);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page */ 359);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let FavoritePageModule = class FavoritePageModule {
};
FavoritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_1__.FavoritePage]
    })
], FavoritePageModule);



/***/ }),

/***/ 359:
/*!**********************************************************!*\
  !*** ./src/app/default-layout/favorite/favorite.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePage": () => (/* binding */ FavoritePage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _favorite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page.html?ngResource */ 5118);
/* harmony import */ var _favorite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite.page.scss?ngResource */ 7263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_service_favourite_favourite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/favourite/favourite.service */ 3072);
/* harmony import */ var src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/shop/shop.service */ 8294);












let FavoritePage = class FavoritePage {
  constructor(router, spinner, translate, modelController, shopService, favoriteService, activatedRoute, toaster, localStorage) {
    this.router = router;
    this.spinner = spinner;
    this.translate = translate;
    this.modelController = modelController;
    this.shopService = shopService;
    this.favoriteService = favoriteService;
    this.activatedRoute = activatedRoute;
    this.toaster = toaster;
    this.localStorage = localStorage;
    this.disabledScroll = false;
    this.page = 1;
    this.pageSize = 10;
    this.search = '';
    this.businessTypeId = '';
    this.categoryId = '';
    this.subCategoryId = '';
    this.collection = 0;
    this.shopFavorites = [];
    this.loaded = false;
    this.isFavorite = {};
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getFavoriteByCustomerId(false);
  }

  getFavoriteByCustomerId(isFirstLoad, event) {
    this.user = this.localStorage.get('OBCustomer');
    this.spinner.showLoader();
    let obj = {
      search: this.search
    };
    this.loaded = false;
    this.favoriteService.getFavoriteByCustomerId(this.user._id, obj).subscribe(success => {
      this.shopFavorites = success.rows;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  navigateTo(path, _id) {
    console.log(_id);
    this.router.navigate([path], {
      queryParams: {
        _id
      }
    });
  }

  getUrl(url) {
    let path = `url('${url}')`;
    return path;
  }

  onSearch() {
    this.page = 1;
    this.shopFavorites = [];
    this.getFavoriteByCustomerId(false);
  }

  doRefresh(event) {
    this.page = 1;
    this.shopFavorites = [];
    this.getFavoriteByCustomerId(true, event);
    event.target.complete();
  }

  addToFavorite(item) {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let payload = {
        action: 'remove',
        shopId: item.shopId._id
      };

      _this.shopService.createOrRemoveFavorite(payload).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
          _this.getFavoriteByCustomerId(false);

          _this.toaster.successToast(success.message);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  doInfinite(event) {
    this.page++;
    this.getFavoriteByCustomerId(false, '');
    event.target.disabled = true;
    this.infiniteScroll.disabled = true;
    event.target.complete();
  }

};

FavoritePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_6__.ShopService
}, {
  type: src_app_service_favourite_favourite_service__WEBPACK_IMPORTED_MODULE_5__.FavoriteService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService
}];

FavoritePage.propDecorators = {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll, {
      static: false
    }]
  }]
};
FavoritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-favorite',
  template: _favorite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_favorite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FavoritePage);


/***/ }),

/***/ 3072:
/*!********************************************************!*\
  !*** ./src/app/service/favourite/favourite.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteService": () => (/* binding */ FavoriteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 8138);



let FavoriteService = class FavoriteService {
    constructor(http) {
        this.http = http;
        this.routes = {
            getFavoriteByCustomerId: (_id) => `customer/getFavoriteByCustomerId/${_id}`,
        };
    }
    getFavoriteByCustomerId(_id, payload) {
        return this.http.get(this.routes.getFavoriteByCustomerId(_id), payload);
    }
};
FavoriteService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
FavoriteService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], FavoriteService);



/***/ }),

/***/ 8294:
/*!**********************************************!*\
  !*** ./src/app/service/shop/shop.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopService": () => (/* binding */ ShopService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 8138);



let ShopService = class ShopService {
    constructor(http) {
        this.http = http;
        this.routes = {
            getAllPath: `customer/getAllShop`,
            addFavorites: `favorite/create`,
            getByIdPath: (_id) => `customer/getByIdShop/${_id}`,
            getByUPIPath: `customer/getByIdShopUPI`,
            getByCategoryIdWithShop: (_id) => `customer/getShopByCategoryId/${_id}`,
            getCatalogueBySubCategoryId: (_id) => `customer/getCatalogueBySubCategoryId/${_id}`,
        };
    }
    getAllShop(params) {
        return this.http.get(this.routes.getAllPath, params);
    }
    getByIdShop(_id) {
        return this.http.get(this.routes.getByIdPath(_id));
    }
    getByIdShopUPI(params) {
        return this.http.get(this.routes.getByUPIPath, params);
    }
    getByCategoryIdWithShop(_id) {
        return this.http.get(this.routes.getByCategoryIdWithShop(_id));
    }
    getCatalogueBySubCategoryId(_id) {
        return this.http.get(this.routes.getCatalogueBySubCategoryId(_id));
    }
    createOrRemoveFavorite(payload) {
        return this.http.post(this.routes.addFavorites, payload);
    }
};
ShopService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
ShopService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ShopService);



/***/ }),

/***/ 7263:
/*!***********************************************************************!*\
  !*** ./src/app/default-layout/favorite/favorite.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  height: 85vh;\n}\nion-content .no-data {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 2rem;\n  box-shadow: none;\n}\nion-content .size {\n  width: 97%;\n}\n.shop-list .shop-name {\n  font-weight: bold;\n  margin: 0px 0px 0px 0px;\n}\n.shop-list ion-card {\n  ---border-color: #f0f0f0;\n}\n.shop-list .star {\n  position: absolute;\n  top: 85px;\n  left: 79px;\n  white-space: nowrap;\n  color: gold;\n}\n.shop-list .star ion-icon {\n  margin-right: 1px;\n}\n.rating {\n  position: absolute;\n  right: 1.5rem;\n  bottom: 21px;\n}\nion-card {\n  width: 100%;\n  height: 154px;\n}\n.shop-card {\n  margin-bottom: 6px;\n  padding-right: 5px;\n  margin-top: 0px;\n  object-fit: cover !important;\n}\n.shop-card .heart-icon {\n  margin-left: 1rem !important;\n}\n.shop-card ion-label {\n  background-color: transparent;\n  margin-top: 1rem !important;\n}\n.shop-card .heart-icon {\n  text-align: end !important;\n}\n.shop-card .address {\n  position: absolute;\n  bottom: 0.5rem;\n  margin-left: 1.4rem;\n  background-color: transparent;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBS0U7RUFFRSxpQkFBQTtFQUNBLHVCQUFBO0FBSEo7QUFNRTtFQUNFLHdCQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFMSjtBQU9JO0VBQ0UsaUJBQUE7QUFMTjtBQWFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVZGO0FBY0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVhGO0FBZUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBWkY7QUFjRTtFQUNFLDRCQUFBO0FBWko7QUFlRTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7QUFiSjtBQWlCRTtFQUNFLDBCQUFBO0FBZko7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQWhCSiIsImZpbGUiOiJmYXZvcml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGhlaWdodDogODV2aDtcblxuICAubm8tZGF0YSB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAuc2l6ZSB7XG4gICAgd2lkdGg6IDk3JTtcbiAgfVxufVxuXG4uc2hvcC1saXN0IHtcbiAgLnNob3AtbmFtZSB7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgfVxuXG4gIGlvbi1jYXJkIHtcbiAgICAtLS1ib3JkZXItY29sb3I6ICNmMGYwZjA7XG4gIH1cblxuICAuc3RhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODVweDtcbiAgICBsZWZ0OiA3OXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6IGdvbGQ7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICB9XG4gIH1cblxuXG5cbn1cblxuLnJhdGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgYm90dG9tOiAyMXB4O1xufVxuXG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTU0cHg7XG59XG5cblxuLnNob3AtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG5cbiAgLmhlYXJ0LWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcblxuICB9XG5cbiAgLmhlYXJ0LWljb24ge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFkZHJlc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMS40cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBncmF5O1xuXG4gIH1cblxuXG59Il19 */";

/***/ }),

/***/ 5118:
/*!***********************************************************************!*\
  !*** ./src/app/default-layout/favorite/favorite.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> {{ 'favoritesShop' | translate}} </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/app/tabs/landing-page\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content> </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- search bar -->\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-searchbar\n        class=\"search-box ion-no-padding ion-margin-bottom size\"\n        inputmode=\"search\"\n        searchIcon\n        animated\n        type=\"text\"\n        debounce=\"900\"\n        showCancelButton=\"never\"\n        placeholder=\"{{ 'searchShop' | translate}}\"\n        autocomplete=\"on\"\n        autocorrect=\"on\"\n        [(ngModel)]=\"search\"\n        (ionChange)=\"onSearch()\"\n      >\n      </ion-searchbar>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid>\n    <ion-row *ngFor=\"let s of shopFavorites\">\n      <ion-col size=\"12\">\n        <ion-card\n          class=\"shop-card\"\n          [ngStyle]=\"{ \n          'background-image': getUrl(s?.shopId.image), \n          'background-repeat': 'no-repeat', \n          'object-fit':'cover',\n          'background-size':'100% 100%'\n         }\"\n        >\n          <div class=\"ion-text-end ion-margin-end ion-margin-top\">\n            <ion-icon\n              (click)=\"addToFavorite(s)\"\n              name=\"heart\"\n              fill=\"\"\n              size=\"large\"\n              slot=\"end\"\n              color=\"primary\"\n            >\n            </ion-icon>\n          </div>\n          <ion-badge\n            color=\"success\"\n            class=\"rating ion-text-end\"\n            (click)=\"navigateTo('/shop-detail',s?.shopId._id)\"\n          >\n            5\n            <ion-icon name=\"star\"></ion-icon>\n          </ion-badge>\n        </ion-card>\n        <b class=\"text-bold font-larger shade-color ion-margin-top\"\n          >{{s.shopId.shopName}}</b\n        >\n        <ion-label\n          (click)=\"navigateTo('/shop-detail',s?.shopId._id)\"\n          class=\"address ion-margin-top\"\n          color=\"\n            light\"\n        >\n          <ion-text class=\"ion-margin-start ion-margin-bottom\">\n            <h4>\n              {{ s.shopId .address.city ? s.shopId .address.city : \"\"}},\n              {{s.shopId .address.state ? s.shopId .address.state : \"\" }},\n              {{s.shopId .address.pinCode ? s.shopId .address.pinCode : \"\" }}.\n            </h4>\n          </ion-text>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_default-layout_favorite_favorite_module_ts.js.map