"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_chat-view_chat-view_module_ts"],{

/***/ 7706:
/*!**********************************************************************!*\
  !*** ./src/app/default-layout/chat-view/chat-view-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatViewPageRoutingModule": () => (/* binding */ ChatViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _chat_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-view.page */ 8565);




const routes = [
    {
        path: '',
        component: _chat_view_page__WEBPACK_IMPORTED_MODULE_0__.ChatViewPage
    }
];
let ChatViewPageRoutingModule = class ChatViewPageRoutingModule {
};
ChatViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatViewPageRoutingModule);



/***/ }),

/***/ 2825:
/*!**************************************************************!*\
  !*** ./src/app/default-layout/chat-view/chat-view.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatViewPageModule": () => (/* binding */ ChatViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chat_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-view-routing.module */ 7706);
/* harmony import */ var _chat_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-view.page */ 8565);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/upload/upload.service */ 4204);









let ChatViewPageModule = class ChatViewPageModule {
};
ChatViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _chat_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatViewPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_chat_view_page__WEBPACK_IMPORTED_MODULE_1__.ChatViewPage],
        providers: [src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService],
    })
], ChatViewPageModule);



/***/ }),

/***/ 8565:
/*!************************************************************!*\
  !*** ./src/app/default-layout/chat-view/chat-view.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatViewPage": () => (/* binding */ ChatViewPage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chat_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-view.page.html?ngResource */ 5137);
/* harmony import */ var _chat_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-view.page.scss?ngResource */ 6792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_service_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/chat/chat.service */ 5306);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/upload/upload.service */ 4204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 8794);














const {
  App,
  Geolocation
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Plugins;

const {
  Filesystem
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Plugins;
let ChatViewPage = class ChatViewPage {
  constructor(activatedRoute, router, translate, chatService, toaster, spinner, localStorage, uploadService, socket) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.chatService = chatService;
    this.toaster = toaster;
    this.spinner = spinner;
    this.localStorage = localStorage;
    this.uploadService = uploadService;
    this.socket = socket;
    this.disabledScroll = false;
    this.page = 1;
    this.pageSize = 10;
    this.search = '';
    this.msgArr = [];
    this.user = {};
    this.msg = '';
    this.message = '';
    this.shopName = '';
    this.roomName = '';
    this.fileUploaded = false;
    this.filePath = '';
    this.data = {};
    this.chatForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      roomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      createdBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.user = this.localStorage.get('OBCustomer');
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.shopId) {
        this.shopId = params.shopId;
      }

      if (params.shopName) this.shopName = params.shopName;
      if (params.roomName) this.roomName = params.roomName;
      this.getMsgByCustomerId(false);
    }); // socket

    this.socket.on('latest', function (data) {
      console.log(data);
      console.log('latest-data called in shopApp@@@@');
      this.getMsgByCustomerId(false);
    }.bind(this));
  }

  ngOnDestroy() {
    console.log('destroy');
    this.socket.disconnect();
  }

  sendMessage() {
    this.chatForm.controls.roomName.setValue(this.roomName);
    this.chatService.create(this.chatForm.value).subscribe(success => {
      this.getMsgByCustomerId(false); // emit

      this.socket.emit('latestdata', {
        roomName: this.roomName,
        userId: this.user._id,
        data: this.chatForm.value
      });
      this.chatForm.reset();
      this.spinner.hideLoader();
    }, error => {
      this.spinner.hideLoader();
      this.toaster.errorToast(error);
    });
  }

  getMsgByCustomerId(isFirstLoad, event) {
    this.spinner.showLoader();
    this.chatService.getMsgByCustomerId(this.roomName).subscribe(success => {
      this.msgArr = success.payload.rows;
      this.spinner.hideLoader();
    });
  }

  uploadFileAWS($event) {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let file = $event.target.files[0];
      yield _this.spinner.showLoader();
      let formData = new FormData();
      formData.append('file', file);

      _this.uploadService.uploadFile(formData).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.filePath = data?.result?.url;

          _this.chatForm.controls.image.setValue(_this.filePath);

          _this.fileUploaded = true;
          yield _this.spinner.hideLoader();

          _this.sendMessage();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          yield _this.spinner.hideLoader();

          _this.toaster.errorToast(error);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  doInfinite(event) {
    this.page++;
    this.getMsgByCustomerId(true, event);
    event.target.disabled = true;
    this.infiniteScroll.disabled = true;
    event.target.complete();
  }

  downloadImage(message) {
    var _this2 = this;

    this.spinner.showLoader();
    this.uploadService.downloadImage(message.image).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
        _this2.toaster.successToast('Image Downloaded successfully. Please check your Documents folder.');

        yield Filesystem.writeFile({
          path: `${message.image.split('post/')[1]}`,
          data: success.result.src,
          directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.FilesystemDirectory.Documents
        });

        _this2.spinner.hideLoader();
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  } // location share


  locationShare() {
    var _this3 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let geoLocation = yield (yield Geolocation.getCurrentPosition()).coords;
      console.log('geoLocation', geoLocation);
      let msg = `http://maps.google.com/?ie=UTF8&hq=&ll=${geoLocation.latitude},${geoLocation.longitude}&z=18`;

      _this3.chatForm.controls.message.setValue(msg);

      _this3.sendMessage();
    })();
  }

  openUrl(url) {
    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(url.includes('http'), 'url', url);

      if (!url.includes('http')) {
        return;
      }

      let ret = yield App.openUrl({
        url: url
      });
    })();
  }

  doRefresh(event) {
    this.msgArr = [];
    this.getMsgByCustomerId(false, '');
    event.target.complete();
  }

  confirmOrder() {
    this.chatForm.controls.message.setValue('Confirm Order 👍');
    this.sendMessage();
  }

  navigateTo(shopId) {
    this.router.navigate(['/shop-detail'], {
      queryParams: {
        shopId: this.shopId
      }
    });
  }

};

ChatViewPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
}, {
  type: src_app_service_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__.ChatService
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__.StorageService
}, {
  type: src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService
}, {
  type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__.Socket
}];

ChatViewPage.propDecorators = {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInfiniteScroll, {
      static: false
    }]
  }]
};
ChatViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-chat-view',
  template: _chat_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_chat_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ChatViewPage);


/***/ }),

/***/ 6792:
/*!*************************************************************************!*\
  !*** ./src/app/default-layout/chat-view/chat-view.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".message-wrap {\n  padding: 0 10px;\n}\n.message-wrap .message {\n  min-height: 100%;\n  position: relative;\n  padding: 7px 0;\n}\n.message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block;\n}\n.message-wrap .message .msg-detail p {\n  margin: 0;\n}\n.message-wrap .message .msg-detail .msg-info p {\n  text-transform: capitalize;\n  font-size: 0.8em;\n  color: #888;\n}\n.message-wrap .message .msg-detail .msg-content {\n  white-space: pre-wrap;\n  position: relative;\n  float: left;\n  margin-top: 2px;\n  border-radius: 10px;\n  padding: 10px;\n  border: 2px solid #ddd;\n  width: auto;\n  max-width: 70%;\n  color: #ffffff;\n  background-color: #8e8787;\n}\n.message-wrap .message .msg-status {\n  text-transform: capitalize;\n  font-size: 0.8em;\n  font-weight: bold;\n  color: #888;\n  padding-left: 1%;\n}\n.message-wrap .message .msg-status ion-icon {\n  position: relative;\n  top: 3px;\n  font-size: 15px;\n}\n.message-wrap .message.right {\n  min-height: 100%;\n  position: relative;\n  padding: 7px 0;\n}\n.message-wrap .message.right .download {\n  position: relative;\n  float: right;\n}\n.message-wrap .message.right .msg-detail {\n  width: 100%;\n  display: inline-block;\n}\n.message-wrap .message.right .msg-detail .msg-info p {\n  text-align: right;\n  text-transform: capitalize;\n  font-size: 0.8em;\n  color: #888;\n}\n.message-wrap .message.right .msg-detail .msg-content {\n  white-space: pre-wrap;\n  color: #ffffff;\n  background-color: #ff6666;\n  float: right;\n  position: relative;\n  margin-top: 2px;\n  border-radius: 10px;\n  padding: 10px;\n  width: auto;\n  max-width: 70%;\n}\n.message-wrap .message.right .msg-status {\n  text-align: right;\n  text-transform: capitalize;\n  font-size: 0.8em;\n  font-weight: bold;\n  color: #888;\n  padding-right: 1%;\n}\n.message-wrap .message.right img {\n  float: right;\n}\nion-footer .footer-msg {\n  padding: 10px;\n}\nion-footer .footer-msg ion-toolbar {\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 3rem;\n  --background: white !important;\n}\nion-footer .footer-msg ion-textarea {\n  margin-top: 18px;\n  margin-left: 9px;\n}\nion-footer .footer-msg ion-button {\n  margin-top: 13px;\n  margin-left: 10px !important;\n  margin-right: 0 !important;\n}\nimg {\n  height: 6rem !important;\n  width: 7rem !important;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUNOO0FBQ007RUFDRSxTQUFBO0FBQ1I7QUFHUTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRFY7QUFLTTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFIUjtBQVFJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTk47QUFRTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFOUjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFUSjtBQVdJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBVE47QUFZSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQVZOO0FBYVE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBWFY7QUFlTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBYlI7QUFpQkk7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWZOO0FBa0JJO0VBQ0UsWUFBQTtBQWhCTjtBQXVCRTtFQUNFLGFBQUE7QUFwQko7QUFzQkk7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFwQk47QUF1Qkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBckJOO0FBd0JJO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBdEJOO0FBNEJBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBekJGIiwiZmlsZSI6ImNoYXQtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS13cmFwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuXG4gIC5tZXNzYWdlIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA3cHggMDtcblxuICAgIC5tc2ctZGV0YWlsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAubXNnLWluZm8ge1xuICAgICAgICBwIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tc2ctY29udGVudCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4Nzg3O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MGQwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tc2ctc3RhdHVzIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM4ODg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDElO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWVzc2FnZS5yaWdodCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogN3B4IDA7XG5cbiAgICAuZG93bmxvYWQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5tc2ctZGV0YWlsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAubXNnLWluZm8ge1xuICAgICAgICBwIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tc2ctY29udGVudCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yOiByZWQsICRhbW91bnQ6IDIwKTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tc2ctc3RhdHVzIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICB9XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIC5mb290ZXItbXNnIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gIH1cbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA2cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3cmVtICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4iXX0= */";

/***/ }),

/***/ 5137:
/*!*************************************************************************!*\
  !*** ./src/app/default-layout/chat-view/chat-view.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title (click)=\"navigateTo(shopId)\">{{shopName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"catalogue\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"chat-screen\">\n    <div #scrollMe class=\"ps-container ps-theme-default ps-active-y\" id=\"chat-content\" style=\"overflow: scroll\"\n      [scrollTop]=\"scrollMe?.scrollHeight\">\n      <div class=\"message-wrap\">\n        <div *ngFor=\"let message of msgArr\" class=\"message\" [class.right]=\" message.createdBy === user._id\">\n          <div class=\"msg-detail\">\n            <div class=\"msg-info\">\n              <p>{{message?.createdAt | date:'shortTime'}}</p>\n            </div>\n            <div class=\"msg-content ion-text-wrap\" *ngIf=\"message.message\">\n              <p (click)=\"openUrl(message.message)\">{{message.message}}</p>\n            </div>\n\n            <div class=\"msg-info\">\n              <img src=\"{{message.image}}\" *ngIf=\"message.image\" />\n              <ion-icon name=\"cloud-download-outline\" *ngIf=\"message.image\" class=\"download\"\n                (click)=\"downloadImage(message)\"></ion-icon>\n            </div>\n          </div>\n          <div *ngIf=\"message.userIsSender\" class=\"msg-status\">\n            <div *ngIf=\"message.status === 'pending';else sent\">\n              pending\n              <ion-icon name=\"checkmark-circle\"></ion-icon>\n            </div>\n            <ng-template #sent>\n              <div *ngIf=\"message.status === 'sent';else seen\">\n                sent\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n              </div>\n            </ng-template>\n            <ng-template #seen>\n              <div *ngIf=\"message.status === 'seen'\">\n                seen\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n      <div class=\"ps-scrollbar-x-rail\" style=\"left: 0px; bottom: 0px\">\n        <div class=\"ps-scrollbar-x\" tabindex=\"0\" style=\"left: 0px; width: 0px\"></div>\n      </div>\n      <div class=\"ps-scrollbar-y-rail\" style=\"top: 0px; height: 0px; right: 2px\">\n        <div class=\"ps-scrollbar-y\" tabindex=\"0\" style=\"top: 0px; height: 2px\"></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" class=\"bottom\">\n    <ion-fab-button class=\"bg-color-2\" (click)=\"confirmOrder()\">\n      <ion-icon name=\"checkmark-done-circle-sharp\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" class=\"bottom\">\n    <ion-fab-button size=\"small\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button>\n        <ion-icon name=\"checkmark-done-circle-sharp\" color=\"primary\" (click)=\"confirmOrder()\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button>\n        <ion-icon name=\"star\" color=\"primary\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\" [disabled]=\"disabledScroll\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer-msg\">\n    <ion-toolbar>\n      <form [formGroup]=\"chatForm\">\n        <ion-item lines=\"none\" id=\"chatInput\" class=\"ion-align-items-center\">\n          <ion-textarea class=\"ion-no-padding\" formControlName=\"message\" spellcheck=\"true\" rows=\"1\" autoComplete=\" true\"\n            autocorrect=\"true\" maxlength=\"500\" type=\"text\" placeholder=\"{{'Type your message...'| translate}}\"\n            (keyup.enter)=\"sendMessage()\">\n          </ion-textarea>\n          <input hidden autocapitalize=\"on\" #fileInput1 autocomplete=\"on\" type=\"file\" name=\"file\"\n            (change)=\"uploadFileAWS($event)\" required />\n\n          <ng-container class=\"footer-btns\">\n            <ion-button (click)=\"fileInput1.click()\">\n              <ion-icon name=\"attach\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"locationShare()\">\n              <ion-icon name=\"location\"></ion-icon>\n            </ion-button>\n\n            <ion-button (click)=\"sendMessage()\" [disabled]=\"chatForm.invalid\">\n              <ion-icon name=\"send-sharp\"></ion-icon>\n            </ion-button>\n          </ng-container>\n        </ion-item>\n      </form>\n    </ion-toolbar>\n  </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_chat-view_chat-view_module_ts.js.map