import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { SubcategoryService } from 'src/app/service/subcategory/subcategory.service';
import { StorageService } from 'src/app/core/services';
import { ShopService } from 'src/app/service/shop/shop.service';
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  loaded : boolean = true;
  SubCategoryDetails:any=[];
  user:any;
  selectedSubcategoryId:string;
  categoryId: string = '';
  subCategoryId: string = '';
  shopDetails: any;
  selectedSubCatId:string;
  subCategoryArr: any;
  ProductArr:any;
  constructor( private activatedRoute:ActivatedRoute,
    private router:Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    private subCategory:SubcategoryService,
    private localStorage:StorageService ,
    private shopService:ShopService) { }

  ngOnInit() {
    // this.getCatalogueBySubCategoryId('');
    // this.user = this.localStorage.get('OBUser');
  }
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
      this.router.navigate([path], { queryParams: { _id } });
    
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
