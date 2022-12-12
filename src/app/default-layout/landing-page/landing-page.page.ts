import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { callCordovaPlugin } from '@ionic-native/core/decorators/common';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  constructor(
    private router: Router,
    private localStorage: StorageService,
    private categoryService: CategoryService,
    private spinner: LoaderService,
    public translate: TranslateService
  ) { }

  businessDetails: any = {};

  user: any;
  categoryDetails: any = {};
  loaded: boolean = false;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };



  ngOnInit() {
    this.getAllbusinesstype();
    this.user = this.localStorage.get('OBUser');
    
  }

  // ionViewWillEnter() {
  //   this.currentUser = this.localStorage.get('s2pUser');
  //   this.getAllCustomerDashBoard();
  // }
  // doRefresh(event) {
  //   this.getAllCustomerDashBoard();
  //   event.target.complete();
  // }
  getAllbusinesstype() {
    // this.spinner.showLoader();
    this.loaded = false;
    let obj = {
 };
    this.categoryService.getAllcategory(obj).subscribe((success) => {
      console.log("success", success);
      this.businessDetails = success;


      // this.spinner.hideLoader();
      this.loaded = true;
    });
  }
  getByIdCategory(ev) {
    console.log("ev", ev);
    this.getByBusinessTypeCategory(ev)
  };



getByBusinessTypeCategory(businessTypeId){
  let obj :any= {businessTypeId:businessTypeId}
  this.categoryService.getAll(obj).subscribe((success) => {
    console.log("success-----------", success);
    this.categoryDetails=success;
  });
  
 

}
seeAll() {
  this.router.navigate(['/category'])
}
// proCard(id) {
//   this.router.navigate(['/category'])
// }
profile() {
  this.router.navigate(['/profile-page'])
}
home() {
  this.router.navigate(['/landing-page'])
}
logout() {
  this.router.navigate(['/login'])
}
}
