import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/toast.service';
import { ShopService } from 'src/app/core/services/shop.service';

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
  shopArr: any = [];
  loaded: boolean = false;
  shopDetails: any;
  user: any = {};
  shopCount: any;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private shopService: ShopService,
    private spinner: LoaderService,
    private toaster: ToastService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.search) {
        this.search = params.search;
      }
      this.businessTypeId = params.businessTypeId ?? '';
      this.categoryId = params.categoryId ?? '';
      this.subCategoryId = params.subCategoryId ?? '';
    });
  }

  // ngAfterViewChecked() {
  // this.scrollToBottom();
  // }
  // scrollToBottom() {
  //   this.content.scrollToBottom();
  // }
  ionViewWillEnter(): void {
    this.getAllShop(false, '');
  }

  ionViewDidLeave(): void {
    this.shopArr = [];
    this.page = 1;
    this.search = '';
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


  // async addToFavorite(item) {
  //   this.user = this.userService.getCurrentUser();
  //   let payload = {
  //     _id: this.user.id,
  //     action: item.shopFavorite.length ? 'remove' : 'add',
  //     shopId: item._id,
  //   };
  //   this.shopService.createOrRemoveFavorite(payload).subscribe(async (success) => {
  //     this.getAllShop(false);
  //     this.toaster.successToast(success.message);
  //   });
  // }

  navigateTo(path, id) {
    this.router.navigate([path], { queryParams: { id: id } });
  }

  getUrl(url) {
    let path = `url('${url}')`;
    return path;
  }



}



