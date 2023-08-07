import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AddressComponent } from '../address/address.component';
import { CameraService } from 'src/app/core/services/camera.service';
import { UserService } from 'src/app/core/services/user.service';
import { UploadService } from 'src/app/core/services/upload.service';
import { OPTIONS } from 'src/app/helpers';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent implements OnInit {
  fileData:
    {
      filePath: any;
      fileName: string;
      fileType: string;
      fileSize: number;
    };
  data: any = {};
  fileUploaded: boolean = false;

  constructor(
    public translate: TranslateService,
    private spinner: LoaderService,
    private modalController: ModalController,
    private toaster: ToastService,
    private uploadService: UploadService,
    private cameraService: CameraService,
  ) { }

  ngOnInit() { }

  async address() {
    const modal = await this.modalController.create({
      component: AddressComponent,
      cssClass: '',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {},
    });
    await modal.present();
    modal.onDidDismiss().then(data => {
      this.data = data;
      this.closeModal();
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
          this.fileData = this.fileData
          this.closeModal();
          // this.chatForm.controls.media.setValue(this.fileData);
          // this.chatForm.controls.category.setValue(messageCategory.MEDIA);
          this.fileUploaded = true;
          // this.sendMessage();
          await this.spinner.hideLoader();
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
              this.fileData = this.fileData
              console.log("this.fileData", this.fileData);
              this.closeModal();
              // this.chatForm.controls.media.setValue(this.fileData);
              // this.chatForm.controls.category.setValue(messageCategory.MEDIA);
              this.fileUploaded = true;
              // this.sendMessage();
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

  async closeModal() {
    await this.modalController.dismiss({
      'dismissed': false,
      data: this.data,
      fileData: this.fileData
    });
  }
}



