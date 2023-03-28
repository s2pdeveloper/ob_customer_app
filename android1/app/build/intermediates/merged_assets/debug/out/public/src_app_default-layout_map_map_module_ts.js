"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_default-layout_map_map_module_ts"],{

/***/ 1426:
/*!**********************************************************!*\
  !*** ./src/app/default-layout/map/map-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 6282);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 7216:
/*!**************************************************!*\
  !*** ./src/app/default-layout/map/map.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 1426);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 6282);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);









let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder],
    })
], MapPageModule);



/***/ }),

/***/ 6282:
/*!************************************************!*\
  !*** ./src/app/default-layout/map/map.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page.html?ngResource */ 9252);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 4807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);








let MapPage = class MapPage {
    constructor(geolocation, activatedRoute, nativeGeocoder, zone) {
        this.geolocation = geolocation;
        this.activatedRoute = activatedRoute;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    ngOnInit() {
        this.loadMap();
    }
    ionViewWillEnter() {
        this.activatedRoute.queryParams.subscribe((params) => {
            console.log("adreeeeeeeeeeeeeeeeeees", params);
        });
    }
    loadMap() {
        //FIRST GET THE LOCATION FROM THE DEVICE.
        if (navigator.geolocation) {
            this.geolocation.getCurrentPosition().then((resp) => {
                let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                let mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
                this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
                this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                this.map.addListener('tilesloaded', () => {
                    console.log('accuracy', this.map, this.map.center.lat());
                    this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
                    this.lat = this.map.center.lat();
                    this.long = this.map.center.lng();
                });
            }).catch((error) => {
                console.log('Error getting location', error);
            });
        }
    }
    getAddressFromCoords(lattitude, longitude) {
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then((result) => {
            this.address = "";
            let responseAddress = [];
            for (let [key, value] of Object.entries(result[0])) {
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (let value of responseAddress) {
                this.address += value + ", ";
            }
            this.address = this.address.slice(0, -2);
        })
            .catch((error) => {
            this.address = "Address Not Available!";
        });
    }
    //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
    ShowCords() {
        alert('lat' + this.lat + ', long' + this.long);
    }
    //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
    UpdateSearchResults() {
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                    console.log("this.autocompleteItems", this.autocompleteItems);
                });
            });
        });
    }
    //wE CALL THIS FROM EACH ITEM.
    SelectSearchResult(item) {
        console.log("item", item);
        ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
        // alert(JSON.stringify(item))      
        // this.placeid = item.place_id
        this.autocompleteItems = [];
        this.geocoder = new google.maps.Geocoder;
        this.markers = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {
            if (status === 'OK' && results[0]) {
                let position = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng
                };
                let marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: this.map,
                });
                this.markers.push(marker);
                this.map.setCenter(results[0].geometry.location);
            }
        });
    }
    //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
    ClearAutocomplete() {
        this.autocompleteItems = [];
        this.autocomplete.input = '';
    }
    //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
    GoTo() {
        return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
    }
};
MapPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
MapPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map', { static: false },] }]
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-map',
        template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapPage);



/***/ }),

/***/ 4807:
/*!*************************************************************!*\
  !*** ./src/app/default-layout/map/map.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 100px;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFBSjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQU4iLCJmaWxlIjoibWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAgXG4gICBcbiAgI2FkZHJlc3Mge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICBcbiAgI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAgXG4gIC5tYXAtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgXG4gICAgI21hcF9jZW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XG4gICAgfVxuICB9XG4iXX0= */";

/***/ }),

/***/ 9252:
/*!*************************************************************!*\
  !*** ./src/app/default-layout/map/map.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = " <!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>map</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n\n</ion-content> -->\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"Search for a place\"  (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n  <ion-row>    \n    <ion-col size=\"6\">\n      <!-- <ion-text>Google & Ionic Map</ion-text> -->\n    </ion-col>\n    <ion-col  size=\"6\">\n      <ion-button (click)=\"loadMap()\" shape=\"round\" >\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n          Where I Am\n        </ion-button>\n    </ion-col>\n  </ion-row>  \n</ion-header>\n<ion-content> \n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"ShowCords()\" ion-fab color=\"tertiary\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <div class=\"map-wrapper\" style=\"height: 100%;\">      \n    <div id=\"map_center\">\n      <ion-icon name=\"pin\" size=\"large\" color=\"danger\"></ion-icon>      \n    </div>\n    <div #map id=\"map\"  style=\"height: 100%;\"></div>\n  </div>   \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_default-layout_map_map_module_ts.js.map