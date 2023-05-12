import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { defaultStatus, secondaryStatus } from 'src/app/helpers';

@Component({
  selector: 'app-shop-orders',
  templateUrl: './shop-orders.page.html',
  styleUrls: ['./shop-orders.page.scss'],
})
export class ShopOrdersPage implements OnInit {

  @Input() shopDetail: any;
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  search: string = null;
  orderList: any = [];
  shopUserId: string = null;
  secondaryStatus = secondaryStatus;
  defaultStatus = defaultStatus
  shopName: string = '';
  userTableId: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService, private router: Router,
    private modalCtrl: ModalController, private spinner: LoaderService,
    private toastService: ToastService, private shopService: ShopService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shopName = params.shopName;
      this.userTableId = params.shopId;
      if (params.shopUserId) {
        this.shopUserId = params.shopUserId;
        this.getAllOrders(false, '');
      }
    });
  }

  ionViewDidLeave(): void {
    this.orderList = [];
    this.page = 1;
    this.search = '';
  }

  onSearch() {
    this.page = 1;
    this.orderList = [];
    this.getAllOrders(false, '');
  }

  doRefresh(event) {
    this.page = 1;
    this.orderList = [];
    this.getAllOrders(false, "");
    event.target.complete();
  }

  doInfinite(event) {
    if (this.orderList.length < this.collection) {
      this.page++;
      this.getAllOrders(false, event);
    } else {
      event.target.complete();
    }
  }

  async getAllOrders(isFirstLoad: boolean, event?: any) {
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      shopId: this.shopUserId
    };
    if (this.search) {
      obj['search'] = this.search
    }
    this.shopService.orderList(obj).subscribe(async (success) => {
      this.collection = success.count;
      if (this.orderList.length < this.collection) {
        for (let i = 0; i < success.data.length; i++) {
          this.orderList.push(success.data[i]);
        }
      }
      if (isFirstLoad)
        event.target.complete();
      if (success.data.length === 0 && event) {
        event.target.disabled = true;
      }
      await this.spinner.hideLoader();
    }, error => {
      this.spinner.hideLoader();
      this.toastService.errorToast(error);
    }
    )
  };

  goToChat() {
    let params = { shopName: this.shopName, shopId: this.userTableId };
    this.router.navigate(['/order-view'], { replaceUrl: true, queryParams: params });
  }
  navigateToOrder() {
    this.router.navigate(['/app/tabs/order-list'], { replaceUrl: true });
  }

  navigateToChat(item) {
    this.router.navigate(['/order-view'], {
      queryParams: {
        orderId: item._id,
        shopId: item.shopDetails._id,
        shopName: item.shopDetails?.shopName,
      },
    });
  }
}
