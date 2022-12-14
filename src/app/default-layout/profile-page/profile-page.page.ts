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
<<<<<<< HEAD
 
=======
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



>>>>>>> d3be3e627a2245daf8a89f10cde919c68e4a1766
  loaded = false;
  constructor(
    private router: Router,
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
    this.loaded = false;
    this.authService.profile(this.user._id).subscribe((success) => {
      console.log("success",success);
      this.userDetails = success;
<<<<<<< HEAD
      this.loaded = true;
    });
  }

  navigateTo(path, id) {
    this.router.navigate([path], { queryParams: { id } });
=======
      
      
      // this.spinner.hideLoader();
      this.loaded = false;
    });
  }
  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
>>>>>>> d3be3e627a2245daf8a89f10cde919c68e4a1766
  }
  goBack() {
    this.location.back();
  }
}
