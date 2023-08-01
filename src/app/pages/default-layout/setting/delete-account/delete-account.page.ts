import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {
  tnc: boolean = true;
  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  checkTnC(event) {
    this.tnc = event.target.checked;
  }

   async deleteAccount() {
    this.userService.deleteProfile().subscribe(async result => {
      this.userService.purgeAuth();
      this.toaster.successToast('Your account has been Deleted');
      this.router.navigate([`/auth/login`], { replaceUrl: true });
      await this.spinner.hideLoader();
    }, async error => {
      this.toaster.errorToast(error);
      this.router.navigate([`/auth/login`], { replaceUrl: true });
      await this.spinner.hideLoader();
    })
  }
}
