import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { AdvertiseService } from 'src/app/service/advertise/advertise.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { OfferService } from 'src/app/service/offer/offer.service';
import { forkJoin } from 'rxjs';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
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
  geolocation: { latitude: number; longitude: number; accuracy: number; altitudeAccuracy?: number; altitude?: number; speed?: number; heading?: number; };

  constructor(
    private router: Router,
    public translate: TranslateService,
    private categoryService: CategoryService,
    private offerService: OfferService,
    private advertiseService: AdvertiseService,
    private localStorage: StorageService,
    private authService: AuthService,

  ) { }

  ngOnInit() { }
  async ionViewWillEnter() {
    this.search='';
    this.user = this.localStorage.get('OBCustomer');
    this.getAllDataParallel();
    this.geolocation = await (await Geolocation.getCurrentPosition()).coords;
    this.getCurrentLocation();
  }

  doInfinite($event) { }

  getCurrentLocation() {
    let obj = {
      latitude: this.geolocation.latitude,
      longitude: this.geolocation.longitude
    }
    this.authService.getCurrentLocation(obj).subscribe((success: any) => {
      this.currentLocation = success.response.results[0];
    });
  }

  getAllDataParallel() {
    let response1 = this.categoryService.getAll({});
    let response2 = this.offerService.getAll({});
    let response3 = this.advertiseService.getAll({});
    let response4 = this.authService.profile(this.user._id);
    return forkJoin([response1, response2, response3, response4]).subscribe(
      (success) => {
        this.categoryArr = success[0].rows;
        this.offerArr = success[1].rows;
        this.advertiseArr = success[2].rows;
        this.userDetails = success[3];
      }
    );
  }

  navigateToSearchShop(search) {
    this.router.navigate(['/app/tabs/search-shop'], {
      queryParams: {
        search: this.search,
      },
    });
  }

  seeAllCategory() {
    this.router.navigate(['/category']);
  }

  navigateToProfilePage() {
    this.router.navigate(['/view-profile']);
  }

  navigateToMap() {
    this.router.navigate(['/map']);
  }

  doRefresh(event: any) {
    this.advertiseArr = [];
    this.getAllDataParallel();
    event.target.complete();
  }

  categoryToCategoryPage(c) {
    this.router.navigate(['/category'], {
      queryParams: {
        categoryId: c,
      },
    });
  }
}
