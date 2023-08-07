import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { Location } from '@angular/common';
import { App } from '@capacitor/app';


@Injectable({
  providedIn: 'root',
})
export class AppBackButtonService {
  constructor(
    private router: Router,
    private location: Location,
    private alertController: AlertController,
    private modalController: ModalController,
    public loadingController: LoadingController
  ) { }

  async backButtonFunc() {
    App.addListener('backButton', async data => {
      console.log('Restored state:', data);
      let isLoading = await this.loadingController.getTop();
      if (isLoading) {
        await isLoading.dismiss();
      }
      let isAlert = await this.alertController.getTop();
      if (isAlert) {
        await isAlert.dismiss();
      }
      let isModal = await this.modalController.getTop();
      if (isModal) {
        await isModal.dismiss();
      }
      const url = this.router.url;
      if (['/app/tabs/home', '/auth/login'].includes(url)) {
        const alert = await this.alertController.create({
          header: 'App termination',
          message: 'Do you want to exit from App ?',
          backdropDismiss: true,
          mode: 'ios',
          cssClass: 'my-custom-alert',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
            },
            {
              text: 'Yes',
              cssClass: 'primary',
              handler: () => {
                // navigator['app'].exitApp();
                App.exitApp();
              },
            },
          ],
        });
        await alert.dismiss();
        return await alert.present();
      }
      else {
        this.location.back();
      }
    });
  }
}
