import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/service/shop/shop.service';
import { LoaderService } from 'src/app/core/services/loader.service';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  loaded: boolean = false;
  user: any;
  shopId: any;
  page: number = 1;
  pageSize: number = 10;
  search = '';
  shopDetails: any;
  catalogue: any;
  catalogueArr: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private spinner: LoaderService,

  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      this.getCatalogueBySubCategoryId(params._id);
    });

  }

 getCatalogueBySubCategoryId(_id) {
    console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getCatalogueBySubCategoryId(_id).subscribe((success: any) => {
      console.log("success-------",success);
      this.catalogueArr = success.payload.shop;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

}


