import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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
  segment: any;
  shopConversationList: any = [];
  start: number = 0;
  limit: number = 20;
  searchText: string;

  constructor(
    private router: Router,
    private chatService: ChatService,
    private spinner: LoaderService,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.getAllShop();
  }

  getAllShop() {
    this.spinner.showLoader();
    this.chatService.getChatShopByCustomerId().subscribe((success) => {
      console.log('success shop conversationList--------', success);
      // this.conversationList = success.rows;
      this.shopConversationList = success.data;
      this.spinner.hideLoader();
    });
  }

 async segmentChanged(event) { }

  // navigate to chat view
  navigateTo(item) {
    this.router.navigate(['/chat-view'],
      {
        queryParams: {
          shopId: item._id,
          shopName: item.shopName,
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
      // this.getAllCustomer(false, "");
      event.target.complete();
    }
  
    doInfinite(event) {
      console.log('In do');
      this.page++;
      // this.getAllCustomer(true, event);
      event.target.disabled = true;
      this.infiniteScroll.disabled = true;
      event.target.complete();
    }
  
    onSearch() {
      this.shopConversationList = [];
      this.start = 0;
      // this.getAllCustomer(false, "");
    }

}
