import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { StorageService, ToastService } from 'src/app/core/services';
@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  page: number = 0;
  pageSize: number = 10;
  search: string = '';
  businessTypeId: string = '';
  categoryId: string = '';
  subCategoryId: string = '';
  collection: number = 0;
  shopArr: any = [];
  loaded: boolean = false;
  shopDetails: any;
  user: number;

  constructor(
    private router: Router,
    public translate: TranslateService,
    public modelController: ModalController,
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private localStorage: StorageService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.search) {
        this.search = params.search;
      }
      this.businessTypeId = params.businessTypeId ?? '';
      this.categoryId = params.categoryId ?? '';
      this.subCategoryId = params.subCategoryId ?? '';
      this.getAllShop(false);
    });
  }

  getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      businessTypeId: this.businessTypeId,
      categoryId: this.categoryId,
      subCategoryId: this.subCategoryId,
    };
    this.shopService.getAllShop(obj).subscribe((success) => {
      this.shopArr = success.rows;
      // if (this.page == 1) {
      //   this.shopArr = success.rows;
      // } else {
      //   this.shopArr = [...this.shopArr, ...success.rows];
      // }
      // // this.collection = success.count;
      // if (isFirstLoad) event?.target.complete();
      // if (this.shopArr.length >= this.collection && event) {
      //   event.target.disabled = true;
      // }
    });
  }


  // getAllShop(isFirstLoad: boolean, event?: any) {
  //   let obj = {
  //     page: this.page,
  //     pageSize: this.pageSize,
  //     // search: this.search,
  //     businessTypeId: this.businessTypeId,
  //     categoryId: this.categoryId,
  //     subCategoryId: this.subCategoryId,
  //   };
  //   if (this.search) {
  //     obj['search'] = this.search
  //   }
  //   this.shopService.getAllShop(obj).subscribe((success) => {
  //     // this.shopArr = success.rows;
  //     for (let i = 1; i < success.rows.length; i++) {
  //       this.shopArr.push(success.rows[i]);
  //     }
  //     if (isFirstLoad) event?.target.complete();
  //     if (success.length === 1 && event) {
  //       event.target.disabled = true;
  //     }
  //     else {
  //       this.page += this.pageSize
  //     }
  //   });
  // }

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
        this.getAllShop(false);
        this.toaster.successToast(success.message);
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
    this.shopArr = [];
    this.getAllShop(false, '');
  }

  doRefresh(event) {
    this.page = 1;
    this.shopArr = [];
    this.getAllShop(false);
    event.target.complete();
  }

  doInfinite(event) {
    // this.page++;
    this.getAllShop(true, event);
    event.target.complete();
  }
}
