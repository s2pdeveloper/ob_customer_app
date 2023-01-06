import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue/catalogue.service';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/service/shop/shop.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SubcategoryService } from 'src/app/service/subcategory/subcategory.service';
import { StorageService } from 'src/app/core/services';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  loaded: boolean = false;
  // Cataloguelist: any = [];
  user: any;
  shopId: any;
  page: number = 1;
  pageSize: number = 10;
  search = '';
  shopDetails: any;
  catalogue: any;
  ProductArr: any;
  subCategoryArr:any;
  selectedSubCatId:string;
  selectedSubCatName:string;
  productDetails :any=[];
  catalogueArr:any;
  // start: number = 0;
  // limit: number = 100;
  // searchText: string;


  constructor(
    private routes: Router,
    private activatedRoute: ActivatedRoute,
    private catalogueService: CatalogueService,
    private shopService: ShopService,
    private spinner: LoaderService,
    private subCategory:SubcategoryService,
    private localStorage:StorageService

  ) { }

  ngOnInit() {
   
    };
    ionViewWillEnter() {
      this.activatedRoute.queryParams.subscribe((params: any) => {
        console.log(params);
        this.getShopById(params._id);
      });
      
      
    }
  
    getShopById(_id) {
      console.log(_id);
      this.spinner.showLoader();
      this.loaded = false;
      this.shopService.getByIdShop(_id).subscribe((success: any) => {
        console.log('success shopby id', success);
        this.shopDetails = success.rows[0];
        console.log("this.shopDetails--xxx ",this.shopDetails );
        
        this.subCategoryArr = success.data;
      //   this.selectedSubCatId = success.rows[0]._id;
      //   this.selectedSubCatName = success.rows[0].name;
      // this.getProducts(this.selectedSubCatId,this.selectedSubCatName);
      //   console.log("subcategory........." , this.selectedSubCatId );
        
        
        this.spinner.hideLoader();
        this.loaded = true;
      });
    }
    
      navigateTo(path, _id) {
        this.routes.navigate([path], { queryParams: { _id } });
      
    }
    getProducts(ev,name) {
      console.log("event", ev);
      this.getproductbySubCat(ev)
    }
    getproductbySubCat(subCatTypeId) {
      this.selectedSubCatId=subCatTypeId;
      let obj: any = {
        selectedSubCatId: subCatTypeId
      };
      console.log("obj....",obj);
      
      this.subCategory
        .getByIdSubCategory(obj)
        .subscribe((success) => {
          console.log("success------------", success);
          this.ProductArr = success.rows;
        });
    }

    
  
  
    
  }



  
  

