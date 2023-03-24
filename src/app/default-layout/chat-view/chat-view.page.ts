import { Component, OnDestroy, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/service/chat/chat.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { UploadService } from 'src/app/service/upload/upload.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ModalController } from '@ionic/angular';
import { LocationComponent } from 'src/app/modal/location/location.component';
import { App } from '@capacitor/app';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild(IonContent) content: IonContent;

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
    private router: Router,
    public translate: TranslateService,
    private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService,
    private localStorage: StorageService,
    private uploadService: UploadService,
    private modalController: ModalController,
    private socket: Socket
  ) { }

  chatForm = new FormGroup({
    _id: new FormControl(),
    roomName: new FormControl(''),
    message: new FormControl('', [Validators.required]),
    createdBy: new FormControl(),
    image: new FormControl(''),
  });

  ngOnInit() { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.content.scrollToBottom();
  }

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

  async getMsgByCustomerId(isFirstLoad: boolean, event?: any) {
    // this.spinner.showLoader();
    this.chatService
      .getMsgByCustomerId(this.roomName)
      .subscribe(async success => {
        this.msgArr = success.rows;
        await this.spinner.hideLoader();
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

async  downloadImage(message) {
    // this.spinner.showLoader();
    this.uploadService
      .downloadImage(message.image)
      .subscribe(async (success: any) => {
        this.toaster.successToast(
          'Image Downloaded successfully. Please check your Documents folder.'
        );
        await Filesystem.writeFile({
          path: `${message.image.split('post/')[1]}`,
          data: success.result.src as string,
          directory: Directory.Documents,
        });
       await this.spinner.hideLoader();
      });
  }

 async openUrl(url) {
    if (!url.includes('http')) {
      return;
    }
    await App.getLaunchUrl();
    return url;
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

  navigateTo(shopId) {
    this.router.navigate(['/shop-detail'], {
      queryParams: {
        shopId: this.shopId,
      },
    });
  }

  async navigateToLocation() {
    const modal = await this.modalController.create({
      component: LocationComponent,
      componentProps: {
        // galleryImage: data
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.chatForm.controls.message.setValue(data.data);
      this.sendMessage();
    }
  }

  accept() {
    this.chatForm.controls.message.setValue('accept');
    this.sendMessage();
  }
  reject() {
    this.chatForm.controls.message.setValue('reject');
    this.sendMessage();
  }

}
