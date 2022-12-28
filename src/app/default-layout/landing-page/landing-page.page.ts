import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { BusinessTypeService } from 'src/app/service/businessType/businessType.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  businessTypeId: any;
  user: any;
  businessArr: any = [];
  BusinessWithCategoryArr: any = [];
  search: string = '';

  constructor(
    private router: Router,
    private businessTypeService: BusinessTypeService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private categoryService: CategoryService,
    private shopService: ShopService,

  ) { }



  ngOnInit() {
    this.getAllBusinessType();
  }

  getAllBusinessType() {
    let obj = {};
    this.businessTypeService.getAllBusinessType(obj).subscribe((success) => {
      console.log('success', success);
      this.businessArr = success.rows;
    });
  }

  getBusinessAllCategory(ev) {
    console.log("event", ev);
    this.getCategoryByBusinessTypeId(ev)
  }

  getCategoryByBusinessTypeId(businessTypeId) {
    let obj: any = {
      businessTypeId: businessTypeId
    };
    this.categoryService
      .getAll(obj)
      .subscribe((success) => {
        console.log("success------------", success);
        this.BusinessWithCategoryArr = success.rows;
      });
  }


  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

  seeAll() {
    this.router.navigate(['/category']);
  }
  proCard() {
    this.router.navigate(['/category']);
  }

  getCategoryIdWithShop(ev) {
    console.log("event--------------shop", ev);
    let params = ev;
    console.log(params);
    this.router.navigate(['/search-shop'], { queryParams: { params }});
  }

  // getCategoryByShop(categoryId) {
  //   let obj: any = {
  //     categoryId: categoryId
  //   };
  //   this.shopService
  //     .getByCategoryIdWithShop(obj)
  //     .subscribe((success) => {
  //       console.log("success------------shop", success);
  //       this.BusinessWithCategoryArr = success.rows;
  //     });
  // }

}
