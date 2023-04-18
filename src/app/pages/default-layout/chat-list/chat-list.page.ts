import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { UserService } from 'src/app/core/services/user.service';
import { socketOnEvents } from 'src/app/helpers';
// import { ChatService } from 'src/app/service/chat/chat.service';

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
  searchText: string;
  segment: string = 'new';
  dataList: any = [];
  user: any;

  constructor(
    private router: Router,
    private spinner: LoaderService,
    private userService: UserService,
    private socketService: SocketService,
    public translate: TranslateService
  ) {
    this.receiveData();
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.searchText = '';
    this.user = this.userService.getCurrentUser();
    this.emitToLoad();
  }

  emitToLoad() {
    let params = { page: this.page, pageSize: this.pageSize };
    if (this.searchText) {
      params['search'] = this.searchText;
    }
    this.socketService.emitEvent(socketOnEvents.LIST_ORDER, params)
  }

  receiveData() {
    this.socketService.listenEvent(socketOnEvents.LIST_ORDER).subscribe({
      next(value) {
        console.log(value)
      },
      error(error) {
        console.log(error)
      },
    })
  }

  navigateTo(item) {
    // this.socket.emit('join', { room: item._id, user: this.user._id });
    //   this.router.navigate(['/chat-view'], {
    //     queryParams: {
    //       shopId: item.shopId._id,
    //       shopName: item.shopId?.shopName,
    //       roomName: item._id,
    //       status:item.status
    //     },
    //   });
  }

  onSearch() {
    this.page = 1;
    this.dataList = [];
    this.emitToLoad();
  }

  doRefresh(event: any) {
    this.page = 1;
    this.dataList = [];
    this.emitToLoad();
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.emitToLoad();
    event.target.complete();
  }

}
