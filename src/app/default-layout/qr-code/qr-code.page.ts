import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ShopService } from 'src/app/service/shop/shop.service';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  scanActive: boolean = false;
  data: any;
  encodedData: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private shopService: ShopService,
    private router: Router
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.scan();
  }
  scan() {
    this.data = null;
    this.barcodeScanner
      .scan({
        preferFrontCamera: false,
        showFlipCameraButton: true,
        showTorchButton: true,
        torchOn: false,
        // prompt: 'Place a barcode inside the scan area',
        resultDisplayDuration: 500,
        formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
        orientation: 'portrait',
      })
      .then((barcodeData) => {
        let _id = barcodeData.text.split('?_id=')[1];
        if (_id.includes('=')) {
          this.shopService
            .getByIdShopUPI({ UPI: _id })
            .subscribe((success: any) => {
              console.log('success', success);
              this.router.navigate(['/shop-detail'], {
                queryParams: { _id: success?._id },
              });
            });
        } else {
          this.router.navigate(['/shop-detail'], {
            queryParams: { _id },
          });
        }
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
