import { Component, OnDestroy, OnInit, ViewChild, AfterViewChecked, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonContent, IonInfiniteScroll, PopoverController } from '@ionic/angular';
import { UploadService } from 'src/app/core/services/upload.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { RestService } from 'src/app/core/services/rest.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { defaultStatus, messageCategory, socketEmitEvents, socketOnEvents } from 'src/app/helpers';
import { forkJoin } from 'rxjs';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderRatingComponent } from './order-rating/order-rating.component';
import { PopoverComponent } from 'src/app/shared/popover/popover.component';
import { ReportComponent } from './report/report.component';
import { AddressComponent } from './address/address.component';
import { PhotoViewerService } from 'src/app/core/services/photo-viewer.service';
import { CameraService } from 'src/app/core/services/camera.service';
import { OPTIONS, videoExtension, fileExtension, imageExtension } from 'src/app/helpers';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { saveAs } from 'file-saver';

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
  isPreview: boolean = false;
  videoExtension = videoExtension;
  fileExtension = fileExtension;
  imageExtension = imageExtension;
  page: number = 1;
  pageSize: number = 10;
  messages: any = [];
  user: any = {};
  customerId: string;
  shopId: string;
  shopName: string = '';
  fileData: any = {};

  userId: number;
  fileUploaded: boolean = false;
  filePath: string = '';
  orderId: string = null;

  messageCategory = messageCategory;
  orderDetails: any = {};
  ratingDetails: any = {};

  photoViewerConfig = {
    mode: 'one',
    images: [],
    options: {
      title: false,
      share: false,
      transformer: 'depth',
      backgroundcolor: 'black'
    }
  }

  canReceiveMessage: boolean = false;
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
    public popoverController: PopoverController,
    private photoViewerService: PhotoViewerService,
    private cameraService: CameraService,
  ) {
    this.receiveListMessages(false, "");
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
  }

  ngOnDestroy(): void {
    forkJoin([this.socketService.removeListeners(socketOnEvents.LIST_MESSAGE), this.socketService.removeListeners(socketEmitEvents.RECEIVE_MESSAGE)]).subscribe();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  doInfinite(event) {
    this.receiveListMessages(true, event);
    event.target.complete();
  }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
    this.activatedRoute.queryParams.subscribe(async (params) => {
      this.shopId = params.shopId;
      this.shopName = params.shopName;
      if (params.orderId) {
        this.orderId = params.orderId;
        this.chatForm.get('orderId').setValue(this.orderId);
        this.getOrderById();
      }
      this.chatForm.get('shopId').setValue(this.shopId);
      this.emitToLoadMessages();
      if (!this.canReceiveMessage) {
        this.canReceiveMessage = true
      }
    });
  }
  async getOrderById() {
    this.orderService.getOrder(this.orderId).subscribe(async (success: any) => {
      this.orderDetails = success.orderDetails;
      this.ratingDetails = success.ratingDetails;
      await this.spinner.hideLoader();
    }, async error => {
      await this.spinner.hideLoader();
    });
  }
  sendMessage() {
    this.socketService.emitEvent(socketOnEvents.SEND_MESSAGE, this.chatForm.getRawValue());
    this.resetForm();
    if (this.canReceiveMessage) {
      this.receiveMessage();
    }
  }

  resetForm() {
    this.chatForm.get('message').setValue('');
    this.chatForm.get('category').setValue(messageCategory.NORMAL);
    this.chatForm.get('location').setValue(null);
    this.chatForm.get('media').setValue(null);
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
        this.canReceiveMessage = false;
        console.log('RECEIVE_MESSAGE', result.data)
        this.messages.push(result.data);
        if (!this.orderId) {
          this.orderId = result.data.orderId;
          this.chatForm.get('orderId').setValue(this.orderId);
          this.getOrderById();
          console.log('no order id')
        }
      },
      error: (error) => {
        console.log(error)
      },
    })
  }


  async uploadFiles($event) {
    let file = $event.target.files[0];
    if (this.uploadService.checkFileSize(file)) {
      await this.spinner.showLoader();
      let formData = new FormData();
      formData.append('file', file);
      this.uploadService.uploadFile(formData).subscribe(
        async (data: any) => {
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
    } else {
      if (!this.uploadService.checkFileSize(file)) {
        this.toaster.errorToast(OPTIONS.sizeLimit);
        this.spinner.hideLoader();
        return;
      }
    }
  }

  async uploadFileAWS() {
    const image = await this.cameraService.openCamera();
    const realFile = this.cameraService.b64toBlob(image.base64String, `image/${image.format}`);
    await this.spinner.hideLoader();
    const params = { fileName: `file.${image.format}`, fileType: `image/${image.format}` };
    if (this.uploadService.checkFileSize(realFile)) {
      this.uploadService.getSignUrl(params).subscribe(
        async (data: any) => {
          this.uploadService.uploadFileUsingSignedUrl(data.url, realFile).subscribe(
            async (result: any) => {
              console.log('after upload', result);
              this.fileData = {
                filePath: data.filePath,
                fileName: `${data.filePath}`.split('post/')[1],
                fileType: `image/${image.format}`,
                fileSize: realFile.size,
              }
              this.chatForm.controls.media.setValue(this.fileData);
              this.chatForm.controls.category.setValue(messageCategory.MEDIA);
              this.fileUploaded = true;
              this.sendMessage();
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
          orderId: this.orderId,
          ratingDetails: this.ratingDetails,
        }
      }
    });
    await modal.present();
    this.getOrderById();
  }

  async modalReport() {
    const modal = await this.modalCtrl.create({
      component: ReportComponent,
      cssClass: 'rating-modal',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {
        reportData: {
          shopId: this.shopId,
          orderId: this.orderId
        }
      }
    });
    await modal.present();
  }

  viewShop() {
    const path: string = `/shop-detail/${this.shopId}`;
    this.router.navigate([path]);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        dataList: [
          { label: 'Rating', event: 'rating' },
          { label: 'Report', event: 'report' },
        ]
      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    if (data.event === 'rating' && this.orderDetails?.status != defaultStatus.COMPLETED) {
      this.toaster.errorToast("Your rating will active in past")
    }
    if (data.event === 'rating' && this.orderDetails?.status === defaultStatus.COMPLETED) {
      this.modalRating()
    }
    if (data.event === 'report') {
      this.modalReport();
    }
  }


  async address() {
    const modal = await this.modalCtrl.create({
      component: AddressComponent,
      cssClass: '',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {},
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data?.data?.data?.coordinates) {
      let coordinates = data.data.data.coordinates
      this.chatForm.controls.message.setValue('Location');
      this.chatForm.controls.category.setValue(messageCategory.LOCATION);
      this.chatForm.controls.location.setValue(coordinates);
      this.sendMessage();
    } else if (data.data == null) {
      return
    }
    else {
      this.chatForm.controls.message.setValue(`Address : ${data.data}`);
      this.sendMessage();
    }
  }

  async previewImage(message) {
    this.photoViewerConfig.images.push({
      url: message.filePath,
      title: ''
    });
  }


  handleExit(ev) {
    this.photoViewerConfig.images = []
    console.log(`&&& ev: ${JSON.stringify(ev)}`);
    const keys = Object.keys(ev);
    if (keys.includes('result') && ev.result) {
      if (keys.includes('imageIndex')) {
        console.log(`last image index: ${ev.imageIndex}`);
      }
    }
    if (keys.includes('message')) {
      console.log(`returned message: ${ev.message}`);
    }
  }

  async downloadFile(data) {
    if (data.filePath) {
      await this.spinner.showLoader();
      this.restService.convertToBase64(data).subscribe(async response => {
        let file = {
          ...data,
          fileName: data.fileName
        }
        await this.restService.saveFile(file, response.src);
        await this.spinner.hideLoader();

      })
    }
  }
}
