import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar, Network } = Plugins;
import { LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './core/services';
import { LanguageService } from './core/services/language.service';
import { ToastService } from './core/services/toast.service';
import { AppBackButtonService } from './service/app-service/app-back-button.service';
import { AppUpdateService } from './service/app-service/app-update.service';
import { PushNotificationService } from './service/app-service/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  returnUrl: string;
  public selectedIndex: number = 0;
  currentUser: any = {};
 
  constructor(
    private router: Router,
    private languageService: LanguageService,
    private storageService: StorageService,
    private platform: Platform,
    private toastService: ToastService,
    public loadingController: LoadingController,
    private appUpdate: AppUpdateService,
    private appBackButton: AppBackButtonService,
    // private pushNotificationService: PushNotificationService,
    public translate: TranslateService
  ) {
    this.languageService.getLang();
    this.initializeApp();
  }
  async ngOnInit() {
    this.currentUser = this.storageService.get('OBCustomer');
    if (this.currentUser) {
      // this.router.navigate(['/landing-page']);
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      document.body.setAttribute('color-theme', 'light');
      // document.body.setAttribute('color-theme','dark')
      this.settingStyleAndSplashScreen();
      // this.appUpdate.checkUpdate();
      // this.pushNotificationService.registerForPushNotification();
      this.checkInternet();
      this.appBackButton.backButtonFunc();
    });
  }
  // check internet connection
  checkInternet() {
    Network.getStatus().then((status) => {
      console.log(status);
    });
    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed', status);
      if (!status.connected) {
        this.toastService.presentToast('warning', 'No internet connection');
        // this.translate.get('noInternet').subscribe((msg) => {
        //   this.toastService.presentToast('warning', msg);
        // });
      }
    });
  }

  settingStyleAndSplashScreen = async () => {
    await StatusBar.setStyle({ style: StatusBarStyle.Dark });
    await StatusBar.setBackgroundColor({ color: '#5b32a1' });
    await StatusBar.show();
  };
  navigateTo(page: any) {
    this.router.navigate([`${page?.url}`]);
  }
  logout() {
    this.router.navigate([`login`]);
  }
}
