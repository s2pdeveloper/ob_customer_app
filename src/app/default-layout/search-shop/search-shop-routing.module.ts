import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchShopPage } from './search-shop.page';

const routes: Routes = [
  {
    path: '',
    component: SearchShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchShopPageRoutingModule {}
