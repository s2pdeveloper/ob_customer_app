"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_qr-code_qr-code_module_ts"],{

/***/ 6954:
/*!******************************************************************!*\
  !*** ./src/app/default-layout/qr-code/qr-code-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodePageRoutingModule": () => (/* binding */ QrCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _qr_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-code.page */ 389);




const routes = [
    {
        path: '',
        component: _qr_code_page__WEBPACK_IMPORTED_MODULE_0__.QrCodePage
    }
];
let QrCodePageRoutingModule = class QrCodePageRoutingModule {
};
QrCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrCodePageRoutingModule);



/***/ }),

/***/ 299:
/*!**********************************************************!*\
  !*** ./src/app/default-layout/qr-code/qr-code.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodePageModule": () => (/* binding */ QrCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _qr_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-code-routing.module */ 6954);
/* harmony import */ var _qr_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-code.page */ 389);







// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
let QrCodePageModule = class QrCodePageModule {
};
QrCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qr_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrCodePageRoutingModule
        ],
        declarations: [_qr_code_page__WEBPACK_IMPORTED_MODULE_1__.QrCodePage],
        // providers: [BarcodeScanner],
    })
], QrCodePageModule);



/***/ }),

/***/ 389:
/*!********************************************************!*\
  !*** ./src/app/default-layout/qr-code/qr-code.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodePage": () => (/* binding */ QrCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _qr_code_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-code.page.html?ngResource */ 5254);
/* harmony import */ var _qr_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-code.page.scss?ngResource */ 7181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/shop/shop.service */ 8294);







let QrCodePage = class QrCodePage {
    constructor(barcodeScanner, shopService, router) {
        this.barcodeScanner = barcodeScanner;
        this.shopService = shopService;
        this.router = router;
        this.scanActive = false;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.scan();
    }
    scan() {
        this.data = null;
        this.barcodeScanner
            .scan({
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            // prompt: 'Place a barcode inside the scan area',
            resultDisplayDuration: 500,
            formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
            orientation: 'portrait',
        })
            .then((barcodeData) => {
            let _id = barcodeData.text.split('?_id=')[1];
            if (_id.includes('=')) {
                this.shopService
                    .getByIdShopUPI({ UPI: _id })
                    .subscribe((success) => {
                    console.log('success', success);
                    this.router.navigate(['/shop-detail'], {
                        queryParams: { _id: success?._id },
                    });
                });
            }
            else {
                this.router.navigate(['/shop-detail'], {
                    queryParams: { _id },
                });
            }
        })
            .catch((err) => {
            console.log('Error', err);
        });
    }
};
QrCodePage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_3__.ShopService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
QrCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-qr-code',
        template: _qr_code_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_qr_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QrCodePage);



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

/***/ 7181:
/*!*********************************************************************!*\
  !*** ./src/app/default-layout/qr-code/qr-code.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".scan-box {\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  left: 50%;\n  height: 300px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n}\n\n.scan-button {\n  margin: 0px;\n  position: absolute;\n  bottom: 100px;\n  width: 100vw;\n  height: 50px;\n  z-index: 11;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFSiIsImZpbGUiOiJxci1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2FuLWJveCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMDB2bWF4IHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAuc2Nhbi1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogMTE7XG4gIH0iXX0= */";

/***/ }),

/***/ 5254:
/*!*********************************************************************!*\
  !*** ./src/app/default-layout/qr-code/qr-code.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'QR-Code'}} </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/app/tabs/landing-page\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content\n  [fullscreen]=\"true\"\n  [style.--background]=\"scanActive?'#00000000':'#ffffff'\"\n>\n  <ion-button expand=\"full\" (click)=\"scan()\"> SCAN </ion-button>\n  <ion-row class=\"scan-button\">\n    <ion-col class=\"ion-no-padding\"> {{data | json}} </ion-col>\n  </ion-row>\n</ion-content> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_qr-code_qr-code_module_ts.js.map