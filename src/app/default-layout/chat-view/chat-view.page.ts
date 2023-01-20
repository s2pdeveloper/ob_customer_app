import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/service/chat/chat.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { UploadService } from 'src/app/service/upload/upload.service';
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
  fileUploaded: boolean = false;
  filePath: string = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService,
    private localStorage: StorageService,
    private uploadService: UploadService,
    private socket: Socket
  ) { }

  chatForm = new FormGroup({
    _id: new FormControl(),
    shopId: new FormControl(),
    customerId: new FormControl(),
    roomName: new FormControl(''),
    message: new FormControl(''),
    createdBy: new FormControl(),
    image: new FormControl(''),
  });

  ngOnInit() {
    this.user = this.localStorage.get('OBCustomer');
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.shopName) this.shopName = params.shopName;
      if (params.roomName && params.msg) {
        let message = {
          shopId: params.shopId,
          message: params.msg,
          roomName: params.shopId + this.user._id,
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
        }
        this.getMsgByCustomerId(false);
      }
    });

    // socket
    this.socket.on(
      'latest-data',
      function (data: any) {
        console.log(data);
        console.log('latest-data called in customerApp');
        this.getMsgByCustomerId(false);
      }.bind(this)
    );
    this.socket.fromEvent('latest-data').subscribe(data=>{
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwwww");
      
    });
  
  }

  ionViewWillEnter() {
      // socket
      this.socket.on(
        'latest-data',
        function (data: any) {
          console.log(data);
          console.log('latest-data called in customerApp');
          this.getMsgByCustomerId(false);
        }.bind(this)
      );
      this.socket.fromEvent('latest-data').subscribe(data=>{
        console.log("wwwwwwwwwwwwwwwwwwwwwwwwwww");
        
      });

  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.socket.removeListener('latest-data');
  }

  sendMessage() {
    if (this.user.role=="CUSTOMER") {
      this.roomName = this.shopId + this.user._id; 
    }
    // this.roomName = this.shopId + this.user._id;
    this.chatForm.controls.roomName.setValue(this.roomName);
    this.chatForm.controls.shopId.setValue(this.shopId);
    this.chatService.create(this.chatForm.value).subscribe(
      (success) => {
        console.log('success', success);
        this.getMsgByCustomerId(false);

        // emit
        this.socket.emit('latestdata', {
          room: this.roomName,
          userId: this.user._id,
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
    this.roomName = this.shopId + this.user._id; 
    
    this.spinner.showLoader();
    this.chatService
      .getMsgByCustomerId(this.roomName)
      .subscribe((success: any) => {
        console.log("success",success);
        
        this.msgArr = success.payload.rows;
        this.spinner.hideLoader();
      });
  }


  async uploadFileAWS($event) {
    console.log("upload call");
    
    let file = $event.target.files[0];
    await this.spinner.showLoader();
    let formData = new FormData();
    formData.append('file', file);
    this.uploadService.uploadFile(formData)
      .subscribe(
        async (data: any) => {
          this.filePath = data?.result?.url;
          this.chatForm.controls.image.setValue(this.filePath);
          this.fileUploaded = true;
          await this.spinner.hideLoader();
          this.sendMessage();
        },
      
        async (error: any) => {
          await this.spinner.hideLoader();
          this.toaster.errorToast(error);
        }
      );
  }

  doInfinite(event) {
    this.page++;
    this.getMsgByCustomerId(true, event);
    event.target.disabled = true;
    this.infiniteScroll.disabled = true;
    event.target.complete();
  }
}
