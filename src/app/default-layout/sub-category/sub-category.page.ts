import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {
  shopDetails: any;
  subCategoryArr: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private spinner: LoaderService,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log("params",params._id);
      this.getShopById(params._id);
    });
  }


  getShopById(_id) {
    console.log(_id);
    this.spinner.showLoader();
    // this.loaded = false;
    this.shopService.getByIdShop(_id).subscribe((success: any) => {
      console.log('success >>>>>>', success);
      // this.shopDetails = success.rows;
      // this.shopDetails = success.rows[0];
      this.subCategoryArr = success.data;
      // this.shopDetails = success[0];
      // this.catalogue = success[0].shopWithCatalogue;
      // console.log(" this.shopDetails", this.shopDetails);
      
      this.spinner.hideLoader();
      // this.loaded = true;
    });
  }
}
