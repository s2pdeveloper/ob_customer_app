import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/service/shop/shop.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { Socket } from 'ngx-socket-io';
import { ChatService } from 'src/app/service/chat/chat.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  loaded: boolean = false;
  user: any;
  shopId: any;
  page: number = 1;
  pageSize: number = 10;
  search = '';
  shopDetails: any;
  catalogueArr: any = [];
  selectAll: boolean;
  subCategoryArr: any = [];

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private shopService: ShopService,
    private localStorage: StorageService,
    private spinner: LoaderService,
    private socket: Socket,
    private chatService: ChatService,
    public translate: TranslateService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.user = this.localStorage.get('OBCustomer');
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shopId = params._id
      this.getShopById(params._id);
    });
  }

  async getShopById(_id) {
    this.shopService.getByIdShop(_id).subscribe(async (success: any) => {
      this.subCategoryArr = success.subCatData.map((y, i) => {
        y.isActive = false;
        if (i == 0) {
          y.isActive = true;
          this.getCatalogueBySubCategoryId(y._id, null);
        }
        return y;
      });
      await this.spinner.hideLoader();
    });
  }

  async getCatalogueBySubCategoryId(_id, index) {
    let obj = {
      shopId: this.shopId,
      subCategoryId: _id
    }
    this.shopService
      .getCatalogueBySubCategoryId(obj)
      .subscribe(async (success: any) => {
        this.catalogueArr = success.rows.map((x) => {
          x.isChecked = false;
          return x;
        });
        // ----------------------------------- //
        this.subCategoryArr.forEach((x) => {
          if (x.id === _id) {
            x.isActive = true;
          } else {
            x.isActive = false;
          }
        });
        await this.spinner.hideLoader();
      });
  }

  navigateTo() {
    let msg = '';
    let arr = this.catalogueArr.filter((x) => x.isChecked == true);
    if (arr.length < 1) {
      this.toaster.errorToast('Plz select at least one product');
      return;
    }
    let amount = 0;
    let description = '';
    // msg += `Dear ${arr[0].shopId.shopName},\n ${arr[0].shopId.fullName},\n would like to buy `;
    msg += `Dear merchant,\n i would like to buy \n`;
    for (let i = 0; i < arr.length; i++) {
      const catTitle = arr[i].title;
      // const catPrice = arr[i].price;
      msg += `${catTitle}`;
      if (i != arr.length - 1) {
        msg += ` , \n `;
      }
      description += `${catTitle}`;
      if (i != arr.length - 1) {
        description += `,`;
      }
      // amount += catPrice;
    }

    let message = {
      shopId: arr[0].shopId._id,
      message: msg,
      description: description,
      // amount: amount,
    };
    this.chatService.create(message).subscribe((success) => {
      this.spinner.hideLoader();
      console.log("join success",success);
      
      // join
      this.socket.emit('join', { room: success.orderId, user: this.user._id });
      this.router.navigate(['/chat-view'], {
        queryParams: {
          shopId: arr[0].shopId._id,
          shopName: arr[0].shopId.shopName,
          roomName: success.orderId, //join
        },
      });
    });
  }

  navigateToHome() {
    this.router.navigate(['/app/tabs/landing-page']);
  }
}
