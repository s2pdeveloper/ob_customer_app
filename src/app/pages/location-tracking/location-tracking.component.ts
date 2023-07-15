import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Coordinates, Location } from 'src/app/core/models/location.model';
import { Geolocation, Position } from '@capacitor/geolocation';
import { ModalController } from '@ionic/angular';
import { SocketService } from 'src/app/core/services/socket.service';
import { socketEmitEvents, socketOnEvents } from 'src/app/helpers';

declare const google: any;


@Component({
  selector: 'app-location-tracking',
  templateUrl: './location-tracking.component.html',
  styleUrls: ['./location-tracking.component.scss'],
})
export class LocationTrackingComponent implements OnInit {

  @Input() dataList: any[] = [];
  @Input() zoom = 15;
  public currentLocation: Location;
  private directionService = new google.maps.DirectionsService;
  private directionsDisplay = new google.maps.DirectionsRenderer;
  public alpha: number = 1;
  private map;
  private markers;
  public directionResponse: any = {};
  constructor(private ngZone: NgZone, private socketService: SocketService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  dismissModal(isDismissed: boolean = false) {
    this.modalCtrl.dismiss({
      dismissed: isDismissed,
    });
  }

  receiveLocation() {
    this.socketService.listenEvent(socketEmitEvents.RECEIVE_SHOP_LOCATION).subscribe({
      next: (result: any) => {
        console.log('RECEIVE_SHOP_LOCATION', result.data);
        this.dataList[0].location = result.data.location
        this.calculateAndDisplayRoute(this.dataList[0])

      },
      error: (error) => {
        console.error('RECEIVE_SHOP_LOCATION', error);
      },
    });
  }

  private async setCurrentLocation(): Promise<void> {
    if ('geolocation' in navigator) {
      const deviceInfo = (await Geolocation.getCurrentPosition());
      this.ngZone.run(() => {
        this.currentLocation = deviceInfo.coords;
        console.log('currentLocation', this.currentLocation);
        this.loadMap();
      })
    }
  }
  private loadMap(): void {
    this.map = document.getElementById('map-canvas');
    const currentLatLong = new google.maps.LatLng(this.currentLocation?.latitude, this.currentLocation?.longitude);
    const mapOptions = {
      zoom: this.zoom,
      scrollwheel: true,
      scaleControl: true,
      center: currentLatLong,
      draggable: true,
      zoomControl: true,
      fullscreenControl: true,
      disableDefaultUI: true,
      fullscreenControlOptions: true,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
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
    this.map.setCenter(currentLatLong);
    this.directionsDisplay.setMap(this.map);
    // this.setMarkers({ location: { coordinates: [this.currentLocation.latitude, this.currentLocation.longitude] }, shopName: 'You' })
    if (this.dataList.length === 1) {
      this.calculateAndDisplayRoute(this.dataList[0])
      this.receiveLocation();
      this.socketService.emitEvent(socketOnEvents.GET_SHOP_LOCATION, { id: this.dataList[0].id });
    } else {
      this.dataList.forEach((element: any) => this.setMarkers(element))
    }
  }

  private setMarkers({ location, shopName }) {
    console.log(shopName, location);
    const position = new google.maps.LatLng(location?.coordinates[0], location?.coordinates[1]);
    const marker = new google.maps.Marker({ position, title: shopName, animation: google.maps.Animation.DROP, });
    marker.setMap(this.map);
  }

  calculateAndDisplayRoute(payload) {
    console.log('this.currentLocation?', this.currentLocation)
    const body = {
      origin: new google.maps.LatLng(this.currentLocation?.latitude, this.currentLocation?.longitude),
      destination: new google.maps.LatLng(payload?.location?.coordinates[0], payload?.location?.coordinates[1]),
      travelMode: google.maps.TravelMode.DRIVING,
      // optimizeWaypoints: true,
    }
    this.directionService.route(body, (response, status) => {
      console.log('response from direction', response)
      this.directionResponse = response
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
