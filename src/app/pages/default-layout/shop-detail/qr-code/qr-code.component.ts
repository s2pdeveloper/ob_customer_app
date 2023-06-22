import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderService } from 'src/app/core/services/loader.service';
import { RestService } from 'src/app/core/services/rest.service';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QRCodeComponent implements OnInit {
  shopName: string;
  shopId: number;
  qrImage: string;

  constructor(
    private restService: RestService,
    private shopService: ShopService,
    private modalCtrl: ModalController,
    private spinner: LoaderService,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getQrImage();
  }

  dismissModal(isClose = false) {
    this.modalCtrl.dismiss({
      'dismissed': isClose,
    });
  }

  getQrImage() {
    this.spinner.showLoader();
    this.shopService.getQrImage(this.shopId).subscribe((success: any) => {
    this.qrImage = success.qrImage
      this.spinner.hideLoader();
    });
  }

  async shareQRCode() {
   await this.restService.createAndShareFiles({ title: 'QR code', text: 'QR code', files: this.qrImage, shopName: this.shopName })
  }

}
