import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerUdariPage } from './customer-udari.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerUdariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerUdariPageRoutingModule {}
