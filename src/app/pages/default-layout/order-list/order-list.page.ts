import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from 'src/app/core/services/order.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { UserService } from 'src/app/core/services/user.service';
import { socketOnEvents } from 'src/app/helpers';
import { defaultStatus } from 'src/app/helpers/constants.helper';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;

  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  searchText: string;
  segment: string = 'new';
  dataList: any = [];
  user: any;
  defaultStatus = defaultStatus;
  interval: any;
  public loaded = false;

  constructor(
    private router: Router,
    private animationCtrl: AnimationController,
    private userService: UserService,
    private socketService: SocketService,
    public translate: TranslateService,
    private orderService: OrderService
  ) {
    // this.receiveData();
    this.interval = setInterval(() => {
      let params = { page: this.page, pageSize: this.pageSize, status: this.segment };
      if (this.searchText) {
        params['searchShop'] = this.searchText;
      }
      // this.socketService.emitEvent(socketOnEvents.LIST_ORDER, params)
      this.orderService.list(params).subscribe({
        next: (result: any) => {
          for (let i = 0; i < result.data.length; i++) {
            let index = this.dataList.findIndex((e) => e.id === result.data[i].id);
            if (index > -1) {
              this.dataList[index].secondaryStatus = result.data[i].secondaryStatus;
              this.dataList[index].lastMessage = result.data[i].lastMessage;
              this.dataList[index].unreadMessageCount = result.data[i].unreadMessageCount;
            }
            else {
              this.dataList.push(result.data[i]);
            }
          }
        },
        error: (error) => {
          console.log(error)
        },
      })
    }, 10000)
  }

  ionViewDidLeave(): void {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.emitToLoad();
  }

  ionViewWillEnter() {
    this.searchText = '';
    this.user = this.userService.getCurrentUser();
  }

  emitToLoad() {
    let params = { page: this.page, pageSize: this.pageSize, status: this.segment };
    if (this.searchText) {
      params['search'] = this.searchText;
    }
    // this.socketService.emitEvent(socketOnEvents.LIST_ORDER, params)
    this.orderService.list(params).subscribe({
      next: (result: any) => {
        for (let i = 0; i < result.data.length; i++) {
          this.dataList.push(result.data[i]);
        }
        this.loaded = true;
      },
      error: (error) => {
        console.log(error)
      },
    })
  }

  receiveData() {
    this.socketService.listenEvent(socketOnEvents.LIST_ORDER).subscribe({
      next: (result: any) => {
        for (let i = 0; i < result.data.length; i++) {
          this.dataList.push(result.data[i]);
        }
        console.log("this.datalist", this.dataList);
      },
      error: (error) => {
        console.log(error)
      },
    })
  }

  navigateTo(item) {
    this.router.navigate(['/order-view'], {
      queryParams: {
        shopId: item.shopId,
        shopName: item.shopDetails?.shopName,
        orderId: item._id,
      },
    });
  }

  onSearch() {
    this.page = 1;
    this.dataList = [];
    this.emitToLoad();
    console.log('in search')
  }

  doRefresh(event: any) {
    this.page = 1;
    this.dataList = [];
    this.emitToLoad();
    event.target.complete();
    console.log('in doRefresh')
  }

  doInfinite(event) {
    this.page++;
    this.emitToLoad();
    event.target.complete();
    console.log('in doInfinite')
  }
  async segmentChanged(event) {
    this.searchText = null;
    this.segment = event.detail.value;
    this.onSearch();
  }

  // for msg model
  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;
    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

}
