import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  categoryArr: any = [];
  subCategoryArr: any = [];


  constructor(
    private router: Router,
    private categoryService: CategoryService,
    public translate: TranslateService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getAllCategoryWithSubCategory();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.categoryId) {
        this.categoryId = params.categoryId;
      }
    });
  }

  getAllCategoryWithSubCategory() {
    let obj = {
      search: this.search,
    };
    this.categoryService
      .getAllCategoryWithSubCategory(obj)
      .subscribe((success) => {
        this.categoryArr = success.rows.map((x, i) => {
          if (this.categoryId && x._id == this.categoryId) {
            this.businessTypeId = x.businessTypeId;
            x.active = true;
            this.subCategoryArr = x?.categoryWithSubCategory;
          } else {
            if (!this.categoryId && i == 0) {
              this.categoryId = this.categoryId ? this.categoryId : x._id;
              this.businessTypeId = x.businessTypeId;
              x.active = true;
              this.subCategoryArr = x?.categoryWithSubCategory;
            } else {
              x.active = false;
            }
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

  onSearch() {
    this.categoryArr = [];
    // this.subCategoryArr = this.subCategoryArr.filter(x => x.name.includes(this.search))
    console.log(" this.subCategoryArr", this.subCategoryArr);
    this.getAllCategoryWithSubCategory();
  }

}
