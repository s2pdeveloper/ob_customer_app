import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doRefresh(event) {
    // this.page = 1;
    // this.shopArr = [];
    // this.getAllShop(false);
    event.target.complete();
  }
}
