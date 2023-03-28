"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_setting_edit-profile_edit-profile_module_ts"],{

/***/ 3067:
/*!************************************************************************************!*\
  !*** ./src/app/default-layout/setting/edit-profile/edit-profile-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 7090);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 7281:
/*!****************************************************************************!*\
  !*** ./src/app/default-layout/setting/edit-profile/edit-profile.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 3067);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 7090);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/validation-messages/validation-messages.module */ 4094);
/* harmony import */ var src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/upload/upload.service */ 4204);










let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            src_app_core_validation_messages_validation_messages_module__WEBPACK_IMPORTED_MODULE_3__.ValidationMessagesPageModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage],
        providers: [
            { provide: src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService },
        ],
    })
], EditProfilePageModule);



/***/ }),

/***/ 7090:
/*!**************************************************************************!*\
  !*** ./src/app/default-layout/setting/edit-profile/edit-profile.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.html?ngResource */ 8806);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.page.scss?ngResource */ 9187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ 8138);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 7878);
/* harmony import */ var src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/upload/upload.service */ 4204);













let EditProfilePage = class EditProfilePage {
  constructor(router, spinner, toaster, localStorage, authService, translate, uploadService) {
    this.router = router;
    this.spinner = spinner;
    this.toaster = toaster;
    this.localStorage = localStorage;
    this.authService = authService;
    this.translate = translate;
    this.uploadService = uploadService;
    this.submitted = false;
    this.loaded = true;
    this.fileUploaded = false;
    this.filePath = "";
    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        line1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        state: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        country: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        pinCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
      }),
      links: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        insta: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        youtube: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
      }),
      schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        day: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        open: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        close: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
        endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
      })
    });
  }

  ngOnInit() {
    this.user = this.localStorage.get('OBCustomer');
    this.getById();
  }

  get form() {
    return this.profileForm.controls;
  }

  getById() {
    this.authService.profile(this.user._id).subscribe(success => {
      this.profileForm.patchValue(success);
    });
  }

  getData() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.spinner.hideLoader();

      _this.authService.profile(_this.user._id).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
          _this.profileForm.patchValue(success);

          if (success.image) {
            _this.fileUploaded = true;
          }

          yield _this.spinner.hideLoader();
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

  updateProfile() {
    if (this.profileForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }

    this.spinner.showLoader();
    let formData = this.profileForm.value;
    this.authService.updateUser(formData.id, formData).subscribe(success => {
      this.spinner.hideLoader();
      this.profileForm.reset();
      this.toaster.successToast('Profile updated successfully.');
      this.router.navigate(['/view-profile']);
    });
  }

  uploadFile($event) {
    var _this2 = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let file = $event.target.files[0]; // if (this.uploadService.checkFileSize(file)) {
      //   this.toaster.errorToast(OPTIONS.sizeLimit);
      //   this.spinner.hideLoader();
      //   return;
      // }
      // if (this.uploadService.checkImageType(file)) {
      //   this.toaster.errorToast(OPTIONS.imageType);
      //   this.spinner.hideLoader();
      //   return;
      // }

      yield _this2.spinner.showLoader();
      let formData = new FormData();
      formData.append('file', file);

      _this2.uploadService.uploadFile(formData).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this2.filePath = data?.result?.url;

          _this2.profileForm.controls.image.setValue(_this2.filePath);

          _this2.fileUploaded = true;
          yield _this2.spinner.hideLoader();
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          yield _this2.spinner.hideLoader();

          _this2.toaster.errorToast(error);
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }

};

EditProfilePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService
}, {
  type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: src_app_core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
}, {
  type: src_app_service_upload_upload_service__WEBPACK_IMPORTED_MODULE_7__.UploadService
}];

EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-edit-profile',
  template: _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EditProfilePage);


/***/ }),

/***/ 9187:
/*!***************************************************************************************!*\
  !*** ./src/app/default-layout/setting/edit-profile/edit-profile.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-card {\n  border-radius: 2rem;\n  --background: transparent;\n  background: transparent;\n  box-shadow: none;\n}\nion-content ion-card ion-card-content {\n  padding-top: 0;\n}\nion-content ion-card ion-card-content form {\n  padding: 0 5px;\n}\nion-content .input {\n  margin: 22px 15px 15px 15px;\n}\nion-content .img {\n  text-align: center;\n  margin: auto !important;\n}\nion-content .avatar {\n  margin: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRVE7RUFDSSxjQUFBO0FBQVo7QUFFWTtFQUNJLGNBQUE7QUFBaEI7QUFNSTtFQUNJLDJCQUFBO0FBSlI7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFMUjtBQVFJO0VBQ0ksdUJBQUE7QUFOUiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIG1hcmdpbjogMjJweCAxNXB4IDE1cHggMTVweDtcbiAgICB9XG5cbiAgICAuaW1nIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuXG59Il19 */";

/***/ }),

/***/ 8806:
/*!***************************************************************************************!*\
  !*** ./src/app/default-layout/setting/edit-profile/edit-profile.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"view-profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{ 'editProfile' | translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"loaded\">\n\n  <ion-card>\n    <div class=\"img\">\n      <ion-avatar class=\"avatar border-color-7\" (click)=\"fileInput1.click()\">\n        <img src=\"{{profileForm.value.image}}\">\n      </ion-avatar>\n      <ion-text>\n        <ion-chip class=\"bg-color-5 text-color-2\">\n          {{ 'changeProfile' | translate}}\n        </ion-chip>\n        <input hidden autocapitalize=\"on\" #fileInput1 autocomplete=\"on\" type=\"file\" name=\"file\"\n          (change)=\"uploadFile($event)\" required>\n      </ion-text>\n    </div>\n\n\n    <form [formGroup]=\"profileForm\">\n      <ion-item   class=\"input-class\"\n        [class.invalid]=\"!form.firstName.valid && (form.firstName.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'FirstName' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input type=\"text\" placeholder=\"{{ 'FirstName' | translate}}\" formControlName=\"firstName\"></ion-input>\n      </ion-item>\n      <app-validation-messages [control]=\"form.firstName\">\n      </app-validation-messages>\n\n      <ion-item   class=\"input-class\"\n        [class.invalid]=\"!form.lastName.valid && (form.lastName.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'LastName' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input type=\"text\" placeholder=\"{{ 'LastName' | translate}}\" formControlName=\"lastName\"></ion-input>\n      </ion-item>\n      <app-validation-messages [control]=\"form.lastName\">\n      </app-validation-messages>\n\n      <ion-item   class=\"input-class\" [class.invalid]=\"!form.mobile.valid && (form.mobile.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'mobileNumber' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input maxlength=\"10\" minlength=\"10\" type=\"number\" placeholder=\"{{ 'mobile' | translate}}\"\n          formControlName=\"mobile\"></ion-input>\n      </ion-item>\n      <app-validation-messages [control]=\"form.mobile\">\n      </app-validation-messages>\n\n      <ion-item   class=\"input-class\" [class.invalid]=\"!form.email.valid && (form.email.dirty || submitted)\">\n        <ion-label position=\"stacked\">\n          {{ 'email' | translate}}\n          <ion-note color=\"danger\">*</ion-note>\n        </ion-label>\n        <ion-input type=\"text\" placeholder=\"{{ 'email' | translate}}\" formControlName=\"email\"></ion-input>\n      </ion-item>\n\n  <div class=\"accordian\">\n        <ion-accordion-group expand=\"inset\">\n          <ion-accordion value=\"first\">\n            <ion-item slot=\"header\" color=\"light\">\n              <ion-label>Address</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n              <ion-label formGroupName=\"address\">\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'address' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'address' | translate}}\" formControlName=\"line1\"></ion-input>\n                </ion-item>\n\n\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'city' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'city' | translate}}\" formControlName=\"city\"></ion-input>\n                </ion-item>\n\n\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'state' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'state' | translate}}\" formControlName=\"state\"></ion-input>\n                </ion-item>\n\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Country' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Country' | translate}}\" formControlName=\"country\"></ion-input>\n                </ion-item>\n\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'pinCode' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'pinCode' | translate}}\" formControlName=\"pinCode\"></ion-input>\n                </ion-item>\n              </ion-label>\n\n\n              <!-- <div class=\"ion-text-center ion-margin-vertical\">\n                <ion-button color=\"primary\" expand=\"full\" shape=\"round\" class=\"btn\" (click)=\"register()\">\n                  {{ 'submit' | translate}}\n                </ion-button>\n              </div> -->\n\n\n            </div>\n          </ion-accordion>\n          <ion-accordion value=\"second\">\n            <ion-item slot=\"header\" color=\"light\">\n              <ion-label>Links</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n\n              <ion-label formGroupName=\"links\">\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Facebook' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Facebook' | translate}}\"\n                    formControlName=\"facebook\"></ion-input>\n                </ion-item>\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Instagram' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Instagram' | translate}}\" formControlName=\"insta\"></ion-input>\n                </ion-item>\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Youtube' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Youtube' | translate}}\" formControlName=\"youtube\"></ion-input>\n                </ion-item>\n              </ion-label>\n<!-- \n              <div class=\"ion-text-center ion-margin-vertical\">\n                <ion-button color=\"primary\" expand=\"full\" shape=\"round\" class=\"btn\" (click)=\"register()\">\n                  {{ 'submit' | translate}}\n                </ion-button>\n              </div> -->\n\n            </div>\n          </ion-accordion>\n          <ion-accordion value=\"third\">\n            <ion-item slot=\"header\" color=\"light\">\n              <ion-label>Schedule</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n              <ion-label formGroupName=\"schedule\">\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Day' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Day' | translate}}\" formControlName=\"day\"></ion-input>\n                </ion-item>\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Open' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Open' | translate}}\" formControlName=\"open\"></ion-input>\n                </ion-item>\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Close' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Close' | translate}}\" formControlName=\"close\"></ion-input>\n                </ion-item>\n\n\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'Start Time' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'Start Time' | translate}}\" formControlName=\"startTime\">\n                  </ion-input>\n                </ion-item>\n\n                <ion-item   class=\"input-class\">\n                  <ion-label position=\"stacked\">\n                    {{ 'End Time' | translate}}\n                    <ion-note color=\"danger\">*</ion-note>\n                  </ion-label>\n                  <ion-input type=\"text\" placeholder=\"{{ 'End Time' | translate}}\"\n                    formControlName=\"endTime\"></ion-input>\n                </ion-item>\n              </ion-label>\n\n              <!-- <div class=\"ion-text-center ion-margin-vertical\">\n                <ion-button color=\"primary\" expand=\"full\" shape=\"round\" class=\"btn\" (click)=\"register()\">\n                  {{ 'submit' | translate}}\n                </ion-button>\n              </div> -->\n\n            </div>\n          </ion-accordion>\n        </ion-accordion-group>\n      </div>\n\n\n      <div class=\"ion-text-center ion-margin-vertical\">\n        <ion-button color=\"primary\" expand=\"block\" shape=\"round\" class=\"btn\" (click)=\"updateProfile()\">\n          {{ 'submit' | translate}}\n        </ion-button>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_setting_edit-profile_edit-profile_module_ts.js.map