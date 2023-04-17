import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
// import { FavoriteService } from 'src/app/service/favourite/favourite.service';
// import { ShopService } from 'src/app/service/shop/shop.service';

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
    // private shopService: ShopService,
    // private favoriteService: FavoriteService,
    private toaster: ToastService,
    private userService: UserService,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.search = '';
    this.getFavoriteByCustomerId(false)
  }

  async getFavoriteByCustomerId(isFirstLoad: boolean, event?: any) {
    this.user = this.userService.getCurrentUser();
    // this.spinner.showLoader();
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    // this.favoriteService.getFavoriteByCustomerId(this.user._id, obj).subscribe(async success => {
    //   // this.shopFavorites = success.rows;
    //   this.collection = success.rows.length;
    //   console.log("success........", this.collection);

    //   this.collection = success.count;
    //   if (this.page == 1) {
    //     this.shopFavorites = success.rows;
    //   } else {
    //     this.shopFavorites = [...this.shopFavorites, ...success.rows];
    //   }
    //   if (isFirstLoad) event?.target.complete();
    //   if (this.shopFavorites.length >= this.collection && event) {
    //     event.target.disabled = true;
    //   }
    //   await this.spinner.hideLoader();
    // });
  }

  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

  getUrl(url) {
    let path = `url('${url}')`;
    return path;
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

  async addToFavorite(item) {
    let payload = {
      action: 'remove',
      shopId: item.shopId._id,
    };
    // this.shopService.createOrRemoveFavorite(payload).subscribe(async (success) => {
    //   this.getFavoriteByCustomerId(false);
    //   this.toaster.successToast(success.message);
    // });
  }

  doInfinite(event) {
    this.page++;
    this.getFavoriteByCustomerId(true, event);
    //  event.target.complete();
  }

}
