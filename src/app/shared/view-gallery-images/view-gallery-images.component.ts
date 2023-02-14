import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-gallery-images',
  templateUrl: './view-gallery-images.component.html',
  styleUrls: ['./view-gallery-images.component.scss'],
})

export class ViewGalleryImagesComponent implements OnInit {

@Input() galleryImage: any;
  buttonSlide = {
    slidesPerView: 1,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    spaceBetween: 25,
  };
 
  constructor(
   private modalController: ModalController,
  ) {}

  ngOnInit() {}


  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      'dismissed': isDismissed,
    });
  }


}










