import { Component, OnDestroy, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { UploadService } from 'src/app/core/services/upload.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ModalController } from '@ionic/angular';
import { LocationComponent } from 'src/app/modal/location/location.component';
import { App } from '@capacitor/app';
import { OrderRatingComponent } from 'src/app/modal/order-rating/order-rating.component';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { RestService } from 'src/app/core/services/rest.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { socketEmitEvents, socketOnEvents } from 'src/app/helpers';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.page.html',
  styleUrls: ['./order-view.page.scss'],
})
export class OrderViewPage implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild(IonContent) content: IonContent;

  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;

  page: number = 1;
  pageSize: number = 10;
  shopId: string;
  messages: any = [];
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
  orderId: any;
  chatData: any = {};
  status: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    // private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService,
    private userService: UserService,
    private uploadService: UploadService,
    private modalCtrl: ModalController,
    private socketService: SocketService,
    private restService: RestService
  ) {
    this.receiveListMessages(false, "");
    this.receiveMessage();
  }

  chatForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    shopId: new FormControl(),
    orderId: new FormControl()
  });

  ngOnInit() { }

  ngOnDestroy(): void {
    forkJoin([this.socketService.removeListeners(socketOnEvents.LIST_MESSAGE), this.socketService.removeListeners(socketEmitEvents.RECEIVE_MESSAGE)]).subscribe();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  doRefresh(event: any) {
    this.messages = [];
    this.page = 0;
    this.receiveListMessages(false, "");
    event.target.complete();
  }

  doInfinite(event) {
    this.receiveListMessages(true, event);
    event.target.complete();
  }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.shopId = params.shopId;
      this.shopName = params.shopName;
      if (params.orderId) {
        this.orderId = params.orderId;
        this.chatForm.get('orderId').setValue(this.orderId);
      }
      this.chatForm.get('shopId').setValue(this.shopId);
      this.getMsgByCustomerId();
      this.emitToLoadMessages();
    });
  }

  sendMessage() {
    this.socketService.emitEvent(socketOnEvents.SEND_MESSAGE, this.chatForm.getRawValue());
    this.chatForm.get('message').setValue('')
  }

  emitToLoadMessages() {
    let params = { page: this.page, pageSize: this.pageSize, orderId: this.orderId };
    this.socketService.emitEvent(socketOnEvents.LIST_MESSAGE, params)
  }

  receiveListMessages(isFirstLoad, event) {
    this.socketService.listenEvent(socketOnEvents.LIST_MESSAGE).subscribe({
      next: (result: any) => {
        console.log('LIST_MESSAGE', result);
        for (let i = 0; i < result.data.length; i++) {
          this.messages.unshift(result.data[i]);
        }
        if (isFirstLoad)
          event.target.complete();
        if (result.data.length === 0 && event) {
          event.target.disabled = true;
        } else {
          this.page += this.pageSize;
        }
      },
      error: (error) => {
        console.log(error)
      },
    })
  }
  receiveMessage() {
    this.socketService.listenEvent(socketEmitEvents.RECEIVE_MESSAGE).subscribe({
      next: (result: any) => {
        console.log('RECEIVE_MESSAGE', result.data)
        this.messages.push(result.data)
      },
      error: (error) => {
        console.log(error)
      },
    })
  }
  async getMsgByCustomerId() {
    // this.chatService
    //   .getMsgByCustomerId(this.roomName)
    //   .subscribe(async success => {
    //     this.messages = success.rows;
    //     await this.spinner.hideLoader();
    //   });
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

  async downloadImage(message) {
    this.restService.convertToBase64(message.image)
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
    const modal = await this.modalCtrl.create({
      component: LocationComponent,
      cssClass: 'location-modal',
      componentProps: {},
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.chatForm.controls.message.setValue(data.data);
      this.sendMessage();
    }
  }

  async modalRating() {
    const modal = await this.modalCtrl.create({
      component: OrderRatingComponent,
      cssClass: 'rating-modal',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {
        ratingObj: {
          shopId: this.shopId,
          orderId: this.orderId
        }
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

}
