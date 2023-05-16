import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AddressService } from 'src/app/core/services/address.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { RestService } from 'src/app/core/services/rest.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { addressType } from 'src/app/helpers';
import { addressErrors } from 'src/app/helpers/formErrors.helpers';
import { validateField } from 'src/app/shared/validators/form.validator';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {

  addressForm = new FormGroup({
    id: new FormControl('', []),
    type: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', []),
    pincode: new FormControl('', [Validators.required]),
    countryName: new FormControl('India', []),
    countryCode: new FormControl('IN', []),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    // location: new FormControl(''),
    isDefault: new FormControl(false, []),
    userId: new FormControl(''),
  });
  @Input() modalData: any = {};

  errorMessages = addressErrors;
  states: any;
  cities: any;
  addressType = addressType;
  data: any;
  addressData: any;
  user: any = {};
  constructor(
    public translate: TranslateService,
    private restService: RestService,
    private spinner: LoaderService,
    private toaster: ToastService,
    private address: AddressService,
    private modalController: ModalController,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUserDetails();
    if (this.modalData && this.modalData.id) {
      this.addressForm.patchValue(this.modalData)
    }
  }

  getUserDetails() {
    this.userService.getProfile().subscribe((userData: any) => {
      this.user = userData;
      this.addressForm.controls.userId.setValue(this.user.id)
    });
  }
  get form() {
    return this.addressForm.controls;
  }

  async onSubmit() {
    if (this.addressForm.invalid) {
      validateField(this.addressForm);
      return;
    }
    await this.spinner.showLoader();
    if (!this.form['id'].value) this.create();
    else this.update();
  }
  async create() {
    this.address.create(this.addressForm.value).subscribe(
      async (success) => {
        await this.spinner.hideLoader();
        this.toaster.successToast(success.message);
        this.addressForm.reset();
        this.dismissModal(true);
      },
      async (error) => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    );
  }

  async update() {
    this.address.update(this.addressForm.getRawValue()).subscribe(
      async (success) => {
        await this.spinner.hideLoader();
        this.toaster.successToast(success.message);
        this.addressForm.reset();
        this.dismissModal(true);
      },
      async (error) => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    );
  }
  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      'dismissed': isDismissed,
    });
  }
}
