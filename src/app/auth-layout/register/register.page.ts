import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Plugins } from '@capacitor/core';
const { Device, Geolocation, Browser } = Plugins;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  submitted: boolean = false;
  showEye: boolean = false;
  deviceInfo: any;
  constructor(
    private router: Router,
    private spinner: LoaderService,
    private storageService: StorageService,
    private toaster: ToastService,
    public authService: AuthService,
    public translate: TranslateService
  ) {}

  ngOnInit() {}
  ionViewWillEnter(): void {
    this.getDeviceInfo();
  }
  registerForm = new FormGroup({
    id: new FormControl(),
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmpassword: new FormControl(null, [Validators.required]),
    role: new FormControl('SHOP KEEPER'),
  });

  get form() {
    return this.registerForm.controls;
  }

  register() {
    console.log(this.registerForm.value);
    
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    this.spinner.showLoader();
    let newObj: any = Object.assign(
      {
        deviceId: this.storageService.get('s2pUserDeviceId'),
      },
      this.deviceInfo
    );
    let formData: any = this.registerForm.value;
    this.storageService.set('mobile', formData.mobile);
    formData.role = 'SHOP KEEPER';
      formData.deviceInfo = newObj;
      this.authService.createUser(formData).subscribe((success: any) => {
      this.spinner.hideLoader();
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

  

  
  
}
