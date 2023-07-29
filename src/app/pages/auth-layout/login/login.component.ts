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
import { LanguageService } from 'src/app/core/services/language.service';
import { Browser } from '@capacitor/browser';
import { defaultStatus } from 'src/app/helpers/constants.helper';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  lang = 'en';
  deviceInfo: any;
  errorMessages = authFieldsErrors;
  selectedLanguage: string = '';
  defaultStatus = defaultStatus;

  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
    public translate: TranslateService,
    private userService: UserService,
    private langService: LanguageService

  ) { }

  loginForm = new FormGroup({
    countryCode: new FormControl('91', [Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[7-9][0-9]{9}$'),
      Validators.maxLength(10),
    ]),
    // role: new FormControl(ROLES.CUSTOMER, [Validators.required]),
    status: new FormControl(defaultStatus.PENDING, [Validators.required])
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
    this.userService.sendMobileOtp(this.loginForm.value).subscribe({
      next: async (success) => {
        await this.spinner.hideLoader();
        this.toaster.successToast('OTP sent to user mobile number');
        this.router.navigate([`/auth/verification`], {
          queryParams: {
            mobileNumber: this.form.mobileNumber.value,
            countryCode: this.form.countryCode.value,
          },
        });
      }, error: async (error) => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    }
    );
  }

  navigateToSignUp() {
    this.router.navigate([`/auth/signup`]);
  }


  languages = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'हिंदी',
      value: 'hi',
    },
    {
      label: 'मराठी',
      value: 'mr',
    },
  ];

  async setLanguage($event) {
    this.selectedLanguage = $event.target.value;
    if (this.selectedLanguage != this.langService.getLang()) {
      await this.toaster.successToast('Language Change Successfully');
    }
    this.langService.setLang(this.selectedLanguage);
  }

  openTerms = async () => {
    await Browser.open({ url: 'https://www.bharat-online.com/terms-and-conditions' });
  };
  openPolicy = async () => {
    await Browser.open({ url: 'https://www.bharat-online.com/privacy-policy' });
  };
}
