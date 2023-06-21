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
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {
  businessType: any = BUSINESS_TYPE;
  shopUser: any;
  shopId: string = null;
  type: string = 'about'
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
  shopName: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private modalController: ModalController,
    private alertController: AlertController,
    private toaster: ToastService,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
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

  async addToFavorite(item) {
    let payload = {
      shopId: item?.shopDetails?._id,
    };
    this.shopService.favoriteShop(payload).subscribe((success) => {
      this.toaster.successToast(success.message);
      item.shopFavorite = success.data
    });
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
    this.shopName = item.shopDetails.shopName;
    const alert = await this.alertController.create({
      header: 'Do you want to add to existing order or new order?',
      cssClass: 'custom-alert',
      mode: 'md',
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

  openWeb = async () => {
    await Browser.open({ url: `${this.shopUser?.shopDetails?.links?.website}` });
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
        shopData: this.shopUser,
      }
    });
    await modal.present();
  }

}
