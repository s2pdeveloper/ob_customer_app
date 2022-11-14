import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
const { Device, Geolocation } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted: boolean = false;
  returnUrl: string;
  deviceInfo: any;
  showEye: boolean = false;
  constructor(
    private router: Router,
    private localStorage: StorageService,
    private route: ActivatedRoute,
    private spinner: LoaderService,
    private toaster: ToastService,
    public authService: AuthService,
    public translate: TranslateService
  ) {}

  loginForm = new FormGroup({
    mobile: new FormControl('9822570558', [Validators.required]),
    password: new FormControl('1234', [Validators.required]),
  });

  ngOnInit() {
    //  this.loginForm();
    this.localStorage.remove('s2pUser');
    // get return url from route parameters or default to "/"
    this.returnUrl =
      this.route.snapshot.queryParams[`returnUrl`] || '/landing-page';
  }

  get form() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    this.spinner.showLoader();
    this.authService.login(this.loginForm.value).subscribe((success) => {
      if (typeof window !== 'undefined') {
        this.localStorage.set('s2pUser', success);
      }
      this.router.navigateByUrl(this.returnUrl);
      this.saveDeviceToken(success.id);
      this.spinner.hideLoader();
    });
  }
  getDeviceInfo = async () => {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = await (
      await Geolocation.getCurrentPosition()
    ).coords;
  };
  saveDeviceToken(id) {
    let newObj: any = Object.assign(
      {
        userId: id,
        deviceId: this.localStorage.get('s2pUserDeviceId'),
      },
      this.deviceInfo
    );    
    newObj.deviceId &&
      this.authService.createAndUpdateUserDevice(newObj).subscribe();
  }
}
