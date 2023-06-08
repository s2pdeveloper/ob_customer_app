import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SocketService } from 'src/app/core/services/socket.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { socketOnEvents } from 'src/app/helpers';
@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  @Input() shopDetail: any;
  maxDate = moment().format();
  user: any;
  dateTime: any;

  constructor(
    private userService: UserService,
    private socketService: SocketService,
    private modalCtrl: ModalController,
    private toastService: ToastService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
   }

  dismissModal(isClose = false, data) {
    this.modalCtrl.dismiss({
      'dismissed': isClose,
      ...data
    });
  }

  navigateTo() {
    const msg = `Dear ${this.shopDetail.shopDetails.shopName},\n please book an appointment ${moment(this.dateTime).format('hh:mm a, DD MMM YYYY') }\n`;
    let message = {
      shopId: this.shopDetail._id,
      message: msg,
      catalogue: []
    };
    this.receiveMessage();
    this.socketService.emitEvent(socketOnEvents.CREATE_ORDER, message);
  }
  receiveMessage() {
    this.socketService.listenEvent(socketOnEvents.CREATE_ORDER).subscribe({
      next: (result: any) => {
        this.dismissModal(true, { shopId: this.shopDetail._id, orderId: result.data._id });
      },
      error: (error) => {
        this.toastService.errorToast(error);
      },
    })
  }

}
