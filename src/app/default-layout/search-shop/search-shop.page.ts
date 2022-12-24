import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {

  page: number = 1;
  pageSize: number = 10;
  search: string = '';
  businessTypeId: string = '';
  categoryId: string = '';
  subCategoryId: string = '';
  collection: number = 0;
  shopArr: any = [];
  loaded: boolean = false;
  shopDetails: any;


  constructor(
    private router: Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    private shopService: ShopService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if(params.params){
        this.getShopById(params.params);
      }else{
        this.getAllShop(false)
      }
    });
   
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
  
  // doInfinite(event) {
  //   this.page++;
  //   this.getAllShop(true, event);
  //   event.target.complete();
  // }

  getAllShop(isFirstLoad: boolean, event?: any) {
    let obj = {
      search: this.search,
      businessTypeId:this.businessTypeId,
      categoryId:this.categoryId,
      subCategoryId:this.subCategoryId

    };
    console.log("obj----",obj);
    
    this.shopService.getAllShop(obj).subscribe((success) => {
      console.log('success shop', success);
      this.shopArr = success.rows;
    });
  }

  getShopById(_id) {
     console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByCategoryIdWithShop(_id).subscribe((success:any)=>{
      this.shopArr=success.payload.shop;
    });
      console.log('shop by id----categoryId', this.shopArr);
      this.spinner.hideLoader();
      this.loaded = true;
    };
  

 navigateTo(path, _id) {
    this.router.navigate([path], { queryParams: { _id } });
  }
}
