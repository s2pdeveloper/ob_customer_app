import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue/catalogue.service';
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
  // Cataloguelist: any = [];
  user: any;
  shopId: any;
  page: number = 1;
  pageSize: number = 10;
  search = '';
  shopDetails: any;
  catalogue: any;

  // start: number = 0;
  // limit: number = 100;
  // searchText: string;


  constructor(
    private routes: Router,
    private activatedRoute: ActivatedRoute,
    private catalogueService: CatalogueService,
    private shopService: ShopService,
    private spinner: LoaderService,

  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      this.getShopById(params._id);
    });

  }

  getShopById(_id) {
    console.log(_id);
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService.getByIdShop(_id).subscribe((success: any) => {
      console.log('success shopby id', success);
      this.shopDetails = success[0];
      this.catalogue = success[0].shopWithCatalogue;
      this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  // getAllCatalogue() {
  //   // this.spinner.showLoader();
  //  let obj = {
  //     page: this.page,
  //     pageSize: this.pageSize,
  //     search: this.search,
  //     // shopId: this.shopId,
  //   };
  //     this.catalogueService.getAllCatalogue(obj).subscribe((success: any) => {
  //     console.log("success--------------", success);
  //     // this.Cataloguelist = success;
  //     // this.spinner.hideLoader();
  //     this.loaded = true;
  //   });
  // }


  // generateItems() {
  //   const count = this.items.length + 1;
  //   for (let i = 0; i < 50; i++) {
  //     this.items.push(`Item ${count + i}`);
  //   }
  // }

  // onIonInfinite(ev) {
  //   this.generateItems();
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   }, 500);
  // }


  // doRefresh(event: any) {
  //   this.Cataloguelist = [];
  //   this.start = 0;
  //   this.getAllCatalogue();
  //   event.target.complete();
  // }

}


