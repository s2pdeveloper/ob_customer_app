import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/service/chat/chat.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { UploadService } from 'src/app/service/upload/upload.service';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App, Geolocation } = Plugins;
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
  roomName: any;
  userId: any;
  fileUploaded: boolean = false;
  filePath: string = '';
  data: any = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService,
    private localStorage: StorageService,
    private uploadService: UploadService,
    private alertCtrl: AlertController,
    private socket: Socket
  ) {}

  chatForm = new FormGroup({
    _id: new FormControl(),
    // shopId: new FormControl(),
    // customerId: new FormControl(),
    roomName: new FormControl(''),
    message: new FormControl(''),
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
    // this.socket.removeListener('latest-data');
    this.socket.disconnect();
  }

  sendMessage() {
  
    this.chatForm.controls.roomName.setValue(this.roomName);
    this.chatService.create(this.chatForm.value).subscribe(
      (success) => {
        console.log('success', success);
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
        console.log('success', success);
        this.msgArr = success.payload.rows;
        this.spinner.hideLoader();
      });
  }

  async uploadFileAWS($event) {
    console.log('upload call');

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

  async addOrder(item: any, event: Event) {
    if (event) {
      event.stopPropagation();
    }
    const alert = await this.alertCtrl.create({
      header: 'Confirm Order',
      message: '',
      subHeader: '',
      cssClass: 'alert-warning',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
          },
        },
      ],
    });

    await alert.present();
  }


   // image download
   downloadImage(u: any) {
    console.log('downloadLink', u);

    this.chatService.downloadImage(u.image).subscribe(
      (response: any) => {
        // saveAs(response, u?.AdmissionWithEnquiry?.name);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  async locationShare() {
    let geoLocation = await (await Geolocation.getCurrentPosition()).coords;
    console.log('geoLocation', geoLocation);
    let msg = `http://maps.google.com/?ie=UTF8&hq=&ll=${geoLocation.latitude},${geoLocation.longitude}&z=18`;
    this.chatForm.controls.message.setValue(msg);
    this.sendMessage();
  }
  async openUrl(url) {
    console.log(url.includes('http'),'url', url);
    if (!url.includes('http')) {
      return;
    }
    let ret = await App.openUrl({
      url: url,
    });
    console.log('ret', ret);
  }


}
