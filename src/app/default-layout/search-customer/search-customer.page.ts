import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { CategoryService } from 'src/app/service/category/category.service';
@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.page.html',
  styleUrls: ['./search-customer.page.scss'],
})
export class SearchCustomerPage implements OnInit {
  page: number = 1;
  pageSize: number = 10;
  search: string = '';
  startPrice = 0;
  endPrice = 0;
  range = { lower: this.startPrice, upper: this.endPrice };
  collection: number = 0;
  customerArr: any = [];
  loaded: boolean = false;
  constructor(
    private router: Router,
    private customerService: CustomerService,
    private spinner: LoaderService,
    public translate: TranslateService,
    // private categoryService:CategoryService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllCatlogue(false);
  }

  onSearch() {
    this.page = 1;
    this.customerArr = [];
    this.getAllCatlogue(false, '');
  }
  doRefresh(event) {
    this.page = 1;
    this.customerArr = [];
    this.getAllCatlogue(false);
    event.target.complete();
  }
  doInfinite(event) {
    this.page++;
    this.getAllCatlogue(true, event);
    event.target.complete();
  }

  getAllCatlogue(isFirstLoad: boolean, event?: any) {
    // this.spinner.showLoader();
    this.loaded = false;
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      // startPrice: this.startPrice,
      // endPrice: this.endPrice,
    };

    this.customerService.getAllCustomers(obj).subscribe((success: any) => {
      this.loaded = true;
      console.log('success', success);
      this.customerArr = [...this.customerArr, ...success.rows];
      this.collection = success.count;
      this.startPrice = +success.range.startPrice;
      this.endPrice = +success.range.endPrice;
      if (isFirstLoad) event?.target.complete();
      if (this.customerArr.length >= this.collection && event) {
        event.target.disabled = true;
      }
      // this.spinner.hideLoader();
    });
  }
  navigateTo( path,id) {
    this.router.navigate(['path'], { queryParams: { id } });
  }
}
