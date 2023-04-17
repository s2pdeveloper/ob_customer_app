import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
// import { RestService } from 'src/app/service/rest/rest.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.page.html',
  styleUrls: ['./notification-list.page.scss'],
})
export class NotificationListPage implements OnInit {
  page = 1;
  pageSize = 10;
  notification: any = [];
  collection: number = 0;
  constructor(
    private spinner: LoaderService,
    // private restService: RestService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getAllStudentNotifications(false);
  }
  doRefresh(event) {
    this.page = 1;
    this.notification = [];
    this.getAllStudentNotifications(false);
    event.target.complete();
  }
  doInfinite(event) {
    this.page++;
    this.getAllStudentNotifications(true, event);
    event.target.complete();
  }
  getAllStudentNotifications(isFirstLoad: boolean, event?: any) {
    this.spinner.showLoader();
    // this.restService
    //   .getAllShopNotifications(this.page, this.pageSize)
    //   .subscribe((success) => {
    //     this.notification = [
    //       ...this.notification,
    //       ...success.notificationDetails,
    //     ];
    //     this.collection = success.count;
    //     if (isFirstLoad) event?.target.complete();
    //     if (this.notification.length >= this.collection && event) {
    //       event.target.disabled = true;
    //     }
    //     this.spinner.hideLoader();
    //   });
  }
}
