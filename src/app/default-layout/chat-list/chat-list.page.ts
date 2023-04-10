import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Socket } from 'ngx-socket-io';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';
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
  segment: string = 'new';
  shopConversationList: any = [];
  user: any;

  constructor(
    private router: Router,
    private chatService: ChatService,
    private spinner: LoaderService,
    private userService: UserService,
    private socket: Socket,
    public translate: TranslateService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.search='';
    this.user = this.userService.getCurrentUser();
    this.getChatShopByCustomerId(false);
  }

  getChatShopByCustomerId(isFirstLoad: boolean, event?: any) {
    // this.spinner.showLoader();
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      status: this.segment,
      // direction: -1
    };
    // if (this.segment === "new") {
    //   obj['status'] = this.segment,
    //   obj['direction'] = 1
    // }
  this.chatService.getChatShopByCustomerId(obj).subscribe( (success) => {
      console.log("success...........",success);

      this.collection = success.count;
      if (this.page == 1) {
        this.shopConversationList = success.rows;
      } else {
        this.shopConversationList = [
          ...this.shopConversationList,
          ...success.rows,
        ];
      }
      if (isFirstLoad) event?.target.complete();
      if (this.shopConversationList.length >= this.collection && event) {
        event.target.disabled = true;
      }
       this.spinner.hideLoader();
    });
  }

  navigateTo(item) {
  this.socket.emit('join', { room: item._id, user: this.user._id });
    this.router.navigate(['/chat-view'], {
      queryParams: {
        shopId: item.shopId._id,
        shopName: item.shopId?.shopName,
        roomName: item._id,
        status:item.status
      },
    });
  }

  onSearch() {
    this.page = 1;
    this.shopConversationList = [];
    this.getChatShopByCustomerId(false, '');
  }

  doRefresh(event: any) {
    this.page = 1;
    this.shopConversationList = [];
    this.getChatShopByCustomerId(false, '');
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.getChatShopByCustomerId(true, event);
    event.target.complete();
  }
  
}
