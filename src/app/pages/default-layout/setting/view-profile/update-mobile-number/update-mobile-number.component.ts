import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { ROLES } from 'src/app/helpers';
import { updateEmailFormErrors, updateMobileNumberFormErrors } from 'src/app/helpers/formErrors.helpers';
import { validateField } from 'src/app/shared/validators/form.validator';

@Component({
  selector: 'app-update-mobile-number',
  templateUrl: './update-mobile-number.component.html',
  styleUrls: ['./update-mobile-number.component.scss'],
})
export class UpdateMobileNumberComponent implements OnInit {
  @Input() isMobileNumber: boolean;
  errorMessages = updateMobileNumberFormErrors;
  emailErrorMessages = updateEmailFormErrors;
  updateMobileForm = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    countryCode: new FormControl('91', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[7-9][0-9]{9}$"), Validators.maxLength(10)]),
    role: new FormControl(ROLES.CUSTOMER, [Validators.required]),
  });

  updateEmailForm = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    countryCode: new FormControl('91', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    role: new FormControl(ROLES.CUSTOMER, [Validators.required]),
  });
  constructor(
    public translate: TranslateService,
    private modalCtrl: ModalController,
    private toaster: ToastService,
    private spinner: LoaderService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  get form() {
    return this.updateMobileForm.controls;
  }
  get emailForm() {
    return this.updateEmailForm.controls;
  }
  async onSubmit() {
    if (this.isMobileNumber) {
      if (this.updateMobileForm.invalid) {
        validateField(this.updateMobileForm);
      }
      this.userService.updateMobile(this.updateMobileForm.value).subscribe(
        async success => {
          this.toaster.successToast(success.message);
          this.updateMobileForm.reset();
          this.dismissModal(false, '');
          await this.spinner.hideLoader();
        }, async error => {
          await this.spinner.hideLoader();
          this.toaster.errorToast(error);
        })
    } else {
      if (this.updateEmailForm.invalid) {
        validateField(this.updateEmailForm);
      }
      this.userService.updateMobile(this.updateEmailForm.value).subscribe(
        async success => {
          this.toaster.successToast(success.message);
          this.updateEmailForm.reset();
          this.dismissModal(false, '');
          await this.spinner.hideLoader();
        }, async error => {
          await this.spinner.hideLoader();
          this.toaster.errorToast(error);
        })

    }

  }
  dismissModal(isDismissed: boolean = false, item) {
    this.modalCtrl.dismiss({
      dismissed: isDismissed,
    });
  }
}
