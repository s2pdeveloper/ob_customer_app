"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_catalogue_catalogue_module_ts"],{

/***/ 4892:
/*!**********************************************************************!*\
  !*** ./src/app/default-layout/catalogue/catalogue-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CataloguePageRoutingModule": () => (/* binding */ CataloguePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _catalogue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogue.page */ 2759);




const routes = [
    {
        path: '',
        component: _catalogue_page__WEBPACK_IMPORTED_MODULE_0__.CataloguePage
    }
];
let CataloguePageRoutingModule = class CataloguePageRoutingModule {
};
CataloguePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CataloguePageRoutingModule);



/***/ }),

/***/ 6407:
/*!**************************************************************!*\
  !*** ./src/app/default-layout/catalogue/catalogue.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CataloguePageModule": () => (/* binding */ CataloguePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogue-routing.module */ 4892);
/* harmony import */ var _catalogue_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogue.page */ 2759);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let CataloguePageModule = class CataloguePageModule {
};
CataloguePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_0__.CataloguePageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_catalogue_page__WEBPACK_IMPORTED_MODULE_1__.CataloguePage]
    })
], CataloguePageModule);



/***/ }),

/***/ 2759:
/*!************************************************************!*\
  !*** ./src/app/default-layout/catalogue/catalogue.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CataloguePage": () => (/* binding */ CataloguePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _catalogue_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogue.page.html?ngResource */ 4743);
/* harmony import */ var _catalogue_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogue.page.scss?ngResource */ 2197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/shop/shop.service */ 8294);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var src_app_service_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/chat/chat.service */ 5306);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);












let CataloguePage = class CataloguePage {
    constructor(router, activatedRoute, toaster, shopService, localStorage, spinner, socket, chatService, translate) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toaster = toaster;
        this.shopService = shopService;
        this.localStorage = localStorage;
        this.spinner = spinner;
        this.socket = socket;
        this.chatService = chatService;
        this.translate = translate;
        this.loaded = false;
        this.page = 1;
        this.pageSize = 10;
        this.search = '';
        this.catalogueArr = [];
        this.subCategoryArr = [];
        this.buttonSlide = {
            slidesPerView: 4,
            slideShadows: true,
            initialSlide: 0,
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            spaceBetween: 3,
        };
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.user = this.localStorage.get('OBCustomer');
        this.activatedRoute.queryParams.subscribe((params) => {
            this.getShopById(params._id);
        });
    }
    getCatalogueBySubCategoryId(_id, index) {
        this.spinner.showLoader();
        this.loaded = false;
        this.shopService
            .getCatalogueBySubCategoryId(_id)
            .subscribe((success) => {
            this.catalogueArr = success.payload.rows.map((x) => {
                x.isChecked = false;
                return x;
            });
            // ----------------------------------- //
            this.subCategoryArr.forEach((x) => {
                if (x.id === _id) {
                    x.isActive = true;
                }
                else {
                    x.isActive = false;
                }
            });
            this.spinner.hideLoader();
            this.loaded = true;
        });
    }
    getShopById(_id) {
        this.shopService.getByIdShop(_id).subscribe((success) => {
            this.subCategoryArr = success.data.map((y, i) => {
                y.isActive = false;
                if (i == 0) {
                    y.isActive = true;
                    this.getCatalogueBySubCategoryId(y._id, null);
                }
                return y;
            });
        });
    }
    navigateTo() {
        let msg = '';
        let arr = this.catalogueArr.filter((x) => x.isChecked == true);
        if (arr.length < 1) {
            this.toaster.errorToast('Plz select at least one product');
            return;
        }
        let amount = 0;
        let description = '';
        // msg += `Dear ${arr[0].shopId.shopName},\n ${arr[0].shopId.fullName},\n would like to buy `;
        msg += `Dear merchant,\n would like to buy \n`;
        for (let i = 0; i < arr.length; i++) {
            const catTitle = arr[i].title;
            // const catPrice = arr[i].price;
            msg += `${catTitle}`;
            if (i != arr.length - 1) {
                msg += ` , \n `;
            }
            description += `${catTitle}`;
            if (i != arr.length - 1) {
                description += `,`;
            }
            // amount += catPrice;
        }
        let message = {
            shopId: arr[0].shopId._id,
            message: msg,
            description: description,
            // amount: amount,
        };
        this.chatService.create(message).subscribe((success) => {
            this.spinner.hideLoader();
            // join
            this.socket.emit('join', { room: success.orderId, user: this.user._id });
            this.router.navigate(['/chat-view'], {
                queryParams: {
                    shopId: arr[0].shopId._id,
                    shopName: arr[0].shopId.shopName,
                    roomName: success.orderId, //join
                },
            });
        });
    }
};
CataloguePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_service_shop_shop_service__WEBPACK_IMPORTED_MODULE_2__.ShopService },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket },
    { type: src_app_service_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService }
];
CataloguePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-catalogue',
        template: _catalogue_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_catalogue_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CataloguePage);



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

/***/ 2197:
/*!*************************************************************************!*\
  !*** ./src/app/default-layout/catalogue/catalogue.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 100%;\n  padding: 0%;\n  margin: 0%;\n}\n.container ion-grid ion-card {\n  width: 100%;\n  border: 1px solid #D0CED1;\n  padding: auto !important;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -58px inset;\n  border-radius: 8px;\n}\n.container ion-grid ion-card ion-thumbnail {\n  width: 110px !important;\n  height: 80px !important;\n}\n.container ion-grid ion-card ion-thumbnail img {\n  right: 1px;\n  border-radius: 5px;\n  border: 1px solid white;\n}\n.container ion-grid ion-card ion-icon {\n  margin-right: 2px;\n}\n.container ion-grid ion-card ion-row {\n  display: flex;\n}\n.container ion-grid ion-card .discription {\n  position: absolute;\n  left: 16px;\n  font-size: 16px;\n  margin-top: 10px;\n  color: #623a48;\n  top: 17px;\n}\n.container ion-grid ion-card .amount {\n  position: absolute;\n  left: 17px;\n  top: 65px;\n  float: right;\n  font-size: 17px;\n  font-weight: bolder;\n  color: #2B1877;\n}\n.container ion-grid ion-icon {\n  margin-right: 2px;\n}\n.container .checkbox {\n  --border-radius: 3px;\n  border: 1px solid #D0CED1;\n  --background: #FFFFFF;\n}\n.subCategoryActive ion-note {\n  color: red;\n}\nion-slide .sub-heading {\n  text-align: center !important;\n  font-weight: bolder;\n}\nion-slide .img-box {\n  width: 73px !important;\n  left: 20px !important;\n  border-radius: 50% !important;\n  height: 70px !important;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2d1ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjtBQUdRO0VBRUksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwREFBQTtFQUNBLGtCQUFBO0FBRlo7QUFJWTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7QUFGaEI7QUFLZ0I7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUhwQjtBQVFZO0VBQ0ksaUJBQUE7QUFOaEI7QUFTWTtFQUNJLGFBQUE7QUFQaEI7QUFxQlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQW5CaEI7QUFzQlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFwQmhCO0FBMkJRO0VBQ0ksaUJBQUE7QUF6Qlo7QUE4Qkk7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUE1QlI7QUFrQ0k7RUFDSSxVQUFBO0FBL0JSO0FBcUNJO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtBQWxDUjtBQXFDSTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFuQ1IiLCJmaWxlIjoiY2F0YWxvZ3VlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIG1hcmdpbjogMCU7XG5cbiAgICBpb24tZ3JpZCB7XG5cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDBDRUQxO1xuICAgICAgICAgICAgcGFkZGluZzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggLTUwcHggMzZweCAtNThweCBpbnNldDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG5cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLnRpdGxlIHtcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyAgICAgbGVmdDogMTZweDtcbiAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICAvLyAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgICAvLyAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC5kaXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2MjNhNDg7XG4gICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTdweDtcbiAgICAgICAgICAgICAgICB0b3A6IDY1cHg7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMkIxODc3O1xuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5jaGVja2JveCB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDBDRUQxO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgfVxufVxuXG5cbi5zdWJDYXRlZ29yeUFjdGl2ZSB7XG4gICAgaW9uLW5vdGUge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn1cblxuaW9uLXNsaWRlIHtcblxuICAgIC5zdWItaGVhZGluZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cblxuICAgIC5pbWctYm94IHtcbiAgICAgICAgd2lkdGg6IDczcHggIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmO1xuXG4gICAgfVxuICAgIFxuXG59XG5cblxuXG5cbiJdfQ== */";

/***/ }),

/***/ 4743:
/*!*************************************************************************!*\
  !*** ./src/app/default-layout/catalogue/catalogue.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Product' | translate}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"category\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides [options]=\"buttonSlide\" class=\"ion-margin-bottom\">\n    <ion-slide *ngFor=\"let item of subCategoryArr;let i=index\">\n      <div [ngClass]=\"item.isActive ? 'subCategoryActive':null\" (click)=\"getCatalogueBySubCategoryId(item._id,i)\">\n        <img class=\"img-box\" src=\"{{item.image}} \" /><br />\n        <ion-note class=\"sub-heading ion-text-capitalize\">{{item.name}}</ion-note>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row appAnimateItems className=\"bounceIn\">\n        <ion-col *ngFor=\" let c of catalogueArr\" class=\"animation-normal\">\n          <ion-list lines=\"none\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-checkbox slot=\"start\" [(ngModel)]=\"c.isChecked\"></ion-checkbox>\n             <ion-item>\n                <ion-thumbnail slot=\"start\">\n                  <img class=\"img-fluid\" *ngIf=\"c.image\" [src]=\"c.image\">\n                  <img class=\"img-fluid\" *ngIf=\"!c.image\" src=\"assets/image/noImagePlaceholder.webp\"\n                    alt=\"product-image\" />\n                </ion-thumbnail>\n                <ion-label>\n                  <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                      <h6 class=\"title ion-text-capitalize ion-text-wrap\">\n                        <span class=\"text-bold\">{{c.title}}</span>\n                      </h6>\n                      <p class=\"text-color-2\">\n                        {{c.description | truncate:25}}\n                      </p>\n                      <p class=\"text-color-7 ion-text-wrap\">₹ {{c.price}}</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-label>\n              </ion-item>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-button color=\"primary\" expand=\"block\" strong=\"true\" shape=\"round\" class=\"ion-margin-top\" (click)=\"navigateTo()\">\n    {{'Place Order' | translate}}\n  </ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_catalogue_catalogue_module_ts.js.map