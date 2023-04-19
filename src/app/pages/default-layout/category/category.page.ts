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


  categoryId: number;
  categoryList: any = [];
  subCategoryList: any = [];
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  searchText: string;
  activeParentId: any = null;


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
        this.getAllSubCategory(this.categoryId, false, '')
      }
    });
  }

  getAllCategory() {
    this.categoryService
      .getAllCategory({})
      .subscribe((success) => {
        this.categoryList = success;
        this.categoryList = success.map((x, i) => {
          if (!this.categoryId && i == 0) {
            this.categoryId = this.categoryId ? this.categoryId : x._id;
            x.active = true;
            this.getAllSubCategory(this.categoryId, false, '');
          } else {
            x.active = false;
          }
          return x;
        });
      });
  }

  getAllSubCategory(parentId, isFirstLoad, event) {
    this.activeParentId = parentId
    let params = { page: this.page, pageSize: this.pageSize, parentId: parentId };
    if (this.searchText) {
      params['search'] = this.searchText;
    }
    this.subCategoryService.getAll(params).subscribe(
      async (success) => {
        // this.subCategoryList = success.data;
        for (let i = 0; i < success.data.length; i++) {
          this.subCategoryList.push(success.data[i]);
        }
        if (isFirstLoad)
          event.target.complete();
        if (success.data.length === 0 && event) {
          event.target.disabled = true;
        }

        this.categoryList = this.categoryList.map((x, i) => {
          if (parentId == x._id) {
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


  navigateToShopList(subCategory) {
    this.router.navigate(['/app/tabs/search-shop'], {
      queryParams: {
        // categoryId: subCategory.categoryId,
        // subCategoryId: subCategory._id
      },
    });
  }

  onSearch() {
    this.page = 1;
    this.subCategoryList = [];
    this.getAllSubCategory(this.activeParentId, false, '');
  }

  doRefresh(event: any) {
    this.page = 1;
    this.subCategoryList = [];
    this.getAllSubCategory(this.activeParentId, false, '');
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.getAllSubCategory(this.activeParentId, false, "");
    event.target.complete();
  }
  
  getSubCategories(activeParentId) {
    this.page = 1;
    this.subCategoryList = [];
    this.getAllSubCategory(activeParentId, false, "");
  }
}
