"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_onboarding_onboarding_module_ts"],{

/***/ 954:
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPageRoutingModule": () => (/* binding */ OnboardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.page */ 513);




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_0__.OnboardingPage
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ 3970:
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPageModule": () => (/* binding */ OnboardingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-routing.module */ 954);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page */ 513);







let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnboardingPageRoutingModule
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingPage]
    })
], OnboardingPageModule);



/***/ }),

/***/ 513:
/*!***********************************************!*\
  !*** ./src/app/onboarding/onboarding.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPage": () => (/* binding */ OnboardingPage)
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page.html?ngResource */ 3455);
/* harmony import */ var _onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding.page.scss?ngResource */ 4121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services */ 8138);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 8794);








const {
  StatusBar
} = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Plugins;
let OnboardingPage = class OnboardingPage {
  constructor(router, localStorage) {
    this.router = router;
    this.localStorage = localStorage;
    this.showSkip = false; // slideOpts = {
    //   initialSlide: 0,
    //   speed: 400,
    //   loop: true,
    // };

    this.slideOpts = {
      initialSlide: 0,
      speed: 500,
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      on: {
        beforeInit() {
          const swiper = this;
          swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
          const overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          swiper.params = Object.assign(swiper.params, overwriteParams);
          swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
        },

        setTranslate() {
          const swiper = this;
          const {
            $,
            slides,
            rtlTranslate: rtl
          } = swiper;

          for (let i = 0; i < slides.length; i += 1) {
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;

            if (swiper.params.flipEffect.limitRotation) {
              progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            }

            const offset$$1 = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = -offset$$1;
            let ty = 0;

            if (!swiper.isHorizontal()) {
              ty = tx;
              tx = 0;
              rotateX = -rotateY;
              rotateY = 0;
            } else if (rtl) {
              rotateY = -rotateY;
            }

            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

            if (swiper.params.flipEffect.slideShadows) {
              // Set shadows
              let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
              let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

              if (shadowBefore.length === 0) {
                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
                $slideEl.append(shadowBefore);
              }

              if (shadowAfter.length === 0) {
                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
                $slideEl.append(shadowAfter);
              }

              if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
              if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }

            $slideEl.transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
          }
        },

        setTransition(duration) {
          const swiper = this;
          const {
            slides,
            activeIndex,
            $wrapperEl
          } = swiper;
          slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false; // eslint-disable-next-line

            slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
              if (eventTriggered) return;
              if (!swiper || swiper.destroyed) return;
              eventTriggered = true;
              swiper.animating = false;
              const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i]);
              }
            });
          }
        }

      }
    };
  }

  ionViewDidLeave() {
    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield StatusBar.setStyle({
        style: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.StatusBarStyle.Dark
      });
      yield StatusBar.setBackgroundColor({
        color: '#3f448a'
      });
      yield StatusBar.show();
    })();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    var _this = this;

    return (0,C_Users_Admin_Project_OB_project_OB_CustomerApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield StatusBar.setStyle({
        style: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.StatusBarStyle.Light
      });
      yield StatusBar.setBackgroundColor({
        color: '#e1eaf5'
      });
      _this.user = _this.localStorage.get('OBCustomer');
    })();
  }

  onSlideChangeStart(event) {// console.log(event);
    // event.target.isEnd().then((isEnd: boolean) => {
    //   this.showSkip = isEnd;
    // });
  }

  navigateTo() {
    if (this.user) {
      this.router.navigate(['/landing-page']);
    } else {
      this.router.navigate(['/login']);
    }
  }

};

OnboardingPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _core_services__WEBPACK_IMPORTED_MODULE_3__.StorageService
}];

OnboardingPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['slides', {
      static: true
    }]
  }]
};
OnboardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-onboarding',
  template: _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], OnboardingPage);


/***/ }),

/***/ 4121:
/*!************************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #e1eaf5 !important;\n}\n\nion-slides {\n  padding-bottom: 2.8em;\n  --bullet-background-active: var(--ion-color-primary);\n}\n\n#slides .slide-image {\n  height: 45vh;\n  margin: 0px 4px;\n  pointer-events: none;\n}\n\n#slides ion-note {\n  font-size: 0.8em;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n  padding-bottom: 0.6rem;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin: top 8px;\n  font-size: 1.5em;\n  font-weight: bolder;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUVJLHFCQUFBO0VBQ0Esb0RBQUE7QUFBSjs7QUFLSTtFQUNJLFlBQUE7RUFFQSxlQUFBO0VBQ0Esb0JBQUE7QUFIUjs7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0FBSFI7O0FBUUE7RUFDSSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBTEoiLCJmaWxlIjoib25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTFlYWY1ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuXG4gICAgcGFkZGluZy1ib3R0b206IDIuOGVtO1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbn1cblxuI3NsaWRlcyB7XG4gICAgLnNsaWRlLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiA0NXZoO1xuICAgICAgICAvLyB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IDBweCA0cHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICBpb24tbm90ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjZyZW07XG4gICAgfVxuXG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICAgIG1hcmdpbjogdG9wIDhweDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";

/***/ }),

/***/ 3455:
/*!************************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"end\">\n    <ion-button\n      *ngIf=\"!showSkip\"\n      type=\"button\"\n      color=\"secondary\"\n      routerDirection=\"root\"\n      (click)=\"navigateTo()\"\n      fill=\"clear\"\n      size=\"large\"\n      slot=\"end\"\n    >\n      <b>SKIP</b>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content class=\"ion-no-padding\" >\n  <ion-slides\n    #slides\n    id=\"slides\"\n    (ionSlideWillChange)=\"onSlideChangeStart($event)\"\n    pager=\"true\"\n    [options]=\"slideOpts\"\n    autplay=\"true\"\n    \n  >\n    <ion-slide>\n      <img src=\"./assets/onboard/11.gif\" class=\"slide-image\" />\n      <!-- <ion-note>\n        <!-- Keep the track of your UDHARI  -->\n        <!-- तुमच्या उधारीची नोंद ठेवा. / आपके उधारी का हिसाब रखें | -->\n         <!-- </ion-note> --> \n    </ion-slide>\n    <ion-slide>\n      <img src=\"./assets/onboard/5.svg\" class=\"slide-image\" />\n      <!-- <ion-note> -->\n        <!-- आपल्या मौल्यवान ग्राहकांशी जुळून रहा. / अपने मूल्यवान ग्राहकों से जुड़े रहें | -->\n        <!-- Stay connected your valuable customers. -->\n         <!-- </ion-note> -->\n    </ion-slide>\n    <ion-slide>\n      <img src=\"./assets/onboard/3.svg\" class=\"slide-image\" />\n      <!-- <ion-note> -->\n         <!-- Recover your udhaari on time. -->\n         <!-- तुमची उधारी वेळेवर वसूल करा. / अपनी उधारी को समय पर पुनर्प्राप्त करें | -->\n        <!-- </ion-note> -->\n    </ion-slide>\n\n    <!-- <ion-slide>\n      <img src=\"./assets/onboard/4.svg\" class=\"slide-image\" />\n      <ion-note>\n        In order to create an engaging learning experience, the role of\n        instructor is optional, but the role of learner is essential.\n      </ion-note>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./assets/onboard/5.svg\" class=\"slide-image\" />\n      <ion-note>\n        In order to create an engaging learning experience, the role of\n        instructor is optional, but the role of learner is essential.\n      </ion-note>\n    </ion-slide> -->\n  </ion-slides>\n  <ion-title class=\"slide-title ion-text-center\"> OB[O BHAIYA] </ion-title>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_onboarding_onboarding_module_ts.js.map