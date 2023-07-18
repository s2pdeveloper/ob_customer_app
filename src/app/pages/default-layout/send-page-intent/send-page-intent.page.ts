import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { Location } from '@angular/common';
import { CameraService } from 'src/app/core/services/camera.service';
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
  isCheck: boolean = true;
  selectedItem: any = [];
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
    private location: Location,
    private cameraService: CameraService,

  ) {
    console.log(" this.selectedItem = 'item1';", this.selectedItem);

  }

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
      this.uploadFile(this.intentMediaData)
    });
  }


  emitToLoad() {
    let params = { page: this.page, pageSize: this.pageSize, status: this.segment };
    if (this.searchText) {
      params['searchShop'] = this.searchText;
    }
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

  selectItem(item) {
    console.log("item........", item);
    // this.isCheck = event.target.checked;
    if (this.selectedItem === item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }


  sendMessage() {
    this.socketService.emitEvent(socketOnEvents.SEND_MESSAGE, this.chatForm.getRawValue());
    this.resetForm();
    this.router.navigate([`/app/tabs/home`], { replaceUrl: true });
    this.sendIntentService.finishIntent();
  }

  async uploadFile(file) {
    const lastDotIndex = file.title.lastIndexOf('.');
    const fileType = file.title.substring(lastDotIndex + 1);
    const realFile = this.cameraService.b64toBlob(file.base64String, `image/${fileType}`);
    await this.spinner.hideLoader();
    const params = { fileName: file.title, fileType: `image/${fileType}` };
    if (this.uploadService.checkFileSize(realFile)) {
      this.uploadService.getSignUrl(params).subscribe(
        async (data: any) => {
          this.uploadService.uploadFileUsingSignedUrl(data.url, realFile).subscribe(
            async (result: any) => {
              console.log('after upload', result);
              this.fileData = {
                filePath: `${data.filePath}`.split('.net/')[1],
                fileName: `${data.filePath}`.split('post/')[1],
                fileType: `image/${fileType}`,
                fileSize: realFile.size,
              }
              this.chatForm.controls.media.setValue(this.fileData);
              this.chatForm.controls.category.setValue(messageCategory.MEDIA);
              this.fileUploaded = true;
              await this.spinner.hideLoader();
            }, async (error: any) => {
              this.toaster.errorToast(error);
              await this.spinner.hideLoader();
            }
          );
        }, async (error: any) => {
          this.toaster.errorToast(error);
          await this.spinner.hideLoader();
        }
      )
    }
    else {
      if (!this.uploadService.checkFileSize(realFile.size)) {
        this.toaster.errorToast(OPTIONS.sizeLimit);
        await this.spinner.hideLoader();
        return;
      }
    }
  }

  navigateTo(item) {
    this.chatForm.get('shopId').setValue(item.shopId);
    this.chatForm.get('orderId').setValue(item.id);
  }

}

