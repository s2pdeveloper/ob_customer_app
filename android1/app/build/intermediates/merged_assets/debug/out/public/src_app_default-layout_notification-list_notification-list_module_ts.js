"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_notification-list_notification-list_module_ts"],{

/***/ 8320:
/*!**************************************************************************************!*\
  !*** ./src/app/default-layout/notification-list/notification-list-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationListPageRoutingModule": () => (/* binding */ NotificationListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _notification_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list.page */ 4800);




const routes = [
    {
        path: '',
        component: _notification_list_page__WEBPACK_IMPORTED_MODULE_0__.NotificationListPage
    }
];
let NotificationListPageRoutingModule = class NotificationListPageRoutingModule {
};
NotificationListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationListPageRoutingModule);



/***/ }),

/***/ 2480:
/*!******************************************************************************!*\
  !*** ./src/app/default-layout/notification-list/notification-list.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationListPageModule": () => (/* binding */ NotificationListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list-routing.module */ 8320);
/* harmony import */ var _notification_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-list.page */ 4800);







let NotificationListPageModule = class NotificationListPageModule {
};
NotificationListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationListPageRoutingModule
        ],
        declarations: [_notification_list_page__WEBPACK_IMPORTED_MODULE_1__.NotificationListPage]
    })
], NotificationListPageModule);



/***/ }),

/***/ 4800:
/*!****************************************************************************!*\
  !*** ./src/app/default-layout/notification-list/notification-list.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationListPage": () => (/* binding */ NotificationListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notification_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list.page.html?ngResource */ 3030);
/* harmony import */ var _notification_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-list.page.scss?ngResource */ 2168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_service_rest_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest/rest.service */ 1361);






let NotificationListPage = class NotificationListPage {
    constructor(spinner, restService) {
        this.spinner = spinner;
        this.restService = restService;
        this.page = 1;
        this.pageSize = 10;
        this.notification = [];
        this.collection = 0;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getAllStudentNotifications(false);
    }
    doRefresh(event) {
        this.page = 1;
        this.notification = [];
        this.getAllStudentNotifications(false);
        event.target.complete();
    }
    doInfinite(event) {
        this.page++;
        this.getAllStudentNotifications(true, event);
        event.target.complete();
    }
    getAllStudentNotifications(isFirstLoad, event) {
        this.spinner.showLoader();
        this.restService
            .getAllShopNotifications(this.page, this.pageSize)
            .subscribe((success) => {
            this.notification = [
                ...this.notification,
                ...success.notificationDetails,
            ];
            this.collection = success.count;
            if (isFirstLoad)
                event?.target.complete();
            if (this.notification.length >= this.collection && event) {
                event.target.disabled = true;
            }
            this.spinner.hideLoader();
        });
    }
};
NotificationListPage.ctorParameters = () => [
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: src_app_service_rest_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService }
];
NotificationListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notification-list',
        template: _notification_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notification_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationListPage);



/***/ }),

/***/ 1361:
/*!**********************************************!*\
  !*** ./src/app/service/rest/rest.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 8138);




let RestService = class RestService {
    constructor(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.routes = {
            getAllCustomerDashBoardPath: (id) => `customer/getAllCustomerDashBoard`,
            getAllAsmBySubTopicId: (id) => `assignment/getAllAssignmentBySubTopicId/${id}`,
            getAllTopicVideoBySubTopicId: (id) => `topicVideo/getAllTopicVideoBySubTopicId/${id}`,
            getTopicVideoDetailsById: (id) => `topicVideo/getTopicVideoDetailsById/${id}`,
            getAllTopicVideoByBatchId: (id) => `topicVideo/getAllTopicVideoByBatchId/${id}`,
            selectAllTopicByCourseId: (id) => `topic/selectAllTopicByCourseId/${id}`,
            getAllAssignmentByBatchId: (id) => `assignment/getAllAssignmentByBatchId/${id}`,
            getAllShopNotifications: (page, pageSize) => `notification/getAllShopNotifications?page=${page}&pageSize=${pageSize}`,
        };
    }
    getAllAssignmentByBatchId(id) {
        return this.http.get(this.routes.getAllAssignmentByBatchId(id));
    }
    getAllTopicByCourseId(id) {
        return this.http.get(this.routes.selectAllTopicByCourseId(id));
    }
    getAllAssignmentBySubTopicId(id) {
        return this.http.get(this.routes.getAllAsmBySubTopicId(id));
    }
    getAllTopicVideoBySubTopicId(id) {
        return this.http.get(this.routes.getAllTopicVideoBySubTopicId(id));
    }
    getAllAssignmentById(id) {
        return this.http.get(this.routes.getAsmByIdPath(id));
    }
    getAllTopicVideoById(id) {
        return this.http.get(this.routes.getTopicVideoDetailsById(id));
    }
    getAllShopNotifications(page, pageSize) {
        return this.http.get(this.routes.getAllShopNotifications(page, pageSize));
    }
};
RestService.ctorParameters = () => [
    { type: src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RestService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], RestService);



/***/ }),

/***/ 2168:
/*!*****************************************************************************************!*\
  !*** ./src/app/default-layout/notification-list/notification-list.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".note-card {\n  padding: 10px;\n  text-align: justify;\n}\n\np {\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLWNhcmR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxucHtcbiAgICBtYXJnaW46IDRweDtcbn0iXX0= */";

/***/ }),

/***/ 3030:
/*!*****************************************************************************************!*\
  !*** ./src/app/default-layout/notification-list/notification-list.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar color=\"primary\">\n  <ion-buttons class=\"\" slot=\"start\">\n    <ion-back-button defaultHref=\"landing-page\"></ion-back-button>\n  </ion-buttons>\n  <ion-title class=\"ion-text-capitalize\">Notifications</ion-title>\n</ion-toolbar>\n<ion-content class=\"ion-padding-bottom\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content> </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngFor=\"let n of notification\">\n    <ion-card class=\"note-card\">\n      <ion-card-subtitle>\n        <ion-text class=\"bold ion-margin-end\">{{ n.title }}</ion-text>\n        <ion-note> {{ n.createdAt | date: \"short\" }}</ion-note>\n      </ion-card-subtitle>\n      <p>{{ n.message }}</p>\n    </ion-card>\n  </ng-container>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_notification-list_notification-list_module_ts.js.map