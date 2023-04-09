import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Injectable({
  providedIn: 'root'
})
export class BarcodeScannerService {

  constructor() { }

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
}
