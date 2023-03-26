import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Network } from '@capacitor/network';
import { LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './core/services';
import { LanguageService } from './core/services/language.service';
import { ToastService } from './core/services/toast.service';
import { AppBackButtonService } from './service/app-service/app-back-button.service';
import { PushNotificationService } from './service/app-service/push-notification.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
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
    private appBackButton: AppBackButtonService,
    private pushNotificationService: PushNotificationService,
    public translate: TranslateService
  ) {
    this.languageService.getLang();
    this.initializeApp();
  }
  async ngOnInit() {
    this.checkPermission();
    this.didUserGrantPermission();
    this.checkDeniedPermission();
    this.currentUser = this.storageService.get('OBCustomer');
    if (this.currentUser) {
      this.router.navigate(['/app/tabs/landing-page']);
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      document.body.setAttribute('color-theme', 'light');
      // document.body.setAttribute('color-theme','dark')
      this.settingStyleAndSplashScreen();
      // this.appUpdate.checkUpdate();
      this.pushNotificationService.registerForPushNotification();
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
  checkPermission = async () => {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // the user granted permission
      return true;
    }

    return false;
  };
  didUserGrantPermission = async () => {
    // check if user already granted permission
    const status = await BarcodeScanner.checkPermission({ force: false });
    if (status.granted) {
      // user granted permission
      return true;
    }
    if (status.denied) {
      // user denied permission
      return false;
    }
    if (status.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
    // if (status.neverAsked) {
    //   // user has not been requested this permission before
    //   // it is advised to show the user some sort of prompt
    //   // this way you will not waste your only chance to ask for the permission
    //   const c = confirm('We need your permission to use your camera to be able to scan barcodes');
    //   if (!c) {
    //     return false;
    //   }
    // }
    if (status.restricted || status.unknown) {
      // ios only
      // probably means the permission has been denied
      return false;
    }
    // user has not denied permission
    // but the user also has not yet granted the permission
    // so request it
    const statusRequest = await BarcodeScanner.checkPermission({ force: true });
    if (statusRequest.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
    if (statusRequest.granted) {
      // the user did grant the permission now
      return true;
    }
    // user did not grant the permission, so he must have declined the request
    return false;
  };
  checkDeniedPermission = async () => {
    const status = await BarcodeScanner.checkPermission();
    if (status.denied) {
      // the user denied permission for good
      // redirect user to app settings if they want to grant it anyway
      const c = confirm('If you want to grant permission for using your camera, enable it in the app settings.');
      if (c) {
        BarcodeScanner.openAppSettings();
      }
    }
  };

  settingStyleAndSplashScreen = async () => {
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: '#ff0000' });
    await StatusBar.show();
  };
  navigateTo(page: any) {
    this.router.navigate([`${page?.url}`]);
  }
  logout() {
    this.router.navigate([`login`]);
  }
}
