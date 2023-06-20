import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { socketOnEvents } from 'src/app/helpers';


@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {

  orderData: any = [];
  shopId: string;
  shopDetailsId: string;
  shopName: string;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private modalController: ModalController,
    public alertController: AlertController,
    private socketService: SocketService,
    private storageService: StorageService,
  ) {
    this.orderData = this.storageService.get('orderData');
    this.storageService.remove('orderData');
  }

  ngOnInit() { }

  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      dismissed: isDismissed,
    });
  }

  async closeModal() {
    await this.modalController.dismiss({
      'dismissed': false,
    });
  }

  navigateToChat() {
    let msg = '';
    let arr = this.orderData.filter((x) => x.isChecked == true);
    let amount = 0;
    let description = '';
    msg += `Dear ${this.shopName},\nI would like to buy: \n `;

    for (let i = 0; i < arr.length; i++) {
      const catTitle = arr[i]?.title;
      const catPrice = arr[i]?.price;
      msg += `${catTitle} - ₹ ${catPrice}`;
      if (i != arr.length - 1) {
        msg += `,<br/>`;
      }
      description += `${catTitle}`;
      if (i != arr.length - 1) {
        description += `,`;
      }
    }
    let message = {
      shopId: this.shopDetailsId,
      message: msg,
      description: description,
      catalogue: this.orderData,
      amount: amount,
    };
    this.receiveMessage();
    this.socketService.emitEvent(socketOnEvents.CREATE_ORDER, message);
  }


  receiveMessage() {
    this.socketService.listenEvent(socketOnEvents.CREATE_ORDER).subscribe({
      next: (result: any) => {
        this.router.navigate(['/order-view'],
          {
            replaceUrl: true, queryParams:
              { shopId: this.shopId, orderId: result.data._id, shopName: this.shopName }
          });
      },
      error: (error) => {
        console.log(error)
      },
    })
    this.dismissModal();
  }
}
