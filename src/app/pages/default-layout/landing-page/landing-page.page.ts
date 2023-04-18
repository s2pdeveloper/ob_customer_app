import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AdvertiseService } from 'src/app/core/services/advertise.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { OfferService } from 'src/app/core/services/offer.service';
import { UserService } from 'src/app/core/services/user.service';
import { Geolocation } from '@capacitor/geolocation';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { ToastService } from 'src/app/core/services/toast.service';
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
  seasonalOffer: any = [];

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
    speed: 300,
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
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 25,
  };
  deviceInfo: any;
  currentLocation: any = {};
  geolocation: {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitudeAccuracy?: number;
    altitude?: number;
    speed?: number;
    heading?: number;
  };

  constructor(
    private router: Router,
    public translate: TranslateService,
    private categoryService: CategoryService,
    private offerService: OfferService,
    private advertiseService: AdvertiseService,
    private localStorage: StorageService,
    private authService: UserService,
    private spinner: LoaderService,
    private toaster: ToastService,
  ) { }

  ngOnInit() { }
  async ionViewWillEnter() {
    this.search = '';
    this.user = this.localStorage.get('OBCustomer');
    this.getAllAdvertise()
    this.getAllOffer();
    this.getAllCategory();
    this.getAllSeasonalOffer();
    this.geolocation = await (await Geolocation.getCurrentPosition()).coords;
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    let obj = {
      latitude: this.geolocation.latitude,
      longitude: this.geolocation.longitude,
    };
    // this.authService.getCurrentLocation(obj).subscribe((success: any) => {
    //   this.currentLocation = success.response.results[0];
    // });
  };
  seeAllCategory() {
    this.router.navigate(['/app/tabs/category']);
  }
  getAllAdvertise() {
    this.advertiseService.getAll({}).subscribe(
      async (success) => {
        this.advertiseArr = success;
      }, (error) => {
        this.spinner.hideLoader();
      }
    )
  }
  getAllOffer() {
    this.offerService.getAll({}).subscribe(
      async (success) => {
        this.offerArr = success;
      }, (error) => {
        this.spinner.hideLoader();
      }
    )
  }
  getAllCategory() {
    this.categoryService.getAllCategory({}).subscribe(
      async (success) => {
        this.categoryArr = success;
      }, (error) => {
        this.spinner.hideLoader();
      }
    )
  }
  getAllSeasonalOffer() {
    this.advertiseService.getAllSeasonalOffer({}).subscribe(
      async (success) => {
        this.seasonalOffer = success;
      }, (error) => {
        this.spinner.hideLoader();
      }
    )
  }
  navigateToSearchShop(search) {
    this.router.navigate(['/app/tabs/search-shop'], {
      queryParams: {
        search: this.search,
      },
    });
  }
  navigateToProfilePage() {
    this.router.navigate(['/view-profile']);
  }

  navigateToMap() {
    this.router.navigate(['/map']);
  }

  doRefresh(event: any) {
    // this.getAllDataParallel();
    event.target.complete();
  }

  navigateToCategory(c) {
    this.router.navigate(['/app/tabs/category'], {
      queryParams: {
        categoryId: c,
      },
    });
  }

  navigateToSeasonalOffer() {
    this.router.navigate(['/seasonal-offers'])
  }

}















