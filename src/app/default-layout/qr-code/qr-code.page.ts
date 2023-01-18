import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  scanActive: boolean = false;
  data: any;
  encodedData: any;
  url: any = 'http://localhost:8100/shop-detail?_id=';

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
    // this.scan();
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
        console.log('Barcode data', barcodeData);
        this.data = barcodeData;
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  createBarcode() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.url)
      .then(
        (encodedData) => {
          console.log(encodedData);
          this.encodedData = encodedData;
        },
        (err) => {
          console.log('Error occured : ' + err);
        }
      );
  }
}
