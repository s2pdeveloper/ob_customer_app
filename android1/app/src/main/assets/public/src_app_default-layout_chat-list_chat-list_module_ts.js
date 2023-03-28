"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_chat-list_chat-list_module_ts"],{

/***/ 4018:
/*!**********************************************************************!*\
  !*** ./src/app/default-layout/chat-list/chat-list-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListPageRoutingModule": () => (/* binding */ ChatListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-list.page */ 7248);




const routes = [
    {
        path: '',
        component: _chat_list_page__WEBPACK_IMPORTED_MODULE_0__.ChatListPage
    }
];
let ChatListPageRoutingModule = class ChatListPageRoutingModule {
};
ChatListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatListPageRoutingModule);



/***/ }),

/***/ 9033:
/*!**************************************************************!*\
  !*** ./src/app/default-layout/chat-list/chat-list.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListPageModule": () => (/* binding */ ChatListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-list-routing.module */ 4018);
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-list.page */ 7248);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let ChatListPageModule = class ChatListPageModule {
};
ChatListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatListPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_1__.ChatListPage]
    })
], ChatListPageModule);



/***/ }),

/***/ 7248:
/*!************************************************************!*\
  !*** ./src/app/default-layout/chat-list/chat-list.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListPage": () => (/* binding */ ChatListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chat_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-list.page.html?ngResource */ 8601);
/* harmony import */ var _chat_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-list.page.scss?ngResource */ 3301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_service_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/chat/chat.service */ 5306);











let ChatListPage = class ChatListPage {
    constructor(router, chatService, spinner, localStorage, socket, translate) {
        this.router = router;
        this.chatService = chatService;
        this.spinner = spinner;
        this.localStorage = localStorage;
        this.socket = socket;
        this.translate = translate;
        this.disabledScroll = false;
        this.page = 1;
        this.pageSize = 10;
        this.search = '';
        this.segment = 'new';
        this.shopConversationList = [];
        this.start = 0;
        this.limit = 20;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.user = this.localStorage.get('OBCustomer');
        this.getAllShopListByOrderId(false);
    }
    getAllShopListByOrderId(isFirstLoad, event) {
        this.spinner.showLoader();
        let obj = {
            search: this.search,
            status: this.segment,
        };
        this.chatService.getChatShopByCustomerId(obj).subscribe((success) => {
            this.shopConversationList = success.rows;
            this.spinner.hideLoader();
        });
    }
    navigateTo(item) {
        // join
        this.socket.emit('join', { room: item._id, user: this.user._id });
        this.router.navigate(['/chat-view'], {
            queryParams: {
                shopId: item.shopId._id,
                shopName: item.shopId?.shopName,
                roomName: item._id,
            },
        });
    }
    doRefresh(event) {
        this.shopConversationList = [];
        this.start = 0;
        this.getAllShopListByOrderId(false, '');
        event.target.complete();
    }
    doInfinite(event) {
        this.page++;
        this.getAllShopListByOrderId(true, event);
        event.target.disabled = true;
        this.infiniteScroll.disabled = true;
        event.target.complete();
    }
    onSearch() {
        this.shopConversationList = [];
        this.start = 0;
        this.getAllShopListByOrderId(false, '');
    }
};
ChatListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService },
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__.Socket },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
ChatListPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll, { static: false },] }]
};
ChatListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-chat-list',
        template: _chat_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatListPage);



/***/ }),

/***/ 3301:
/*!*************************************************************************!*\
  !*** ./src/app/default-layout/chat-list/chat-list.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".img-icon {\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-right: 2rem !important;\n}\n\np {\n  font-size: 0.7rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKIiwiZmlsZSI6ImNoYXQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWljb257XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW0gIWltcG9ydGFudDtcbn1cblxucHtcbiAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 8601:
/*!*************************************************************************!*\
  !*** ./src/app/default-layout/chat-list/chat-list.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color-2\">\n    <ion-buttons shape=\"round\" slot=\"start\">\n      <ion-back-button defaultHref=\"/app/tabs/landing-page\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"text-color-4 ion-text-capitalize\"\n      >{{ 'chats' | translate}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"getAllShopListByOrderId(false)\">\n    <ion-segment-button [id]=\"'new'\" value=\"new\" layout=\"icon-end\">\n      <ion-label>{{ 'new' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [id]=\"'active'\" value=\"active\" layout=\"icon-end\">\n      <ion-label>{{ 'active' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [id]=\"'completed'\" value=\"completed\" layout=\"icon-end\">\n      <ion-label>{{ 'completed' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-searchbar\n    class=\"search-box ion-padding-top\"\n    inputmode=\"search\"\n    searchIcon\n    animated\n    type=\"text\"\n    debounce=\"600\"\n    showCancelButton=\"never\"\n    autocomplete=\"on\"\n    autocorrect=\"on\"\n    [(ngModel)]=\"search\"\n    (ionChange)=\"onSearch()\"\n    placeholder=\"{{ 'Search' | translate}}\"\n  >\n  </ion-searchbar>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list\n          *ngFor=\"let item of shopConversationList\"\n          appAnimateItems\n          className=\"bounceInRight\"\n        >\n          <ion-item class=\"animation-normal\" (click)=\"navigateTo(item)\">\n            <ion-avatar slot=\"start\">\n              <img\n                class=\"\"\n                [src]=\"item?.shopId?.image || 'assets/image/placeholder_profile.png'\"\n                alt=\"\"\n              />\n            </ion-avatar>\n            <ion-label class=\"text-size-xs ion-text-wrap ion-text-capitalize\"\n              >{{item?.shopId?.shopName}}</ion-label\n            >\n            <ion-label class=\"ion-text-wrap shade-color \" slot=\"end\">\n              <p class=\"ion-padding-start\">{{item.createdAt  | date:'shortTime'}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_chat-list_chat-list_module_ts.js.map