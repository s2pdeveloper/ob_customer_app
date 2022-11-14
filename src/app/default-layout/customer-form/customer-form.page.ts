import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { CustomerService } from 'src/app/service/customer/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.page.html',
  styleUrls: ['./customer-form.page.scss'],
})
export class CustomerFormPage implements OnInit {

  submitted: boolean = false;
  loaded : boolean = true;
  
  customerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required]),
    pinCode: new FormControl(null),
    anotherMobile: new FormControl(null),
    email: new FormControl(null, [Validators.email]),
    address: new FormControl(null),
    city: new FormControl(null),
    state: new FormControl(null),
    image: new FormControl(),
  });

  get form() {
    return this.customerForm.controls;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: LoaderService,
    private location: Location,
    private storageService: StorageService,
    private toaster: ToastService,
    private customerService: CustomerService,
    public translate: TranslateService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      params.id && this.getCustomerById(params.id);
    });
  }

  getCustomerById(id) {
    // this.spinner.showLoader();
    this.loaded  = false;
    this.customerService.getByCustomerId(id).subscribe((success: any) => {
      this.customerForm.patchValue(success);
      // this.spinner.hideLoader();
      this.loaded= true;
    });
  }
  submit() {
    this.submitted = true;
    if (this.customerForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    let formData = this.customerForm.value;
    if (formData.id) {
      this.update(formData);
    } else {
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    // this.spinner.showLoader();
    this.loaded= false;
    this.customerService.createCustomer(formData).subscribe((success: any) => {
      // this.spinner.hideLoader();
      this.loaded= true;
      this.customerForm.reset();
      this.submitted = false;
      this.toaster.successToast(success.message);
      this.location.back();
    });
  }
  update(formData) {
    // this.spinner.showLoader();
    this.loaded= false;
    this.customerService
      .updateCustomer(formData.id, formData)
      .subscribe((success: any) => {
        // this.spinner.hideLoader();
        this.loaded= true;
        this.customerForm.reset();
        this.submitted = false;
        this.toaster.successToast(success.message);
        this.location.back();
      });
  }
}
