import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, AlertController, IonItemSliding } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
// import { ChatService } from 'src/app/core/services/chat.service';
// import { SpinnerService } from 'src/app/core/services/spinner.service';
// import { ToastService } from 'src/app/core/services/toast.service';
// import { UploadService } from 'src/app/core/services/upload.service';
// import { UserService } from 'src/app/core/services/user.service';
import { OPTIONS, ROLES } from 'src/app/helpers';
// import { RestService } from 'src/app/core/services/rest.service';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit, AfterViewChecked {

  currentUser: any = {};
  ROLES = ROLES;
  conversationUser: any = {};
  params: any = {};
  messages = [];
  message: string;
  fileData: any = {};
  start: number = 0;
  limit: number = 20;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('slidingItem', { static: false }) slidingItem: IonItemSliding;

  constructor(private router: Router, private modalController: ModalController,
    private activateRoute: ActivatedRoute,  
   private alertController: AlertController, public translate: TranslateService,
    private changeDetector: ChangeDetectorRef) { }



  ngOnInit() {
  }

  ngAfterViewChecked() { this.scrollToBottom(); }

  scrollToBottom() { this.content.scrollToBottom(); }

  // async ionViewDidEnter() {
  //   this.userService.currentUser.subscribe(async data => {
  //     this.currentUser = data;
  //     this.activateRoute.params.subscribe(async params => {
  //       if (params['id']) {
  //         this.params = {
  //           id: params['id']
  //         }
  //         await this.spinnerService.presentLoading();
  //         this.getConversation();
  //       }
  //     });
  //   });
  // }

  /**
   * get user details
   */
  // getConversation() {
  //   this.chatService.view(this.params.id).subscribe(
  //     async data => {
  //       this.conversationUser = data;
  //       this.conversationUser.sender = this.checkSender(data);
  //       this.getUserMessages(false, "");
  //     }, async error => {
  //       await this.spinnerService.dismissLoading();
  //       // this.toastService.presentErrorToast(error);
  //     }
  //   )
  // }
  /**
   * delete message
   */
  // deleteMessage(index, id) {
  //   this.chatService.deleteMessage(id).subscribe(
  //     async data => {
  //       this.messages.splice(index, 1);
  //       // this.toastService.presentSuccessToast(data.message);
  //     }, async error => {
  //       await this.spinnerService.dismissLoading();
  //       // this.toastService.presentSuccessToast(error);
  //     }
  //   )
  // }

  checkSender(item) {
    return item.chatMembers.find(user => user.id.toString() != this.currentUser.id.toString());
  }
  /**
 * refresh page content
 * @param event
 */
  doRefresh(event: any) {
    this.messages = [];
    this.start = 0;
    // this.getUserMessages(false, "");
    event.target.complete();
  }

  doInfinite(event) {
    // this.getUserMessages(true, event);
    event.target.complete();
  }

  // async getUserMessages(isFirstLoad, event) {
  //   let params = {
  //     start: this.start, limit: this.limit,
  //     id: this.conversationUser.id
  //   };
  //   this.chatService.getUserMessages(params).subscribe(async (data) => {
  //     for (let i = 0; i < data.length; i++) {
  //       this.messages.unshift(data[i]);
  //     }
  //     if (isFirstLoad)
  //       event.target.complete();
  //     if (data.length === 0 && event) {
  //       event.target.disabled = true;
  //     } else {
  //       this.start += this.limit;
  //     }
  //     this.changeDetector.detectChanges()
  //     await this.spinnerService.dismissLoading();
  //   }, async (error: any) => {
  //     await this.spinnerService.dismissLoading();
  //     // this.toastService.presentErrorToast(error);
  //   });
  // }
  /**
   * send text message
   */
  // async sendMessage() {
  //   let payload = {
  //     "message": this.message,
  //     "ChatConversationId": this.conversationUser.id,
  //     media: []
  //   }
  //   if (this.fileData?.file) {
  //     payload.media.push(this.fileData);
  //   }
  //   this.chatService.sendMessage(payload).subscribe(async (data) => {
  //     this.messages.push(data.chatMessage);
  //     this.message = '';
  //     await this.spinnerService.dismissLoading();
  //   }, async (error: any) => {
  //     await this.spinnerService.dismissLoading();
  //     this.toastService.presentErrorToast(error);
  //   });
  // }
  // async uploadFileAWS(event) {
  //   let file = event.target.files[0];
  //   await this.spinnerService.presentLoading();
  //   if (!this.uploadService.checkImageType(file) && !this.uploadService.checkFileSize(file)) {
  //     let formData = new FormData();
  //     formData.append('file', file);
  //     this.uploadService.uploadFile(formData).subscribe(
  //       async (data: any) => {
  //         this.message = 'media';
  //         this.fileData = {
  //           file: data?.result?.data?.key,
  //           fileName: data?.result?.data.originalname,
  //           fileType: data?.result?.data.contentType,
  //           fileSize: data?.result?.data.size,
  //         }
  //         this.sendMessage();
  //         await this.spinnerService.dismissLoading();
  //       }, async (error: any) => {
  //         this.toastService.presentErrorToast(error);
  //         await this.spinnerService.dismissLoading();
  //       }
  //     );
  //   }
  //   else {
  //     if (this.uploadService.checkImageType(file)) {
  //       this.toastService.presentErrorToast(OPTIONS.imageType);
  //       await this.spinnerService.dismissLoading();
  //       return;
  //     }
  //     if (this.uploadService.checkFileSize(file)) {
  //       this.toastService.presentErrorToast(OPTIONS.sizeLimit);
  //       await this.spinnerService.dismissLoading();
  //       return;
  //     }
  //   }
  // }
  /**
 * download file
 * @param data 
 */
  // async downloadFile(data) {
  //   if (data.media) {
  //     await this.spinnerService.presentLoading();
  //     this.restService.convertToBase64(data.media[0]).subscribe(async response => {
  //       let file = {
  //         ...data.media[0],
  //         fileName: data.media[0].fileName
  //       }
  //       await this.restService.saveFile(file, response.src);
  //     })
  //   }
  // }
}
