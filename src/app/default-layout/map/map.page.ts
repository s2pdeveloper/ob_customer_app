import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  lat: string;
  long: string;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  geocoder: any;
  markers: any[];
  constructor(
    private geolocation: Geolocation,
    private activatedRoute: ActivatedRoute,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  ngOnInit() {

    this.loadMap();
  }
  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log("adreeeeeeeeeeeeeeeeeees",params);
    
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
        }

        //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
        this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.map.addListener('tilesloaded', () => {
          console.log('accuracy', this.map, this.map.center.lat());
          this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
          this.lat = this.map.center.lat()
          this.long = this.map.center.lng()
        });
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }
  }


  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
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
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });
  }

  //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
  ShowCords() {
    alert('lat' + this.lat + ', long' + this.long)
  }

  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
            console.log("this.autocompleteItems",this.autocompleteItems);
            
          });
        });
      });
  }

  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item) {
    console.log("item",item);
    
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
    })

  }


  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete() {
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }

  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo() {
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
  }

}



