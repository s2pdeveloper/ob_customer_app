import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  passwordType = 'password';
  showEye: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spinner: LoaderService,
    private toaster: ToastService,
    public authService: AuthService,
    public translate: TranslateService
  ) { }

  loginForm = new FormGroup({
    mobile: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  async ngOnInit() {
    this.returnUrl =
      this.route.snapshot.queryParams[`returnUrl`] || '/landing-page';
  }

  get form() {
    return this.loginForm.controls;
  }

  async login() {
    if (this.loginForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    // this.spinner.showLoader();
    this.authService.login(this.loginForm.value).subscribe(async (success) => {
      this.toaster.successToast('Logged in successfully');
      this.router.navigate([`/app/tabs/landing-page`], { replaceUrl: true });
      this.saveDeviceToken(success._id);
      await this.spinner.hideLoader();
    }, (error) => {
      this.toaster.errorToast("The mobile number or password entered are incorrect");
    });
  }

  getDeviceInfo = async () => {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = await (
      await Geolocation.getCurrentPosition()
    ).coords;
  };

  saveDeviceToken(id) {

  }

  onClickEye() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.showEye = true;
    } else {
      this.passwordType = 'password';
      this.showEye = false;
    }
  }
}
