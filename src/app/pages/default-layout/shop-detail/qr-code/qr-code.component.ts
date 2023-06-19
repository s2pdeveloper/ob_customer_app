import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QRCodeComponent implements OnInit {
  shopData:any

  constructor(
    private restService: RestService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {}

  dismissModal(isClose = false) {
    this.modalCtrl.dismiss({
      'dismissed': isClose,
    });
  }

  async shareQRCode() {
    await this.restService.createAndShareFiles({ title: 'QR code', text: 'QR code', files: this.shopData.qrImage, shopName: this.shopData.shopDetails.shopName })
  }

}
