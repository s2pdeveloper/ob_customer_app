import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  navigateTo(page:string) {
    this.router.navigate([`${page}`])
  }

  logout() {
    this.router.navigate(['/login'])
  }
  language(){
    this.router.navigate(['/change-language'])
  }
}
