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
  course: string;
  college: string;
  semester: string;
  batch: string;
  image: any;
  branch: string;
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
    this.getById();
  }
  getById() {
    // this.spinner.showLoader();
    this.loaded = false;
    this.authService.profile(this.user.id).subscribe((success) => {
      this.userDetails = success;
      // this.spinner.hideLoader();
      this.loaded = true;
    });
  }
  navigateTo(path, id) {
    this.router.navigate([path], { queryParams: { id } });
  }
  goBack() {
    this.location.back();
  }
}
