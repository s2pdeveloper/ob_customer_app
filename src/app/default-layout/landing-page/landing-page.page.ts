import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { BusinessTypeService } from 'src/app/service/businessType/businessType.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  businessTypeId: any;
  user: any;
  businessArr: any = [];
  BusinessWithCategoryArr: any = [];
  search: string = '';

  constructor(
    private router: Router,
    private businessTypeService: BusinessTypeService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private categoryService: CategoryService,
    private shopService: ShopService,

  ) { }



  ngOnInit() {
    this.getAllbusinesstype();
    this.user = this.localStorage.get('OBUser');
    this.getAllOffertype();

}

  getAllbusinesstype() {
    // this.spinner.showLoader();
    this.loaded = false;
    let obj = {
 };
    this.categoryService.getAllcategory(obj).subscribe((success) => {
      console.log("success", success);
      this.businessDetails = success.rows;

      //thisshould ideally be set in localstorage
      this.selectedBusinessId = success.rows[0]._id;
      this.selectedBusinessName = success.rows[0].name;
      this.getByIdCategory(this.selectedBusinessId,this.selectedBusinessName);
      console.log("this.selectedBusinessId",this.selectedBusinessId);
      // this.spinner.hideLoader();
      this.loaded = true;
    });
  }
  getByIdCategory(ev, name) {
    console.log("ev", ev);

    this.getByBusinessTypeCategory(ev,name);
   
  };
getByBusinessTypeCategory(businessTypeId,name){
  this.selectedBusinessId = businessTypeId;
  this.selectedBusinessName=name;
  let obj :any= {businessTypeId:businessTypeId}
  this.categoryService.getAll(obj).subscribe((success) => {
    console.log("success-----------", success);
    this.categoryDetails=success.rows;
    
   });
}
getAllOffertype() {
  // this.spinner.showLoader();
  this.loaded = false;
  let obj = {
};
  this.categoryService.getAllOffer(obj).subscribe((success) => {
    console.log("success", success);
    this.offerDetails = success.rows;
    // this.spinner.hideLoader();
    this.loaded = true;
  });
}
seeAll() {
  
  console.log("success");
  this.router.navigate(['/category'],{queryParams:{_id:this.selectedBusinessId,
     name: this.selectedBusinessName}}) 
}

  }
  proCard() {
    this.router.navigate(['/category']);
  }





  getCategoryIdWithShop(ev) {
    console.log("event--------------shop", ev);
    let params = ev;
    console.log(params);
    this.router.navigate(['/search-shop'], { queryParams: { params }});
  }

  // getCategoryByShop(categoryId) {
  //   let obj: any = {
  //     categoryId: categoryId
  //   };
  //   this.shopService
  //     .getByCategoryIdWithShop(obj)
  //     .subscribe((success) => {
  //       console.log("success------------shop", success);
  //       this.BusinessWithCategoryArr = success.rows;
  //     });
  // }






}
