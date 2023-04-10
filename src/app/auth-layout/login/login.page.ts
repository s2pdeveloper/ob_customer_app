import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import { ROLES } from 'src/app/helpers/constants.helper';
import { authFieldsErrors } from 'src/app/helpers/formErrors.helpers';
import { validateField } from 'src/app/shared/validators/form.validator';
import { UserService } from 'src/app/service/auth/user.service';
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
    private userService: UserService,
    private route: ActivatedRoute,
    private spinner: LoaderService,
    private toaster: ToastService,
    public authService: AuthService,
    public translate: TranslateService
  ) { }
  loginForm = new FormGroup({
    mobileCode: new FormControl('91', [Validators.required]),
    mobileNumber: new FormControl([
      Validators.required,
      Validators.pattern('^[7-9][0-9]{9}$'),
      Validators.maxLength(10),
    ]),
    role: new FormControl(ROLES.CUSTOMER, [Validators.required]),
    // locationPoint: new FormControl(),
  });
  errorMessages = authFieldsErrors;
  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = (
      await Geolocation.getCurrentPosition()
    ).coords;
    // this.form.locationPoint.setValue([
    //   this.deviceInfo.geoLocation.latitude,
    //   this.deviceInfo.geoLocation.longitude,
    // ]);
  }

  get form() {
    return this.loginForm.controls;
  }
  async login() {
    if (this.loginForm.invalid) {
      validateField(this.loginForm);
      return;
    }
    this.spinner.showLoader();
    this.userService.sendMobileOtp(this.loginForm.value).subscribe(
      async (success) => {
        this.router.navigate([`/verification`], {
          queryParams: {
            mobileNumber: this.form.mobileNumber.value,
          },
        });
        await this.spinner.hideLoader();
        this.toaster.successToast(success.message);

      },
      async (error) => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    );
  }

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
