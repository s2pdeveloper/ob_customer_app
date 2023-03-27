import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Socket } from 'ngx-socket-io';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ChatService } from 'src/app/service/chat/chat.service';
@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  @Input() shopDetail: any;
  filterForm = new FormGroup({
    startDate: new FormControl(''),
  });
  maxDate = moment().format();
  user: any;
  dateTime: any;
  date: any;
  time: any;
  times: any;
  dateReverse: any;
  rev: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private localStorage: StorageService,
    private spinner: LoaderService,
    private socket: Socket,
    private chatService: ChatService,
    private modalCtrl: ModalController,
    public translate: TranslateService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    console.log("shopdetails", this.shopDetail);

    this.user = this.localStorage.get('OBCustomer');
    this.activatedRoute.queryParams.subscribe((params: any) => {

    });
  }

  get form() {
    return this.filterForm.controls;
  }

  dismissModal(isClose) {
    this.modalCtrl.dismiss({
      'dismissed': isClose,
      filterForm: {
        startDate: moment(this.filterForm.value.startDate).format('YYYY-MM-DD'),
      }
    });
  }

  getDate(ev) {
    // console.log("ev", ev);
    this.dateTime = ev.detail.value
    console.log(" this.dateTime.........", this.dateTime);
    this.date = ev.detail.value.split('T')[0];
 
    
    this.time = ev.detail.value.split('T')[1];
    this.times=this.time.split('+')[0];
    console.log("date......",this.date);
    console.log("time......",this.time);
    console.log("times......",this.times);
    // this.rev=this.times.reverse()
    // console.log("revvvvv",this.rev);
  }

  navigateTo() {

    console.log("this.filterForm.value", this.filterForm.value);
    let msg = '';
    msg += `Dear merchant,\n please book an appointment Date:${this.date} and Time:${this.times}\n`;
    this.socket.emit('join', { room: this.shopDetail._id, user: this.user._id });

    let message = {
      shopId: this.shopDetail._id,
      message: msg,
    };
    console.log("message", message);

    // 
    this.chatService.create(message).subscribe((success) => {
      this.spinner.hideLoader();
      console.log("join success", success);

      // join
      this.socket.emit('join', { room: success.orderId, user: this.user._id });
      this.router.navigate(['/chat-view'], {
        queryParams: {
          shopId: this.shopDetail._id,
          shopName: this.shopDetail.shopName,
          roomName: this.shopDetail._id,
        },
      });
      this.dismissModal('')
    });
  }


}
