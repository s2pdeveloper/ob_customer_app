import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from 'src/app/core/services/order.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { UserService } from 'src/app/core/services/user.service';
import { socketOnEvents } from 'src/app/helpers';
import { OPTIONS, defaultStatus, fileExtension, imageExtension, messageCategory, videoExtension } from 'src/app/helpers/constants.helper';
import { SendIntentService } from 'src/app/core/services/send-intent.service';
import { UploadService } from 'src/app/core/services/upload.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
@Component({
  selector: 'app-send-page-intent',
  templateUrl: './send-page-intent.page.html',
  styleUrls: ['./send-page-intent.page.scss'],
})
export class SendPageIntentPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  videoExtension = videoExtension;
  fileExtension = fileExtension;
  imageExtension = imageExtension;
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  searchText: string;
  segment: string = 'active';
  dataList: any = [];
  user: any;
  defaultStatus = defaultStatus;
  interval: any;
  intentMediaData: any;
  fileData: any = {};
  fileUploaded: boolean = false;
  base64Data: any;
  imageData: any;
  converted_image: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private socketService: SocketService,
    public translate: TranslateService,
    private orderService: OrderService,
    private sendIntentService: SendIntentService,
    private uploadService: UploadService,
    private spinner: LoaderService,
    private toaster: ToastService,

  ) { }

  chatForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
    shopId: new FormControl(),
    orderId: new FormControl(),
    location: new FormControl(),
    category: new FormControl(messageCategory.NORMAL),
    media: new FormControl(),
  });
  ngOnInit() {
    this.emitToLoad();
    this.intentData();
  }
  resetForm() {
    this.chatForm.get('message').setValue('');
    this.chatForm.get('category').setValue(messageCategory.NORMAL);
    this.chatForm.get('location').setValue(null);
    this.chatForm.get('media').setValue(null);
  }

  ionViewWillEnter() {
    this.searchText = '';
    this.user = this.userService.getCurrentUser();
  }

  intentData() {
    this.sendIntentService.checkIncomingIntent().then(result => {
      this.intentMediaData = result;
      console.log("this.intentMediaData...................", this.intentMediaData);
      this.uploadFiles(this.intentMediaData)
    });
  }


  emitToLoad() {
    let params = { page: this.page, pageSize: this.pageSize, status: this.segment };
    if (this.searchText) {
      params['searchShop'] = this.searchText;
    }
    // this.socketService.emitEvent(socketOnEvents.LIST_ORDER, params)
    this.orderService.list(params).subscribe({
      next: (result: any) => {
        for (let i = 0; i < result.data.length; i++) {
          this.dataList.push(result.data[i]);
        }
      },
      error: (error) => {
        console.log(error)
      },
    })
  }

  receiveData() {
    this.socketService.listenEvent(socketOnEvents.LIST_ORDER).subscribe({
      next: (result: any) => {

        for (let i = 0; i < result.data.length; i++) {
          this.dataList.push(result.data[i]);
        }
      },
      error: (error) => {
        console.log(error)
      },
    })
  }

  onSearch() {
    this.page = 1;
    this.dataList = [];
    this.emitToLoad();
  }

  doRefresh(event: any) {
    this.page = 1;
    this.dataList = [];
    this.emitToLoad();
    event.target.complete();
  }

  doInfinite(event) {
    this.page++;
    this.emitToLoad();
    event.target.complete();
  }

  async segmentChanged(event) {
    this.searchText = null;
    this.segment = event.detail.value;
    this.onSearch();
  }

  sendMessage() {
    this.socketService.emitEvent(socketOnEvents.SEND_MESSAGE, this.chatForm.getRawValue());
    this.resetForm();
  }

  async uploadFiles(base64Data) {
    console.log("base64Data", base64Data);
    // await this.spinner.showLoader();
    this.uploadService.uploadBase64({ base64Data }).subscribe(
      async (data: any) => {
        console.log("data......line no 156.", data);
        return
        this.fileData = {
          filePath: data?.result?.data?.key,
          fileName: `${data?.result?.data.key}`.split('post/')[1],
          fileType: data?.result?.data?.contentType,
          fileSize: data?.result?.data?.size,
        }
        this.chatForm.controls.media.setValue(this.fileData);
        this.chatForm.controls.category.setValue(messageCategory.MEDIA);
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

  async sendTo() {

  }


}

