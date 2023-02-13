import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewGalleryImagesComponent } from '../view-gallery-images/view-gallery-images.component';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent implements OnInit {
  @Input() data: any;
  buttonSlide = {
    slidesPerView: 1,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 25,
  };

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() { }

  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      'dismissed': isDismissed,
    });
  }

  async navigateToViewGalleryImages(data) {
    const modal = await this.modalController.create({
      component: ViewGalleryImagesComponent,
      componentProps: {
        // url: gallery,
        galleryImage: data
      }
    });
    await modal.present();
  }

}

