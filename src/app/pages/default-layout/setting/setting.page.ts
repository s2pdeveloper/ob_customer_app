import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';
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
  async logOutAlert() {
    const alert = await this.alertController.create({
      header: 'Are You Sure You Want To Logout?',
      cssClass: 'custom-alert',
      mode: 'md',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'OK',
          cssClass: 'primary',
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
      deviceToken: this.localStorage.get('deviceToken'),
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
}
