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
export class ChatViewPage implements OnInit, OnDestroy {
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
  room: any;
  roomName: any;
  userId: any;

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
      if (params.roomName) this.roomName = params.roomName;
      console.log("this.roomName",this.roomName);
      
      if (params.roomName && params.msg && params.roomName) {
        let message = {
          shopId: params.shopId,
          message: params.msg,
          roomName: params.roomName,
        };
        console.log("message",message);
        console.log("message.roomName",message.roomName);
        
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
    console.log("getAll latest data");

    this.socket.on(
      'latest-data',
      function (data: any) {
        console.log(data);
        console.log('latest-data called in customerApp');
        this.getMsgByCustomerId(false);
      }.bind(this)
    );
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.socket.removeListener('latest-data');
  }

  sendMessage() {

    // let roomName = {
    //   roomName: this.roomName,
    // }
    // this roomName = this.chatForm.value.roomName[0];
    // console.log("let roomName",this.roomName.roomName);
    console.log('this.chatForm.value', this.chatForm.value);
 
    this.chatService.create(this.chatForm.value,).subscribe(
      (success) => {
        console.log('success', success);
        this.getMsgByCustomerId(false);

        // emit 
        this.socket.emit('latestdata', {
          room: this.roomName,
          userId: this.user._id
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
        // console.log('getMsgByCustomer----', success);
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
