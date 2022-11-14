import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  presentToast(title, msg) {
    if (title == 'success') {
      this.successToast(msg);
    } else if (title == 'error') {
      this.errorToast(msg);
    } else if (title == 'warning') {
      this.warningToast(msg);
    }
  }
  async successToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      position: 'bottom',
      cssClass: 'toast-success',
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }
  async errorToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      position: 'bottom',
      cssClass: 'toast-error',
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }
  async warningToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      position: 'bottom',
      cssClass: 'toast-warning',
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }
}
