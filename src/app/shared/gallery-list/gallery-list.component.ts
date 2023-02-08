import { Location } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoaderService } from 'src/app/core/services/loader.service'
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { UploadService } from 'src/app/service/upload/upload.service';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/service/rest/rest.service';
import { ShopService } from 'src/app/service/shop/shop.service';
const { Camera, Device, Geolocation } = Plugins;

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent implements OnInit {

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
  data: any;
  count: any;
  constructor(
    // public translate: TranslateService,
    private spinner: LoaderService,
    private toaster: ToastService,
    private modalController: ModalController,
    private shopService: ShopService
  ) {

  }

  ngOnInit() {
    console.log("data@@@@@@@@@@@@@@@@@@@@@@@@@@", this.data);

    
  }


  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      'dismissed': isDismissed,
    });
  }

 

}
