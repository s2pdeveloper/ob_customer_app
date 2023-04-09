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
      if (['/app/tabs/home', '/auth/login', '/auth/onboarding'].includes(url)) {
        navigator['app'].exitApp();
      } else {
        this.location.back();
      }
    });
  }
}
