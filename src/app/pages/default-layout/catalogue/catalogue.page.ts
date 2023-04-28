import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
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
  ionViewDidLeave(): void {
    this.shopCatalogue = [];
    console.log("enter in ionViewDidLeave", this.shopCatalogue);
    this.page = 1;
  }
  ionViewWillEnter() {
    this.shopCatalogue = [...this.shopCatalogue];

    console.log("enter in ionViewWillEnter", this.shopCatalogue);
    this.user = this.userService.getCurrentUser();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shopId = params.shopId
      if (params.shopId) {
        this.getShopCatalogue(false, '')
      }
    });
  }

  onSearch() {
    this.page = 1;
    this.shopCatalogue = [];
    this.getShopCatalogue(false, '');
  }

  doRefresh(event: any) {
    this.page = 1;
    this.shopCatalogue = [];
    this.getShopCatalogue(false, '');
    event.target.complete();
  }

  doInfinite(event) {
    if (this.shopCatalogue.length < this.collection) {
      this.page++;
      this.getShopCatalogue(false, event);
    } else {
      event.target.complete();
    }
  }
  async getShopCatalogue(isFirstLoad: boolean, event?: any) {
    this.shopService.getShopCatalogue({ page: this.page, pageSize: this.pageSize, shopId: this.shopId }).subscribe(async (success: any) => {
      this.collection = success.count;
      for (let i = 0; i < success.data.length; i++) {
        this.shopCatalogue.push(success.data[i]);
      }
      if (isFirstLoad)
        event.target.complete();
      if (success.data.length === 0 && event) {
        event.target.disabled = true;
      }
      await this.spinner.hideLoader();
    });
  }

  navigateToCheckout() {
    let filteredData = this.shopCatalogue.filter(x => x.isChecked);
    if (filteredData.length > 0) {
      this.storageService.set("orderData", filteredData)
      this.router.navigate(['/checkout'], { queryParams: { shopId: this.shopId } });
    } else {
      this.toaster.warningToast("please select at least one product")
    }
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
    };
    this.router.navigate(['/chat-view'], {
    });
  }

  navigateToHome() {
    this.router.navigate(['/app/tabs/home']);
  }


}
