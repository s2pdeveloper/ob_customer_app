import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { ScheduleNotificationListComponent } from './schedule-notification-list/schedule-notification-list.component';
import { defaultStatus } from 'src/app/helpers/constants.helper';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  page: number = 1;
  pageSize: number = 10;
  search: string = '';
  businessTypeId: string = '';
  categoryId: string = '';
  subCategoryId: string = '';
  collection: number = 0;
  shopFavorites: any = [];
  loaded: boolean = false;
  shopDetails: any;
  user: any;
  isFavorite: any = {};
  defaultStatus = defaultStatus;
  constructor(
    private router: Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    public modelController: ModalController,
    private shopService: ShopService,
    private favoriteService: FavoriteService,
    private toaster: ToastService,
    private userService: UserService,
    private alertController: AlertController,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.search = '';
    this.getFavoriteByCustomerId(false)
  }
  ionViewDidLeave(): void {
    this.shopFavorites = [];
    this.page = 1;
    this.search = '';
  }
  doInfinite(event) {
    if (this.shopFavorites.length < this.collection) {
      this.page++;
      this.getFavoriteByCustomerId(false, event);
    } else {
      event.target.complete();
    }
  }
  onSearch() {
    this.page = 1;
    this.shopFavorites = [];
    this.getFavoriteByCustomerId(false, '');
  }

  doRefresh(event) {
    this.page = 1;
    this.shopFavorites = [];
    this.getFavoriteByCustomerId(false, '');
    event.target.complete();
  }

  async getFavoriteByCustomerId(isFirstLoad: boolean, event?: any) {
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.favoriteService.getAllFavoriteWithCustomerId(obj).subscribe(async success => {
      this.collection = success.count;
      for (let i = 0; i < success.data.length; i++) {
        this.shopFavorites.push(success.data[i]);
      }
      if (isFirstLoad)
        event.target.complete();
      if (success.data.length === 0 && event) {
        event.target.disabled = true;
      }
      this.loaded = true;
      // await this.spinner.hideLoader();
    });
  }
  navigateToShop(id: string) {
    const path: string = `/shop-detail/${id}`;
    this.router.navigate([path]);
  }
  getUrl(url) {
    let path = `url('${url}')`;
    return path;
  }
  getUnAvailableUrl() {
    let path = `url('${'assets/images/currentlyUnavailable.jpeg'}')`;
    return path;
  }
  async addToFavorite(item) {
    this.user = this.userService.getCurrentUser();
    let payload = {
      customerId: this.user._id,
      action: 'remove',
      shopId: item?.shopDetails?._id,
    };
    this.shopService.favoriteShop(payload).subscribe(async (success) => {
      this.toaster.successToast(success.message);
      this.shopFavorites = [];
      this.getFavoriteByCustomerId(false);
    });
  }

  async instructionAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Pick any shop of your choice by clicking on heart of respective seller or service provider. Through favourites you can create your own bazar and all the favorite marked seller will be on speed dial for you.',
      cssClass: 'custom-alert',
      mode:'ios',
      buttons: [
        {
          text: 'Close',
          cssClass: 'alert-button-confirm',
        },
      ],
    });
    await alert.present();
  }

  roundRating(rating: number): number {
    return Math.round(rating);
  }

  async navigateToNotification(shopId) {
    const modal = await this.modelController.create({
      component: ScheduleNotificationListComponent,
      swipeToClose: true,
      componentProps: {
        shopId: shopId
      }
    });
    await modal.present();
  }
}
