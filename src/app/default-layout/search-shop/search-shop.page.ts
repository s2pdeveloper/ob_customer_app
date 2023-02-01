import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';
import { ModalController, } from '@ionic/angular';
import { SubCategoryComponent } from 'src/app/modal/sub-category/sub-category.component';
@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {
  page: number = 1;
  pageSize: number = 10;
  search: string = '';
  businessTypeId: string = '';
  categoryId: string = '';
  subCategoryId: string = '';
  collection: number = 0;
  shopArr: any = [
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "state": "",
            "country": "",
            "pinCode": ""
        },
        "gMap": {
            "lat": null,
            "lng": null
        },
        "links": {
            "facebook": "",
            "insta": "",
            "youtube": ""
        },
        "schedule": {
            "day": "",
            "open": "",
            "close": "",
            "startTime": "",
            "endTime": ""
        },
        "_id": "63c903fcd0ed66cd90e2cd84",
        "businessTypeId": "637f4ccb096902ec8e8f00ad",
        "categoryId": "638aff196cab6086877a6824",
        "shopName": "Cloth Store",
        "firstName": "Milka ",
        "lastName": "Singh",
        "email": "mk@gmail.com",
        "role": "SHOP",
        "mobile": "5555555555",
        "aboutUs": "",
        "status": "active",
        "image": null,
        "bannerImages": null,
        "password": "$2b$08$AhDaxzRX0xdRWyr21yBGWu4/IFCS6Dk2Rw8mendck2IUXbNyFlRhC",
        "otp": null,
        "mPin": null,
        "gstNumber": "",
        "yearOfEstablished": null,
        "isFirstLogin": false,
        "isVerify": false,
        "count": 0,
        "createdAt": "2023-01-19T08:49:00.402Z",
        "updatedAt": "2023-01-21T07:04:55.923Z",
        "__v": 0,
        "fullName": "Milka  Singh",
        "id": "63c903fcd0ed66cd90e2cd84"
    },
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "state": "",
            "country": "",
            "pinCode": ""
        },
        "gMap": {
            "lat": null,
            "lng": null
        },
        "links": {
            "facebook": "",
            "insta": "",
            "youtube": ""
        },
        "schedule": {
            "day": "",
            "open": "",
            "close": "",
            "startTime": "",
            "endTime": ""
        },
        "_id": "63bd4a56839db6fd22faec39",
        "businessTypeId": "63a1a3b0bbfdf11ea09497ee",
        "categoryId": "63a1a481bbfdf11ea09497f9",
        "shopName": "Aqua cool ",
        "firstName": "Aman",
        "lastName": "Pal",
        "email": "amn@gmail.com",
        "role": "SHOP",
        "mobile": "9632587412",
        "aboutUs": "",
        "status": "active",
        "image": "https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673349708200-Screenshot_20230108_221003.png",
        "bannerImages": "https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673349713646-Screenshot_20230110_104149.png",
        "password": "$2b$08$Eu7mXLzb2tYKoDsCZFgfTepaE3zFmJereOenhHqeOQkpsXEcm.qSy",
        "otp": null,
        "mPin": null,
        "gstNumber": "",
        "yearOfEstablished": null,
        "isFirstLogin": false,
        "isVerify": false,
        "count": 0,
        "createdAt": "2023-01-10T11:21:58.787Z",
        "updatedAt": "2023-01-10T11:21:58.787Z",
        "__v": 0,
        "fullName": "Aman Pal",
        "imageUrl": "http://localhost:2000/assets/shopLogos/https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673349708200-Screenshot_20230108_221003.png",
        "bannerImagesUrl": "http://localhost:2000/assets/shopLogos/https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673349713646-Screenshot_20230110_104149.png",
        "id": "63bd4a56839db6fd22faec39"
    },
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "state": "",
            "country": "",
            "pinCode": ""
        },
        "gMap": {
            "lat": null,
            "lng": null
        },
        "links": {
            "facebook": "",
            "insta": "",
            "youtube": ""
        },
        "schedule": {
            "day": "",
            "open": "",
            "close": "",
            "startTime": "",
            "endTime": ""
        },
        "_id": "63bd4666839db6fd22faeb08",
        "businessTypeId": "63a1a3b0bbfdf11ea09497ee",
        "categoryId": "63b81a4981015cad380a0020",
        "shopName": "AUTOMOBILE",
        "firstName": "Haresh",
        "lastName": "Gahane",
        "email": "haresh@gmail.com",
        "role": "SHOP",
        "mobile": "1234567895",
        "aboutUs": "",
        "status": "active",
        "image": "https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348704325-Screenshot (2) - Copy.png",
        "bannerImages": "https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348708694-Screenshot (12).png",
        "password": "$2b$08$RsVU4r8hlb1GOGjwRxXWkOhZ5njqwt59uRd4Bff7oJq2x1OOrEW0S",
        "otp": null,
        "mPin": null,
        "gstNumber": "",
        "yearOfEstablished": null,
        "isFirstLogin": false,
        "isVerify": false,
        "count": 0,
        "createdAt": "2023-01-10T11:05:10.389Z",
        "updatedAt": "2023-01-11T06:15:30.312Z",
        "__v": 0,
        "lastLoginAt": "2023-01-11T06:15:30.305Z",
        "fullName": "Haresh Gahane",
        "imageUrl": "http://localhost:2000/assets/shopLogos/https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348704325-Screenshot (2) - Copy.png",
        "bannerImagesUrl": "http://localhost:2000/assets/shopLogos/https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348708694-Screenshot (12).png",
        "id": "63bd4666839db6fd22faeb08"
    },
    {
        "address": {
            "line2": null,
            "line1": "Katol",
            "city": "Nagpur",
            "state": "Maharastra",
            "country": "India",
            "pinCode": "441302"
        },
        "gMap": {
            "lat": null,
            "lng": null
        },
        "links": {
            "facebook": "",
            "insta": "",
            "youtube": ""
        },
        "schedule": {
            "day": "Monday",
            "open": "10",
            "close": "07",
            "startTime": "10",
            "endTime": "07"
        },
        "_id": "63bd45f7839db6fd22faeafd",
        "businessTypeId": "63a1a3b0bbfdf11ea09497ee",
        "categoryId": "63b81a4981015cad380a0020",
        "shopName": "MED+",
        "firstName": "Paritosh",
        "lastName": "Bangadkar",
        "email": "paritoshbangadkar@gmail.com",
        "role": "SHOP",
        "mobile": "7028874108",
        "aboutUs": "hgj",
        "status": "active",
        "image": "https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348588200-Screenshot (2) - Copy.png",
        "bannerImages": "https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348594056-Screenshot (9).png",
        "password": "$2b$08$YmffO5SIqfQ2ACH.hJbpbeR99Yq3tXAtZOSq4uRJ8Yucv.ZQUFWPC",
        "otp": null,
        "mPin": null,
        "gstNumber": "",
        "yearOfEstablished": null,
        "isFirstLogin": false,
        "isVerify": false,
        "count": 0,
        "createdAt": "2023-01-10T11:03:19.265Z",
        "updatedAt": "2023-01-31T09:45:43.391Z",
        "__v": 0,
        "lastLoginAt": "2023-01-31T09:45:43.389Z",
        "fullName": "Paritosh Bangadkar",
        "imageUrl": "http://localhost:2000/assets/shopLogos/https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348588200-Screenshot (2) - Copy.png",
        "bannerImagesUrl": "http://localhost:2000/assets/shopLogos/https://obhaiya-assets.s3.ap-south-1.amazonaws.com/post/1673348594056-Screenshot (9).png",
        "id": "63bd45f7839db6fd22faeafd"
    }
];
  loaded: boolean = false;
  shopDetails: any;

  constructor(
    private router: Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    public modelController: ModalController,
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.subCategoryId = params._id ?? "";
      if (params.shopId) {
        this.getShopById(params.shopId);
      } else {
        this.businessTypeId = params.businessTypeId ?? "";
        this.categoryId = params.categoryId ?? "";
        // this.getAllShop(false);
      }
    });
  }

  getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      search: this.search,
      businessTypeId: this.businessTypeId,
      categoryId: this.categoryId,
      subCategoryId: this.subCategoryId,
    };
    console.log('obj----', obj);
    this.shopService.getAllShop(obj).subscribe((success) => {
      console.log('success shop', success);
      this.shopArr = success.rows;
    });
  }

  getShopById(_id) {
    console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByCategoryIdWithShop(_id).subscribe((success: any) => {
      this.shopArr = success.payload.shop;
      console.log('shop by id----categoryId', this.shopArr);
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

  onSearch() {
    this.page = 1;
    this.shopArr = [];
    this.getAllShop(false, '');
  }

  doRefresh(event) {
    this.page = 1;
    this.shopArr = [];
    // this.getAllShop(false);
    event.target.complete();
  }

  // doInfinite(event) {
  //   this.page++;
  //   this.getAllShop(true, event);
  //   event.target.complete();
  // }


  async openSubCategoryModel() {
   let model = await this.modelController.create({
      component: SubCategoryComponent,
    });
    await model.present();

  }



}
