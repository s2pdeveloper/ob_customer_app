import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FavoriteService } from 'src/app/service/favourite/favourite.service';
import { ShopService } from 'src/app/service/shop/shop.service';

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
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private localStorage: StorageService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getFavoriteByCustomerId(false)
  }


  getFavoriteByCustomerId(isFirstLoad: boolean, event?: any) {
    this.user = this.localStorage.get('OBCustomer');
    this.spinner.showLoader();
    let obj = {
      search: this.search,
    };
    this.loaded = false;
    this.favoriteService.getFavoriteByCustomerId(this.user._id, obj).subscribe((success: any) => {
      this.shopFavorites = success.rows;
      this.spinner.hideLoader();
      this.loaded = true;
    });
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
    this.getFavoriteByCustomerId(false);
  }

  doRefresh(event) {
    this.page = 1;
    this.shopFavorites = [];
    this.getFavoriteByCustomerId(true, event);
    event.target.complete();
  }

  async addToFavorite(item) {
    let payload = {
      action: 'remove',
      shopId: item.shopId._id,
    };
    this.shopService.createOrRemoveFavorite(payload).subscribe(async (success) => {
      this.getFavoriteByCustomerId(false);
      this.toaster.successToast(success.message);
    });
  }

  doInfinite(event) {
    this.page++;
    this.getFavoriteByCustomerId(false, '');
    event.target.disabled = true;
    this.infiniteScroll.disabled = true;
    event.target.complete();
  }

}
