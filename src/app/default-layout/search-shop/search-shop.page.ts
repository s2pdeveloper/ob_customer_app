import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/service/shop/shop.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {
  shopArr: any = [];
  loaded: boolean = false;
  page: number = 1;
  search: string = '';
  user:any;

  constructor(
    private shopService:ShopService,
    private router:Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    private activatedRoute:ActivatedRoute,
    private localStorage:StorageService
  ) { }

  ngOnInit() {
  
  // this.ionViewWillEnter();
    this.user = this.localStorage.get('OBUser');


  }
   ionViewWillEnter() {
     this.activatedRoute.queryParams.subscribe((params:any)=>{
      if(params.params){
        this.getShopById(params.params);
      }else{
        this.getAllShop(false)
      }
      
    })
    this.getAllShop(false);
  }

  onSearch() {
     this.page = 1;
    this.shopArr = [];
    this.getAllShop(false, '');
  }
  doRefresh(event) {
    this.page = 1;
    this.shopArr = [];
    // this.getAllShop(false);
    event.target.complete();
  }
  doInfinite(event) {
    this.page=1;
    // this.getAllShop(true, event);
    event.target.complete();
  }


  getAllShop(isFirstLoad: boolean, event?: any) {
    // this.spinner.showLoader();
    this.loaded = false;
    let obj = {
      search: this.search,
    };
    this.shopService.getAllShop(obj).subscribe((success) => {
      console.log("success", success);
      this.shopArr = success.rows;
         this.loaded = true;

});
  }
  getShopById(_id){
    this.loaded=false;
    this.shopService.getShopCatlogueById(_id).subscribe((success) => {
          console.log("success-----------", success);
          this.shopArr=success.rows;
          this.loaded=true;

  });
  }
  navigateTo( path,_id) {
         this.router.navigate(['path'],{ queryParams: { _id } });
       }
}

  
