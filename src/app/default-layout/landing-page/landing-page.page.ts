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
    private shopService: ShopService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getAllBusinessType();
  }
  getAllBusinessType() {
    let obj = {};
    this.businessTypeService.getAllBusinessType(obj).subscribe((success) => {
      this.businessArr = success.rows.map((x, i) => {
        x.isActive = false;
        if (i == 0) {
          x.isActive = true;
          this.getCategoryByBusinessTypeId(x._id);
          this.businessTypeId = x._id;
        }
        return x;
      });
    });
  }

  getBusinessAllCategory(businessTypeId) {
    this.businessArr = this.businessArr.map((x) => {
      x.isActive = false;
      if (x._id == businessTypeId) {
        x.isActive = true;
        this.businessTypeId = businessTypeId;
      }
      return x;
    });
    this.getCategoryByBusinessTypeId(businessTypeId);
  }

  getCategoryByBusinessTypeId(businessTypeId) {
    let obj: any = {
      businessTypeId: businessTypeId,
    };
    this.categoryService.getAll(obj).subscribe((success) => {
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

  getCategoryIdWithShop(categoryId) {
    let params = {
      businessTypeId: this.businessTypeId,
      categoryId: categoryId,
    };
    console.log(params);
    this.router.navigate(['/search-shop'], { queryParams: params });
  }
}
