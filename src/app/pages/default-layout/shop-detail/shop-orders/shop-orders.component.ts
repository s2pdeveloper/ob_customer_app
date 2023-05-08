import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { defaultStatus, secondaryStatus } from 'src/app/helpers/constants.helper';

@Component({
  selector: 'app-shop-orders',
  templateUrl: './shop-orders.component.html',
  styleUrls: ['./shop-orders.component.scss'],
})
export class ShopOrdersComponent implements OnInit {
  @Input() shopDetail: any;
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  search: string = null;
  orderList: any = [];

  secondaryStatus = secondaryStatus;
  defaultStatus = defaultStatus

  constructor(
    private userService: UserService, private router: Router,
    private modalCtrl: ModalController, private spinner: LoaderService,
    private toastService: ToastService, private shopService: ShopService,
  ) { }

  ngOnInit() {
    console.log("shopDetail", this.shopDetail);

  }

  ionViewWillEnter(): void {
    this.getAllOrders(false, '');
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
      shopId: this.shopDetail?.shopDetailsId
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
    let params = { shopName: this.shopDetail?.shopDetails?.shopName, shopId: this.shopDetail?.id };
    this.router.navigate(['/order-view'], { queryParams: params });
    this.dismissModal(true, '')
  }

  dismissModal(isClose = false, data) {
    this.modalCtrl.dismiss({
      'dismissed': isClose,
      ...data
    });
  }



}
