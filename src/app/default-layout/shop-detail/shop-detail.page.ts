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
shopId=null
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
      this.shopId=params._id
      this.getShopById();
    });
  }

  getShopById() {
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByIdShop(this.shopId).subscribe((success: any) => {
      console.log('success shop by id', success);
      this.shopDetails = success.rows;
      // this.shopDetails = success.rows[0];
      this.subCategoryArr = success.data;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  navigateTo(path) {
    let params={
      _id:this.shopId
    }
    console.log("params@@@@@@@@@@@@@",params);
    
    this.router.navigate([path], { queryParams:params });
   
    
  }

}
