import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ModalController,
  Platform,
} from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Location } from '@angular/common';
const { App } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class AppBackButtonService {
  constructor(
    private platform: Platform,
    private ngZone: NgZone,
    private router: Router,
    private location: Location,
    private alertController: AlertController,
    private modalController: ModalController,
    public loadingController: LoadingController
  ) {}

  async backButtonFunc() {
    console.log('current url', this.router.url);
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
    this.platform.backButton.subscribeWithPriority(-1, async () => {
      if (this.router.isActive('landing-page', false)) {
        const alert = await this.alertController.create({
          header: 'App termination',
          message: 'Do you want to Exit from App ?',
          backdropDismiss: true,
          mode:'ios',
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
                App.exitApp();
              },
            },
          ],
        });
        await alert.dismiss();
        return await alert.present();
      }
    });
    this.platform.backButton.subscribeWithPriority(0, async () => {
      let url = this.router.url;
      if (this.router.isActive('landing-page', false)) {
        const alert = await this.alertController.create({
          header: 'App termination',
          message: 'Do you want to Exit from App ?',
          cssClass: 'my-custom-alert',
          mode:'ios',
          backdropDismiss: true,
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
                App.exitApp();
              },
            },
          ],
        });
        await alert.dismiss();
        return await alert.present();
      } else if (
        ['/login', '/register', '/forget-pwd', '/landing-page'].includes(url)
      ) {
        const alert = await this.alertController.create({
          header: 'App termination',
          message: 'Do you want to Exit from App ?',
          backdropDismiss: true,
          mode:'ios',
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
                App.exitApp();
              },
            },
          ],
        });
        await alert.dismiss();
        return await alert.present();
      } else {
        console.log('current url', this.router.url);
        this.ngZone.run(() => {
          this.location.back();
        });
      }
    });
  }
}
