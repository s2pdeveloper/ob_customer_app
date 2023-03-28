"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_shared_module_ts"],{

/***/ 4463:
/*!*******************************************************!*\
  !*** ./src/app/directives/animate-items.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateItemsDirective": () => (/* binding */ AnimateItemsDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let AnimateItemsDirective = class AnimateItemsDirective {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        let options = {
            threshold: 0.5
        };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(entry.target, this.className);
                }
                // else {
                //   this.renderer.removeClass(entry.target, this.className);
                // }
            });
        }, options);
        this.items.forEach((item, index, arr) => {
            setTimeout(() => {
                this.observer.observe(item.nativeElement);
            }, index * 200);
        });
        this.itemsColumn.forEach((item, index, arr) => {
            setTimeout(() => {
                this.observer.observe(item.nativeElement);
            }, index * 200);
        });
    }
    ;
};
AnimateItemsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
AnimateItemsDirective.propDecorators = {
    className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    itemsColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCol, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },] }]
};
AnimateItemsDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appAnimateItems]'
    })
], AnimateItemsDirective);



/***/ }),

/***/ 9567:
/*!***********************************************!*\
  !*** ./src/app/directives/parallax-header.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxHeader": () => (/* binding */ ParallaxHeader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let ParallaxHeader = class ParallaxHeader {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
        const content = this.element.nativeElement;
        if (content) {
            this.header = content.getElementsByClassName('header-image')[0];
            const mainContent = content.getElementsByClassName('main-content')[0];
            this.headerHeight = this.header.clientHeight;
            if (this.header) {
                this.renderer.setStyle(this.header, 'webkitTransformOrigin', 'center bottom');
                this.renderer.setStyle(this.header, 'background-size', 'cover');
            }
            if (mainContent) {
                this.renderer.setStyle(mainContent, 'position', 'absolute');
            }
        }
    }
    onWindowResize(ev) {
        this.headerHeight = this.header.clientHeight;
    }
    onContentScroll(ev) {
        if (ev) {
            this.updateParallaxHeader(ev);
        }
    }
    updateParallaxHeader(ev) {
        if (ev.detail.scrollTop >= 0) {
            this.translateAmt = ev.detail.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt +
            'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    }
};
ParallaxHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
ParallaxHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[parallax-header]',
        host: {
            '(ionScroll)': 'onContentScroll($event)',
            '(window:resize)': 'onWindowResize($event)'
        }
    })
], ParallaxHeader);



/***/ }),

/***/ 5098:
/*!******************************************!*\
  !*** ./src/app/pipes/capitalize.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizePipe": () => (/* binding */ CapitalizePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let CapitalizePipe = class CapitalizePipe {
    transform(value) {
        return value
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
};
CapitalizePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'capitalize'
    })
], CapitalizePipe);



/***/ }),

/***/ 742:
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29)
                // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = [
                { key: 'year', value: 31536000 },
                { key: 'month', value: 2592000 },
                { key: 'week', value: 604800 },
                { key: 'day', value: 86400 },
                { key: 'hour', value: 3600 },
                { key: 'minute', value: 60 },
                { key: 'second', value: 1 },
            ];
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i].value);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + intervals[i].key + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + intervals[i].key + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateAgo',
        pure: true,
    })
], DateAgoPipe);



/***/ }),

/***/ 5911:
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let TruncatePipe = class TruncatePipe {
    transform(value, limit = 24, completeWords = false, ellipsis = '...') {
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
        }
        return value && value.length > limit ? value.substr(0, limit) + ellipsis : value;
    }
};
TruncatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ 5427:
/*!***********************************************************************!*\
  !*** ./src/app/shared/data-unavailable/data-unavailable.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataUnavailableComponent": () => (/* binding */ DataUnavailableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _data_unavailable_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-unavailable.component.html?ngResource */ 3295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);




let DataUnavailableComponent = class DataUnavailableComponent {
    constructor(routing) {
        this.routing = routing;
        this.routingPath = null;
        this.buttonText = null;
    }
    ngOnInit() { }
    navigateTo() {
        if (this.routingPath) {
            this.routing.navigateByUrl(this.routingPath);
        }
    }
};
DataUnavailableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
DataUnavailableComponent.propDecorators = {
    customText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    routingPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    buttonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DataUnavailableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-data-unavailable',
        template: _data_unavailable_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], DataUnavailableComponent);



/***/ }),

/***/ 9032:
/*!***************************************************************!*\
  !*** ./src/app/shared/gallery-list/gallery-list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryListComponent": () => (/* binding */ GalleryListComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gallery_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-list.component.html?ngResource */ 470);
/* harmony import */ var _gallery_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-list.component.scss?ngResource */ 8129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_gallery_images_view_gallery_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-gallery-images/view-gallery-images.component */ 3553);







let GalleryListComponent = class GalleryListComponent {
  constructor(modalController) {
    this.modalController = modalController;
    this.buttonSlide = {
      slidesPerView: 1,
      slideShadows: true,
      initialSlide: 0,
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000
      },
      spaceBetween: 25
    };
  }

  ngOnInit() {}

  dismissModal(isDismissed = false) {
    this.modalController.dismiss({
      'dismissed': isDismissed
    });
  }

  navigateToViewGalleryImages(data) {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _view_gallery_images_view_gallery_images_component__WEBPACK_IMPORTED_MODULE_3__.ViewGalleryImagesComponent,
        componentProps: {
          galleryImage: data
        }
      });
      yield modal.present();
    })();
  }

};

GalleryListComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

GalleryListComponent.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
GalleryListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-gallery-list',
  template: _gallery_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_gallery_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GalleryListComponent);


/***/ }),

/***/ 6945:
/*!*****************************************************!*\
  !*** ./src/app/shared/popover/popover.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComponent": () => (/* binding */ PopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.component.html?ngResource */ 4942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





let PopoverComponent = class PopoverComponent {
    constructor(translate, popoverController) {
        this.translate = translate;
        this.popoverController = popoverController;
        this.dataList = [];
    }
    ngOnInit() { }
    onDismiss(item) {
        this.popoverController.dismiss(item);
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
PopoverComponent.propDecorators = {
    dataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-popover',
        template: _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], PopoverComponent);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/capitalize.pipe */ 5098);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/truncate.pipe */ 5911);
/* harmony import */ var _data_unavailable_data_unavailable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-unavailable/data-unavailable.component */ 5427);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover/popover.component */ 6945);
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/date-ago.pipe */ 742);
/* harmony import */ var _gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery-list/gallery-list.component */ 9032);
/* harmony import */ var _view_gallery_images_view_gallery_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-gallery-images/view-gallery-images.component */ 3553);
/* harmony import */ var _directives_animate_items_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/animate-items.directive */ 4463);
/* harmony import */ var _directives_parallax_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/parallax-header */ 9567);
















// import { ParallaxHeaderDirective } from '../directives/parallax-header.directive';
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http);
}
const PIPES = [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_1__.TruncatePipe, _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__.CapitalizePipe, _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_4__.DateAgoPipe];
const COMPONENTS = [
    // ParallaxHeaderDirective,
    _directives_parallax_header__WEBPACK_IMPORTED_MODULE_8__.ParallaxHeader,
    _directives_animate_items_directive__WEBPACK_IMPORTED_MODULE_7__.AnimateItemsDirective,
    _gallery_list_gallery_list_component__WEBPACK_IMPORTED_MODULE_5__.GalleryListComponent,
    _view_gallery_images_view_gallery_images_component__WEBPACK_IMPORTED_MODULE_6__.ViewGalleryImagesComponent,
    _data_unavailable_data_unavailable_component__WEBPACK_IMPORTED_MODULE_2__.DataUnavailableComponent,
    _popover_popover_component__WEBPACK_IMPORTED_MODULE_3__.PopoverComponent
];
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [...COMPONENTS, ...PIPES],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient],
                },
            }),
        ],
        exports: [...COMPONENTS, ...PIPES, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule],
    })
], SharedModule);



/***/ }),

/***/ 3553:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/view-gallery-images/view-gallery-images.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewGalleryImagesComponent": () => (/* binding */ ViewGalleryImagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_gallery_images_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-gallery-images.component.html?ngResource */ 5934);
/* harmony import */ var _view_gallery_images_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-gallery-images.component.scss?ngResource */ 6123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ViewGalleryImagesComponent = class ViewGalleryImagesComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.buttonSlide = {
            slidesPerView: 1,
            slideShadows: true,
            initialSlide: 0,
            speed: 400,
            loop: true,
            // autoplay: {
            //   delay: 5000,
            // },
            spaceBetween: 25,
        };
    }
    ngOnInit() { }
    dismissModal(isDismissed = false) {
        this.modalController.dismiss({
            'dismissed': isDismissed,
        });
    }
};
ViewGalleryImagesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ViewGalleryImagesComponent.propDecorators = {
    galleryImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ViewGalleryImagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-view-gallery-images',
        template: _view_gallery_images_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_gallery_images_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewGalleryImagesComponent);



/***/ }),

/***/ 8129:
/*!****************************************************************************!*\
  !*** ./src/app/shared/gallery-list/gallery-list.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-buttons {\n  padding: 11px 0px 0px 49px;\n  margin: 1px 1px 0px 0px;\n}\nion-buttons ion-button {\n  overflow: hidden;\n  font-weight: 1000;\n  margin-left: 15px !important;\n  margin-bottom: 10px !important;\n  margin-right: 9px !important;\n  margin-left: 0px !important;\n}\nion-slide {\n  height: 90vh !important;\n}\n.gallery {\n  margin: 0 !important;\n  width: 100% !important;\n  height: 5rem !important;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFHQTtFQUNFLHVCQUFBO0FBQUY7QUFHQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoiZ2FsbGVyeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nOiAxMXB4IDBweCAwcHggNDlweDtcbiAgbWFyZ2luOiAxcHggMXB4IDBweCAwcHg7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tc2xpZGUge1xuICBoZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcbn1cblxuLmdhbGxlcnkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */";

/***/ }),

/***/ 6123:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/view-gallery-images/view-gallery-images.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "ion-buttons {\n  padding: 11px 0px 0px 49px;\n  margin: 1px 1px 0px 0px;\n}\nion-buttons ion-button {\n  overflow: hidden;\n  font-weight: 1000;\n  margin-left: 15px !important;\n  margin-bottom: 10px !important;\n  margin-right: 9px !important;\n  margin-left: 0px !important;\n}\n.image {\n  margin-top: 10.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZ2FsbGVyeS1pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUhKO0FBT0E7RUFDRSxtQkFBQTtBQUpGIiwiZmlsZSI6InZpZXctZ2FsbGVyeS1pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG5cblxuaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nOiAxMXB4IDBweCAwcHggNDlweDtcbiAgbWFyZ2luOiAxcHggMXB4IDBweCAwcHg7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaW1hZ2V7XG4gIG1hcmdpbi10b3A6IDEwLjVyZW07XG59XG4iXX0= */";

/***/ }),

/***/ 3295:
/*!************************************************************************************!*\
  !*** ./src/app/shared/data-unavailable/data-unavailable.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-row class=\"ion-align-items-center\" style=\"height: 70%;\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <div class=\"clearfix\">\n      <label class=\"ion-text-center ion-text-wrap text-color-5\">\n        {{customText || 'No data available'}}\n      </label>\n    </div>\n    <div class=\"clearfix\">\n      <ion-button (click)=\"navigateTo()\" class=\"btn-color-2\" type=\"submit\" *ngIf=\"routingPath\">\n        {{buttonText}}\n      </ion-button>\n    </div>\n  </ion-col>\n</ion-row>";

/***/ }),

/***/ 470:
/*!****************************************************************************!*\
  !*** ./src/app/shared/gallery-list/gallery-list.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"bg-color-2\">\n    <ion-title class=\"text-color-4 ion-text-capitalize\">{{ 'galleryImages' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"text-color-4\" (click)=\"dismissModal(true)\">{{ 'close' | translate}}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <ion-row>\n    <ion-col size=\"4\" *ngFor=\"let item of data;let i=index\">\n      <img src=\"{{item}}\" class=\"gallery\" (click)=\"navigateToViewGalleryImages(item)\" />\n    </ion-col>\n  </ion-row> -->\n\n\n  <ion-row>\n    <ion-col size=\"4\" *ngFor=\"let item of data;let i=index\">\n      <img src=\"{{item}}\" class=\"gallery\" (click)=\"navigateToViewGalleryImages(data)\" />\n    </ion-col>\n  </ion-row>\n\n</ion-content>";

/***/ }),

/***/ 4942:
/*!******************************************************************!*\
  !*** ./src/app/shared/popover/popover.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-list>\n  <ion-item [lines]=\"i === dataList.length -1 ? 'none':'' \" button *ngFor=\"let item of dataList;let i = index\"\n    (click)=\"onDismiss(item)\">\n    {{item.label | translate}}\n  </ion-item>\n</ion-list>";

/***/ }),

/***/ 5934:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/view-gallery-images/view-gallery-images.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = " <ion-header>\n  <ion-toolbar class=\"bg-color-2\">\n    <ion-title class=\"text-color-4 ion-text-capitalize\">{{ 'galleryImages' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n    <ion-button class=\"text-color-4\" (click)=\"dismissModal(true)\">{{ 'close' | translate}}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-slides [options]=\"buttonSlide\" class=\"ion-margin-bottom\">\n    <ion-slide *ngFor=\"let item of galleryImage;let i=index\" >\n      <img class=\"image ion-text-center\" src=\"{{item}} \" />\n    </ion-slide>\n  </ion-slides>\n\n\n  <!-- <ion-row>\n    <ion-col size=\"4\">\n      <img src=\"{{galleryImage}}\" class=\"image ion-text-center\" />\n    </ion-col>\n  </ion-row> -->\n</ion-content> \n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_shared_module_ts.js.map