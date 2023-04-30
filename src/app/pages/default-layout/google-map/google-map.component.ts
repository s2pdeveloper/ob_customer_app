import { AfterViewInit, Component, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Location } from 'src/app/core/models/location.model';
import { ToastService } from 'src/app/core/services/toast.service';

declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('locationSearch', { read: ElementRef }) public searchElementRef: ElementRef;
  @Input() locationData: Location;
  @Input() markerDraggable: boolean = true;
  @Input() zoom = 15;
  public coordinates: Location;
  public deviceInfo: Position;
  public alpha: number = 1;
  address: string = '';
  selectedLocation: any = {};
  private map;
  private marker;
  constructor(private toastService: ToastService, private ngZone: NgZone, private modalController: ModalController, private translate: TranslateService) { }

  async ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.setCurrentLocation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['locationData'] && this.locationData) {
      this.coordinates = this.locationData;
      this.zoom = 18;
    }
  }

  ngOnDestroy() {

  }

  private async setCurrentLocation(): Promise<void> {
    if ('geolocation' in navigator) {
      this.deviceInfo = (await Geolocation.getCurrentPosition());
      this.ngZone.run(() => {
        console.log(this.locationData)
        this.coordinates = this.locationData || this.deviceInfo.coords;
        this.loadMap();
      })
    }
  }

  private loadMap(): void {
    this.map = document.getElementById('map-canvas');
    const currentLatLong = new google.maps.LatLng(this.coordinates?.latitude, this.coordinates?.longitude);
    const mapOptions = {
      zoom: this.zoom,
      scrollwheel: true,
      scaleControl: true,
      center: currentLatLong,
      draggable: true,
      zoomControl: true,
      fullscreenControl: false,
      disableDefaultUI: true,
      fullscreenControlOptions: true,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      styles: [
        { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] },
        { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] },
        { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] },
        { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] },
        { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] },
        { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
        { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] },
        { "featureType": "water", "elementType": "all", "stylers": [{ "color": '#5e72e4' }, { "visibility": "on" }] }
      ]
    }
    this.map = new google.maps.Map(this.map, mapOptions);
    this.setMarker(currentLatLong)
    this.loadPlace();
  }


  loadPlace(): void {
    const autoCompleteOptions = {
      componentRestrictions: { country: "in" },
      fields: ["address_components", "geometry", "formatted_address", "icon", "name"],
      strictBounds: true,
    }
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, autoCompleteOptions);
    // this.map
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.address = place.formatted_address;
        this.selectedLocation = place;
        console.log('places', place['formatted_address'])
        if (place) {
          const currentLatLong = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
          this.setMarker(currentLatLong);
        }
      });
    });
  }

  setMarker(position) {
    if (this.marker) { this.marker.setMap(null) }
    this.marker = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: this.markerDraggable
    });
    this.map.setCenter(position);
    this.coordinates = { latitude: this.marker.position.lat(), longitude: this.marker.position.lng() }
    // console.log('marker', this.marker.position.lat(), this.marker.position.lng())
    this.marker.addListener("dragend", (event) => {
      const position = this.marker.position;
      // console.log('event', event)
      // console.log('position', position.lat(), position.lng());
      this.coordinates = { latitude: event.latLng.lat(), longitude: event.latLng.lng() }
      this.getAddress(this.coordinates)
    });
  }

  getAddress({ latitude, longitude }): void {
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.selectedLocation = results[0];
          console.log('address selected', this.address)
        } else {
          this.toastService.successToast('No address found')
        }
      } else {
        this.toastService.successToast('Try after some time')
      }
    });
  }

  saveLocation() {
    this.modalController.dismiss({
      'address': this.address,
      'coordinates': this.coordinates,
      location: this.selectedLocation
    });
  }
}
