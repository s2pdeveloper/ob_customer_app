(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        redirectTo: 'app/tabs/landing-page',
        pathMatch: 'full',
    },
    {
        path: 'app',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_default-layout_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/tabs/tabs.module */ 1744)).then((m) => m.TabsPageModule),
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_auth-layout_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth-layout/login/login.module */ 3869)).then((m) => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_auth-layout_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth-layout/register/register.module */ 458)).then((m) => m.RegisterPageModule),
    },
    {
        path: 'forget-pwd',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth-layout_forget-pwd_forget-pwd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth-layout/forget-pwd/forget-pwd.module */ 7578)).then((m) => m.ForgetPwdPageModule),
    },
    {
        path: 'profile-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_default-layout_profile-page_profile-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/profile-page/profile-page.module */ 8297)).then((m) => m.ProfilePagePageModule),
    },
    {
        path: 'view-profile',
        // canLoad: [AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_default-layout_setting_view-profile_view-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/setting/view-profile/view-profile.module */ 8870)).then((m) => m.ViewProfilePageModule),
    },
    {
        path: 'edit-profile',
        // canLoad: [AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_default-layout_setting_edit-profile_edit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/setting/edit-profile/edit-profile.module */ 7281)).then((m) => m.EditProfilePageModule),
    },
    {
        path: 'change-pwd',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_auth-layout_change-pwd_change-pwd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth-layout/change-pwd/change-pwd.module */ 5239)).then((m) => m.ChangePwdPageModule),
    },
    {
        path: 'onboarding',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_onboarding_onboarding_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/onboarding/onboarding.module */ 3970)).then((m) => m.OnboardingPageModule),
    },
    {
        path: 'shop-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_default-layout_shop-detail_shop-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/shop-detail/shop-detail.module */ 1680)).then((m) => m.ShopDetailPageModule),
    },
    {
        path: 'change-language',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_default-layout_change-language_change-language_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/change-language/change-language.module */ 6502)).then((m) => m.ChangeLanguagePageModule),
    },
    {
        path: 'change-pwd',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_auth-layout_change-pwd_change-pwd_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth-layout/change-pwd/change-pwd.module */ 5239)).then((m) => m.ChangePwdPageModule),
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_default-layout_setting_edit-profile_edit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/setting/edit-profile/edit-profile.module */ 7281)).then((m) => m.EditProfilePageModule),
    },
    {
        path: 'notification-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_default-layout_notification-list_notification-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/notification-list/notification-list.module */ 2480)).then((m) => m.NotificationListPageModule),
    },
    {
        path: 'category',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_default-layout_category_category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/category/category.module */ 2054)).then((m) => m.CategoryPageModule),
    },
    {
        path: 'setting',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/setting/setting.module */ 2225)).then((m) => m.SettingPageModule),
    },
    {
        path: 'catalogue',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_default-layout_catalogue_catalogue_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/catalogue/catalogue.module */ 6407)).then(m => m.CataloguePageModule)
    },
    {
        path: 'chat-view',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_default-layout_chat-view_chat-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/chat-view/chat-view.module */ 2825)).then(m => m.ChatViewPageModule)
    },
    {
        path: 'map',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_default-layout_map_map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/map/map.module */ 7216)).then(m => m.MapPageModule)
    },
    {
        path: 'favorite',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_default-layout_favorite_favorite_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-layout/favorite/favorite.module */ 6200)).then(m => m.FavoritePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 8794);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services */ 8138);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/language.service */ 7524);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/toast.service */ 9891);
/* harmony import */ var _service_app_service_app_back_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/app-service/app-back-button.service */ 9505);
/* harmony import */ var _service_app_service_app_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/app-service/app-update.service */ 2519);







const {
  StatusBar,
  Network
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Plugins;







let AppComponent = class AppComponent {
  constructor(router, languageService, storageService, platform, toastService, loadingController, appUpdate, appBackButton, // private pushNotificationService: PushNotificationService,
  translate) {
    this.router = router;
    this.languageService = languageService;
    this.storageService = storageService;
    this.platform = platform;
    this.toastService = toastService;
    this.loadingController = loadingController;
    this.appUpdate = appUpdate;
    this.appBackButton = appBackButton;
    this.translate = translate;
    this.selectedIndex = 0;
    this.currentUser = {};
    this.settingStyleAndSplashScreen = /*#__PURE__*/(0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield StatusBar.setStyle({
        style: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.StatusBarStyle.Dark
      });
      yield StatusBar.setBackgroundColor({
        color: '#ff0000'
      });
      yield StatusBar.show();
    });
    this.languageService.getLang();
    this.initializeApp();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentUser = _this.storageService.get('OBCustomer');

      if (_this.currentUser) {// this.router.navigate(['/landing-page']);
      }
    })();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      document.body.setAttribute('color-theme', 'light'); // document.body.setAttribute('color-theme','dark')

      this.settingStyleAndSplashScreen(); // this.appUpdate.checkUpdate();
      // this.pushNotificationService.registerForPushNotification();

      this.checkInternet();
      this.appBackButton.backButtonFunc();
    });
  } // check internet connection


  checkInternet() {
    Network.getStatus().then(status => {
      console.log(status);
    });
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);

      if (!status.connected) {
        this.toastService.presentToast('warning', 'No internet connection'); // this.translate.get('noInternet').subscribe((msg) => {
        //   this.toastService.presentToast('warning', msg);
        // });
      }
    });
  }

  navigateTo(page) {
    this.router.navigate([`${page?.url}`]);
  }

  logout() {
    this.router.navigate([`login`]);
  }

};

AppComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService
}, {
  type: _core_services__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _service_app_service_app_update_service__WEBPACK_IMPORTED_MODULE_8__.AppUpdateService
}, {
  type: _service_app_service_app_back_button_service__WEBPACK_IMPORTED_MODULE_7__.AppBackButtonService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 3081);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 2340);












// map


// qr code

// socket


const config = { url: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.url, options: {} };
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__.SocketIoModule.forRoot(config),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
                },
            }),
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener,
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__.BarcodeScanner,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeGeocoder
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5918:
/*!*************************************************************!*\
  !*** ./src/app/core/Interceptors/api-prefix.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiPrefixInterceptor": () => (/* binding */ ApiPrefixInterceptor),
/* harmony export */   "ApiPrefixInterceptorProvider": () => (/* binding */ ApiPrefixInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);




/**
 * Prefixes all requests with `environment.serverUrl`.
 */
let ApiPrefixInterceptor = class ApiPrefixInterceptor {
    constructor() { }
    intercept(request, next) {
        if (!request.url.includes('/assets/i18n/en.json') &&
            !request.url.includes('assets/i18n/hi.json') &&
            !request.url.includes('assets/i18n/mr.json') &&
            !request.url.includes('/apk') &&
            !request.url.includes('obhaiya-assets.s3.ap-south-1.amazonaws.com') &&
            !request.url.includes('https://maps.googleapis.com')) {
            request = request.clone({
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + request.url,
            });
        }
        return next.handle(request);
    }
};
ApiPrefixInterceptor.ctorParameters = () => [];
ApiPrefixInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], ApiPrefixInterceptor);

const ApiPrefixInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
    useClass: ApiPrefixInterceptor,
    multi: true,
};


/***/ }),

/***/ 6969:
/*!********************************************************!*\
  !*** ./src/app/core/Interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor),
/* harmony export */   "ErrorInterceptorProvider": () => (/* binding */ ErrorInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/toast.service */ 9891);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loader.service */ 4487);









let ErrorInterceptor = class ErrorInterceptor {
    constructor(toaster, spinner, router) {
        this.toaster = toaster;
        this.spinner = spinner;
        this.router = router;
    }
    intercept(request, next) {
        // extract error message from http body if an error occurs
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((errorResponse) => {
            this.spinner.hideLoader();
            if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                if (!navigator.onLine) {
                    // No Internet connection
                    this.toaster.presentToast('warning', 'No Internet Connection');
                }
                // Server error happened
                let error = errorResponse.error?.error;
                switch (errorResponse.status) {
                    case 401: // login
                        // redirect to login page with the return url
                        this.router.events
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd))
                            .subscribe((event) => {
                            this.currentRoute = event['url'];
                        });
                        // this.router.navigate(['/login'], {
                        //   queryParams: { returnUrl: this.currentRoute },
                        // });
                        break;
                    case 400: // forbidden
                    case 403: // forbidden
                        //  show server bad request message
                        console.log(error.error_params);
                        if (errorResponse.error?.error?.errors) {
                            for (let i = error.errors.length - 1; i >= 0; i--) {
                                this.toaster.presentToast('error', error.errors[i]);
                            }
                        }
                        if (error.error_params) {
                            for (let i = error.error_params.length - 1; i >= 0; i--) {
                                let err = error.error_params[i].errors;
                                if (error.error_params[i]?.message) {
                                    this.toaster.presentToast('error', error.error_params[i].message);
                                }
                                if (err) {
                                    for (let j = err.length - 1; j >= 0; j--) {
                                        this.toaster.presentToast('error', err[j].msg);
                                    }
                                }
                            }
                        }
                        break;
                    case 500: // Internal Server Error
                        // // show server bad request message
                        // console.log(errorResponse.error);
                        // console.log(errorResponse.error.error.errors);
                        // console.log(errorResponse.error.error.error_params);
                        // this.toaster.error(errorResponse.error?.message);
                        if (errorResponse.error?.error?.errors) {
                            for (let i = error.errors.length - 1; i >= 0; i--) {
                                this.toaster.presentToast('error', error.errors[i]);
                            }
                        }
                        if (errorResponse.error?.error?.error_params) {
                            for (let i = error.error_params.length - 1; i >= 0; i--) {
                                if (error.error_params[i]?.msg) {
                                    this.toaster.presentToast('error', error.error_params[i].msg);
                                }
                                let err = error.error_params[i].errors;
                                if (err) {
                                    for (let j = err.length - 1; j >= 0; j--) {
                                        this.toaster.presentToast('error', err.msg);
                                    }
                                }
                            }
                        }
                        break;
                }
            }
            else {
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(errorResponse.error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], ErrorInterceptor);

const ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ 7782:
/*!********************************************!*\
  !*** ./src/app/core/Interceptors/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiPrefixInterceptor": () => (/* reexport safe */ _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_0__.ApiPrefixInterceptor),
/* harmony export */   "ApiPrefixInterceptorProvider": () => (/* reexport safe */ _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_0__.ApiPrefixInterceptorProvider),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor),
/* harmony export */   "ErrorInterceptorProvider": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptorProvider),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__.JwtInterceptor),
/* harmony export */   "JwtInterceptorProvider": () => (/* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__.JwtInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-prefix.interceptor */ 5918);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ 6969);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ 7008);





/***/ }),

/***/ 7008:
/*!******************************************************!*\
  !*** ./src/app/core/Interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor),
/* harmony export */   "JwtInterceptorProvider": () => (/* binding */ JwtInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 8138);




let JwtInterceptor = class JwtInterceptor {
    constructor(storageService) {
        this.storageService = storageService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        if (typeof window !== 'undefined') {
            const OBCustomer = this.storageService.get('OBCustomer');
            if (OBCustomer && OBCustomer.token && !request.url.includes('https://maps.googleapis.com')) {
                request = request.clone({
                    setHeaders: {
                        authorization: `Bearer ${OBCustomer.token}`,
                    },
                });
            }
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
JwtInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], JwtInterceptor);

const JwtInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
};


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _Interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interceptors */ 7782);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 8138);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.guard */ 1561);






let CoreModule = class CoreModule {
};
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
        providers: [
            _Interceptors__WEBPACK_IMPORTED_MODULE_0__.JwtInterceptorProvider,
            _Interceptors__WEBPACK_IMPORTED_MODULE_0__.ApiPrefixInterceptorProvider,
            _Interceptors__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptorProvider,
            _services__WEBPACK_IMPORTED_MODULE_1__.StorageService,
            _services__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService,
            _services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard,
        ],
        declarations: [],
    })
], CoreModule);



/***/ }),

/***/ 1561:
/*!*********************************************!*\
  !*** ./src/app/core/services/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);



// import { AuthService } from 'src/app/service/auth/auth.service';
let AuthGuard = class AuthGuard {
    constructor(
    // private authService: AuthService,
    router) {
        this.router = router;
    }
    canActivate(route, state) {
        // let isAuthenticated = this.authService.isLoggedIn();
        // if (!isAuthenticated) {
        //     this.router.navigate(['./login']);
        // }
        // return isAuthenticated;
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 1985:
/*!*********************************************************!*\
  !*** ./src/app/core/services/browser-logger.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserLoggerService": () => (/* binding */ BrowserLoggerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);



let BrowserLoggerService = class BrowserLoggerService {
    info(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            console.info(value, rest);
        }
        else {
            // App Insights or your favorite service
        }
    }
    log(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            console.log(value, rest);
        }
        else {
            // App Insights or your favorite service
        }
    }
    warn(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            console.warn(value, rest);
        }
        else {
            // App Insights or your favorite service
        }
    }
    error(value, ...rest) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            console.error(value, rest);
        }
        else {
            // App Insights or your favorite service
        }
    }
};
BrowserLoggerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], BrowserLoggerService);



/***/ }),

/***/ 1897:
/*!**************************************************!*\
  !*** ./src/app/core/services/httpApi.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);





let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/json'),
        };
    }
    getBaseUrl() {
        return `${location.protocol}//${location.hostname + (location.port ? ':' + location.port : '')}/`;
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()) {
        return this.httpClient.get(path, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.result)
        // tap((_) => this.log(path)),
        // shareReplay()
        );
    }
    put(path, body = {}) {
        return this.httpClient.put(path, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.result));
    }
    post(path, body = {}) {
        return this.httpClient.post(path, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.result));
    }
    delete(path) {
        return this.httpClient.delete(path).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.result));
    }
    getFile(path) {
        console.log('path++++++++++++++', path);
        return this.httpClient.get(path, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().append('Content-Type', 'application/json'),
        });
    }
    formatErrors(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error.error);
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        console.log(message);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 8138:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* reexport safe */ _httpApi_service__WEBPACK_IMPORTED_MODULE_1__.ApiService),
/* harmony export */   "BrowserLoggerService": () => (/* reexport safe */ _browser_logger_service__WEBPACK_IMPORTED_MODULE_0__.BrowserLoggerService),
/* harmony export */   "StorageService": () => (/* reexport safe */ _local_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService),
/* harmony export */   "ToastService": () => (/* reexport safe */ _toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService),
/* harmony export */   "UtilitiesService": () => (/* reexport safe */ _utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService)
/* harmony export */ });
/* harmony import */ var _browser_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-logger.service */ 1985);
/* harmony import */ var _httpApi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpApi.service */ 1897);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ 4617);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.service */ 3623);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast.service */ 9891);







/***/ }),

/***/ 7524:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);




let LanguageService = class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.language = `en`;
        this.changedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.updatedLang$ = this.changedLanguage.asObservable();
    }
    getLang() {
        this.language = localStorage.getItem(`language`);
        if (!this.language) {
            localStorage.setItem(`language`, `en`);
            this.language = `en`;
        }
        this.translate.use(this.language);
        this.changedLanguage.next(this.language);
        return this.language;
    }
    setLang(l) {
        console.log("Setting language to : " + l);
        localStorage.setItem('language', l);
        this.language = l;
        this.changedLanguage.next(l);
        this.translate.use(l);
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService }
];
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LanguageService);



/***/ }),

/***/ 4487:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let LoaderService = class LoaderService {
  constructor(loadingController) {
    this.loadingController = loadingController;
  } // This will show then autohide the loader


  showHideAutoLoader() {
    this.loadingController.create({
      message: 'This Loader Will Auto Hide in 2 Seconds',
      duration: 1000
    }).then(res => {
      res.present();
      res.onDidDismiss().then(dis => {
        console.log('Loading dismissed! after 2 Seconds', dis);
      });
    });
  } // Show the loader for infinite time


  showLoader() {
    this.loadingController.create({
      cssClass: 'loader-class',
      message: 'Please wait...',
      duration: 3000,
      spinner: 'lines',
      // translucent: true,
      mode: 'ios'
    }).then(res => {
      res.present();
    });
  } // Hide the loader if already created otherwise return error


  hideLoader() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadingController.dismiss().then(res => {
        console.log('Loading dismissed!', res);
      }).catch(error => {
        console.log('error', error);
      }); // let isLoading = await this.loadingController.getTop();
      // if (isLoading) {
      //   return await isLoading.dismiss();
      // }

    })();
  }

};

LoaderService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}];

LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LoaderService);


/***/ }),

/***/ 4617:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let StorageService = class StorageService {
    getItem(arg0) {
        throw new Error('Method not implemented.');
    }
    get(key) {
        return localStorage ? JSON.parse(localStorage.getItem(key)) : null;
    }
    set(key, value) {
        if (localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    remove(key) {
        localStorage ? localStorage.removeItem(key) : null;
    }
};
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], StorageService);



/***/ }),

/***/ 9891:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let ToastService = class ToastService {
  constructor(toastController) {
    this.toastController = toastController;
  }

  presentToast(title, msg) {
    if (title == 'success') {
      this.successToast(msg);
    } else if (title == 'error') {
      this.errorToast(msg);
    } else if (title == 'warning') {
      this.warningToast(msg);
    }
  }

  successToast(msg) {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: msg,
        duration: 4000,
        position: 'bottom',
        cssClass: 'toast-success',
        buttons: [{
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      toast.present();
    })();
  }

  errorToast(msg) {
    var _this2 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: msg,
        duration: 4000,
        position: 'bottom',
        cssClass: 'toast-error',
        buttons: [{
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      toast.present();
    })();
  }

  warningToast(msg) {
    var _this3 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: msg,
        duration: 4000,
        position: 'bottom',
        cssClass: 'toast-warning',
        buttons: [{
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      toast.present();
    })();
  }

};

ToastService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}];

ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ToastService);


/***/ }),

/***/ 3623:
/*!****************************************************!*\
  !*** ./src/app/core/services/utilities.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesService": () => (/* binding */ UtilitiesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);


 // import {
//   DatePickerOptions,
//   DatePickerPluginInterface,
// } from '@capacitor-community/date-picker';
// const DatePicker: DatePickerPluginInterface = Plugins.DatePickerPlugin as any;

const selectedTheme = 'light';

class State {} // import * as moment from 'moment-timezone';


const timeZone = 'Asia/Kolkata';
let UtilitiesService = class UtilitiesService {
  constructor(pickerCtrl) {
    this.pickerCtrl = pickerCtrl;
    this.date = ''; // formatDate(value: string) {
    //   return format(parseISO(value), 'yyyy-MM-dd');
    // }

    this.message = null;
  }

  getDateWithFormat(date) {
    let value = date.split('T')[0].split('-');
    return `${value[0]}/${value[1]}/${value[2]}`;
  }

  getDateOnly(date) {
    return `${date.split('T')[0]}`;
  } // async openPickerST(current) {
  //   const options: DatePickerOptions = {};
  //   options.mode = 'date';
  //   if (current) {
  //     options.date = new Date(current).toISOString();
  //   }
  //   options.locale = 'en';
  //   options.is24h = true;
  //   options.doneText = 'ok';
  //   options.cancelText = 'cancel';
  //   return DatePicker.present(options).then((date) => {
  //     let d = moment(date.value).tz(timeZone).format('YYYY-MM-DD');
  //     return d;
  //   });
  // }
  // convert file to blob


  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);

      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }

};

UtilitiesService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.PickerController
}];

UtilitiesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], UtilitiesService);


/***/ }),

/***/ 9505:
/*!****************************************************************!*\
  !*** ./src/app/service/app-service/app-back-button.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBackButtonService": () => (/* binding */ AppBackButtonService)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 8794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







const {
  App
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Plugins;
let AppBackButtonService = class AppBackButtonService {
  constructor(platform, ngZone, router, location, alertController, modalController, loadingController) {
    this.platform = platform;
    this.ngZone = ngZone;
    this.router = router;
    this.location = location;
    this.alertController = alertController;
    this.modalController = modalController;
    this.loadingController = loadingController;
  }

  backButtonFunc() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('current url', _this.router.url);
      let isLoading = yield _this.loadingController.getTop();

      if (isLoading) {
        yield isLoading.dismiss();
      }

      let isAlert = yield _this.alertController.getTop();

      if (isAlert) {
        yield isAlert.dismiss();
      }

      let isModal = yield _this.modalController.getTop();

      if (isModal) {
        yield isModal.dismiss();
      }

      _this.platform.backButton.subscribeWithPriority(-1, /*#__PURE__*/(0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this.router.isActive('landing-page', false)) {
          const alert = yield _this.alertController.create({
            header: 'App termination',
            message: 'Do you want to Exit from App ?',
            backdropDismiss: true,
            mode: 'ios',
            buttons: [{
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary'
            }, {
              text: 'Yes',
              cssClass: 'primary',
              handler: () => {
                App.exitApp();
              }
            }]
          });
          yield alert.dismiss();
          return yield alert.present();
        }
      }));

      _this.platform.backButton.subscribeWithPriority(0, /*#__PURE__*/(0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let url = _this.router.url;

        if (_this.router.isActive('landing-page', false)) {
          const alert = yield _this.alertController.create({
            header: 'App termination',
            message: 'Do you want to Exit from App ?',
            cssClass: 'my-custom-alert',
            mode: 'ios',
            backdropDismiss: true,
            buttons: [{
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary'
            }, {
              text: 'Yes',
              cssClass: 'primary',
              handler: () => {
                App.exitApp();
              }
            }]
          });
          yield alert.dismiss();
          return yield alert.present();
        } else if (['/login', '/register', '/forget-pwd', '/landing-page'].includes(url)) {
          const alert = yield _this.alertController.create({
            header: 'App termination',
            message: 'Do you want to Exit from App ?',
            backdropDismiss: true,
            mode: 'ios',
            cssClass: 'my-custom-alert',
            buttons: [{
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary'
            }, {
              text: 'Yes',
              cssClass: 'primary',
              handler: () => {
                App.exitApp();
              }
            }]
          });
          yield alert.dismiss();
          return yield alert.present();
        } else {
          console.log('current url', _this.router.url);

          _this.ngZone.run(() => {
            _this.location.back();
          });
        }
      }));
    })();
  }

};

AppBackButtonService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
}];

AppBackButtonService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AppBackButtonService);


/***/ }),

/***/ 2519:
/*!***********************************************************!*\
  !*** ./src/app/service/app-service/app-update.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppUpdateService": () => (/* binding */ AppUpdateService),
/* harmony export */   "FILE_KEY": () => (/* binding */ FILE_KEY)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 3081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ 7878);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 8794);








 // import { TranslateService } from '@ngx-translate/core';



const {
  Device,
  Filesystem,
  Storage,
  App
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Plugins;
const FILE_KEY = 'files';
let AppUpdateService = class AppUpdateService {
  constructor(auth, http, alertCtrl, router, // private translate: TranslateService,
  fileOpener, toastController, loadingController) {
    this.auth = auth;
    this.http = http;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.fileOpener = fileOpener;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.updateUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url}/apk/version.json`;
    this.apkFile = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url}/apk/app-release.apk`; // debugApkFile = `${environment.url}/apk/app/app-debug.apk`;

    this.downloadProgress = 0;
    this.myFiles = [];

    this.convertBlobToBase64 = blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  }

  checkUpdate() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.http.get(_this.updateUrl).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (info) {
          const deviceInfo = yield Device.getInfo(); // console.log('deviceInfo', deviceInfo);

          const versionNumber = deviceInfo.appVersion; // console.log('app version', deviceInfo.appVersion);

          if (!info.enabled) {
            _this.presentAlert(info.majorMsg.title, info.majorMsg.msg, info.majorMsg.btn);
          } else {
            const splittedVersion = versionNumber.split('.');
            const serverVersion = info.current.split('.'); // console.log(splittedVersion,'server version', serverVersion);

            if (splittedVersion.length == 3) {
              if (parseInt(serverVersion[0]) > parseInt(splittedVersion[0])) {
                _this.presentAlert(info.majorMsg.title, info.majorMsg.msg, info.majorMsg.btn);
              } else if (parseInt(serverVersion[1]) > parseInt(splittedVersion[1])) {
                _this.presentAlert(info.minorMsg.title, info.minorMsg.msg, info.minorMsg.btn);
              } else if (parseInt(serverVersion[2]) > parseInt(splittedVersion[2])) {
                _this.presentAlert(info.minorMsg.title, info.minorMsg.msg, info.minorMsg.btn);
              }
            }
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  presentAlert(header, message, buttonText = '', allowClose = false) {
    var _this2 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const buttons = [];

      if (buttonText != '') {
        buttons.push({
          text: buttonText,
          handler: () => {
            _this2.downloadApk();
          }
        });
      }

      if (allowClose) {
        buttons.push({
          text: 'CLose',
          role: 'cancel'
        });
      }

      const alert = yield _this2.alertCtrl.create({
        header: header,
        message: message,
        buttons: buttons,
        backdropDismiss: allowClose
      });
      yield alert.present();
    })();
  }

  downloadApk() {
    var _this3 = this;

    this.loading = this.presentLoading();
    this.http.get(this.apkFile, {
      responseType: 'blob',
      reportProgress: true,
      observe: 'events'
    }).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        // console.log('apk', event);
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.DownloadProgress) {
          _this3.downloadProgress = Math.round(100 * event.loaded / event.total); // console.log(this.downloadProgress);

          _this3.dismissLoading();

          _this3.loading = _this3.presentLoading();
        } else if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.Response) {
          _this3.dismissLoading();

          console.log('file downloaded');
          _this3.downloadProgress = 0;
          const base64 = yield _this3.convertBlobToBase64(event.body);

          const deleteSecretFile = /*#__PURE__*/function () {
            var _ref3 = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield Filesystem.deleteFile({
                path: 's2pEdutech.apk',
                directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.FilesystemDirectory.Data
              });
            });

            return function deleteSecretFile() {
              return _ref3.apply(this, arguments);
            };
          }();

          console.log('file delete', deleteSecretFile);
          const saveFile = yield Filesystem.writeFile({
            path: `s2pEdutech.apk`,
            data: base64,
            directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.FilesystemDirectory.Data
          });
          const path = saveFile.uri;
          console.log('file saveFile', saveFile);

          _this3.openFile(path, event.body.type);
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), error => {
      console.log('error -> ', error);
    });
  }

  presentLoading() {
    var _this4 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingController.create({
        cssClass: 'my-download-class',
        message: `${_this4.downloadProgress} %  <br/> Downloading `,
        backdropDismiss: true,
        showBackdrop: false,
        mode: 'ios'
      });
      yield loading.present(); // return loading;
    })();
  }

  dismissLoading() {
    this.loadingController.dismiss(); // this.loading.then((load) => {
    //   load.dismiss();
    // });
  }

  openFile(path, type) {
    this.dismissLoading();
    console.log('path', path, type);
    this.fileOpener.open(path, type).then(response => {
      console.log('File is opened', response);
    }, error => {
      console.log(error);
      console.log('Error opening file');
    }).catch(error => {
      console.log(error);
      console.log('Error opening file');
      this.presentToast('Please try to download again');
    });
    this.myFiles.unshift(path);
    Storage.set({
      key: FILE_KEY,
      value: JSON.stringify(this.myFiles)
    }).then(() => {
      this.router.navigate(['/login'], {
        replaceUrl: true
      });
    });
  }

  presentToast(msg) {
    var _this5 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
      toast.onDidDismiss().then(() => {
        navigator['app'].exitApp();
      });
    })();
  }

};

AppUpdateService.ctorParameters = () => [{
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

AppUpdateService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], AppUpdateService);


/***/ }),

/***/ 7878:
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services */ 8138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);





let AuthService = class AuthService {
    constructor(http, storageService, router) {
        this.http = http;
        this.storageService = storageService;
        this.router = router;
        this.routes = {
            register: 'customer/register',
            login: 'customer/login',
            getByIdPath: (id) => `customer/getProfile/${id}`,
            updatePath: (id) => `customer/update/${id}`,
            forget_password: 'user/forgot-password',
            reset_password: 'user/reset-password',
            set_password: 'user/set-password',
            createAndUpdateUserDevice: 'user/createAndUpdateUserDevice',
            getCurrentLocation: 'customer/getUserCurrentLocation'
        };
    }
    createUser(userPayload) {
        return this.http.post(this.routes.register, userPayload);
    }
    login(userPayload) {
        return this.http.post(this.routes.login, userPayload);
    }
    updateUser(id, payload) {
        return this.http.put(this.routes.updatePath(id), payload);
    }
    profile(_id) {
        return this.http.get(this.routes.getByIdPath(_id));
    }
    getCurrentLocation(params) {
        return this.http.get(this.routes.getCurrentLocation, params);
    }
    getCurrentUser() {
        let x = localStorage.getItem('Student');
        return JSON.parse(x);
    }
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }
    forgetPassword(userPayload) {
        return this.http.post(this.routes.forget_password, userPayload);
    }
    resetPassword(userPayload) {
        return this.http.post(this.routes.reset_password, userPayload);
    }
    setPassword(userPayload) {
        return this.http.post(this.routes.set_password, userPayload);
    }
    createAndUpdateUserDevice(userPayload) {
        return this.http.post(this.routes.createAndUpdateUserDevice, userPayload);
    }
};
AuthService.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiEndpoint: 'http://localhost:2000/api/v1/customerApp/',
    // s3Endpoint: 'http://localhost:2000/api/v1/shared/',
    // url: 'http://localhost:2000',
    apiEndpoint: 'http://13.232.4.248:2000/api/v1/customerApp/',
    url: 'http://13.232.4.248:2000',
    s3Endpoint: 'http://13.232.4.248:2000/api/v1/shared/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header {\n  background: var(--ion-color-primary) !important;\n  border-bottom-left-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}\nion-header ion-toolbar {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  text-align: center !important;\n  border-bottom-left-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}\nion-header ion-toolbar ion-text {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 900;\n  margin-left: 5px;\n  --color: var(--ion-color-primary) !important;\n}\nion-header ion-toolbar .img-card img {\n  background-color: #f3f8fe;\n  text-align: center;\n  border-radius: 50%;\n}\nion-menu {\n  --background: #f3f8fe !important;\n}\nion-menu ion-content {\n  --background: transparent !important;\n}\nion-menu ion-content ion-list {\n  --background: #f3f8fe !important;\n  background: #f3f8fe !important;\n}\nion-menu ion-content ion-item {\n  --background: var(--ion-color-light-shade) !important;\n  background: var(--ion-color-medium-tint) !important;\n  margin-bottom: 8px;\n  border-radius: 1rem;\n}\nion-menu ion-content ion-item ion-icon {\n  padding: 6px;\n  border-radius: 50%;\n  background: #f3f8fe !important;\n}\nion-menu ion-content ion-item ion-label {\n  --color: var(--ion-color-primary) !important;\n}\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\nion-menu.md ion-list {\n  padding: 0;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-light);\n}\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\nion-item.md ion-label {\n  font-family: Montserrat-Medium;\n  font-size: 1em;\n}\nion-item.md .menu-logo {\n  margin-right: 25px;\n}\nion-item.ios ion-label {\n  font-family: Montserrat-Medium;\n  font-size: 1em;\n}\nion-item.ios .menu-logo {\n  margin-right: 15px;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: var(--ion-color-light);\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBQ0k7RUFDSSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUNSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUFDWjtBQUdZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRGhCO0FBU0E7RUFDSSxnQ0FBQTtBQU5KO0FBUUk7RUFDSSxvQ0FBQTtBQU5SO0FBUVE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0FBTlo7QUFTUTtFQUNJLHFEQUFBO0VBQ0EsbURBQUE7RUFRQSxrQkFBQTtFQUNBLG1CQUFBO0FBZFo7QUFPWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBTGhCO0FBV1k7RUFDSSw0Q0FBQTtBQVRoQjtBQWdCQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBYko7QUFnQkE7RUFDSSxVQUFBO0FBYko7QUFnQkE7RUFDSSxtQkFBQTtBQWJKO0FBZ0JBOztFQUVJLGtCQUFBO0FBYko7QUFnQkE7RUFDSSwyREFBQTtBQWJKO0FBZ0JBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFkSjtBQWlCQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWRKO0FBaUJBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZEo7QUFpQkE7RUFDSSw2QkFBQTtBQWRKO0FBaUJBO0VBQ0ksZ0JBQUE7QUFkSjtBQWtCSTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtBQWZSO0FBa0JJO0VBQ0ksa0JBQUE7QUFoQlI7QUFxQkk7RUFDSSw4QkFBQTtFQUNBLGNBQUE7QUFsQlI7QUFxQkk7RUFDSSxrQkFBQTtBQW5CUjtBQXVCQTtFQUNJLHNCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksbUJBQUE7QUFwQko7QUF1QkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBdUJBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksa0JBQUE7QUFwQko7QUF1QkE7O0VBRUksa0JBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXVCQTtFQUNJLGtCQUFBO0FBcEJKO0FBdUJBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFwQkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbTtcblxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbTtcblxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWctY2FyZCB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y4ZmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmlvbi1tZW51IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmM2Y4ZmUgIWltcG9ydGFudDtcblxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2YzZjhmZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjhmZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2Y4ZmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWl0ZW0ubWQge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LU1lZGl1bTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuXG4gICAgLm1lbnUtbG9nbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG59XG5cbmlvbi1pdGVtLmlvcyB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtTWVkaXVtO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG5cbiAgICAubWVudS1sb2dvIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>";

/***/ }),

/***/ 7020:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map