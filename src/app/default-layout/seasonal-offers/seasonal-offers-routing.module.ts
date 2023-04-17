import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonalOffersPage } from './seasonal-offers.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonalOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonalOffersPageRoutingModule {}
