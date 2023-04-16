import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';
<<<<<<< HEAD
import { IonInfiniteScroll,IonContent } from '@ionic/angular';
import { StorageService, ToastService } from 'src/app/core/services';
=======
>>>>>>> dev
@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {
<<<<<<< HEAD
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
=======
>>>>>>> dev
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  search: string = '';
<<<<<<< HEAD
 businessTypeId: any;
  categoryId: string = '';
=======
  businessTypeId: string = '';
  selectedCategoryId: string = '';
>>>>>>> dev
  subCategoryId: string = '';
  shopArr: any = [];
  loaded: boolean = false;
  shopDetails: any;
<<<<<<< HEAD
  user: number;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private shopService: ShopService,
    private spinner: LoaderService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private localStorage: StorageService
  ) { }

  ngOnInit() { }

  // ngAfterViewChecked() {
    // this.scrollToBottom();
  // }
  // scrollToBottom() {
  //   this.content.scrollToBottom();
  // }


=======

  constructor( private router: Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    private shopService: ShopService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
  }
>>>>>>> dev
  ionViewWillEnter() {
    this.search = '';
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

  async getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      businessTypeId: this.businessTypeId,
      categoryId: this.categoryId,
      subCategoryId: this.subCategoryId,
    };
    this.shopService.getAllShop(obj).subscribe(async (success) => {
      await this.spinner.hideLoader();
      this.collection = success.count;
      this.shopArr = success.rows;
      if (isFirstLoad) event?.target.complete();
      if (this.shopArr.length >= this.collection && event) {
        event.target.disabled = true;
      }
    });
  }

  async addToFavorite(item) {
    this.user = this.localStorage.get('OBCustomer')._id;
    let payload = {
      _id: this.user,
      action: item.shopFavorite.length ? 'remove' : 'add',
      shopId: item._id,
    };
    this.shopService.createOrRemoveFavorite(payload).subscribe(async (success) => {
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
<<<<<<< HEAD
    this.getAllShop(false, "");
=======
    //  this.getAllShop(false);
>>>>>>> dev
    event.target.complete();
  }

<<<<<<< HEAD
  doInfinite(event) {
    this.page++;
    this.getAllShop(true, event);
    // event.target.complete();
  }

=======
  getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      search: this.search,
    };
    this.shopService.getAllShop(obj).subscribe((success) => {
      console.log('success shop', success);
      this.shopArr = success.rows;
      console.log("shopArr........",this.shopArr);
      
      this.selectedCategoryId = success.rows[0]._id;
      // this.selectedBusinessName = success.rows[0].name;
      this.getShopById(this.selectedCategoryId);
      console.log("this.selectedCategoryId",this.selectedCategoryId);
    });
  // } getBusinessAllCategory(ev) {
  //   console.log("event", ev);
  //   this.getShopById(ev)
   }

  getShopById(_id) {
    console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByCategoryIdWithShop(_id).subscribe((success: any) => {  
      // this.shopArr = success.payload.shop;
      console.log('shop by id----categoryId', success);
      this.shopArr=success.payload.shop;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }
 navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

>>>>>>> dev
}



