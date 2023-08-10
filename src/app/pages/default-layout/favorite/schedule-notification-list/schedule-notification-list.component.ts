import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { notificationService } from 'src/app/core/services/notifications.service';
import { ToastService } from 'src/app/core/services/toast.service';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule-notification-list',
  templateUrl: './schedule-notification-list.component.html',
  styleUrls: ['./schedule-notification-list.component.scss'],
})
export class ScheduleNotificationListComponent implements OnInit {
  @Input() shopId: any;
  dataList: any = [];
  page: number = 1;
  pageSize: number = 10;
  loaded: boolean = false;

  constructor(
    private notificationService: notificationService,
    private router: Router,
    private modalController: ModalController,
    private spinnerService: LoaderService,
    private toastService: ToastService,
    public translate: TranslateService

  ) { }

  ngOnInit() { }

  async ionViewDidEnter() {
    await this.loadData(false, "");
  }
  /**
   * refresh page content
   * @param event
   */
  doRefresh(event: any) {
    this.page = 1;
    this.dataList = [];
    this.loadData(false, "");
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.loadData(true, event);
    event.target.complete();
  }
  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      dismissed: isDismissed,
    });
  }

  /**
   * for ion-infinite scroll
   */
  async loadData(isFirstLoad, event) {
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      senderId: this.shopId,
    };
    this.notificationService.getAllCustomNotification(params).subscribe(
      async data => {
        for (let i = 0; i < data.length; i++) {
          this.dataList.push(data[i]);
        }
        if (isFirstLoad)
          event.target.complete();
        if (data.length === 0 && event) {
          event.target.disabled = true;
        }
        this.loaded = true;
        // await this.spinnerService.hideLoader();
      }, async error => {
        await this.spinnerService.hideLoader();
        this.toastService.errorToast(error);
      }
    )
  }
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
