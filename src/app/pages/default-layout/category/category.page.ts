import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SubCategoryService } from 'src/app/core/services/sub-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  businessTypeId: number;
  categoryId: number;
  categoryArr: any = [];
  subCategoryArr: any = [];
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  search: string = '';


  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    public translate: TranslateService,
    public activatedRoute: ActivatedRoute,
    private spinner: LoaderService,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getAllCategory();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.categoryId) {
        this.categoryId = params.categoryId;
        this.getAllSubCategory({ _id: params.categoryId })
      }
    });
  }

  getAllCategory() {
    this.categoryService
      .getAllCategory({})
      .subscribe((success) => {
        this.categoryArr = success;
        this.categoryArr = success.map((x, i) => {
          if (!this.categoryId && i == 0) {
            this.categoryId = this.categoryId ? this.categoryId : x._id;
            x.active = true;
            this.getAllSubCategory(x);
          } else {
            x.active = false;
          }
          return x;
        });
      });
  }

  getAllSubCategory(item) {
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      parentId: item._id
    };
    this.subCategoryService.getAll(obj).subscribe(
      async (success) => {
        this.subCategoryArr = success.data;
        this.categoryArr = this.categoryArr.map((x, i) => {
          if (item._id == x._id) {
            x.active = true;
          } else {
            x.active = false;
          }
          return x;
        });
      }, (error) => {
        this.spinner.hideLoader();
      }
    )
  }


  navigateTo(subCategory) {
    this.router.navigate(['/app/tabs/search-shop'], {
      queryParams: {
        // categoryId: subCategory.categoryId,
        // subCategoryId: subCategory._id
      },
    });
  }

  onSearch() {
    this.page = 1;
    this.subCategoryArr = [];
    this.getAllSubCategory(false);
  }

}
