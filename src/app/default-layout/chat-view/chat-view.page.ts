import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/service/chat/chat.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit ,OnDestroy{
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  page: number = 1;
  pageSize: number = 10;
  search = '';

  shopId: any;
  msgArr: any = [];
  user: any = {};
  msg: any;
  customerId: any;
  message: string;
  shopName: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService,
    private localStorage: StorageService,
    private socket: Socket
  ) { }

  chatForm = new FormGroup({
    _id: new FormControl(),
    shopId: new FormControl(),
    customerId: new FormControl(),
    roomName: new FormControl(''),
    message: new FormControl(''),
    createdBy: new FormControl(),
  });



  ngOnInit() {
    this.user = this.localStorage.get('OBUser');
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.shopName) this.shopName = params.shopName;
      if (params.shopId && params.msg) {
        let message = {
          shopId: params.shopId,
          message: params.msg,
        };
        this.chatService.create(message).subscribe((success) => {
          this.getMsgByCustomerId(false);
          this.router.navigate(['/chat-view'], {
            queryParams: {
              shopId: params.shopId,
            },
          });
          this.chatForm.reset();
          this.spinner.hideLoader();
        });
      } else {
        if (params.shopId) {
          this.shopId = params.shopId;
          this.chatForm.controls.shopId.setValue(this.shopId);
        }
        this.getMsgByCustomerId(false);
      }
    });
    // socket 
    this.socket.on(
      'latest-data',
      function (data: any) {
        console.log(data);
        console.log('latest-data called');
        this.getMsgByCustomerId(false);
      }.bind(this)
    );
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.socket.removeListener('latest-data');
  }



  sendMessage() {
    this.chatService.create(this.chatForm.value).subscribe(
      (success) => {
        console.log('success', success);
        this.getMsgByCustomerId(false);
        // let roomName = 'shopId' + ' ' + 'CustomerId';
        // console.log("roomName",roomName);
        
        this.socket.emit('latestdata', {
          room: "shopIdCustomerId",
          userId: "xyz"
        });
        this.chatForm.reset();
        this.spinner.hideLoader();
      },
      (error: any) => {
        this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    );
  }



  getMsgByCustomerId(isFirstLoad: boolean, event?: any) {
    this.spinner.showLoader();
    this.chatService
      .getMsgByCustomerId(this.user._id)
      .subscribe((success: any) => {
        console.log('getMsgByCustomer----', success);
        this.msgArr = success.payload.rows;
        this.spinner.hideLoader();
      });
  }

  doInfinite(event) {
    this.page++;
    this.getMsgByCustomerId(true, event);
    event.target.disabled = true;
    this.infiniteScroll.disabled = true;
    event.target.complete();
  }


}
