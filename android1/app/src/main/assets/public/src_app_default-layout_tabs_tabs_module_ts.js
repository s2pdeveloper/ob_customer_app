"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_tabs_tabs_module_ts"],{

/***/ 6768:
/*!************************************************************!*\
  !*** ./src/app/default-layout/tabs/tabs-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 309);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/landing-page',
                pathMatch: 'full'
            },
            {
                path: 'landing-page',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_default-layout_landing-page_landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../default-layout/landing-page/landing-page.module */ 9582)).then(m => m.LandingPagePageModule)
            },
            {
                path: 'qr-code',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_default-layout_qr-code_qr-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../default-layout/qr-code/qr-code.module */ 299)).then(m => m.QrCodePageModule)
            },
            {
                path: 'chat-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_default-layout_chat-list_chat-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../chat-list/chat-list.module */ 9033)).then(m => m.ChatListPageModule)
            },
            // {
            //   path: 'cart',
            //   loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
            // },
            {
                path: 'favorite',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_default-layout_favorite_favorite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../favorite/favorite.module */ 6200)).then(m => m.FavoritePageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../../default-layout/setting/setting.module */ 2225)).then(m => m.SettingPageModule)
            },
            {
                path: 'search-shop',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_default-layout_search-shop_search-shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../default-layout/search-shop/search-shop.module */ 1887)).then((m) => m.SearchShopPageModule),
            },
        ]
    },
    {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 1744:
/*!****************************************************!*\
  !*** ./src/app/default-layout/tabs/tabs.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 6768);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 309);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 309:
/*!**************************************************!*\
  !*** ./src/app/default-layout/tabs/tabs.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 8600);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 8085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 8794);







const {
  Device,
  Geolocation
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Plugins;
let TabsPage = class TabsPage {
  constructor(router) {
    this.router = router;
    this.selectedIndex = 0;
    this.tabPages = [{
      title: 'home',
      value: 'landing-page',
      tab: 'landing-page',
      icon: 'home'
    }, {
      title: 'chat',
      value: 'chat',
      tab: 'chat-list',
      icon: 'chatbubble-sharp'
    }, {
      title: 'QR Code',
      value: 'qr-code',
      tab: 'qr-code',
      icon: 'qr-code-sharp'
    }, {
      title: 'favorites',
      value: 'favorite',
      tab: 'favorite',
      icon: 'heart'
    }, {
      title: 'Setting',
      value: 'settings',
      tab: 'settings',
      icon: 'settings'
    }];
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.deviceInfo = yield Device.getInfo();
      console.log('device info', _this.deviceInfo);
    })();
  }
  /**
   * navigate to provided page url
   * @param page
   */


  navigateTo(page) {
    this.router.navigate([`${page?.url}`]);
  }

};

TabsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TabsPage);


/***/ }),

/***/ 8085:
/*!***************************************************************!*\
  !*** ./src/app/default-layout/tabs/tabs.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-fab-list {\n  width: 65vw !important;\n  background-color: var(--ion-color-6);\n}\nion-fab-list .text-toast {\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ion-color-1);\n}\nion-tab-button {\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-primary);\n}\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\nion-tab-button.tab-selected::before {\n  background-color: var(--ion-color-primary);\n}\nion-margin-bottom {\n  margin-bottom: 30px !important;\n  border: 50px !important;\n}\nion-fab {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxvQ0FBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDUjtBQU1BO0VBQ0ksZ0NBQUE7RUFDQSwwQ0FBQTtBQUhKO0FBS0k7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSFI7QUFNSTtFQUNJLDBDQUFBO0FBSlI7QUFRQTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7QUFMSjtBQU9BO0VBQ0ksbUJBQUE7QUFKSiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItbGlzdCB7XG4gICAgd2lkdGg6IDY1dncgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItNik7XG5cbiAgICAudGV4dC10b2FzdCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLTEpO1xuICAgIH1cbn1cblxuXG5cbi8vIGZvciBzZWxlY3RlZCB0YWIgXG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgIH1cblxuICAgICYudGFiLXNlbGVjdGVkOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuXG5pb24tbWFyZ2luLWJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogNTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWZhYntcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */";

/***/ }),

/***/ 8600:
/*!***************************************************************!*\
  !*** ./src/app/default-layout/tabs/tabs.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<!-- tab bar -->\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button *ngFor=\"let item of tabPages\" tab=\"{{ item?.tab}}\">\n      <ng-container *ngIf=\"item.value != 'qr-code'\">\n        <ion-icon [ios]=\"item.icon + '-outline'\" [md]=\"item.icon\"></ion-icon>\n        <ion-label>{{ item?.title |translate}}</ion-label>\n      </ng-container>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n<ion-fab slot=\"fixed\" horizontal=\"center\" vertical=\"bottom\">\n  <ion-fab-button (click)=\"navigateTo({url:'./app/tabs/qr-code'})\">\n    <ion-icon name=\"qr-code-sharp\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_tabs_tabs_module_ts.js.map