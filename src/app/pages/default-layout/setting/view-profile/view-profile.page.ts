import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  user: any;
  loaded = false;
  userDetails: any={};

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: LoaderService,
    private userService: UserService,
    public translate: TranslateService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.user = this.userService.getCurrentUser();
  }

  navigate(page: string) {
    this.router.navigate([`${page}`]);
  }
}
