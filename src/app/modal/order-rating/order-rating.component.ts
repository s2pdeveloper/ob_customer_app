import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { OrderRatingService } from 'src/app/service/order-rating/order-rating.service';
import { validateField } from 'src/app/shared/validators/form.validator';

@Component({
  selector: 'app-order-rating',
  templateUrl: './order-rating.component.html',
  styleUrls: ['./order-rating.component.scss'],
})
export class OrderRatingComponent implements OnInit {

  @Input() ratingObj: any;
  user: any;

  formData = new FormGroup({
    quality: new FormControl(0),
    shopId: new FormControl(),
    customerId: new FormControl(),
  });


  constructor(
    private modalCtrl: ModalController,
    private toaster: ToastService,
    public translate: TranslateService,
    private spinner: LoaderService,
    private userService: UserService,
    private orderRating: OrderRatingService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
    this.formData.controls.customerId.setValue(this.user._id)
    this.formData.controls.shopId.setValue(this.ratingObj.shopId)
  }

  get form() {
    return this.formData.controls;
  }

  async onSubmit() {
    console.log("this.formData", this.formData.value);

    if (this.formData.invalid) {
      validateField(this.formData);
    }
    await this.spinner.showLoader();
    this.orderRating.giveRating(this.ratingObj.orderId, this.formData.value,).subscribe(
      async success => {
        await this.spinner.hideLoader();
        this.toaster.successToast(success.message);
        this.formData.reset();
        this.dismissModal();
      }, async error => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
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
