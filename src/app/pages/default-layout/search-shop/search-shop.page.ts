import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { ShopService } from 'src/app/service/shop/shop.service';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { ShopService } from 'src/app/core/services/shop.service';
@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  search: string = null;
  businessTypeId: any;
  categoryId: string = '';
  subCategoryId: string = '';
  shopArr: any = [];
  loaded: boolean = false;
  shopDetails: any;
  user: any = {};
  shopCount: any;
  favoriteShop: any;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private shopService: ShopService,
    private spinner: LoaderService,
    private toaster: ToastService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() { }

  // ngAfterViewChecked() {
  // this.scrollToBottom();
  // }
  // scrollToBottom() {
  //   this.content.scrollToBottom();
  // }


  ionViewWillEnter() {
    this.search = '';
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.search) {
        this.search = params.search;
      }
      this.businessTypeId = params.businessTypeId ?? '';
      this.categoryId = params.categoryId ?? '';
      this.subCategoryId = params.subCategoryId ?? '';
      this.getAllShop(false, '');
    });
    this.getAllShop(false, "")
  }

  onSearch() {
    this.page = 1;
    this.shopArr = [];
    this.getAllShop(false, '');
  }

  doRefresh(event) {
    this.page = 1;
    this.shopArr = [];
    this.getAllShop(false, "");
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.getAllShop(true, event);
    event.target.complete();
  }

  ngOnDestroy(): void {
    this.shopArr = [];
    this.page = 1;
    this.search = '';
  }
  async getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      businessTypeId: this.businessTypeId,
      categoryId: this.categoryId,
      subCategoryId: this.subCategoryId,
    };
    if (this.search) {
      obj['search'] = this.search
    }
    this.shopService.list(obj).subscribe(async (success) => {
      this.collection = success.count;
      for (let i = 0; i < success.data.length; i++) {
        this.shopArr.push(success.data[i]);
      }
      this.shopArr = [...this.shopArr];
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
    this.user = this.userService.getCurrentUser();
    let payload = {
      customerId: this.user._id,
      action: item.shopFavorite.length ? 'remove' : 'add',
      shopId: item?.shopDetails?._id,
    };
    this.shopService.favoriteShop(payload).subscribe(async (success) => {
      this.shopArr = [];
      this.getAllShop(false);
      this.toaster.successToast(success.message);
    });
  }

  navigateTo(path, id) {
    this.router.navigate([path], { queryParams: { id: id } });
  }

  getUrl(url) {
    let path = `url('${url}')`;
    return path;
  }



}



