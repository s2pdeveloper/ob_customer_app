import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';
import { ShopService } from 'src/app/core/services/shop.service';
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

  constructor(
    private router: Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    public modelController: ModalController,
    private shopService: ShopService,
    private favoriteService: FavoriteService,
    private toaster: ToastService,
    private userService: UserService,
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
    this.user = this.userService.getCurrentUser();
    await this.spinner.showLoader();
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
      await this.spinner.hideLoader();
    });
  }
  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { id: _id } });
  }
  getUrl(url) {
    let path = `url('${url}')`;
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
}
