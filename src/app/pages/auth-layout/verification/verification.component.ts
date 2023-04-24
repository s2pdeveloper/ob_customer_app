import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { authFieldsErrors } from 'src/app/helpers/formErrors.helpers';
import { UserService } from 'src/app/core/services/user.service';
import { validateField } from 'src/app/shared/validators/form.validator';
import { StorageService } from 'src/app/core/services/local-storage.service';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})

export class VerificationComponent implements OnInit, OnDestroy {

  errorMessages = authFieldsErrors;
  duration: number = 60;
  minutes: any = '00';
  seconds: any = '00';
  setTimeOut: any;
  canResendOTP: boolean = false;

  loginForm = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    countryCode: new FormControl('91', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[7-9][0-9]{9}$"), Validators.maxLength(10)]),
  });

  get form() {
    return this.loginForm.controls;
  }

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService,
    private toastService: ToastService, private spinner: LoaderService, public translate: TranslateService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['mobileNumber']) {
        this.form.mobileNumber.setValue(params['mobileNumber']);
        // this.form.countryCode.setValue(params['countryCode']);
      }
      this.canResendOTP = false;
      this.setDuration();
      this.startTimer();
    });
  }


  setDuration() {
    this.duration = 60;
  }
  toggleResend() {
    this.canResendOTP = !this.canResendOTP;
  }
  startTimer() {
    // this.toggleResend();
    this.setTimeOut = setInterval(() => {
      if (this.duration <= 0) {
        this.stopTimer();
        return;
      }
      this.duration--;
      let min = this.duration / 60;
      let sec = this.duration % 60;
      this.minutes = String('0' + Math.floor(min)).slice(-2);
      this.seconds = String('0' + Math.floor(sec)).slice(-2);
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.setTimeOut);
  }

  stopTimer() {
    clearInterval(this.setTimeOut);
    this.toggleResend();
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      validateField(this.loginForm);
      return;
    }
    await this.spinner.showLoader();
    this.userService.verifyMobileToken(this.loginForm.value).subscribe({
      next: async (success) => {
        await this.spinner.hideLoader();
        this.router.navigate(['app/tabs/home'], { replaceUrl: true });
      }, error: async (error) => {
        await this.spinner.hideLoader();
        this.toastService.errorToast(error);
      }
    })

  }
  async requestOtp() {
    await this.spinner.showLoader();
    this.userService.sendMobileOtp(this.loginForm.value).subscribe(
      async (success) => {
        await this.spinner.hideLoader();
        this.toastService.successToast(success.message);
        this.canResendOTP = false;
        this.setDuration();
        this.startTimer();
      },
      async (error) => {
        await this.spinner.hideLoader();
        this.toastService.errorToast(error);
      }
    );
  }


  navigateTo(page: string) {
    this.router.navigate([`${page}`])
  }


}
