import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SubCategoryService } from 'src/app/core/services/sub-category.service';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
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
  geoNearestDistance: number = 2;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    public translate: TranslateService,
    public activatedRoute: ActivatedRoute,
    private spinner: LoaderService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }

  ionViewDidLeave(): void {
    this.categoryList = this.subCategoryList = [];
    this.page = 1;
    this.searchText = '';
  }

  ionViewWillEnter() {
    this.getAllCategory();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.categoryId) {
        this.categoryId = params.categoryId;
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
      event.target.complete();
    } else {
      event.target.complete();
    }

  }
  getAllCategory() {
    this.categoryService
      .getAllCategory({})
      .subscribe((success) => {
        this.categoryList = success;
        this.categoryList = success.map((x, index) => {
          if (index === 0) {
            x.active = true;
          } else {
            x.active = false;
          }
          this.categoryId = this.categoryId ? this.categoryId : x._id;
          return x;
        });
        this.getAllSubCategory(this.categoryId, false, '');
      });
  }

  getAllSubCategory(parentId, isFirstLoad, event) {
    this.parentId = parentId,
      this.activeParentId = parentId
    let params = { page: this.page, pageSize: this.pageSize, geoNearestDistance: this.geoNearestDistance };
    if (this.searchText) {
      params['search'] = this.searchText,
        parentId = null;
    } else {
      params['parentId'] = parentId;
    }
    this.subCategoryService.getAll(params).subscribe(
      async (success) => {
        this.collection = success.count;
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
   this.router.navigate(['/search-shop'], {
      queryParams: {
        categoryId: this.parentId,
        subCategoryId:subCategory._id,
        subCategoryName:subCategory.name,
      },
    });
  }
  getSubCategories(activeParentId) {
    if (this.infiniteScroll.disabled) {
      this.infiniteScroll.disabled = false;
    }
    this.searchText = '';
    this.page = 1;
    this.subCategoryList = [];
    this.getAllSubCategory(activeParentId, false, "");
  }

  async navigateToFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterComponent,
      cssClass: 'rating-modal',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {},
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.data) {
      this.geoNearestDistance = data?.data?.geoNearestDistance
    this.subCategoryList = [];
      this.getAllSubCategory(this.activeParentId, false, '');
    }
  }

}
