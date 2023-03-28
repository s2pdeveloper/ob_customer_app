"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_shop-detail_shop-detail_module_ts"],{

/***/ 6625:
/*!**************************************************************************!*\
  !*** ./src/app/default-layout/shop-detail/shop-detail-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopDetailPageRoutingModule": () => (/* binding */ ShopDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shop_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-detail.page */ 5709);




const routes = [
    {
        path: '',
        component: _shop_detail_page__WEBPACK_IMPORTED_MODULE_0__.ShopDetailPage
    }
];
let ShopDetailPageRoutingModule = class ShopDetailPageRoutingModule {
};
ShopDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShopDetailPageRoutingModule);



/***/ }),

/***/ 1680:
/*!******************************************************************!*\
  !*** ./src/app/default-layout/shop-detail/shop-detail.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopDetailPageModule": () => (/* binding */ ShopDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shop_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-detail-routing.module */ 6625);
/* harmony import */ var _shop_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-detail.page */ 5709);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_directives_parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/parallax-header.directive */ 8721);









let ShopDetailPageModule = class ShopDetailPageModule {
};
ShopDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _shop_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopDetailPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [
            _shop_detail_page__WEBPACK_IMPORTED_MODULE_1__.ShopDetailPage,
            src_app_directives_parallax_header_directive__WEBPACK_IMPORTED_MODULE_3__.ParallaxHeaderDirective
        ],
    })
], ShopDetailPageModule);



/***/ }),

/***/ 5709:
/*!****************************************************************!*\
  !*** ./src/app/default-layout/shop-detail/shop-detail.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopDetailPage": () => (/* binding */ ShopDetailPage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _shop_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-detail.page.html?ngResource */ 6903);
/* harmony import */ var _shop_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-detail.page.scss?ngResource */ 7451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/shop/shop.service */ 8294);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/gallery-list/gallery-list.component */ 9032);











let ShopDetailPage = class ShopDetailPage {
  constructor(activatedRoute, router, shopService, spinner, translate, modalController) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.shopService = shopService;
    this.spinner = spinner;
    this.translate = translate;
    this.modalController = modalController;
    this.loaded = false;
    this.shopDetails = [];
    this.shopName = '';
    this.shopId = null;
    this.buttonSlide = {
      slidesPerView: 4,
      slideShadows: true,
      initialSlide: 0,
      speed: 400,
      loop: true,
      autoplay: {
        delay: 300
      },
      spaceBetween: 1
    };
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe(params => {
      // when we navigate to search shop to shop details
      if (params._id) {
        this.shopId = params._id;
      } // when we navigate to chat view to shop details


      if (params.shopId) {
        this.shopId = params.shopId;
      }

      this.getShopById();
    });
  }

  getShopById() {
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByIdShop(this.shopId).subscribe(success => {
      this.shopDetails = success.rows;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  navigateTo(path) {
    let params = {
      _id: this.shopId
    };
    this.router.navigate([path], {
      queryParams: params
    });
  }

  goToMap(address) {
    let params = {
      address: address
    };
    this.router.navigate(['/map'], {
      queryParams: params
    });
  }

  goToChat() {
    let params = {
      shopName: this.shopDetails[0].shopName
    };
    this.router.navigate(['/chat-view'], {
      queryParams: params
    });
  }

  navigateToViewGalleryImages(galleryImg) {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: src_app_shared_gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_5__.GalleryListComponent,
        componentProps: {
          data: galleryImg
        }
      });
      yield modal.present();
    })();
  }

};

ShopDetailPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_4__.ShopService
}, {
  type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}];

ShopDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-shop-detail',
  template: _shop_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_shop_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ShopDetailPage);


/***/ }),

/***/ 8721:
/*!*********************************************************!*\
  !*** ./src/app/directives/parallax-header.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxHeaderDirective": () => (/* binding */ ParallaxHeaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let ParallaxHeaderDirective = class ParallaxHeaderDirective {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    ngAfterViewInit() {
        this.headerHeight = this.parallaxHeight;
        this.mainContent = this.element.nativeElement.querySelector('main-content');
        this.domCtrl.write(() => {
            this.header = this.renderer.createElement('div');
            this.renderer.insertBefore(this.element.nativeElement, this.header, this.element.nativeElement.firstChild);
            this.renderer.setStyle(this.header, 'background-image', 'url(' + this.imagePath + ')');
            this.renderer.setStyle(this.header, 'height', this.headerHeight + 'px');
            this.renderer.setStyle(this.header, 'background-size', 'cover');
        });
    }
    onContentScroll(ev) {
        this.domCtrl.read(() => {
            let translateAmt, scaleAmt;
            // Already scrolled past the point at which the header image is visible
            if (ev.detail.scrollTop > this.parallaxHeight) {
                return;
            }
            if (ev.detail.scrollTop >= 0) {
                translateAmt = -(ev.detail.scrollTop / 2);
                scaleAmt = 1;
            }
            else {
                translateAmt = 0;
                scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
            }
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'transform', 'translate3d(0,' + translateAmt + 'px,0) scale(' + scaleAmt + ',' + scaleAmt + ')');
                this.renderer.setStyle(this.mainContent, 'transform', 'translate3d(0, ' + (-ev.detail.scrollTop) + 'px, 0');
            });
        });
    }
};
ParallaxHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.DomController }
];
ParallaxHeaderDirective.propDecorators = {
    imagePath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['parallaxHeader',] }],
    parallaxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['parallaxHeight',] }]
};
ParallaxHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appParallaxHeader]',
        host: {
            '(ionScroll)': 'onContentScroll($event)'
        }
    })
], ParallaxHeaderDirective);



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

/***/ 7451:
/*!*****************************************************************************!*\
  !*** ./src/app/default-layout/shop-detail/shop-detail.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".font-bold {\n  font-size: 14px !important;\n  font-weight: bold;\n  color: black;\n}\n\n.title {\n  font-size: 18px !important;\n  font-weight: 100;\n  padding: 0px 0px 0px 0px;\n}\n\n.fb {\n  color: #3b5998;\n  width: 2.5rem;\n  height: 2rem;\n}\n\n.insta {\n  color: #bc2a8d;\n  width: 2.5rem;\n  height: 2rem;\n}\n\n.yt {\n  color: #FF0000;\n  width: 2.5rem;\n  height: 2rem;\n}\n\n.ct {\n  color: #0090D0;\n  width: 2.5rem;\n  height: 2rem;\n}\n\n.icon {\n  color: #0090D0;\n  font-size: 17px;\n}\n\n.card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(128, 128, 128, 0.1);\n  object-fit: cover !important;\n}\n\nion-card ion-avatar {\n  width: 6rem !important;\n  height: 6rem !important;\n  border: 2px solid var(--cs-background-primary, #ffffff);\n  object-fit: cover !important;\n}\n\n.social-share {\n  padding: 5px 0;\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.card-content-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.banner-img {\n  top: 0px !important;\n  bottom: 0px !important;\n  border-radius: 5px !important;\n  width: 363px !important;\n  height: 233px !important;\n  object-fit: cover !important;\n}\n\n.background-size {\n  height: 40vh;\n  position: relative;\n  background-color: var(--cs-blandModes-secondary, #ffffff);\n  background-blend-mode: luminosity;\n}\n\n.background-size::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n}\n\n.background-size .icon-small {\n  color: var(--cs-icon-color-secondary, #ffffff) !important;\n  position: relative;\n  z-index: 999;\n}\n\n.background-size .image {\n  padding: 10px 5px;\n}\n\n.background-size .image img {\n  top: 10px;\n  position: relative !important;\n  object-fit: cover !important;\n}\n\n.gallery {\n  border-radius: 5% !important;\n  height: 4rem !important;\n  width: 100% !important;\n  background-image: no-repeat !important;\n}\n\nion-content {\n  --padding-bottom: 0 !important;\n  --padding-top: 0 !important;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n}\n\n.main-content {\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  position: relative;\n  top: -40px;\n  min-height: 42px;\n  background-color: var(--ion-color-6);\n}\n\nion-avatar {\n  --border-radius: 4px;\n}\n\n.item-inner {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.shade-color {\n  color: darkslategray;\n}\n\nion-button {\n  overflow: hidden;\n  font-weight: 700;\n  margin-left: 20px !important;\n  margin-bottom: 15px !important;\n  margin-right: 20px !important;\n  border: 0rem;\n}\n\n.bg-transparent {\n  --background: transparent;\n  position: absolute;\n}\n\n.header-image {\n  width: 100%;\n  height: 350px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0FBREY7O0FBS0U7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdURBQUE7RUFDQSw0QkFBQTtBQUZKOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtFQUNBLGlDQUFBO0FBTEY7O0FBT0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQUxKOztBQVFFO0VBQ0UseURBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFOSjs7QUFTRTtFQUNFLGlCQUFBO0FBUEo7O0FBU0k7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQVBOOztBQWNBO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUFYRjs7QUFlQTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBWkY7O0FBZUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQVpGOztBQWVBO0VBQ0Usb0JBQUE7QUFaRjs7QUFlQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFaRjs7QUFlQTtFQUNFLG9CQUFBO0FBWkY7O0FBZUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQVpGOztBQWVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVhGIiwiZmlsZSI6InNob3AtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWJvbGQge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmZiIHtcbiAgY29sb3I6ICMzYjU5OTg7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmluc3RhIHtcbiAgY29sb3I6ICNiYzJhOGQ7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLnl0IHtcbiAgY29sb3I6ICNGRjAwMDA7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN0IHtcbiAgY29sb3I6ICMwMDkwRDA7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogIzAwOTBEMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cblxuLmNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC4xKTtcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDogNnJlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNnJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNzLWJhY2tncm91bmQtcHJpbWFyeSwgI2ZmZmZmZik7XG4gICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcblxuICB9XG59XG5cbi5zb2NpYWwtc2hhcmUge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtY29udGVudC1tZCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxufVxuXG4uYmFubmVyLWltZyB7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzYzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMzNweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1zaXplIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNzLWJsYW5kTW9kZXMtc2Vjb25kYXJ5LCAjZmZmZmZmKTtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG1peC1ibGVuZC1tb2RlOiB2YXIoLS1jcy1tb2RlLWltYWdlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jcy1ncmFkaWVudC1saW5lYXIpO1xuICB9XG5cbiAgLmljb24tc21hbGwge1xuICAgIGNvbG9yOiB2YXIoLS1jcy1pY29uLWNvbG9yLXNlY29uZGFyeSwgI2ZmZmZmZikgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcblxuICAgIGltZyB7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cblxuXG4uZ2FsbGVyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDUlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHJlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNDBweDtcbiAgbWluLWhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLTYpO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaGFkZS1jb2xvciB7XG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcmVtO1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaGVhZGVyLWltYWdle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cblxuIl19 */";

/***/ }),

/***/ 6903:
/*!*****************************************************************************!*\
  !*** ./src/app/default-layout/shop-detail/shop-detail.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item lines=\"none\" class=\"ion-no-padding bg-transparent\">\n  <ion-back-button color=\"primary\" defaultHref=\"app/tabs/landing-page\"></ion-back-button>\n</ion-item>\n\n<ion-content style=\"padding: 0\" class=\"shadow-none ion-no-padding\" appParallaxHeader [scrollEvents]=\"true\">\n  <ng-container *ngFor=\"let s of shopDetails\">\n    <img [src]=\"s.bannerImages\" class=\"header-image\">\n\n    <div class=\"main-content ion-padding\">\n      <ion-card>\n        <ion-card-content>\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-avatar class=\"ion-margin-end\">\n                <img alt=\"logo-image\" *ngIf=\"s.image\" [src]=\"s.image\">\n              </ion-avatar>\n              <ion-label>\n                <ion-row class=\"ion-justify-content-between\">\n                  <ion-col>\n                    <h2>\n                      <span class=\"text-bold font-larger shade-color ion-text-wrap\">{{s.shopName}}</span>\n                    </h2>\n                    <p class=\"font-larger\">{{s?.firstName}} {{s?.lastName}}</p>\n                    <ion-label class=\"text-color-9\">\n                      <ion-text class=\"ion-text-wrap\">\n                        <h4>\n                          {{s?.address?.city}}, {{s?.address?.state}} -\n                          {{s?.address?.pinCode}}\n                        </h4>\n                      </ion-text>\n                      <p>\n                        <span class=\"ion-text-wrap\">{{s?.address?.line1}}</span>\n                      </p>\n                      <p>\n                        <span class=\"ion-padding-top ion-text-wrap\">\n                          {{s?.schedule?.day}}:{{s?.schedule?.startTime}} to\n                          {{s?.schedule?.endTime }}</span>\n                      </p>\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n\n          <ion-grid>\n            <ion-row class=\"ion-text-center\">\n              <ion-col size=\"4\">\n                <ion-button fill=\"clear\">\n                  <a>\n                    <ion-icon name=\"chatbubble-ellipses-outline\" size=\"large\" class=\"ct\"\n                      (click)=\"goToChat()\"></ion-icon>\n                  </a>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-button fill=\"clear\">\n                  <a href=\"tel:+91{{userDetails?.mobile}}\">\n                    <ion-icon name=\"call\" size=\"large\" class=\"ct\"></ion-icon>\n                  </a>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-button fill=\"clear\">\n                  <a>\n                    <ion-icon name=\"location-outline\" size=\"large\" class=\"ct\"></ion-icon>\n                  </a>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\">\n              <ion-col size=\"4\">\n                <ion-button fill=\"clear\">\n                  <a href=\"{{userDetails?.links?.facebook}}\">\n                    <ion-icon name=\"logo-facebook\" class=\"font fb\"></ion-icon>\n                  </a>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-button fill=\"clear\">\n                  <a href=\"{{userDetails?.links?.insta}}\">\n                    <ion-icon name=\"logo-instagram\" class=\"left font insta\"></ion-icon>\n                  </a>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-button fill=\"clear\">\n                  <a href=\"{{userDetails?.links?.youtube}}\">\n                    <ion-icon name=\"logo-youtube\" class=\"font yt\"></ion-icon>\n                  </a>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-item lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <b>{{ 'aboutUs' | translate}}</b>\n                <p class=\"ion-text-wrap\">{{s.aboutUs }}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <div class=\"ion-text-center ion-margin-vertical\">\n        <ion-button color=\"primary\" expand=\"full\" shape=\"round\" class=\"btn\" (click)=\"navigateTo('/catalogue')\">\n          {{ 'viewCatalogue' | translate}}\n        </ion-button>\n      </div>\n      \n    </div>\n  </ng-container>\n<!-- gallery -->\n<ion-card >\n  <ion-card-content>\n    <ion-item lines=\"none\">\n      <ion-title class=\" ion-margin-bottom title\">\n        <b class=\"ion-text-wrap\"> {{'gallery' | translate}}</b>\n      </ion-title>\n      <ion-icon color=\"primary\" name=\"eye\" (click)=\"navigateToViewGalleryImages(shopDetails[0]?.galleryImages)\"></ion-icon>\n    </ion-item>\n    <ion-slides [options]=\"buttonSlide\" class=\"ion-margin-bottom\" >\n      <ion-slide *ngFor=\"let galleryImg of shopDetails[0]?.galleryImages\">\n        <div class=\"ion-margin-top ion-no-padding\" >\n          <ion-item (click)=\"navigateToViewGalleryImages(shopDetails[0]?.galleryImages)\">\n            <img class=\"gallery ion-no-padding\" src=\"{{galleryImg}}\" />\n          </ion-item>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_shop-detail_shop-detail_module_ts.js.map