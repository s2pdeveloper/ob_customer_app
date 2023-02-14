import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from 'src/app/service/category/category.service';
import { SubCategoryService } from 'src/app/service/sub-category/sub-category.service';
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
  categoryArr: any;
  subCategoryArr: any;
  subCatArr: any;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    public translate: TranslateService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllCategoryWithSubCategory();
    // this.actRoute.queryParams.subscribe((params) => {
    //   this.businessTypeId = params.businessTypeId;
    //   this.getByBusinessTypeCategory(false);
    // });
  }

  // getByBusinessTypeCategory(isFirstLoad: boolean, event?: any) {
  //   let obj = {
  //     businessTypeId: this.businessTypeId,
  //     search: this.search,
  //   };
  //   this.categoryService.getAll(obj).subscribe((success) => {
  //     this.categoryDetails = success.rows;
  //   });
  // }

  getAllCategoryWithSubCategory() {
    let obj = {};
    this.categoryService
      .getAllCategoryWithSubCategory(obj)
      .subscribe((success) => {
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
