import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { validateField } from 'src/app/shared/validators/form.validator';
import { Location } from '@angular/common';
import { supportFormErrors } from 'src/app/helpers/formErrors.helpers';
import { UserService } from 'src/app/core/services/user.service';
import { SupportService } from 'src/app/core/services/support.service';
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  errorMessages = supportFormErrors;
  user: any = {};
  supportForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl(''),
      description: new FormControl('', Validators.required),
      userId: new FormControl('',)
    },
  );
  constructor(private spinner: LoaderService,
    private location: Location,
    private toaster: ToastService,
    private userService: UserService,
    private supportService: SupportService) { }

  ngOnInit() {
    this.getUserDetails();
  }
  get form() {
    return this.supportForm.controls;
  }
  getUserDetails() {
    this.user = this.userService.getCurrentUser();
    this.supportForm.controls.userId.setValue(this.user.id)
    this.supportForm.patchValue(this.user)
  }

  async onSubmit() {
    if (this.supportForm.invalid) {
      validateField(this.supportForm);
      return;
    }
    await this.spinner.hideLoader();
    this.supportService.createSupport(this.supportForm.value).subscribe(async success => {
      await this.spinner.hideLoader();
      this.toaster.successToast(success.message);
      this.goBack();
    }, async error => {
      await this.spinner.hideLoader();
      this.toaster.successToast(error);
    })
  }


  goBack() {
    this.location.back();
  }
}
