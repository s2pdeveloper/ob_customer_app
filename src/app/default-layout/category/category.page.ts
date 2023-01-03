import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { StorageService, UtilitiesService } from 'src/app/core/services';
import { CategoryService } from 'src/app/service/category/category.service';
import { SubcategoryService } from 'src/app/service/subcategory/subcategory.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  loaded:boolean= false;
   categoryDetails: any = [];
   user:any;
   businessTypeId:any;
   categoryTypeId:string;
   selectedCategoryId:string;
   selectedBusinessName:string
   subcategoryArr:any=[];
  constructor(
    private router:Router,
    private actRoute:ActivatedRoute,
    private categoryService:CategoryService ,
    private localStorage: StorageService,
    private subCategory:SubcategoryService
    ) { }


businessName:string;
ngOnInit() {
    
  //  this.user = this.localStorage.get('OBUser');
  this.actRoute.queryParams.subscribe(success=>{
console.log("success",success);
 this.businessName = success.name


   this. getByBusinessTypeCategory(success._id)

  })
}

getByBusinessTypeCategory(businessTypeId){
  this.loaded=false;
let obj :any= {businessTypeId:businessTypeId}
this.categoryService.getAll(obj).subscribe((success) => {
  console.log("success-----------", success);
  this.categoryDetails=success.rows;
  this.selectedCategoryId = success.rows[0]._id;
      this.selectedCategoryId = success.rows[0].name;
      console.log("this.selectedCategoryId",this.selectedCategoryId);
    // (this.selectedCategoryId,this.selectedBusinessName);
    this.loaded=true; 
});
  }
  
}
