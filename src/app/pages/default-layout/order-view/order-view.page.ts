import { Component, OnDestroy, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { UploadService } from 'src/app/core/services/upload.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ModalController } from '@ionic/angular';
import { OrderRatingComponent } from 'src/app/shared/modals/order-rating/order-rating.component';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { RestService } from 'src/app/core/services/rest.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { messageCategory, socketEmitEvents, socketOnEvents } from 'src/app/helpers';
import { forkJoin } from 'rxjs';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { OrderService } from 'src/app/core/services/order.service';

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
  messages: any = [];
  user: any = {};
  customerId: string;
  shopId: string;
  message: string = '';
  shopName: string = '';

  userId: number;
  fileUploaded: boolean = false;
  filePath: string = '';
  orderId: any;
  
  messageCategory = messageCategory;
  orderDetails: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private modalController: ModalController,
    private toaster: ToastService,
    private spinner: LoaderService,
    private userService: UserService,
    private uploadService: UploadService,
    private modalCtrl: ModalController,
    private socketService: SocketService,
    private restService: RestService,
    private orderService: OrderService,
  ) {
    this.receiveListMessages(false, "");
    this.receiveMessage();
  }

  chatForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    shopId: new FormControl(),
    orderId: new FormControl(),
    location: new FormControl(),
    category: new FormControl(messageCategory.NORMAL)
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
      this.getOrderById();
      this.emitToLoadMessages();
    });
  }
  async getOrderById() {
    await this.spinner.showLoader();
    this.orderService.getOrder(this.orderId).subscribe(async (success: any) => {
      this.orderDetails = success;
      await this.spinner.hideLoader();
    }, async error => {
      await this.spinner.hideLoader();
    });
  }
  sendMessage() {
    this.socketService.emitEvent(socketOnEvents.SEND_MESSAGE, this.chatForm.getRawValue());
    this.resetForm();
  }

  resetForm() {
    this.chatForm.get('message').setValue('');
    this.chatForm.get('image').setValue(null);
    this.chatForm.get('category').setValue(messageCategory.NORMAL);
    this.chatForm.get('location').setValue(null);
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


  async uploadFileAWS($event) {
    let file = $event.target.files[0];
    await this.spinner.showLoader();
    let formData = new FormData();
    formData.append('file', file);
    this.uploadService.uploadFile(formData).subscribe(
      async (data: any) => {
        this.filePath = data?.result?.cdn;
        this.chatForm.controls.image.setValue(this.filePath);
        this.fileUploaded = true;
        await this.spinner.hideLoader();
        this.chatForm.controls.category.setValue(messageCategory.MEDIA);
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

  async openGoogleMap(location) {
    if (location) {
      const destination = `${location.coordinates[0]},${location.coordinates[1]}`;
      window.open("https://www.google.com/maps/search/?api=1&query=" + destination)
    }
    return;
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


  async openMap() {
    const modal = await this.modalController.create({
      component: GoogleMapComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {}
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log(data)
      // this.localStorage.set('location', data.coordinates);
      // this.currentLocation = data.location
      this.chatForm.controls.message.setValue('Location');
      this.chatForm.controls.category.setValue(messageCategory.LOCATION);
      this.chatForm.controls.location.setValue(data.coordinates);
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

  viewShop() {
    this.router.navigate(['/shop-detail'], {
      queryParams: {
        shopId:this.shopId,
      },
    });
  }

}
