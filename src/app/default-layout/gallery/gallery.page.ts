import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { AuthService } from 'src/app/service/auth/auth.service';
// import { ViewGalleryImagesComponent } from 'src/app/shared/view-gallery-images/view-gallery-images.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  user: any;
  loaded: boolean;
  galleryArr: any;

  constructor(
    private router: Router,
    private localStorage: StorageService,
    private authService: AuthService,
    public translate: TranslateService,
    private spinner: LoaderService,
    private modalController: ModalController,


  ) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.user = this.localStorage.get('OBShop');
    this.getById();
  }


  getById() {
    this.spinner.showLoader();
    this.loaded = false;
    this.authService.profile(this.user._id).subscribe((success) => {
      console.log("success", success);
      this.galleryArr = success.galleryImages;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }


  // async navigateToViewGalleryImages(gallery) {

  //   const modal = await this.modalController.create({
  //     component: ViewGalleryImagesComponent,
  //     componentProps: {
  //       // url: gallery,
  //       data: this.galleryArr
  //     }
  //   });
  //   await modal.present();
  // }
}


