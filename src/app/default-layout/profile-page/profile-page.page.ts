import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from 'src/app/core/services';
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
  email: string;
  mobile: string;
  // password: string;
  // conformPassword: string;
  line1: string;
  city: string;
  // status: string;
  // role: string;



  loaded = false;
  constructor(
    private router: Router,
    private localStorage: StorageService,
    private authService: AuthService,
    private location: Location
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.user = this.localStorage.get('OBCustomer');
    console.log("this.user",this.user);
    
    this.getById();
  }
  getById() {
    this.loaded = false;
    this.authService.profile(this.user._id).subscribe((success) => {
      console.log("success",success);
      this.userDetails = success;
      
      
      // this.spinner.hideLoader();
      this.loaded = false;
    });
  }
  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }
  goBack() {
    this.location.back();
  }
}
