import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { reportFormErrors } from 'src/app/helpers/formErrors.helpers';
import { validateField } from 'src/app/shared/validators/form.validator';
import { ReportService } from 'src/app/core/services/report.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  @Input() reportData: any = {};
  errorMessages = reportFormErrors;
  user: any;
  reportForm = new FormGroup({
    id: new FormControl(''),
    reason: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    orderId: new FormControl('', Validators.required),
  });

  constructor(
    private modalCtrl: ModalController,
    private toaster: ToastService,
    public translate: TranslateService,
    private spinner: LoaderService,
    private userService: UserService,
    private reportService: ReportService,

  ) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
    this.reportForm.controls.userId.setValue(this.user.id)
    this.reportForm.controls.orderId.setValue(this.reportData.orderId)
  }
  get form() {
    return this.reportForm.controls;
  }

  async onSubmit() {
    if (this.reportForm.invalid) {
      validateField(this.reportForm);
    }
    if (this.reportForm.value.reason == "") {
      this.toaster.successToast("please enter reason");
      return;
    }
    await this.spinner.showLoader();
    this.reportService.createReport(this.reportForm.value).subscribe(
      async success => {
        await this.spinner.hideLoader();
        this.toaster.successToast(success.message);
        this.reportForm.reset();
        this.dismissModal();
      }, async error => {
        await this.spinner.hideLoader();
        this.toaster.errorToast(error);
        this.dismissModal();
      })
  }

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
