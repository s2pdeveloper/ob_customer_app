import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categoryDetails: any = [];
  businessTypeId: any;
  categoryTypeId: string;
  businessName: string;
  search: string = '';

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private categoryService: CategoryService,
  ) { }


  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      this.getByBusinessTypeCategory(params.businessTypeId)
    })

  }

  getByBusinessTypeCategory(businessTypeId) {
    let obj = {
      businessTypeId: businessTypeId,
    }
    this.categoryService.getAll(obj).subscribe((success) => {
      this.categoryDetails = success.rows;
      console.log("   this.categoryDetails@@@@@@@@@@@@@@@@@",   this.categoryDetails);
      
    });
  }


  navigateTo(path, c) {
    let params = {
      businessTypeId: c.businessTypeId,
      categoryId: c._id,
    };
    this.router.navigate([path], { queryParams: params });
  }

  
  onSearch() {
    console.log("search call");
    // this.page = 1;
    this.categoryDetails = [];
    // this.getByBusinessTypeCategory(this.businessTypeId);
  }

}
