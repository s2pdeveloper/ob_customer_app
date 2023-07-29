import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { SocketService } from 'src/app/core/services/socket.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { defaultStatus, socketOnEvents } from 'src/app/helpers';
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
  defaultStatus = defaultStatus;

  constructor(
    private router: Router,
    private userService: UserService,
    private socketService: SocketService,
    private modalCtrl: ModalController,
    private toastService: ToastService,
    private toaster: ToastService,
    private alertController: AlertController,

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
    if (!this.user.firstName || !this.user.lastName || this.user.status == defaultStatus.PENDING) {
      // this.toaster.warningToast("To process your order please complete your profile first.");
      this.bookAppointmentAlert();
    } else {
      const msg = `Dear ${this.shopDetail.shopDetails.shopName},\n please book an appointment ${moment(this.dateTime).format('hh:mm a, DD MMM YYYY')}\n`;
      let message = {
        shopId: this.shopDetail._id,
        message: msg,
        catalogue: []
      };
      this.receiveMessage();
      this.socketService.emitEvent(socketOnEvents.CREATE_ORDER, message);
    }
  }
  async bookAppointmentAlert() {
    const alert = await this.alertController.create({
      header: 'Profile Incomplete',
      message: 'To process your order please complete your profile first !!!',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.navigateToProfile();
          },
        },
      ],
    });
    await alert.present();
  }
  navigateToProfile() {
    const path: string = `/edit-profile`;
    this.router.navigate([path]);
    this.dismissModal(false, null);
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
