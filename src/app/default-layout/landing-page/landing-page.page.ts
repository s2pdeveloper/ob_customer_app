import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { BusinessTypeService } from 'src/app/service/businessType/businessType.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { ShopService } from 'src/app/service/shop/shop.service';
import { StorageService } from 'src/app/core/services';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  businessDetails:any[];
  businessTypeId: any;
  user: any;
  businessArr: any = [];
  BusinessWithCategoryArr: any = [];
  search: string = '';
  loaded : boolean = true;
  selectedBusinessId:string;
  selectedBusinessName:string;
  selectedCatalogueId:string;
  selectedCatalogueName:string;
  categoryDetails:any=[];
  offerDetails:any=[];
  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private businessTypeService: BusinessTypeService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private categoryService: CategoryService,
    private shopService: ShopService,
    private localStorage:StorageService

  ) { }

  
  ngOnInit() {
    this.getAllbusinesstype();
    this.user = this.localStorage.get('OBUser');
    

}

  getAllbusinesstype() {
    // this.spinner.showLoader();
    this.loaded = false;
    let obj = {
 };
    this.businessTypeService.getAllBusinessType(obj).subscribe((success) => {
      console.log("success---------", success);
      this.businessDetails = success.rows;

      //thisshould ideally be set in localstorage
      this.selectedBusinessId = success.rows[0]._id;
      this.selectedBusinessName = success.rows[0].name;
      this.getBusinessAllCategory(this.selectedBusinessId,this.selectedBusinessName);
      console.log("this.selectedBusinessId",this.selectedBusinessId);
      // this.spinner.hideLoader();
      this.loaded = true;
    });
  }
  // getByIdCategory(ev, name) {
  //   console.log("ev", ev);
  // }
  getBusinessAllCategory(ev,name) {
    console.log("event", ev);
    this.getCategoryByBusinessTypeId(ev,name)
  }

  getCategoryByBusinessTypeId(businessTypeId,name) {
    let obj: any = {
      businessTypeId: businessTypeId
    };
    this.categoryService
      .getAll(obj)
      .subscribe((success) => {
        console.log("success------------", success);
        this.BusinessWithCategoryArr = success.rows;
      });
  }


  navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }

  seeAll() {
    this.router.navigate(['/category'],{queryParams:{_id:this.selectedBusinessId,
      name: this.selectedBusinessName}})
  }
  // proCard() {
  //   this.router.navigate(['/category']);
  // }

  getCategoryIdWithShop(ev) {
    console.log("event--------------shop", ev);
    let params = ev;
    console.log(params);
    this.router.navigate(['/search-shop'], { queryParams: { params }});
  }

  

}
  
  
    
  
  







