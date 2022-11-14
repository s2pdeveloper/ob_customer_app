import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerPassbookPage } from './customer-passbook.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPassbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPassbookPageRoutingModule {}
