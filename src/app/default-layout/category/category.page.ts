import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from 'src/app/service/customer/customer.service';
import { StorageService, UtilitiesService } from 'src/app/core/services';
import { CategoryService } from 'src/app/service/category/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
   loaded:boolean= false;
   categoryDetails: any = {};
   user:any;
   businessTypeId:any;
  
  constructor(
    private router:Router,
    private categoryService:CategoryService ,
    private localStorage: StorageService
    ) { }

  ngOnInit() {
   
     this.getByBusinessTypeCategory("");
     this.user = this.localStorage.get('OBUser');
  }
  
  //  getByIdCategory(ev) {
  //    console.log("ev", ev);
  //    this.getByBusinessTypeCategory(ev)
  //  }



getByBusinessTypeCategory(businessTypeId){
  let obj :any= {businessTypeId:businessTypeId}
  this.categoryService.getAll(obj).subscribe((success) => {
    console.log("success-----------", success);
    this.categoryDetails=success;
  });
  
 

}
}