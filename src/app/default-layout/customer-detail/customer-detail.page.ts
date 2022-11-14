import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
  styleUrls: ['./customer-detail.page.scss'],
})
export class CustomerDetailPage implements OnInit {
  customerDetails: any = {};
  loaded = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private spinner: LoaderService,
    public translate: TranslateService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.getCustomerById(params.id);
    });
  }
  getCustomerById(id) {
    // this.spinner.showLoader();
    this.loaded = false;
    this.customerService.getByCustomerId(id).subscribe((success: any) => {
      // console.log('success', success);
      this.customerDetails = success;
      // this.spinner.hideLoader();
      this.loaded = true;
    });
  }
  navigateTo(path, id) {
    this.router.navigate([path], { queryParams: { id } });
  }
}
