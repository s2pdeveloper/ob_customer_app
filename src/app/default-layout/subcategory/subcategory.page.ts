import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { SubcategoryService } from 'src/app/service/subcategory/subcategory.service';
import { StorageService } from 'src/app/core/services';
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
    private localStorage:StorageService ) { }

  ngOnInit() {
    this.getSubCategory();
    this.user = this.localStorage.get('OBUser');
  }
  getSubCategory(){
    this.loaded = false;
    let obj = {
      categoryId:this.categoryId,
      subCategoryId:this.subCategoryId

    };
    console.log("obj----",obj);
    this.subCategory.getAll(obj).subscribe((success) => {
      console.log("success", success);
      this.SubCategoryDetails = success.rows;
  }
  
    )};
    getShopById(_id) {
      console.log(_id);
      this.spinner.showLoader();
      this.loaded = false;
      this.subCategory.getBySubCategoryIdWithCategory(_id).subscribe((success: any) => {
        this.SubCategoryDetails = success.rows;
        console.log('shop by id----categoryId', this.SubCategoryDetails); 
        this.loaded = true;
        this.spinner.hideLoader();
      });
    }
  
   navigateTo(path, _id) {
      this.router.navigate([path], { queryParams: { _id} });
    }
}
