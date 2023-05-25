import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
// import { NotificationService } from 'src/app/core/services/notification.service';
// import { SpinnerService } from 'src/app/core/services/spinner.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  dataList: any = [];
  start: number = 0;
  limit: number = 10;
  constructor(
    // private notificationService:  NotificationService,
     private router: Router,
     private modalController: ModalController,
    // private spinnerService: SpinnerService,
     private toastService: ToastService, 
     public translate: TranslateService) { }


  ngOnInit() {
  }

  async ionViewDidEnter() {
    // await this.spinnerService.presentLoading();
    // this.loadData(false, "");
  }
  /**
   * refresh page content
   * @param event
   */
  doRefresh(event: any) {
    this.dataList = [];
    this.start = 0;
    // this.loadData(false, "");
    event.target.complete();
  }
  doInfinite(event) {
    // this.loadData(true, event);
    event.target.complete();
  }

  /**
   * for ion-infinite scroll
   */
  // async loadData(isFirstLoad, event) {
  //   let params = { start: this.start, limit: this.limit };
  //   this.notificationService.list(params).subscribe(
  //     async data => {
  //       for (let i = 0; i < data.length; i++) {
  //         this.dataList.push(data[i]);
  //       }
  //       if (isFirstLoad)
  //         event.target.complete();
  //       if (data.length === 0 && event) {
  //         event.target.disabled = true;
  //       } else {
  //         this.start += this.limit;
  //       }
  //       await this.spinnerService.dismissLoading();
  //     }, async error => {
  //       await this.spinnerService.dismissLoading();
  //       this.toastService.presentErrorToast(error);
  //     }
  //   )
  // }
  create_human_friendly_date(timestamp,
    yesterday_text,
    today_text,
    tomorrow_text,
    language
  ) {
    var in_the_last_7days_date_options = { weekday: 'long' };
    var in_the_next_7days_date_options = { month: 'short', day: 'numeric' };
    var same_year_date_options = { month: 'short', day: 'numeric' };
    var far_date_options = { year: 'numeric', month: 'short', day: 'numeric' };

    var dt = new Date(timestamp);
    var date = dt.getDate();
    var time_diff = timestamp - Date.now();
    var diff_days = new Date().getDate() - date;
    var diff_months = new Date().getMonth() - dt.getMonth();
    var diff_years = new Date().getFullYear() - dt.getFullYear();

    var is_today = diff_years === 0 && diff_months === 0 && diff_days === 0;
    var is_yesterday = diff_years === 0 && diff_months === 0 && diff_days === 1;
    var is_tomorrow = diff_years === 0 && diff_months === 0 && diff_days === -1;
    var is_in_the_last_7days = diff_years === 0 && diff_months === 0 && (diff_days > 1 && diff_days < 7);
    var is_in_the_next_7days = diff_years === 0 && diff_months === 0 && (diff_days < -1 && diff_days > -7);
    var is_same_year = diff_years === 0;

    if (is_today && timestamp) {
      return 'Recent updates'
      // return moment(timestamp).format('hh:mm a');
    } else if (is_yesterday && timestamp) {
      return yesterday_text;
    } else if (is_tomorrow && timestamp) {
      return tomorrow_text;
    } else if (is_in_the_last_7days && timestamp) {
      return moment(timestamp).format('MMMM DD, yyyy');
    } else if (is_in_the_next_7days && timestamp) {
      return moment(timestamp).format('MMM DD, yyyy');
    } else if (is_same_year && timestamp) {
      return moment(timestamp).format('MMM DD, yyyy');
    } else if (timestamp) {
      return moment(timestamp).format('MMM DD, yyyy');
    }
  }
}
