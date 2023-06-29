import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  deviceInfo: any;
  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
    private userService: UserService,
    private localStorage: StorageService,
    private alertController: AlertController,
  ) { }

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = (
      await Geolocation.getCurrentPosition()
    ).coords;
  }


  navigateTo(page: string) {
    this.router.navigate([`${page}`])
  }
  openTerms = async () => {
    await Browser.open({ url: 'https://www.bharat-online.com/terms-and-conditions' });
  };
  openPolicy = async () => {
    await Browser.open({ url: 'https://www.bharat-online.com/privacy-policy' });
  };
  async logOutAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Log out of your account?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: (alertData) => {
            this.logout(alertData);
          },
        },
      ],
    });

    await alert.present();
    await alert.onDidDismiss();
  }

  async logout(item) {
    await this.spinner.showLoader();
    let payload = {
      deviceToken: localStorage.getItem('deviceToken'),
      platform: this.deviceInfo.platform,
    }
    this.userService.removeDeviceToken(payload).subscribe(async result => {
      this.userService.purgeAuth();
      this.router.navigate([`/auth/login`], { replaceUrl: true });
      await this.spinner.hideLoader();
    }, async error => {
      this.userService.purgeAuth();
      this.router.navigate([`/auth/login`], { replaceUrl: true });
      await this.spinner.hideLoader();
    })
  }


  async confirmDeleteAlert(shouldDelete = false) {
    let header = 'Confirm account deletion';
    let message = 'All data associated to your account will be deleted, do you wish to continue deletion ?';
    if (shouldDelete) {
      header = 'Account delete';
      message = 'Are you sure you want to delete your account';
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        },
        {
          text: 'Yes',
          role: 'yes',
          cssClass: 'secondary',
          handler: () => {
            if (shouldDelete) {
              this.deleteAccount();
            }
            else {
              this.confirmDeleteAlert(true)
            }
          }
        }
      ]
    });
    await alert.present();
  }
  async deleteAccount() {
    this.userService.deleteProfile().subscribe(async result => {
      this.userService.purgeAuth();
      this.toaster.successToast('Your account has been Deleted');
      this.router.navigate([`/auth/login`], { replaceUrl: true });
      await this.spinner.hideLoader();
    }, async error => {
      this.toaster.errorToast(error);
      this.router.navigate([`/auth/login`], { replaceUrl: true });
      await this.spinner.hideLoader();
    })
  }
}
