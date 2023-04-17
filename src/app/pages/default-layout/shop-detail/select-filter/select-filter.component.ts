import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Socket } from 'ngx-socket-io';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';
// import { ChatService } from 'src/app/service/chat/chat.service';
@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  @Input() shopDetail: any;
  maxDate = moment().format();
  user: any;
  time1: any;
  time2: any;
  formatTime: string;
  revDate: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private spinner: LoaderService,
    private socket: Socket,
    // private chatService: ChatService,
    private modalCtrl: ModalController,
    public translate: TranslateService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
  }

  dismissModal(isClose) {
    this.modalCtrl.dismiss({
      'dismissed': isClose,
    });
  }

  getDate(ev) {
    this.revDate = ev.detail.value.split('T')[0].replace(/(\d{4})-(\d\d)-(\d\d)/, "$3-$2-$1");
    this.time1 = ev.detail.value.split('T')[1];
    this.time2 = this.time1.split('+')[0];
    this.formatTime = moment(this.time2, ["HH.mm"]).format("hh:mm a");
  }

  navigateTo() {
    let msg = '';
    msg += `Dear merchant,\n please book an appointment Date:- ${this.revDate} and Time:- ${this.formatTime}\n`;
    this.socket.emit('join', { room: this.shopDetail._id, user: this.user._id });

    let message = {
      shopId: this.shopDetail._id,
      message: msg,
    };
    // this.chatService.create(message).subscribe((success) => {
    //   this.spinner.hideLoader();
    //   console.log("join success", success);

    //   // join
    //   this.socket.emit('join', { room: success.orderId, user: this.user._id });
    //   this.router.navigate(['/chat-view'], {
    //     queryParams: {
    //       shopId: this.shopDetail._id,
    //       shopName: this.shopDetail.shopName,
    //       roomName: success.orderId,
    //     },
    //   });
    //   this.dismissModal('isClose')
    // });
  }


}
