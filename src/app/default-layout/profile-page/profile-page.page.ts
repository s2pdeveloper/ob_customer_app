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
    this.getById();
  }
  getById() {
    this.loaded = false;
    this.authService.profile(this.user.id).subscribe((success) => {
      this.userDetails = success;
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
