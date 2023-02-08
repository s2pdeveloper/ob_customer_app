import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { Plugins } from '@capacitor/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { StorageService } from 'src/app/core/services';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  user: any;
  image: any;
  loaded = false;
  userDetails: any;


  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: LoaderService,
    private localStorage: StorageService,
    private toaster: ToastService,
    public translate: TranslateService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.user = this.localStorage.get('OBCustomer');
    this.getById();
  }

  getById() {
    this.loaded = false;
    this.authService.profile(this.user._id).subscribe((success: any) => {
      console.log("success profile", success);
      this.userDetails = success;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }


  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

  navigate(page: string) {
    this.router.navigate([`${page}`]);
  }


}
