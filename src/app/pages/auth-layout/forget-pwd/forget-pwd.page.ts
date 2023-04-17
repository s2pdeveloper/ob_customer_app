import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
// import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.page.html',
  styleUrls: ['./forget-pwd.page.scss'],
})
export class ForgetPwdPage implements OnInit {
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: UserService,
    private spinner: LoaderService,
    private toaster: ToastService
  ) {}

  ngOnInit() {}

  forgetForm = new FormGroup({
    mobile: new FormControl(null),
  });

  get form() {
    return this.forgetForm.controls;
  }


  forget() {
    let obj = {
      mobile: this.forgetForm.value.mobile,
    };
    // this.authService.forgetPassword(obj).subscribe(
    //   (success) => {
       
    //     this.toaster.successToast('Please check your mobile to reset password');
    //     this.router.navigate(['/change-pwd'], { queryParams: success.data });
    //   },
    //   (error) => {
    //     // console.log(error);
    //     this.toaster.errorToast('Mail Could not be sent!');
    //   }
    // );
  }
}
