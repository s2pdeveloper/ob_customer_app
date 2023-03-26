import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Socket } from 'ngx-socket-io';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ChatService } from 'src/app/service/chat/chat.service';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {
  appointmentArr= [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private shopService: ShopService,
    private localStorage: StorageService,
    private spinner: LoaderService,
    private socket: Socket,
    private chatService: ChatService,
    public translate: TranslateService,
    private modalController: ModalController

  ) { }
  user: any;

  ngOnInit() {
  }

  navigateTo() {
    let msg = '';
    let arr = this.appointmentArr.filter((x) => x.isChecked == true);
    // if (arr.length < 1) {
    //   this.toaster.errorToast('Plz select at least one product');
    //   return;
    // }
    let amount = 0;
    let description = '';
    // msg += `Dear ${arr[0].shopId.shopName},\n ${arr[0].shopId.fullName},\n would like to buy `;
    msg += `Dear merchant,\n i would like to buy \n`;
    for (let i = 0; i < arr.length; i++) {
      const catTitle = arr[i].title;
      // const catPrice = arr[i].price;
      msg += `${catTitle}`;
      if (i != arr.length - 1) {
        msg += ` , \n `;
      }
      description += `${catTitle}`;
      if (i != arr.length - 1) {
        description += `,`;
      }
      // amount += catPrice;
    }

    let message = {
      shopId: arr[0].shopId._id,
      message: msg,
      description: description,
      // amount: amount,
    };
    this.chatService.create(message).subscribe((success) => {
      this.spinner.hideLoader();
      // join
      this.socket.emit('join', { room: success.orderId, user: this.user._id });
      this.router.navigate(['/chat-view'], {
        queryParams: {
          shopId: arr[0].shopId._id,
          shopName: arr[0].shopId.shopName,
          roomName: success.orderId, //join
        },
      });
    });
  }




  navigateToHome() {
    this.router.navigate(['/app/tabs/landing-page']);
  }
}
