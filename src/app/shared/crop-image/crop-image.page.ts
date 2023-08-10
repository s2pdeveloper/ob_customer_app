import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.page.html',
  styleUrls: ['./crop-image.page.scss'],
})
export class CropImagePage implements OnInit {
  @Input() image: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  myImage = null;
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.myImage = this.image;
  }
  dismiss() {
    this.modalController.dismiss(this.croppedImage)
  }
}
