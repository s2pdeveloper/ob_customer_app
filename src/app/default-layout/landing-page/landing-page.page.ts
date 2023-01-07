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
<<<<<<< Updated upstream
  BusinessWithCategoryArr: any = [];
  search: string = '';
=======
  shopArr:any=[];
  BusinessWithCategoryArr:any=[];
  search: any;
>>>>>>> Stashed changes

  constructor(
    private router: Router,
    private businessTypeService: BusinessTypeService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private categoryService: CategoryService,
<<<<<<< Updated upstream
    private shopService: ShopService
  ) {}
=======
private shopService:ShopService
  ) { }


>>>>>>> Stashed changes

  ngOnInit() {
    this. getAllShop();
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

<<<<<<< Updated upstream
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
=======
  getAllShop() {
    let obj = {};
    this.shopService.getAllShop(obj).subscribe((success) => {
      console.log('success shop', success);
      this.shopArr = success.rows;
    });
  }

  setFilteredLocations(ev: any) {
    let val = ev.target.value;
    this.search = val;
    if (val && val.trim() !== '') {
      return this.getAllShop();
    }
    if (this.search == '') {
      this.clearFilter();
    }
  }
  
  clearFilter() {
    this.search = '';
    this.getAllShop();
  }


  getBusinessAllCategory(ev) {
    console.log("event", ev);
    this.getCategoryByBusinessTypeId(ev)
>>>>>>> Stashed changes
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


