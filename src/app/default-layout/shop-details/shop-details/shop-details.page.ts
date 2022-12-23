import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.page.html',
  styleUrls: ['./shop-details.page.scss'],
})
export class ShopDetailsPage implements OnInit {
  shopDetails: any;
  catlogue:any=[];
  loaded = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: LoaderService,
    public translate: TranslateService,
    private shopService:ShopService
  ) { }

  ngOnInit() {
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
    this.shopService.getById(_id).subscribe((success: any) => {
       console.log('success', success);
      
      this.shopDetails = success[0];
      this.catlogue=success[0].shopWithCatalogue;
       this.spinner.hideLoader();
      this.loaded = true;
    });
  }
  navigateTo(path, id) {
    this.router.navigate([path], { queryParams: { id } });
  }

 }


