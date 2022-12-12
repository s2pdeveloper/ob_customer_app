import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { BusinessTypeService } from 'src/app/service/businessType/businessType.service';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  businessTypeId: any;
  user: any;
  businessArr: any = [];
  BusinessWithCategoryArr:any=[];

  constructor(
    private router: Router,
    private businessTypeService: BusinessTypeService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private categoryService: CategoryService

  ) { }



  ngOnInit() {
    this.getAllBusinessType();
  }

  getAllBusinessType() {
    let obj = {};
    this.businessTypeService.getAllBusinessType(obj).subscribe((success) => {
      console.log('success', success);
      this.businessArr = success.rows;
    });
  }



  getBusinessAllCategory(ev) {
    console.log("event", ev);
    this.getCategoryByBusinessTypeId(ev)
  }

  getCategoryByBusinessTypeId(businessTypeId) {
    let obj: any = {
      businessTypeId: businessTypeId
    };
    this.categoryService
      .getAll(obj)
      .subscribe((success) => {
        console.log("success------------", success);
        this.BusinessWithCategoryArr=success.rows;
      });
  }


  seeAll() {
    this.router.navigate(['/category']);
  }
  proCard() {
    this.router.navigate(['/category']);
  }
}
