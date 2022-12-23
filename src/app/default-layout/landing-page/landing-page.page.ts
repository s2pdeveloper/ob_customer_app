import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { callCordovaPlugin } from '@ionic-native/core/decorators/common';
import { SelectValueAccessor } from '@ionic/angular';
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
  selectedBusinessId: string;
  selectedBusinessName:string;
  selectedCatlogueId:string;
  selectedCatlogueName:string;
  constructor(
    private router: Router,
    private localStorage: StorageService,
    private categoryService: CategoryService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private actRoute:ActivatedRoute
    
    
  ) { }

   businessDetails: any = [];
  offerDetails: any = [];
  user: any;
 categoryDetails: any = [];
  loaded: boolean = false;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  categoryTypeId:string;
  


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
  this.router.navigate(['/category'],{queryParams:{_id:this.selectedBusinessId, name: this.selectedBusinessName}}) 
}

profile() {
  this.router.navigate(['/profile-page'])
}
home() {
  this.router.navigate(['/landing-page'])
}
logout() {
  this.router.navigate(['/login'])
}
getCategoryIdwithShop(ev){
  console.log("event--shop",ev);
  let params=ev;
  console.log(params);
}
  navigateTo( path,params) {
    this.router.navigate(['/search-shop'],{ queryParams: { params } });
       }
//   this.router.navigate(['/search-shop'],{ queryParams: { params} }) 
// }
      }

