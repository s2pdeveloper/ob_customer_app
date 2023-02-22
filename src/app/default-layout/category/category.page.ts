import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from 'src/app/service/category/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categoryDetails: any = [];
  businessTypeId: any;
  categoryId: any;
  categoryTypeId: string;
  businessName: string;
  search: string = '';
  categoryArr: any=[];
  subCategoryArr: any=[];
  subCatArr: any=[];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    public translate: TranslateService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllCategoryWithSubCategory();
 }

  getAllCategoryWithSubCategory() {
    let obj = {};
    this.categoryService
      .getAllCategoryWithSubCategory(obj)
      .subscribe((success) => {
        console.log("success@@@@@@@@@@@@@@@@@@",success);
        
        this.categoryArr = success.rows.map((x, i) => {
          if (i == 0) {
            this.categoryId = x._id;
            this.businessTypeId = x.businessTypeId;
            x.active = true;
            this.subCategoryArr = x?.categoryWithSubCategory;
          } else {
            x.active = false;
          }
          return x;
        });
      });
  }

  getCategoryAllSubCategory(index) {
    this.categoryArr = this.categoryArr.map((x, i) => {
      if (i == index) {
        x.active = true;
        this.categoryId = x._id;
        this.businessTypeId = x.businessTypeId;
        this.subCategoryArr = x?.categoryWithSubCategory;
      } else {
        x.active = false;
      }
      return x;
    });
  }

  navigateTo(path, subCategoryId) {
    let params = {
      businessTypeId: this.businessTypeId,
      categoryId: this.categoryId,
      subCategoryId: subCategoryId,
    };
    this.router.navigate([path], { queryParams: params });
  }
}
