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
  constructor( private activatedRoute:ActivatedRoute,
    private router:Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    private subCategory:SubcategoryService,
    private localStorage:StorageService ,
    private shopService:ShopService) { }

  ngOnInit() {
    this.getCatalogueBySubCategoryId('');
    this.user = this.localStorage.get('OBUser');
  }
  getCatalogueBySubCategoryId(_id) {
    console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getCatalogueBySubCategoryId(_id).subscribe((success: any) => {
      console.log("success-------",success);
      
      this. SubCategoryDetails = success.payload.shop;
      // console.log('shop by id----categoryId', this.shopArr);
      
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }
}
