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

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
    this.scan();
  }

  scan() {
    this.data = null;
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
        this.data = barcodeData;
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
