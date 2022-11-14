import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { PassbookService } from 'src/app/service/passbook/passbook.service';

@Component({
  selector: 'app-customer-udari',
  templateUrl: './customer-udari.page.html',
  styleUrls: ['./customer-udari.page.scss'],
})
export class CustomerUdariPage implements OnInit {
  submitted: boolean = false;
  loaded : boolean = true;
  customerId: number = null;
  passbookForm = new FormGroup({
    id: new FormControl(),
    customerId: new FormControl(null, [Validators.required]),
    type: new FormControl('ADVANCE', [Validators.required]),
    particular: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
    paid: new FormControl(0, [Validators.required]),
  });

  get form() {
    return this.passbookForm.controls;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: LoaderService,
    private storageService: StorageService,
    private toaster: ToastService,
    private passbookService: PassbookService,
    public translate: TranslateService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) this.customerId = +params.id;
    });
  }

  checkValidation() {
    if (this.passbookForm.get('type').value !== 'DEPOSIT') {
      this.passbookForm.get('amount').addValidators(Validators.required);
    } else {
      this.passbookForm.controls.amount.setValue(0);
      this.passbookForm.get('amount').clearValidators();
    }
    this.passbookForm.controls['amount'].updateValueAndValidity();
    console.log(' this.passbookForm', this.passbookForm);
  }
  submit() {
    this.submitted = true;
    this.passbookForm.controls.customerId.setValue(this.customerId);
    if (this.passbookForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    // this.spinner.showLoader();
    this.loaded = false;
    let formData = this.passbookForm.value;
    this.passbookService.createPassbook(formData).subscribe((success: any) => {
      // this.spinner.hideLoader(); 
      this.loaded= true;
      this.passbookForm.reset();
      this.submitted = false;
      this.toaster.successToast(success.message);
      this.router.navigate(['/customer-passbook'], {
        queryParams: { id: this.customerId },
      });
    });
  }
}
