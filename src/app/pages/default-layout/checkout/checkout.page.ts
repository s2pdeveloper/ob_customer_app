import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  orderData: any = []
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private shopService: ShopService,
    private userService: UserService,
    private spinner: LoaderService,
    // private socket: Socket,
    // private chatService: ChatService,
    public translate: TranslateService,
    private storageService: StorageService) {
    this.orderData = this.storageService.get('orderData');
    this.storageService.remove('orderData');
  }

  ngOnInit() {

  }
  navigateToChat() {
    this.router.navigate(['/chat-view'], {});
  }
  navigateToHome() {
    this.router.navigate(['/app/tabs/home']);
  }
}
