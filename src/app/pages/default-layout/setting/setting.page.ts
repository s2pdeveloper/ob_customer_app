import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';
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
    private storageService: StorageService
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
  async logout() {
    await this.spinner.showLoader();
    let payload = {
      deviceToken: localStorage.getItem('deviceToken'),
      platform: this.deviceInfo.platform,
    }
    // this.userService.removeDeviceToken(payload).subscribe(async result => {
    //   this.userService.purgeAuth(this.storageService.remove('OBUser'));
    //   this.router.navigate([`/login`], { replaceUrl: true });
    //   await this.spinner.hideLoader();
    // }, async error => {
    //   this.userService.purgeAuth(this.storageService.remove('OBUser'));
    //   this.router.navigate([`/login`], { replaceUrl: true });
    //   await this.spinner.hideLoader();
    // })
  }
}
