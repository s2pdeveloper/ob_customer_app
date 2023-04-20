import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SubCategoryService } from 'src/app/core/services/sub-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit, OnDestroy {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  categoryId: number;
  categoryList: any = [];
  subCategoryList: any = [];
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  searchText: string;
  activeParentId: any = null;
  parentId: number;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    public translate: TranslateService,
    public activatedRoute: ActivatedRoute,
    private spinner: LoaderService,
  ) { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.categoryList = this.subCategoryList = [];
    this.page = 1;
    this.searchText = '';
    console.log(this.categoryList, this.subCategoryList)
  }

  ionViewWillEnter() {
    this.getAllCategory();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.categoryId) {
        this.categoryId = params.categoryId;
        this.getAllSubCategory(this.categoryId, false, '')
      }
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
    if (this.subCategoryList.length < this.collection) {
      this.page++;
      this.getAllSubCategory(this.activeParentId, false, event);
    } else {
      event.target.complete();
    }

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
    this.parentId = parentId,
      this.activeParentId = parentId
    let params = { page: this.page, pageSize: this.pageSize, parentId: parentId };
    if (this.searchText) {
      params['search'] = this.searchText;
    }
    this.subCategoryService.getAll(params).subscribe(
      async (success) => {
        this.collection = success.count;
        if (!event) {
          this.subCategoryList = success.data;
        } else {
          for (let i = 0; i < success.data.length; i++) {
            this.subCategoryList.push(success.data[i]);
          }
          event.target.complete();
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
        categoryId: this.parentId,
        subCategoryId: subCategory._id,
        businessTypeId: subCategory.businessTypeId[0]
      },
    });
  }
  getSubCategories(activeParentId) {
    if (this.infiniteScroll.disabled) {
      this.infiniteScroll.disabled = false;
    }
    this.page = 1;
    this.getAllSubCategory(activeParentId, false, "");
  }
}
