"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_category_category_module_ts"],{

/***/ 8092:
/*!********************************************************************!*\
  !*** ./src/app/default-layout/category/category-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageRoutingModule": () => (/* binding */ CategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page */ 798);




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ 2054:
/*!************************************************************!*\
  !*** ./src/app/default-layout/category/category.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageModule": () => (/* binding */ CategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 8092);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page */ 798);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryPageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_1__.CategoryPage]
    })
], CategoryPageModule);



/***/ }),

/***/ 798:
/*!**********************************************************!*\
  !*** ./src/app/default-layout/category/category.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page.html?ngResource */ 942);
/* harmony import */ var _category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss?ngResource */ 6222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/category/category.service */ 9659);







let CategoryPage = class CategoryPage {
    constructor(router, categoryService, translate, activatedRoute) {
        this.router = router;
        this.categoryService = categoryService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.categoryDetails = [];
        this.search = '';
        this.categoryArr = [];
        this.subCategoryArr = [];
        this.subCatArr = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getAllCategoryWithSubCategory();
        this.activatedRoute.queryParams.subscribe((params) => {
            if (params.categoryId) {
                this.categoryId = params.categoryId;
            }
        });
    }
    getAllCategoryWithSubCategory() {
        let obj = {};
        this.categoryService
            .getAllCategoryWithSubCategory(obj)
            .subscribe((success) => {
            this.categoryArr = success.rows.map((x, i) => {
                if (this.categoryId && x._id == this.categoryId) {
                    this.businessTypeId = x.businessTypeId;
                    x.active = true;
                    this.subCategoryArr = x?.categoryWithSubCategory;
                }
                else {
                    if (!this.categoryId && i == 0) {
                        this.categoryId = this.categoryId ? this.categoryId : x._id;
                        this.businessTypeId = x.businessTypeId;
                        x.active = true;
                        this.subCategoryArr = x?.categoryWithSubCategory;
                    }
                    else {
                        x.active = false;
                    }
                }
                return x;
            });
        });
    }
    getCategoryAllSubCategory(index) {
        this.categoryArr = this.categoryArr.map((x, i) => {
            if (i == index) {
                x.active = true;
                this.categoryId = x._id;
                this.businessTypeId = x.businessTypeId;
                this.subCategoryArr = x?.categoryWithSubCategory;
            }
            else {
                x.active = false;
            }
            return x;
        });
    }
    navigateTo(path, subCategoryId) {
        let params = {
            businessTypeId: this.businessTypeId,
            categoryId: this.categoryId,
            subCategoryId: subCategoryId,
        };
        this.router.navigate([path], { queryParams: params });
    }
    onSearch() {
        this.categoryArr = [];
        // this.start = 0;
        this.getAllCategoryWithSubCategory();
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_service_category_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-category',
        template: _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryPage);



/***/ }),

/***/ 6222:
/*!***********************************************************************!*\
  !*** ./src/app/default-layout/category/category.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-bottom: 0 !important;\n  --padding-top: 0 !important;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n}\n\n.category-list ion-row,\n.category-list ion-col {\n  padding: 0;\n  margin: 0;\n}\n\n.category-list .category-section .cat-container {\n  max-width: 90vh !important;\n  height: 90vh !important;\n  overflow: auto !important;\n}\n\n.category-list .category-section ion-card {\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid grey;\n  background-color: #ededed;\n  padding: 0.5rem 0;\n}\n\n.category-list .category-section ion-card .cat-img {\n  border-radius: 5%;\n  height: 3.5rem;\n  width: 3.5rem;\n  object-fit: cover;\n}\n\n.category-list .category-section ion-card .cat-head {\n  font-size: 0.8rem;\n  text-transform: capitalize;\n}\n\n.category-list .category-section .active {\n  border-bottom: 1px solid rgb(255, 3, 3);\n  background-color: #ffffff;\n  border-bottom-right-radius: 5%;\n  border-bottom-left-radius: 5%;\n}\n\n.category-list .category-section .active .cat-head {\n  font-size: 0.8rem;\n  color: red;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.category-list .category-section *::-webkit-scrollbar {\n  width: 2px;\n  height: 5px;\n  cursor: pointer !important;\n}\n\n.category-list .category-section *::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n  cursor: pointer !important;\n}\n\n.category-list .category-section *::-webkit-scrollbar-thumb {\n  background-color: var(--ion-color-secondary);\n  border-radius: 5px;\n  cursor: pointer !important;\n}\n\n.category-list .subcategory-section ion-col {\n  margin-bottom: 0.6rem;\n}\n\n.category-list .subcategory-section ion-card {\n  border-radius: 5%;\n  box-shadow: none;\n  background-color: transparent;\n  margin: 0.2rem;\n  height: 100%;\n}\n\n.category-list .subcategory-section ion-card .cat-img {\n  border-radius: 5%;\n  height: 3.5rem;\n  width: 3.5rem;\n  object-fit: cover;\n}\n\n.category-list .subcategory-section ion-card .cat-head {\n  font-size: 0.7rem;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBSUU7O0VBRUUsVUFBQTtFQUNBLFNBQUE7QUFESjs7QUFLSTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUhOOztBQU1JO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBSk47O0FBTU07RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFKUjs7QUFPTTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUFMUjs7QUFTSTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBUE47O0FBU007RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBUFI7O0FBV0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBVE47O0FBWUk7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0FBVk47O0FBYUk7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFYTjs7QUFpQkk7RUFDRSxxQkFBQTtBQWZOOztBQWtCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBaEJOOztBQWtCTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWhCUjs7QUFtQk07RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBakJSIiwiZmlsZSI6ImNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeS1saXN0IHtcblxuICBpb24tcm93LFxuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jYXRlZ29yeS1zZWN0aW9uIHtcbiAgICAuY2F0LWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDkwdmggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICAgICAgcGFkZGluZzogMC41cmVtIDA7XG5cbiAgICAgIC5jYXQtaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIH1cblxuICAgICAgLmNhdC1oZWFkIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3RpdmUge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDMsIDMpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1JTtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUlO1xuXG4gICAgICAuY2F0LWhlYWQge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cblxuICAgICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5zdWJjYXRlZ29yeS1zZWN0aW9uIHtcblxuICAgIGlvbi1jb2wge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xuICAgIH1cblxuICAgIGlvbi1jYXJkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luOiAwLjJyZW07XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5jYXQtaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIH1cblxuICAgICAgLmNhdC1oZWFkIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 942:
/*!***********************************************************************!*\
  !*** ./src/app/default-layout/category/category.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Category' | translate}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/tabs/landing-page\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-searchbar class=\"search-box ion-padding-top\" inputmode=\"search\" searchIcon animated type=\"text\" debounce=\"600\"\n    showCancelButton=\"never\" autocomplete=\"on\" autocorrect=\"on\" [(ngModel)]=\"search\" (ionChange)=\"onSearch()\"\n    placeholder=\"{{ 'Search' | translate}}\">\n  </ion-searchbar> -->\n\n\n  <ion-grid class=\"category-list\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"category-section\">\n        <div class=\"cat-container\">\n          <ion-card class=\"ion-text-center\" [ngClass]=\"c.active ? 'active':null \"\n            *ngFor=\"let c of categoryArr;let i =index;\" (click)=\"getCategoryAllSubCategory(i)\">\n            <img alt=\"Category Image\" class=\"cat-img\" src=\"{{c.imageUrl}}\" />\n            <ion-card-subtitle class=\"cat-head\">{{c.name}}</ion-card-subtitle>\n          </ion-card>\n        </div>\n      </ion-col>\n      <ion-col size=\"9\" class=\"subcategory-section\">\n        <ion-row class=\"ion-margin\">\n          <ion-col size=\"4\" *ngFor=\"let subCategory of subCategoryArr\">\n            <ion-card class=\"ion-text-center\" (click)=\"navigateTo('/app/tabs/search-shop',subCategory._id)\">\n              <img alt=\"Category Image\" class=\"cat-img\" src=\"{{subCategory.subCatImageUrl}}\" />\n              <ion-card-subtitle class=\"cat-head\">{{subCategory.name}}</ion-card-subtitle>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_category_category_module_ts.js.map