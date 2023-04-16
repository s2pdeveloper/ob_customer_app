import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { BusinessTypeService } from 'src/app/service/businessType/businessType.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { ShopService } from 'src/app/service/shop/shop.service';
import { StorageService } from 'src/app/core/services';
import { OffersService } from 'src/app/service/offers/offers.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AdvertiseService } from 'src/app/core/services/advertiseservice';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  user: any;
  search: string = '';
  loaded: boolean = true;
  offerDetails: any = [];
  advertise: any = [];
  category: any = [];
  userDetails: any = {};
  constructor(
    private router: Router,
    public translate: TranslateService,
    private categoryService: CategoryService,
    private offerService: OffersService,
    private advertiseService: AdvertiseService,
    private localStorage: StorageService,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.user = this.localStorage.get('OBUser');
    this.AllCategory();
    this.getAllOffer();
    this.getAllAdvertise();
  }
  buttonSlide = {
    slidesPerView: 4,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
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

  doRefresh(event: any) {
    this.AllCategory();
    event.target.complete();
  }

  AllCategory() {
    this.categoryService.getAll({}).subscribe((success) => {
      this.category = success
    });
  };
  seeAllCategory() {
    this.router.navigate(['/app/tabs/category']);
  }
  navigateToMap() {
    this.router.navigate(['/map']);
  }

  seeAll() {
    this.router.navigate(['/category'], {
      queryParams: {
        // _id: this.selectedBusinessId,
        // name: this.selectedBusinessName
      }
    })
  }


  getCategoryIdWithShop(ev) {
    let params = ev;
    console.log(params);
    this.router.navigate(['/search-shop'], { queryParams: { params } });
  }

  getAllOffer() {
    this.loaded = false;
    this.offerService.getAll({}).subscribe((success) => {
      this.offerDetails = success;
      this.loaded = true;
    });
  }
  getAllAdvertise() {
    this.loaded = false;
    this.advertiseService.getAll({}).subscribe((success) => {
      console.log("success", success);

      this.advertise = success;
      this.loaded = true;
    });
  }
  navigateToProfilePage() {
    this.router.navigate(['/view-profile']);
  }
  navigateToSearchShop(search) {
    this.router.navigate(['/app/tabs/search-shop'], {
      queryParams: {
        search: this.search,
      },
    });
  }

}















