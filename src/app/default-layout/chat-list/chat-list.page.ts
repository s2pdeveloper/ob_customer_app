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
  search = '';
  item: any;
  segment: any = 'new';
  shopConversationList: any = [];
  start: number = 0;
  limit: number = 20;
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
    this.getAllShopList(false);
  }

  getAllShopList(isFirstLoad: boolean, event?: any) {
    this.spinner.showLoader();
    let obj = {
      search: this.search,
      status: this.segment,
    };
    this.chatService.getChatShopByCustomerId(obj).subscribe((success) => {
      this.shopConversationList = success.rows;
      this.spinner.hideLoader();
    });
  }



  // navigate to chat view
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

  /**
   * refresh page content
   * @param event
   */
  doRefresh(event: any) {
    this.shopConversationList = [];
    this.start = 0;
    this.getAllShopList(false, '');
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.getAllShopList(true, event);
    event.target.disabled = true;
    this.infiniteScroll.disabled = true;
    event.target.complete();
  }

  onSearch() {
    this.shopConversationList = [];
    this.start = 0;
    this.getAllShopList(false, '');
  }
}
