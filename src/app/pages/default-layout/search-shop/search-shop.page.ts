import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IonInfiniteScroll, IonContent, ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/toast.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  search: string = null;
  businessTypeId: any;
  categoryId: string = '';
  subCategoryId: string = '';
  shopList: any = [];
  loaded: boolean = false;
  shopDetails: any;
  user: any = {};
  shopCount: any;
  favoriteShop: any;
  geoNearestDistance: number = 2;
  shopId = [];
  subCategoryName: string = null;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private shopService: ShopService,
    private spinner: LoaderService,
    private toaster: ToastService,
    private activatedRoute: ActivatedRoute,
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {

      if (params.shopId) {
        this.shopId = params.shopId;
      }
      if (params.search) {
        this.search = params.search;
      }
      this.businessTypeId = params.businessTypeId ?? '';
      this.categoryId = params.categoryId ?? '';
      this.subCategoryId = params.subCategoryId ?? '';
      this.subCategoryName = params.subCategoryName ?? '';
    });
  }

  ionViewWillEnter(): void {
    this.getAllShop(false, '');
  }

  ionViewDidLeave(): void {
    this.shopList = [];
    this.page = 1;
    this.search = '';
  }

  onSearch() {
    this.page = 1;
    this.shopList = [];
    this.getAllShop(false, '');
  }

  doRefresh(event) {
    this.page = 1;
    this.shopList = [];
    this.getAllShop(false, "");
    event.target.complete();
  }

  doInfinite(event) {
    if (this.shopList.length < this.collection) {
      this.page++;
      this.getAllShop(false, event);
    } else {
      event.target.complete();
    }
  }

  async getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      businessTypeId: this.businessTypeId,
      categoryId: this.categoryId,
      subCategoryId: this.subCategoryId,
      id: this.shopId.join(','),
      geoNearestDistance: this.geoNearestDistance
    };
    if (this.search) {
      obj['search'] = this.search,
        obj['geoNearestDistance'] = this.geoNearestDistance
    }
    this.shopService.list(obj).subscribe(async (success) => {
      this.collection = success.count;
      if (this.shopList.length < this.collection) {
        for (let i = 0; i < success.data.length; i++) {
          this.shopList.push(success.data[i]);
        }
      }
      if (isFirstLoad)
        event.target.complete();
      if (success.data.length === 0 && event) {
        event.target.disabled = true;
      }
      await this.spinner.hideLoader();
    }, error => {
      this.spinner.hideLoader();
      this.toaster.errorToast(error);
    }
    )
  };


  async addToFavorite(item) {
    let payload = {
      shopId: item?._id,
    };
    this.shopService.favoriteShop(payload).subscribe((success) => {
      this.toaster.successToast(success.message);
      item.shopFavorite = success.data
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

  async navigateToFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterComponent,
      cssClass: 'filter-modal',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {},
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data?.data?.geoNearestDistance) {
      console.log("data?.data?.geoNearestDistance", data?.data?.geoNearestDistance);
      this.geoNearestDistance = data?.data?.geoNearestDistance
      this.shopList = [];
      this.getAllShop(false, "");
    }
  }
}



