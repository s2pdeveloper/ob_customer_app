import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { validateField } from 'src/app/shared/validators/form.validator';
import { Location } from '@angular/common';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  supportForm = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      notes: new FormControl(''),
    },
  );
  constructor(private spinner: LoaderService,
    private location: Location,
    private toaster: ToastService,) { }

  ngOnInit() {
  }
  async onSubmit() {
    if (this.supportForm.invalid) {
      validateField(this.supportForm);
      return;
    }
    await this.spinner.hideLoader();
    // this.userService.updateProfile(this.supportForm.value).subscribe(async success => {
    //   await this.spinner.hideLoader();
    //   this.toaster.successToast(success.message);
    //   this.goBack();
    // }, async error => {
    //   await this.spinner.hideLoader();
    //   this.toaster.successToast(error);
    // })
  }


  goBack() {
    this.location.back();
  }
}
