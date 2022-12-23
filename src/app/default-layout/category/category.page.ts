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
  // loaded = false;
  // categoryDetails: any = {};
  // service: any;
  constructor(
    private router:Router,
    private customer:CustomerService
    ) { }

  ngOnInit() {
  }
  
  // category(){
  //   this.loaded = false;
  //   this.customer.getCategory(this.service._id).subscribe((success) => {
  //     console.log("success",success);
  //     this.categoryDetails = success;
      
      
  //     // this.spinner.hideLoader();
  //     this.loaded = false;
  //   });
  // }

}
