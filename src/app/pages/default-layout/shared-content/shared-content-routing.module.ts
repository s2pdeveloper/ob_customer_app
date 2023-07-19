import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedContentPage } from './shared-content.page';

const routes: Routes = [
  {
    path: '',
    component: SharedContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedContentPageRoutingModule {}
