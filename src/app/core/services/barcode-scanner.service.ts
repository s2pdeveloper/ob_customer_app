import { Injectable } from '@angular/core';
import { BarcodeScanner, CameraDirection, SupportedFormat } from '@capacitor-community/barcode-scanner';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class BarcodeScannerService {

  constructor(private toastService: ToastService) { }

  askPermission = async () => {
    // check if user already granted permission
    const status = await BarcodeScanner.checkPermission({ force: false });
    if (status.granted) {
      // user granted permission
      return true;
    }
    if (status.denied) {
      const c = confirm('If you want to grant permission for using your camera, enable it in the app settings.');
      if (c) {
        BarcodeScanner.openAppSettings();
      }
    }
    if (status.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
    if (status.restricted || status.unknown) {
      // ios only
      // probably means the permission has been denied
      this.askPermission();
    }
    const statusRequest = await BarcodeScanner.checkPermission({ force: true });
    if (statusRequest.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
    if (statusRequest.granted) {
      // the user did grant the permission now
      return true;
    }
    // user did not grant the permission, so he must have declined the request
    this.askPermission();
  };

  async startScan() {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    await BarcodeScanner.hideBackground();
    document.querySelector('body').classList.add('scanner-active');
    const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE], cameraDirection: CameraDirection.BACK }); // start scanning and wait for a result
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      return result.content
    }
    this.toastService.presentToast('success', 'No result found');
    return null;
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
  };
}
