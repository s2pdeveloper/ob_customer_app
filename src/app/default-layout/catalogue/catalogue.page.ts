import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category/category.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService } from 'src/app/core/services';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  loaded: boolean = false;
  Cataloguelist: any = [];
  user: any;

  // start: number = 0;
  // limit: number = 100;
  // searchText: string;
  

  constructor(private routes:Router,
    private category:CategoryService,
    private localStorage: StorageService,) { }

  ngOnInit() {
    this.getAllCatalogue();
    this.user = this.localStorage.get('OBUser');
  }

  getAllCatalogue() {
    // this.spinner.showLoader();
    this.loaded = false;
    let obj = {
    // start:this.start,limit:this.limit,
 };
 this.category.getAllCatalogue(obj).subscribe((success) => {
  console.log("success", success);
  this.Cataloguelist = success;


  // this.spinner.hideLoader();
  this.loaded = true;
});
}

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


