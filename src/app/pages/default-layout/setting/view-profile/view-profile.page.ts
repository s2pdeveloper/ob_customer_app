import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  user: any = {};

  constructor(
    private router: Router,
    private userService: UserService,
    public translate: TranslateService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getUserDetails();
  }

  // getUserDetails() {
  //   this.userService.currentUser.subscribe((userData:any) => {
  //     this.user = userData;
  //     console.log("userData.......",userData); 
  //   });
  // }

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
}
