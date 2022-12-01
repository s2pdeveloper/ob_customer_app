import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { CustomerService } from 'src/app/service/customer/customer.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  constructor(
    private router: Router,
    private localStorage: StorageService,
    private customerService: CustomerService,
    private spinner: LoaderService,
    public translate: TranslateService
  ) {}
  myCourse: any = '';
  name: any = '';
  currentUser: any = {};
  customerArr: any = [];
  total: number = 0;
  count: number = 0;
  pageSize: number = 5;
  loaded: boolean = false;

  ngOnInit() {}
  
  ionViewWillEnter() {
    this.currentUser = this.localStorage.get('OBUser');
    this.getAllCustomerDashBoard();
  }
  doRefresh(event) {
    this.getAllCustomerDashBoard();
    event.target.complete();
  }
  getAllCustomerDashBoard() {
    // this.spinner.showLoader();
    this.loaded = false;
    let params = { pageSize: this.pageSize };
    this.customerService
      .getAllCustomerDashBoard(params)
      .subscribe((success) => {
        this.total = success.calculation[0].total ?? 0.0;
        this.count = success.calculation[0].count ?? 0;
        this.customerArr = success.rows;
        
        // this.spinner.hideLoader();
        this.loaded = true;
      });
  }
  navigateTo(path, id) {
    this.router.navigate([path], { queryParams: { id } });
  }
}
