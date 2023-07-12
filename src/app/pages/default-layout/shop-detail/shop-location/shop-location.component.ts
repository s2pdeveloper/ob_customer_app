import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shop-location',
  templateUrl: './shop-location.component.html',
  styleUrls: ['./shop-location.component.scss'],
})
export class ShopLocationComponent implements OnInit {
  @Input() location: any = {};
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    console.log("shoplocation", this.location);

  }
  async getCurrentLocation() {
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${this.location.custLat},${this.location.custLong}&destination=${this.location.shopLat},${this.location.shopLong}`)
  }

  async getLiveLocation() {
    
  }

  dismissModal(isDismissed: boolean = false) {
    this.modalCtrl.dismiss({
      dismissed: isDismissed,
    });
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': false,
    });
  }
}
