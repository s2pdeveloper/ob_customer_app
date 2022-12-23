import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { StorageService, UtilitiesService } from 'src/app/core/services';
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
  constructor(
    private router:Router,
    private actRoute:ActivatedRoute,
    private categoryService:CategoryService ,
    private localStorage: StorageService
    ) { }


businessName:string;
ngOnInit() {
    
  this.user = this.localStorage.get('OBUser');
  this.actRoute.queryParams.subscribe(success=>{
console.log("success",success);
this.businessName = success.name;
this. getByBusinessTypeCategory(success._id)

  })
}
// getByIdCatlogue(){

// }

getByBusinessTypeCategory(businessTypeId){
let obj :any= {businessTypeId:businessTypeId}
this.categoryService.getAll(obj).subscribe((success) => {
  console.log("success-----------", success);
  this.categoryDetails=success.rows;
  this.selectedCategoryId = success.rows[0]._id;
      this.selectedCategoryId = success.rows[0].name;
      console.log("this.selectedCategoryId",this.selectedCategoryId);
    // (this.selectedCategoryId,this.selectedBusinessName);
        
});
}

}
