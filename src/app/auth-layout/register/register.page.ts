import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Plugins } from '@capacitor/core';
import { ROLES } from 'src/app/helpers/constants.helper';
const { Device, Geolocation, Browser } = Plugins;
import { Location } from '@angular/common';
import { validateField } from 'src/app/shared/validators/form.validator';
import { UserService } from 'src/app/service/auth/user.service';
import { authFieldsErrors } from 'src/app/helpers/formErrors.helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  submitted: boolean = false;
  // showEye: boolean = false;
  // passwordType = 'password';
  passwordType1 = 'password';
  showEye: boolean = false;
  passwordType2 = 'password';
  showEye2: boolean = false;
  deviceInfo: any;
  constructor(
    private router: Router,
    private spinner: LoaderService,
    private storageService: StorageService,
    private toaster: ToastService,
    public authService: AuthService,
    private userService: UserService,
    public translate: TranslateService,
    private location: Location,
  ) { }

  ngOnInit() { }
  ionViewWillEnter(): void {
    this.getDeviceInfo();
  }
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl(ROLES.CUSTOMER),
    mobileCode: new FormControl('91', [Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[7-9][0-9]{9}$'),
    ]),
  });
  errorMessages = authFieldsErrors;
  passwordType = 'password';
  get form() {
    return this.registerForm.controls;
  }

  navigateToVerification() {
    this.router.navigate([`/verification`], { replaceUrl: true });
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

  // register() {
  //     return;
  //   }
  //   this.spinner.showLoader();
  //   let newObj: any = Object.assign(
  //     {
  //       deviceId: this.storageService.get('OBUserDeviceId'),
  //     },
  //     this.deviceInfo
  //   );
  //   let formData: any = this.registerForm.value;
  //   this.storageService.set('mobile', formData.mobile);
  //   formData.role = 'CUSTOMER';
  //   formData.deviceInfo = newObj;
  //   this.authService.createUser(formData).subscribe((success: any) => {
  //     this.spinner.hideLoader();
  //     this.registerForm.reset();
  //     this.submitted = false;
  //     this.toaster.successToast('Register done successfully.');
  //     this.router.navigate(['/login']);
  //   });
  // }

  async onSubmit() {
    if (this.registerForm.invalid) {
      validateField(this.registerForm);
      return;
    }
    this.spinner.showLoader();
    this.userService.signUp(this.registerForm.value).subscribe(
      async (success) => {
        this.router.navigate([`/verification`], {
          queryParams: {
            mobileNumber: this.form.mobileNumber.value,
          },
        });
        this.toaster.successToast(success.message);
      },
      async (error) => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    );
  }
  getDeviceInfo = async () => {
    this.deviceInfo = await Device.getInfo();
    this.deviceInfo.geoLocation = await (
      await Geolocation.getCurrentPosition()
    ).coords;
  };
  async open() {
    await Browser.open({ url: '' });
  }

  onClickEye1() {
    if (this.passwordType1 === 'password') {
      this.passwordType1 = 'text';
      this.showEye = true;
    } else {
      this.passwordType1 = 'password';
      this.showEye = false;
    }
  }

  goBack() {
    this.location.back();
  }



}
