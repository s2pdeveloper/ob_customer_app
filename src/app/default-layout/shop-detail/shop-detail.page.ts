import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {
  customerDetails: any = {};
  loaded = false;
  shopDetails: any;
  catalogue: any = [];
  subCategoryArr: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private spinner: LoaderService,
    public translate: TranslateService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      this.getShopById(params._id);
    });
    // this.getCatalogueBySubCategoryId()
  }

  getShopById(_id) {
    console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByIdShop(_id).subscribe((success: any) => {
      console.log('success shopby id', success);
      this.shopDetails = success.rows;
      // this.shopDetails = success.rows[0];
      this.subCategoryArr = success.data;
      // this.shopDetails = success[0];
      // this.catalogue = success[0].shopWithCatalogue;
      // console.log(" this.shopDetails", this.shopDetails);

      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  // getCatalogueBySubCategoryId(_id) {
  //   console.log(_id);
  //   this.spinner.showLoader();
  //   this.loaded = false;
  //   this.shopService.getCatalogueBySubCategoryId(_id).subscribe((success: any) => {
  //     console.log("success-------",success);

  //     // this.shopArr = success.payload.shop;
  //     // console.log('shop by id----categoryId', this.shopArr);

  //     this.spinner.hideLoader();
  //     this.loaded = true;
  //   });
  // }

  navigateTo(item) {
    console.log('_id--------------', item);
    this.router.navigate(['/sub-category'], {
      queryParams: {
        _id: item._id,
      },
    });
  }
}
