import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';
import { ModalController } from '@ionic/angular';
import { GalleryListComponent } from 'src/app/shared/gallery-list/gallery-list.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.page.html',
  styleUrls: ['./shop-detail.page.scss'],
})
export class ShopDetailPage implements OnInit {
  loaded = false;
  shopDetails : any;
  shopName: string = '';
  shopId = null;
  type = 'about';


  buttonSlide = {
    slidesPerView: 4,
    slideShadows: true,
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 300,
    },
    spaceBetween: 1,
  };
  shopType: any=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      // when we navigate to search shop to shop details
      if (params._id) {
        this.shopId = params._id;
      }

      // when we navigate to chat view to shop details
      if (params.shopId) {
        this.shopId = params.shopId;
      }
      this.getShopById();
    });
  }

  async getShopById() {
    // this.spinner.showLoader();
    // this.loaded = false;
    this.shopService.getByIdShop(this.shopId).subscribe(async (success: any) => {
      console.log("success",success);
      
      this.shopDetails = success.rows;
      this.shopType = success.rows.businessTypeId;
      console.log(" this.shopDetails", this.shopDetails);
      console.log("this.shopType.....",this.shopType,   );
      
      
      await this.spinner.hideLoader();
      // this.loaded = true;
    });
  }

  navigateTo(path) {
    let params = { _id: this.shopId };
    this.router.navigate([path], { queryParams: params });
  }

  goToMap(address: string) {
    let params = { address: address };
    this.router.navigate(['/map'], { queryParams: params });
  }

  goToChat() {
    let params = { shopName: this.shopDetails[0].shopName };
    this.router.navigate(['/chat-view'], { queryParams: params });
  }

  async navigateToViewGalleryImages(galleryImg) {
    const modal = await this.modalController.create({
      component: GalleryListComponent,
      componentProps: {
        data: galleryImg,
      },
    });
    await modal.present();
  }

  /**
* open modal
* @param item 
*/
  async modalFilter() {
    const modal = await this.modalController.create({
      component: SelectFilterComponent,
      cssClass: 'modal-medium',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {
      shopDetail: this.shopDetails,
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }
}
