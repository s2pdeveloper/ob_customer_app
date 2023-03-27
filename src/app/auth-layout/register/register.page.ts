import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Plugins } from '@capacitor/core';
import { ValidationService } from 'src/app/core/validation-messages/validation-messages.service';
const { Device, Geolocation, Browser } = Plugins;

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
  showEye1: boolean = false;
  passwordType2 = 'password';
  showEye2: boolean = false;
  deviceInfo: any;
  constructor(
    private router: Router,
    private spinner: LoaderService,
    private storageService: StorageService,
    private toaster: ToastService,
    public authService: AuthService,
    public translate: TranslateService,
    private formBuilder: FormBuilder,

    private validationService: ValidationService

  ) { }

  ngOnInit() { }
  ionViewWillEnter(): void {
    this.getDeviceInfo();
  }

  registerForm = this.formBuilder.group(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobile: new FormControl(''),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      role: new FormControl('CUSTOMER'),
    },
    {
      validator: this.validationService.MustMatch('password', 'confirmPassword'),
    }
  );

  get form() {
    return this.registerForm.controls;
  }

  async register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    // this.spinner.showLoader();
    let newObj: any = Object.assign(
      {
        deviceId: this.storageService.get('OBUserDeviceId'),
      },
      this.deviceInfo
    );
    let formData: any = this.registerForm.value;
    this.storageService.set('mobile', formData.mobile);
    formData.role = 'CUSTOMER';
    formData.deviceInfo = newObj;
    this.authService.createUser(formData).subscribe(async (success: any) => {
      await this.spinner.hideLoader();
      this.registerForm.reset();
      this.submitted = false;
      this.toaster.successToast('Register done successfully.');
      this.router.navigate(['/login']);
    });
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
      this.showEye1 = true;
    } else {
      this.passwordType1 = 'password';
      this.showEye1 = false;
    }
  }

  onClickEye2() {
    if (this.passwordType2 === 'password') {
      this.passwordType2 = 'text';
      this.showEye2 = true;
    } else {
      this.passwordType2 = 'password';
      this.showEye2 = false;
    }
  }

}
