import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { AdvertiseService } from 'src/app/service/advertise/advertise.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { BusinessTypeService } from 'src/app/service/businessType/businessType.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { OfferService } from 'src/app/service/offer/offer.service';
import { ShopService } from 'src/app/service/shop/shop.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  businessTypeId: number;
  businessArr: any = [];
  categoryArr: any = [];
  search: string = '';
  offerArr: any = [];
  advertiseArr: any = [];
  user: any = '';
  loaded: boolean;
  userDetails: any = [];

  buttonSlide = {
    slidesPerView: 4,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    spaceBetween: 10,
  };

  buttonSlide1 = {
    slidesPerView: 1,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 25,
  };

  buttonSlide2 = {
    slidesPerView: 1,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 25,
  };

  constructor(
    private router: Router,
    private businessTypeService: BusinessTypeService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private categoryService: CategoryService,
    private offerService: OfferService,
    private advertiseService: AdvertiseService,
    private localStorage: StorageService,
    private authService: AuthService
  ) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.user = this.localStorage.get('OBCustomer');
    // this.getById();
    this.getAllDataParallel();
  }

  // getById() {
  //   this.loaded = false;
  //   this.authService.profile(this.user._id).subscribe((success: any) => {
  //     this.userDetails = success;
  //     // this.getAllCategory();
  //     this.spinner.hideLoader();
  //     this.loaded = true;
  //   });
  // }

  // getAllBusinessType() {
  //   let obj = {};
  //   this.businessTypeService.getAllBusinessType(obj).subscribe((success) => {
  //     this.businessArr = success.rows.map((x, i) => {
  //       x.isActive = false;
  //       if (i == 0) {
  //         x.isActive = true;
  //         // this.getCategoryByBusinessTypeId(x._id);
  //         this.businessTypeId = x._id;
  //       }
  //       return x;
  //     });
  //   });
  // }

  // getBusinessAllCategory(businessTypeId) {
  //   this.businessArr = this.businessArr.map((x) => {
  //     x.isActive = false;
  //     if (x._id == businessTypeId) {
  //       x.isActive = true;
  //       this.businessTypeId = businessTypeId;
  //     }
  //     return x;
  //   });
  //   // this.getCategoryByBusinessTypeId(businessTypeId);
  // }


  getAllDataParallel() {
    let response1 = this.categoryService.getAll({});
    let response2 = this.offerService.getAll({});
    let response3 = this.advertiseService.getAll({});
    let response4 = this.authService.profile(this.user._id);
    return forkJoin([response1, response2, response3, response4]).subscribe(succ => {
      this.categoryArr = succ[0].rows;
      this.offerArr = succ[1].rows;
      this.advertiseArr = succ[2].rows;
      this.userDetails = succ[3];
    });
  }
  // getAllCategory() {
  //   this.categoryService.getAll({}).subscribe((success) => {
  //     this.categoryArr = success.rows;
  //     this.getAllOffer();
  //   });
  // }

  navigateToSearchShop(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

  seeAllCategory() {
    this.router.navigate(['/category'], {
      queryParams: {
        businessTypeId: this.businessTypeId,
      },
    });
  }

  // getCategoryIdWithShop(categoryId) {
  //   let params = {
  //     businessTypeId: this.businessTypeId,
  //     categoryId: categoryId,
  //   };
  //   this.router.navigate(['/search-shop'], { queryParams: params });
  // }

  navigateToProfilePage() {
    this.router.navigate(['/view-profile']);
  }

  navigateToMap() {
    this.router.navigate(['/map']);
  }

  // getAllOffer() {
  //   let obj = {};
  //   this.offerService.getAll(obj).subscribe((success) => {
  //     this.offerArr = success.rows;
  //     this.getAllAdvertise();
  //   });
  // }

  // getAllAdvertise() {
  //   this.advertiseService.getAll({}).subscribe((success) => {
  //     this.advertiseArr = success.rows;
  //   });
  // }

  doRefresh(event: any) {
    this.advertiseArr = [];
    // this.start = 0;
    // this.getById();
    this.getAllDataParallel();
    // this.getAllAdvertise();
    event.target.complete();
  }

  doInfinite($event) { }
}
