import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
// import { ShopService } from 'src/app/service/shop/shop.service';
import { ModalController } from '@ionic/angular';
import { GalleryListComponent } from 'src/app/shared/gallery-list/gallery-list.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { ShopService } from 'src/app/core/services/shop.service';
import {BUSINESSTYPE } from 'src/app/helpers/constants.helper';
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {
  businessType:any=BUSINESSTYPE;
  shopUser: any;
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
  shopId: string = null;
  type: string = 'about'
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private modalCtrl: ModalController,
    private userService: UserService,
    private toaster: ToastService,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.shopId = params.id;
      }
      this.getShopById();
    });
  }

  async getShopById() {
    this.shopService.getShopProfile(this.shopId).subscribe(async (success: any) => {
      this.shopUser = success;
      await this.spinner.hideLoader();
    });
  }

  // favourite
  async addToFavorite(item) {
    // this.shopService
    //   .createOrRemoveFavorite(payload)
    //   .subscribe(async (success) => {
    //     this.getShopById()
    //     this.toaster.successToast(success.message);
    //   });
  }

  navigateTo(path) {
    let params = { _id: this.shopId };
    this.router.navigate([path], { queryParams: params });
  }

  goToMap(address: string) {
    let params = { address: address };
    this.router.navigate(['/map'], { queryParams: params });
  }

  goToChat() {
    let params = { shopName: this.shopUser?.shopDetails?.shopName };
    this.router.navigate(['/chat-view'], { queryParams: params });
  }

  async navigateToViewGalleryImages(galleryImg) {
    const modal = await this.modalCtrl.create({
      component: GalleryListComponent,
      componentProps: {
        data: galleryImg,
      },
    });
    await modal.present();
  }

  async modalFilter() {
    const modal = await this.modalCtrl.create({
      component: SelectFilterComponent,
      cssClass: 'modal-medium',
      swipeToClose: true,
      componentProps: {
        shopDetail: this.shopUser?.shopDetails,
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }
}
