import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { OPTIONS } from 'src/app/helpers';
import { defaultStatus } from 'src/app/helpers';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  defaultStatus = defaultStatus;
  loaded: boolean = false;
  user: any;
  shopId: string;
  page: number = 1;
  pageSize: number = 10;
  searchText: string;
  shopDetails: any;
  catalogueArr: any = [];
  selectAll: boolean;
  subCategoryArr: any = [];
  collection: number = 0;

  buttonSlide = {
    slidesPerView: 4,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 3,
  };
  shopCatalogue: any = [];
  subCategory: any = [];
  shopDetailsId: any;
  productArray: any = [];
  shopName: string;
  subCategoryId: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private shopService: ShopService,
    private userService: UserService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private alertController: AlertController,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.subCategory = []; this.productArray = [];
    this.page = 1;
    this.user = this.userService.getCurrentUser();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shopName = params.shopName;
      this.shopDetailsId = params.shopUserId;
      this.shopId = params.shopId
      if (params.shopId) {
        this.getShopSubCategory(false, '');
      }
    });

  }

  ionViewDidLeave(): void {
    this.subCategory = []; this.productArray = [];
    this.page = 1;
    this.searchText = '';
  }

  ionViewWillEnter() { }

  onSearch() {
    this.page = 1;
    this.productArray = [];
    this.subCategory = [];
    this.getProductBySubCategoryId(this.subCategoryId, false);
    this.getShopSubCategory(null, false);
  }

  doRefresh(event: any) {
    this.page = 1;
    this.productArray = [];
    this.subCategory = [];
    this.getProductBySubCategoryId('', false);
    event.target.complete();
  }

  doInfinite(event) {
    // if (this.productArray.length < this.collection) {
    //   this.page++;
    //   this.getProductBySubCategoryId(this.subCategoryId, false, event);
    // } else {
    //   event.target.complete();
    // }
    this.page++;
    this.getProductBySubCategoryId(this.subCategoryId, false, event);
    event.target.complete();
  }

  async getShopSubCategory(isFirstLoad: boolean, event?: any) {
    let obj = { page: this.page, pageSize: this.pageSize, shopId: this.shopId };
    if (this.searchText) {
      obj['search'] = this.searchText
    }
    this.shopService.getShopSubCategory(obj).subscribe(async (success: any) => {
      for (let i = 0; i < success.data.length; i++) {
        this.subCategory.push(success.data[i]);
      }
      this.subCategory = [...new Map(this.subCategory.map(item => [item.subCategory._id, item])).values()]
      if (isFirstLoad)
        event.target.complete();
      if (success.data.length === 0 && event) {
        event.target.disabled = true;
      }
      if (this.subCategory.length > 0) {
        this.getProductBySubCategoryId(this.subCategory[0].subCategory._id, false)
      }
      // this.loaded = true;
      await this.spinner.hideLoader();
    });
  }

  getProduct(item) {
    this.page = 1;
    this.productArray = [];
    this.collection = 0;
    this.getProductBySubCategoryId(item, false)
  }

  async getProductBySubCategoryId(item, isFirstLoad: boolean, event?: any) {
    this.subCategoryId = item;
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      shopId: this.shopDetailsId,
      subCategoryId: this.subCategoryId
    };
    if (this.searchText) {
      obj['search'] = this.searchText
    }
    this.shopService.getShopCatalogueBySubCategory(obj).subscribe(async (success: any) => {
      this.collection = success.count;
      this.subCategory.forEach((x) => {
        if (x.subCategory._id === item) {
          x.isActive = true;
        } else {
          x.isActive = false;
        }
      });
      for (let i = 0; i < success.data.length; i++) {
        this.productArray.push(success.data[i]);
      }
      this.productArray = [...new Map(this.productArray.map(item => [item._id, item])).values()]
      if (isFirstLoad)
        event.target.complete();
      if (success.data.length === 0 && event) {
        event.target.disabled = true;
      }
      this.loaded = true;
      // await this.spinner.hideLoader();
    });
  }

  navigateToCheckout() {
    if (!this.user.firstName || !this.user.lastName || this.user.status == defaultStatus.PENDING) {
      // this.toaster.warningToast("To process your order please complete your profile first.");
      this.checkOutAlert();
    } else {
      let filteredData = this.productArray.filter(x => x.isChecked);
      if (filteredData.length > 0) {
        this.storageService.set("orderData", filteredData)
        this.router.navigate(['/checkout'], { queryParams: { shopId: this.shopId, shopUserId: this.shopDetailsId, shopName: this.shopName } });
      } else {
        this.toaster.warningToast("please select at least one product")
      }
    }
  }
  async checkOutAlert() {
    const alert = await this.alertController.create({
      header: 'Profile Incomplete',
      message: 'To process your order please complete your profile first !!!',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.navigateToProfile();
          },
        },
      ],
    });
    await alert.present();
  }

  navigateToProfile() {
    const path: string = `/edit-profile`;
    this.router.navigate([path]);
  }
  navigateToHome() {
    this.router.navigate(['/app/tabs/home']);
  }


}
