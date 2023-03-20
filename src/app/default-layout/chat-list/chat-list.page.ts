import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Socket } from 'ngx-socket-io';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ChatService } from 'src/app/service/chat/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  search = '';
  item: any;
  segment: any = 'new';
  shopConversationList: any = [];
  user: any;

  constructor(
    private router: Router,
    private chatService: ChatService,
    private spinner: LoaderService,
    private localStorage: StorageService,
    private socket: Socket,
    public translate: TranslateService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.user = this.localStorage.get('OBCustomer');
    this.getAllShopListByOrderId(false);
  }

  getAllShopListByOrderId(isFirstLoad: boolean, event?: any) {
    this.spinner.showLoader();
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      status: this.segment,
    };
    this.chatService.getChatShopByCustomerId(obj).subscribe((success) => {
      this.shopConversationList = success.rows;
      this.collection = success.count;
      if (this.page == 1) {
        this.shopConversationList = success.rows;
      } else {
        this.shopConversationList = [...this.shopConversationList, ...success.rows];
      }
      if (isFirstLoad) event?.target.complete();
      if (this.shopConversationList.length >= this.collection && event) {
        event.target.disabled = true;
      }
    });
  }

  navigateTo(item) {
    // join
    this.socket.emit('join', { room: item._id, user: this.user._id });
    this.router.navigate(['/chat-view'], {
      queryParams: {
        shopId: item.shopId._id,
        shopName: item.shopId?.shopName,
        roomName: item._id,
      },
    });
  }

  onSearch() {
    this.shopConversationList = [];
    this.page = 0;
    this.getAllShopListByOrderId(false, '');
  }
 
  doRefresh(event: any) {
    this.shopConversationList = [];
    this.page = 0;
    this.getAllShopListByOrderId(false, '');
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.getAllShopListByOrderId(true, event);
    event.target.complete();
  }

}
