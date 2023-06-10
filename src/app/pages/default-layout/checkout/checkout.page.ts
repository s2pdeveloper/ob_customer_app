import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { InstructionComponent } from './instructon/instruction.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  orderData: any = [];
  shopId: string;
  shopDetailsId: string;
  shopName: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private modalController: ModalController,
    private storageService: StorageService) {
    this.orderData = this.storageService.get('orderData');
    this.storageService.remove('orderData');
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shopDetailsId = params.shopUserId;
      this.shopId = params.shopId;
      this.shopName = params.shopName;
    });
  }

  navigateToHome() {
    this.router.navigate(['/app/tabs/home']);
  }

  async navigateTo() {
    const modal = await this.modalController.create({
      component: InstructionComponent,
      cssClass: 'instruction-modal',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {
        orderData: this.orderData,
        shopDetailsId: this.shopDetailsId,
        shopId: this.shopId,
        shopName: this.shopName
      }
    });
    await modal.present();
  }
}
