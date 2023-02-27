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
const { App, Geolocation } = Plugins;
import { Plugins, FilesystemDirectory } from '@capacitor/core';
const { Filesystem } = Plugins;

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
  shopId: number;
  msgArr: any = [];
  user: any = {};
  msg: any = '';
  customerId: number;
  message: string = '';
  shopName: string = '';
  roomName: string = '';
  userId: number;
  fileUploaded: boolean = false;
  filePath: string = '';
  data: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    public translate: TranslateService,
    private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService,
    private localStorage: StorageService,
    private uploadService: UploadService,
    private socket: Socket
  ) {}

  chatForm = new FormGroup({
    _id: new FormControl(),
    roomName: new FormControl(''),
    message: new FormControl('',[Validators.required]),
    createdBy: new FormControl(),
    image: new FormControl(''),
  });

  ngOnInit() {}
  ionViewWillEnter() {
    this.user = this.localStorage.get('OBCustomer');
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.shopId) {
        this.shopId = params.shopId;
      }
      if (params.shopName) this.shopName = params.shopName;
      if (params.roomName) this.roomName = params.roomName;
      this.getMsgByCustomerId(false);
    });

    // socket
    this.socket.on(
      'latest',
      function (data: any) {
        console.log(data);
        console.log('latest-data called in shopApp@@@@');
        this.getMsgByCustomerId(false);
      }.bind(this)
    );
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.socket.disconnect();
  }

  sendMessage() {
    this.chatForm.controls.roomName.setValue(this.roomName);
    this.chatService.create(this.chatForm.value).subscribe(
      (success) => {
        this.getMsgByCustomerId(false);
        // emit
        this.socket.emit('latestdata', {
          roomName: this.roomName,
          userId: this.user._id,
          data: this.chatForm.value,
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
      .getMsgByCustomerId(this.roomName)
      .subscribe((success: any) => {
        this.msgArr = success.payload.rows;
        this.spinner.hideLoader();
      });
  }

  async uploadFileAWS($event) {
    let file = $event.target.files[0];
    await this.spinner.showLoader();
    let formData = new FormData();
    formData.append('file', file);
    this.uploadService.uploadFile(formData).subscribe(
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

  downloadImage(message) {
    this.spinner.showLoader();
    this.uploadService
      .downloadImage(message.image)
      .subscribe(async (success: any) => {
        this.toaster.successToast(
          'Image Downloaded successfully. Please check your Documents folder.'
        );
        await Filesystem.writeFile({
          path: `${message.image.split('post/')[1]}`,
          data: success.result.src as string,
          directory: FilesystemDirectory.Documents,
        });
        this.spinner.hideLoader();
      });
  }

  // location share
  async locationShare() {
    let geoLocation = await (await Geolocation.getCurrentPosition()).coords;
    console.log('geoLocation', geoLocation);
    let msg = `http://maps.google.com/?ie=UTF8&hq=&ll=${geoLocation.latitude},${geoLocation.longitude}&z=18`;
    this.chatForm.controls.message.setValue(msg);
    this.sendMessage();
  }
  async openUrl(url) {
    console.log(url.includes('http'), 'url', url);
    if (!url.includes('http')) {
      return;
    }
    let ret = await App.openUrl({
      url: url,
    });
  }

  doRefresh(event: any) {
    this.msgArr = [];
    this.getMsgByCustomerId(false, '');
    event.target.complete();
  }

  confirmOrder() {
    this.chatForm.controls.message.setValue('Confirm Order 👍');
    this.sendMessage();
  }


  navigateTo(shopId){
    console.log("shopId",shopId);
    this.router.navigate(['/shop-detail'], {
      queryParams: {
        shopId: this.shopId,
     },
    }); 
  }
}
