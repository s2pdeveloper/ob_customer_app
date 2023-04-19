import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { ShopService } from 'src/app/service/shop/shop.service';
import { LoaderService } from 'src/app/core/services/loader.service';
// import { Socket } from 'ngx-socket-io';
// import { ChatService } from 'src/app/service/chat/chat.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private shopService: ShopService,
    private userService: UserService,
    private spinner: LoaderService,
    // private socket: Socket,
    // private chatService: ChatService,
    public translate: TranslateService,
    private storageService: StorageService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shopId = params.shopId
      if (params.shopId) {
        this.getShopCatalogue()
      }
    });
  }
  async getShopCatalogue() {
    this.shopService.getShopCatalogue({ shopId: this.shopId }).subscribe(async (success: any) => {
      this.shopCatalogue = success.data;
      await this.spinner.hideLoader();
    });
  }

  navigateToCheckout() {
    let filteredData = this.shopCatalogue.filter(x => x.isChecked);
    this.storageService.set("orderData", filteredData)
    this.router.navigate(['/checkout'], { queryParams: { shopId: this.shopId } });
  }
  navigateToChat() {
    let msg = '';
    let arr = this.shopCatalogue.filter((x) => x.isChecked == true);
    if (arr.length < 1) {
      this.toaster.errorToast('Plz select at least one product');
      return;
    }
    let amount = 0;
    let description = '';
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
      shopId: this.shopId,
      message: msg,
      description: description,
      // amount: amount,
    };
    // this.chatService.create(message).subscribe((success) => {
    //   this.spinner.hideLoader();
    //   console.log("join success",success);

    //   // join
    //   this.socket.emit('join', { room: success.orderId, user: this.user._id });
    this.router.navigate(['/chat-view'], {
      //     queryParams: {
      //       shopId: arr[0].shopId._id,
      //       shopName: arr[0].shopId.shopName,
      //       roomName: success.orderId, //join
      //     },
      //   });
    });
  }

  navigateToHome() {
    this.router.navigate(['/app/tabs/home']);
  }

  onSearch() {
    this.page = 1;
    this.shopCatalogue = [];
    this.getShopCatalogue();
  }

  doRefresh(event: any) {
    this.page = 1;
    this.shopCatalogue = [];
    this.getShopCatalogue();
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.getShopCatalogue();
    event.target.complete();
  }

}
