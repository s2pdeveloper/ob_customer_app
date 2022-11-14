import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePwdPage } from './change-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePwdPageRoutingModule {}
