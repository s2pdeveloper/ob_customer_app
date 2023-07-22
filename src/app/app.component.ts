import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language.service';
import { AppBackButtonService } from './core/services/app-back-button.service';
import { NetworkService } from './core/services/network.service';
import { JwtService } from './core/services/jwt.service';
import { SplashScreenService } from './core/services/splash-screen.service';
import { CameraService } from './core/services/camera.service';
import { StatusBarService } from './core/services/status-bar.service';
import { BarcodeScannerService } from './core/services/barcode-scanner.service';
import { UserService } from './core/services/user.service';
import { PushNotificationService } from './core/services/push-notification.service';
import { SendIntentService } from './core/services/send-intent.service';


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
    private jwtService: JwtService,
    private languageService: LanguageService,
    private platform: Platform,
    private userService: UserService,
    public loadingController: LoadingController,
    private appBackButton: AppBackButtonService,
    private pushNotificationService: PushNotificationService,
    public translate: TranslateService,
    private networkService: NetworkService,
    private splashScreenService: SplashScreenService,
    private cameraService: CameraService,
    private statusBarService: StatusBarService,
    private barcodeScannerService: BarcodeScannerService,
    private sendIntentService: SendIntentService,

  ) {
    this.languageService.getLang();
    this.initializeApp();
  }
  ngOnInit() {
    if (
      localStorage.getItem('firstTime') &&
      localStorage.getItem('firstTime').match('firstTime')
    ) {
      if (this.jwtService.getToken()) {
        this.router.navigate([`/app/tabs/home`], { replaceUrl: true });
      } else {
        this.router.navigate([`/auth/login`], { replaceUrl: true });
      }
    } else {
      this.router.navigate([`/auth/login`]);
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreenService.hideSplashScreen();
      this.networkService.checkInternetConnection();
      this.pushNotificationService.registerForPushNotification();
      this.cameraService.requestPermission();
      this.barcodeScannerService.askPermission();
      this.statusBarService.changeColor('#de0f3f');
      this.userService.populate();
      this.appBackButton.backButtonFunc();
      this.sendIntentService.initiateIntent();
    });
  }

}
