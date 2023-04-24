import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ROLES } from 'src/app/helpers/constants.helper';
import { Location } from '@angular/common';
import { validateField } from 'src/app/shared/validators/form.validator';
import { UserService } from 'src/app/core/services/user.service';
import { authFieldsErrors } from 'src/app/helpers/formErrors.helpers';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  deviceInfo: any;
  errorMessages = authFieldsErrors;


  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
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
    countryCode: new FormControl('IN', [Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[7-9][0-9]{9}$'),
    ]),
  });
  get form() {
    return this.registerForm.controls;
  }

  navigateToVerification() {
    this.router.navigate([`/verification`], { replaceUrl: true });
  }

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
            countryCode: this.form.countryCode.value,
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

  goBack() {
    this.location.back();
  }



}
