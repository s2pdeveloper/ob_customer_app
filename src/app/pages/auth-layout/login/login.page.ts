import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { ROLES } from 'src/app/helpers/constants.helper';
import { authFieldsErrors } from 'src/app/helpers/formErrors.helpers';
import { validateField } from 'src/app/shared/validators/form.validator';
import { UserService } from 'src/app/core/services/user.service';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  deviceInfo: any;
  errorMessages = authFieldsErrors;

  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
    public translate: TranslateService,
    private userService: UserService
  ) { }

  loginForm = new FormGroup({
    countryCode: new FormControl('IN', [Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[7-9][0-9]{9}$'),
      Validators.maxLength(10),
    ]),
    role: new FormControl(ROLES.CUSTOMER, [Validators.required]),
  });

  get form() {
    return this.loginForm.controls;
  }

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = (
      await Geolocation.getCurrentPosition()
    ).coords;
  }


  async login() {
    if (this.loginForm.invalid) {
      validateField(this.loginForm);
      return;
    }
    await this.spinner.showLoader();
    this.userService.sendMobileOtp(this.loginForm.value).subscribe(async (success) => {
      this.toaster.successToast('OTP sent to user Mobile Number');
      this.router.navigate([`/verification`], {
        queryParams: {
          mobileNumber: this.form.mobileNumber.value,
          countryCode: this.form.countryCode.value,
        },
      });
      await this.spinner.hideLoader();
    }, async (error) => {
      await this.spinner.hideLoader();
      this.toaster.errorToast(error);
    });
  }

  getDeviceInfo = async () => {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = await (
      await Geolocation.getCurrentPosition()
    ).coords;
  };

  // saveDeviceToken(id) {
  //   let newObj: any = Object.assign(
  //     {
  //       id: id,
  //       deviceId: this.localStorage.get('OBShopDeviceId'),
  //       platform: this.deviceInfo?.platform
  //     },
  //   );

  //   console.log("newObj", newObj);
  //   this.userService.addDeviceToken(newObj).subscribe();
  // }

  navigateToSignUp() {
    this.router.navigate([`/register`]);
  }
}
