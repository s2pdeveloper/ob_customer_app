import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { UpdateMobileNumberComponent } from './update-mobile-number/update-mobile-number.component';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  user: any = {};
  isMobileNumber: boolean = false;
  constructor(
    private router: Router,
    private userService: UserService,
    public translate: TranslateService,
    private spinner: LoaderService,
    private toaster: ToastService,
    private modalController: ModalController,

  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getUserDetails();
  }
  getUserDetails() {
    this.userService.getProfile().subscribe((userData: any) => {
      this.user = userData;
    });
  }
  navigate(page: string) {
    this.router.navigate([`${page}`]);
  }
  navigateToMyAdd() {
    this.router.navigate([`/my-addresses`]);
  }

  async sendOtp(isMobileNumber) {
    let obj = {
      mobileNumber: this.user.mobileNumber,
      role: this.user.role
    }
    await this.spinner.hideLoader();
    this.userService.sendOtp(obj).subscribe(async success => {
      await this.spinner.hideLoader();
      this.toaster.successToast(success.message);
      this.updateMobileNumber(isMobileNumber);
    }, async error => {
      this.toaster.successToast(error);
    })

  }
  async updateMobileNumber(isMobileNumber) {
    const modal = await this.modalController.create({
      component: UpdateMobileNumberComponent,
      swipeToClose: true,
      componentProps: {
        isMobileNumber: isMobileNumber
      }
    });
    await modal.present();
  }
}
