import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { ShopService } from 'src/app/service/shop/shop.service';
import { BarcodeScanner, CameraDirection, SupportedFormat } from '@capacitor-community/barcode-scanner';
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
    // private barcodeScanner: BarcodeScanner,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() { }
  ionViewWillEnter() {
    // this.scan();
    this.startScan();
  }
  // scan() {
  //   console.log("call scan");
  //   this.data = null;
  //   this.barcodeScanner
  //     .scan({
  //       preferFrontCamera: false,
  //       showFlipCameraButton: true,
  //       showTorchButton: true,
  //       torchOn: false,
  //       // prompt: 'Place a barcode inside the scan area',
  //       resultDisplayDuration: 500,
  //       formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
  //       orientation: 'portrait',
  //     })
  //     .then((barcodeData) => {
  //       let _id = barcodeData.text.split('?_id=')[1];
  //       if (_id.includes('=')) {
  //         this.shopService
  //           .getByIdShopUPI({ UPI: _id })
  //           .subscribe((success: any) => {
  //             console.log('success', success);
  //             this.router.navigate(['/shop-detail'], {
  //               queryParams: { _id: success?._id },
  //             });
  //           });
  //       } else {
  //         this.router.navigate(['/shop-detail'], {
  //           queryParams: { _id },
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('Error', err);
  //     });
  // }

  prepare = () => {
    BarcodeScanner.prepare();
  };

  startScan = async () => {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan({
       targetedFormats: [SupportedFormat.QR_CODE] ,
       cameraDirection:CameraDirection.BACK,
      });
    console.log('scan result data ', result.content);
    let _id = result.content;
    console.log(" _id.....................", _id);
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
  };

  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

   askUser = () => {
   this.prepare();
    const c = confirm('Do you want to scan a QR-CODE?');
  
    if (c) {
      this.startScan();
    } else {
      this.stopScan();
    }
  };
}
