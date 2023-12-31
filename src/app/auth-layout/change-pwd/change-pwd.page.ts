import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { StorageService } from 'src/app/core/services';
import { TranslateService } from '@ngx-translate/core';
import { ValidationService } from '../../../app/core/validation-messages/validation-messages.service';
@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.page.html',
  styleUrls: ['./change-pwd.page.scss'],
})
export class ChangePwdPage implements OnInit {
  showOld = false;
  showNew = false;
  showConfirm = false;
  submitted: boolean = false;
  loaded : boolean = true;
  passForm = this.formBuilder.group(
    {
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      confirmPass: new FormControl(null, [Validators.required]),
      id: new FormControl(null),
    },
    {
      validator: this.validationService.MustMatch('newPassword', 'confirmPass'),
    }
  );




  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private auth: AuthService,
    private spinner: LoaderService,
    private toaster: ToastService,
    private localStorage: StorageService,
    public translate: TranslateService,
    private validationService: ValidationService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.passForm.controls.id.setValue(this.localStorage.get('OBCustomer').id);
  }
  ngOnDestroy() {}

  get form() {
    return this.passForm.controls;
  }



  // directly update password -- only for super admin
  setPassword() {
    // if (!this.isMatch) {
      // this.translate.get('changePassPage.error.notMatch').subscribe((msg) => {
      //   this.errorMsg = msg;
      // });
    //   return;
    // }
    this.submitted = true;
    if (this.passForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    // this.spinner.showLoader();
    this.loaded  = false;
    this.auth.resetPassword(this.passForm.value).subscribe((success: any) => {
      // this.spinner.hideLoader();
      this.loaded= true;
      this.passForm.reset();
      this.toaster.successToast('Password Change done successfully !!');
      this.router.navigate(['/login']);
    });
  }
  goBack() {
    this.location.back();
  }
}
