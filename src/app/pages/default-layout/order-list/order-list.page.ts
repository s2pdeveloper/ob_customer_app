import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(
    private router: Router,
    // private change: Chang,
    private userService: UserService,
    private socketService: SocketService,
    public translate: TranslateService
  ) {
    this.receiveData();
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
    this.socketService.emitEvent(socketOnEvents.LIST_ORDER, params)
  }

  receiveData() {
    this.socketService.listenEvent(socketOnEvents.LIST_ORDER).subscribe({
      next: (result: any) => {

        for (let i = 0; i < result.data.length; i++) {
          this.dataList.push(result.data[i]);
        }
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
}
