import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';
import { ModalController, } from '@ionic/angular';
import { SubCategoryComponent } from 'src/app/modal/sub-category/sub-category.component';
@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {
  page: number = 1;
  pageSize: number = 10;
  search: string = '';
  businessTypeId: string = '';
  categoryId: string = '';
  subCategoryId: string = '';
  collection: number = 0;
  shopArr: any = [];
  loaded: boolean = false;
  shopDetails: any;

  constructor(
    private router: Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    public modelController: ModalController,
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.subCategoryId = params._id ?? "";
      if (params.shopId) {
        this.getShopById(params.shopId);
      } else {
        this.businessTypeId = params.businessTypeId ?? "";
        this.categoryId = params.categoryId ?? "";
        this.getAllShop(false);
      }
    });
  }

  getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      search: this.search,
      businessTypeId: this.businessTypeId,
      categoryId: this.categoryId,
      subCategoryId: this.subCategoryId,
    };
    this.shopService.getAllShop(obj).subscribe((success) => {
      console.log('success shop', success);
      this.shopArr = success.rows;
    });
  }

  getShopById(_id) {
    console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByCategoryIdWithShop(_id).subscribe((success: any) => {
      this.shopArr = success.payload.shop;
      console.log('shop by id----categoryId', this.shopArr);
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

  onSearch() {
    this.page = 1;
    this.shopArr = [];
    this.getAllShop(false, '');
  }

  doRefresh(event) {
    this.page = 1;
    this.shopArr = [];
    // this.getAllShop(false);
    event.target.complete();
  }

  // doInfinite(event) {
  //   this.page++;
  //   this.getAllShop(true, event);
  //   event.target.complete();
  // }


  async openSubCategoryModel() {
   let model = await this.modelController.create({
      component: SubCategoryComponent,
    });
    await model.present();

  }



}
