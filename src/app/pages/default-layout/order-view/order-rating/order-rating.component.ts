import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { OrderService } from 'src/app/core/services/order.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { ratingFormErrors } from 'src/app/helpers/formErrors.helpers';
import { validateField } from 'src/app/shared/validators/form.validator';

@Component({
  selector: 'app-order-rating',
  templateUrl: './order-rating.component.html',
  styleUrls: ['./order-rating.component.scss'],
})
export class OrderRatingComponent implements OnInit {

  @Input() ratingObj: any = {};
  user: any;
  errorMessages = ratingFormErrors;
  formData = new FormGroup({
    id: new FormControl(''),
    productQuality: new FormControl('', Validators.required),
    shopId: new FormControl('', Validators.required),
    orderId: new FormControl('', Validators.required),
  });
  constructor(
    private modalCtrl: ModalController,
    private toaster: ToastService,
    public translate: TranslateService,
    private spinner: LoaderService,
    private userService: UserService,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    console.log("this.rating Object", this.ratingObj);

  }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
    this.formData.controls.orderId.setValue(this.ratingObj.orderId)
    this.formData.controls.shopId.setValue(this.ratingObj.shopId)
    this.formData.controls.productQuality.patchValue(this.ratingObj.ratingDetails.productQuality)
  }

  get form() {
    return this.formData.controls;
  }

  async onSubmit() {
    if (this.formData.invalid) {
      validateField(this.formData);
    }
    await this.spinner.showLoader();
    this.orderService.giveRating(this.formData.value).subscribe(
      async success => {
        await this.spinner.hideLoader();
        this.toaster.successToast(success.message);
        this.formData.reset();
        this.dismissModal();
      }, async error => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
        this.dismissModal();
      })
  }
  /**
 * to dismiss modal
 */
  dismissModal(isDismissed: boolean = false) {
    this.modalCtrl.dismiss({
      dismissed: isDismissed,
    });
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': false,
    });
  }
}
