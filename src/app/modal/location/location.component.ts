import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core/dist/esm/global';
import { ModalController } from '@ionic/angular';
const { App, Geolocation } = Plugins;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  messageLocation: any;
  msg: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async locationShare() {
    let geoLocation = await (await Geolocation.getCurrentPosition()).coords;
    this.msg = `http://maps.google.com/?ie=UTF8&hq=&ll=${geoLocation.latitude},${geoLocation.longitude}&z=18`;
    this.modalController.dismiss({
      data: this.msg,
    });
  }

  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      dismissed: isDismissed,
    });
  }
}
