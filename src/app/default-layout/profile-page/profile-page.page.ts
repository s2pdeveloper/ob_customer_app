import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService, UtilitiesService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {
  user: any;
  userDetails: any = {};
  image: any;
  key: string;
  customerName: string;
  firstName: string;
  lastName: string;
  aboutUs: string;
  email: string;
  mobile: string;
  password: string;
  conformPassword: string;
  line1: string;
  city: string;
  status: string;
  role: string;



  loaded = false;
  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
    private localStorage: StorageService,
    private authService: AuthService,
    private location: Location
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.user = this.localStorage.get('OBUser');
    console.log("this.user",this.user);
    
    this.getById();
  }
  getById() {
    // this.spinner.showLoader();
    this.loaded = false;
    this.authService.profile(this.user._id).subscribe((success) => {
      this.userDetails = success;
      // this.spinner.hideLoader();
      this.loaded = true;
    });
  }
  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }
  goBack() {
    this.location.back();
  }
}
