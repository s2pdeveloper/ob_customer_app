import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';
import { ModalController } from '@ionic/angular';
import { GalleryListComponent } from 'src/app/shared/gallery-list/gallery-list.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { StorageService, ToastService } from 'src/app/core/services';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {
  loaded = false;
  shopDetails: any;
  shopName: string = '';
  shopId = null;
  type = 'about';
  user: any;
  faceBook: any;
  insta: any;
  youTube: any;
  webSite:any;
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
    private modalCtrl: ModalController,
    private localStorage: StorageService,
    private toaster: ToastService,


  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      // when we navigate to search shop to shop details
      if (params._id) {
        this.shopId = params._id;
      }

      // when we navigate to chat view to shop details
      if (params.shopId) {
        this.shopId = params.shopId;
      }
      this.getShopById();
    });
  }

  async getShopById() {
    this.shopService.getByIdShop(this.shopId).subscribe(async (success: any) => {
      this.shopDetails = success.rows[0];
      this.faceBook = this.shopDetails.links.facebook;
      this.insta = this.shopDetails.links.insta;
      this.youTube = this.shopDetails.links.youtube;
      this.webSite = this.shopDetails.links.website;
      await this.spinner.hideLoader();
    });
  }

  // favourite
  async addToFavorite(item) {
    this.user = this.localStorage.get('OBCustomer')._id;
    let payload = {
      _id: this.user,
      action: item.shopFavorite.length ? 'remove' : 'add',
      shopId: item._id,
    };
    this.shopService
      .createOrRemoveFavorite(payload)
      .subscribe(async (success) => {
        this.getShopById()
        this.toaster.successToast(success.message);
      });
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
    let params = { shopName: this.shopDetails?.shopName };
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
        shopDetail: this.shopDetails,
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }
}
