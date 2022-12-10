import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';


const { Device, Geolocation } = Plugins;
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  user: any;
  public selectedIndex: number = 0;

  public tabPages = [
    {
      title: 'Home',
      value: 'landing-page',
      tab: 'landing-page',
      icon: 'home',
    },
   
    {
      title: 'Trade',
      value: 'trade',
      tab: 'trade',
      icon: 'server',
    },
    {
      title: 'Setting',
      value: 'settings',
      tab: 'settings',
      icon: 'settings',
    },
  ];

  deviceInfo: any;
  constructor(
    private router: Router,
    // private userService: UserService,
    // private spinnerService: SpinnerService,
    // private toastService: ToastService,
    // public translate: TranslateService,
    // private languageService: LanguageService,
    // private cartService: CartService
  ) {
    // this.userService.refreshTable.subscribe(() => {
    //   this.cartQuantity();
    // });
  }

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    console.log('device info', this.deviceInfo);
  }

  // get shopId() {
  //  return JSON.parse(localStorage.getItem('shopId'));
  // }
  ionViewDidEnter() {
    // this.user = this.userService.getCurrentUser();
    // this.cartQuantity();
  }

 
  
  /**
   * navigate to provided page url
   * @param page
   */
  navigateTo(page: any) {
    this.router.navigate([`${page?.url}`]);
  }

  /**
   * to logout user
   */
  // async logout() {
  //   await this.spinnerService.presentLoading();
  //   let payload = {
  //     deviceToken: localStorage.getItem('deviceToken'),
  //     platform: this.deviceInfo.platform,
  //   };
  //   this.userService.removeDeviceToken(payload).subscribe(
  //     async (result) => {
  //       this.userService.purgeAuth();
  //       this.navigateTo(`/auth/login`);
  //       await this.spinnerService.dismissLoading();
  //     },
  //     async (error) => {
  //       this.userService.purgeAuth();
  //       this.navigateTo(`/auth/login`);
  //       await this.spinnerService.dismissLoading();
  //     }
  //   );
  // }

  // getSelectedLanguage() {
  //   this.subscription = this.languageService.updatedLang$.subscribe((l) => {
  //     this.translate.use(l);
  //     for (let i = 0; i < this.tabPages.length; i++) {
  //       const element = this.tabPages[i];
  //       this.translate.get(`${element.title}`).subscribe((value) => {
  //         element.value = value;
  //       });
  //     }
  //   });
  // }
}
