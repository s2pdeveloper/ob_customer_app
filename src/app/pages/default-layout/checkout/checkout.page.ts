import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { socketOnEvents } from 'src/app/helpers';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  orderData: any = [];
  shopId: string;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    public translate: TranslateService,
    private socketService: SocketService,
    private storageService: StorageService) {
    this.orderData = this.storageService.get('orderData');
    this.storageService.remove('orderData');
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.shopId = params.shopId
    });
  }
  navigateToChat() {
    console.log(this.orderData);
    let msg = '';
    let arr = this.orderData.filter((x) => x.isChecked == true);
    if (arr.length < 1) {
      this.toaster.errorToast('Plz select at least one product');
      return;
    }
    let description = '';
    msg += `Dear merchant,\n i would like to buy \n`;
    for (let i = 0; i < arr.length; i++) {
      const catTitle = arr[i].title;
      msg += `${catTitle}`;
      if (i != arr.length - 1) {
        msg += ` , \n `;
      }
      description += `${catTitle}`;
      if (i != arr.length - 1) {
        description += `,`;
      }
    }
    let message = {
      shopId: this.shopId,
      message: msg,
      description: description,
      catalogue: this.orderData
    };
    this.receiveMessage();
    this.socketService.emitEvent(socketOnEvents.CREATE_ORDER, message);
  }
  receiveMessage() {
    this.socketService.listenEvent(socketOnEvents.CREATE_ORDER).subscribe({
      next: (result: any) => {
        console.log(result);
        this.router.navigate(['/order-view'], { queryParams: { shopId: this.shopId, orderId: result.data._id } });
      },
      error: (error) => {
        console.log(error)
      },
    })
  }
  navigateToHome() {
    this.router.navigate(['/app/tabs/home']);
  }
}
