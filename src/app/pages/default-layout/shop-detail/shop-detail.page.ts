import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, ModalController } from '@ionic/angular';
import { GalleryListComponent } from 'src/app/shared/gallery-list/gallery-list.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { ToastService } from 'src/app/core/services/toast.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { BUSINESS_TYPE, defaultStatus } from 'src/app/helpers/constants.helper';
import { Browser } from '@capacitor/browser';
import { QRCodeComponent } from './qr-code/qr-code.component';
import { ScheduleNotificationListComponent } from '../favorite/schedule-notification-list/schedule-notification-list.component';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {
  businessType: any = BUSINESS_TYPE;
  shopUser: any;
  user: any;
  shopId: string = null;
  shopName: string;
  type: string = 'about'
  deviceInfo: any;
  buttonSlide = {
    slidesPerView: 4,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 300,
    },
    spaceBetween: 1,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private modalController: ModalController,
    private alertController: AlertController,
    private toaster: ToastService,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  ionViewWillEnter() {
    this.getDeviceInfo();
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.shopId = params.id;
      }
      this.getShopData();
    });
  }

  async getShopData() {
    this.shopService.getShopProfile(this.shopId).subscribe(async (success: any) => {
      this.shopUser = success;
      await this.spinner.hideLoader();
    });
  }
  roundRating(rating: number): number {
    return Math.round(rating);
  }

  async addToFavorite(item) {
    if (!this.user.firstName || !this.user.lastName || this.user.status == defaultStatus.PENDING) {
      // this.toaster.warningToast("please complete your profile first")
      this.presentAlert();
    } else {
      let payload = {
        shopId: item?.shopDetails?._id,
      };
      this.shopService.favoriteShop(payload).subscribe((success) => {
        this.toaster.successToast(success.message);
        item.shopFavorite = success.data
      });
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Profile Incomplete',
      message: 'Please Complete Your Profile First !!!',
      cssClass: 'custom-alert',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.navigateToProfile();
          },
        },
      ],
    });
    await alert.present();
  }

  navigateTo(path) {
    let params = { shopId: this.shopId, shopUserId: this.shopUser.id, shopName: this.shopUser.shopDetails.shopName };
    this.router.navigate([path], { queryParams: params });
  }
  goToMap(address: string) {
    let params = { address: address };
    this.router.navigate(['/map'], { queryParams: params });
  }

  async navigateToViewGalleryImages(galleryImg) {
    const modal = await this.modalController.create({
      component: GalleryListComponent,
      componentProps: {
        data: galleryImg,
      },
    });
    await modal.present();
  }
  async orderAlert(item) {
    if (!this.user.firstName || !this.user.lastName || this.user.status == defaultStatus.PENDING) {
      // this.toaster.warningToast("To connect your EZ-Order please complete your profile first.")
      this.ezConnectAlert();
    } else {
      this.shopName = item.shopDetails.shopName;
      const alert = await this.alertController.create({
        header: 'Order / Request',
        cssClass: 'custom-alert',
        mode: 'ios',
        buttons: [
          {
            text: 'Existing',
            cssClass: 'alert-button-cancel',
            handler: () => {
              this.navigateToShopOrder(item);
            },
          },
          {
            text: 'New',
            cssClass: 'alert-button-confirm',
            handler: () => {
              this.goToChat(item);
            },
          },
        ],
      });
      await alert.present();
      await alert.onDidDismiss();
    }
  }

  async ezConnectAlert() {
    const alert = await this.alertController.create({
      header: 'Profile Incomplete',
      message: 'To connect your EZ-Order please complete your profile first !!!',
      cssClass: 'custom-alert',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.navigateToProfile();
          },
        },
      ],
    });
    await alert.present();
  }
  navigateToProfile() {
    const path: string = `/edit-profile`;
    this.router.navigate([path]);
  }



  goToChat(item) {
    let params = { shopName: this.shopName, shopId: item._id };
    this.router.navigate(['/order-view'], { replaceUrl: true, queryParams: params });
  }

  async modalFilter() {
    const modal = await this.modalController.create({
      component: SelectFilterComponent,
      cssClass: 'modal-medium',
      swipeToClose: true,
      componentProps: {
        shopDetail: this.shopUser,
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.dismissed) {
      console.log(data)
      this.router.navigate(['/order-view'], { replaceUrl: true, queryParams: { shopId: data.shopId, orderId: data.orderId } });
    }
  }

  navigateToShopOrder(item) {
    this.router.navigate(['/shop-order'], {
      queryParams: {
        shopUserId: item.shopDetailsId,
        shopName: item.shopDetails.shopName,
        shopId: item.id
      },
    });
  }

  openWeb = async (url) => {
    await Browser.open({ url: `${url}` });
  };
  openYouTube = async () => {
    await Browser.open({ url: `${this.shopUser?.shopDetails?.links?.youtube}` });
  }
  openInstagram = async () => {
    await Browser.open({ url: `${this.shopUser?.shopDetails?.links?.instagram}` });
  }
  openFb = async () => {
    await Browser.open({ url: `${this.shopUser?.shopDetails?.links?.facebook}` });
  }

  async modalQrCode() {
    const modal = await this.modalController.create({
      component: QRCodeComponent,
      cssClass: 'modal-medium',
      swipeToClose: true,
      componentProps: {
        shopId: this.shopUser._id,
        shopName: this.shopUser.shopDetails.shopName,
      }
    });
    await modal.present();
  }

  async navigateToNotification(shopId) {
    const modal = await this.modalController.create({
      component: ScheduleNotificationListComponent,
      swipeToClose: true,
      componentProps: {
        shopId: shopId
      }
    });
    await modal.present();
  }

  getDeviceInfo = async () => {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = await (
      await Geolocation.getCurrentPosition()
    ).coords;
  };

  getLocation() {
    if (!this.user.firstName || !this.user.lastName || this.user.status == defaultStatus.PENDING) {
      // this.toaster.warningToast("To see shop location please complete your profile first.");
      this.getLocationAlert();
    } else {
      let payload = {
        shopLat: this.shopUser.shopDetails.location?.coordinates[0],
        shopLong: this.shopUser.shopDetails.location?.coordinates[1],
        custLat: this.deviceInfo.geoLocation?.latitude,
        custLong: this.deviceInfo.geoLocation?.longitude
      };
      if (payload) {
        window.open(`https://www.google.com/maps/dir/?api=1&origin=${payload.custLat},${payload.custLong}&destination=${payload.shopLat},${payload.shopLong}`)
      }
      return;
    }
  }

  async getLocationAlert() {
    const alert = await this.alertController.create({
     header: 'Profile Incomplete',
      message: 'To see shop location please complete your profile first !!!',
      cssClass: 'custom-alert',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.navigateToProfile();
          },
        },
      ],
    });
    await alert.present();
  }

  call() {
    if (!this.user.firstName || !this.user.lastName || this.user.status == defaultStatus.PENDING) {
      // this.toaster.warningToast("To connect with this shop please complete your profile first.");
      this.callAlert();
    } else {
      window.open('tel:' + this.shopUser?.mobileNumber);
    }
  }

  async callAlert() {
    const alert = await this.alertController.create({
      header: 'Profile Incomplete',
      message: 'To connect with this shop please complete your profile first !!!',
      cssClass: 'custom-alert',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.navigateToProfile();
          },
        },
      ],
    });
    await alert.present();
  }

}
