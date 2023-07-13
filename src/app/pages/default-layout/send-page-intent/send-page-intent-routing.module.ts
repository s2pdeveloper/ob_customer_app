import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendPageIntentPage } from './send-page-intent.page';

const routes: Routes = [
  {
    path: '',
    component: SendPageIntentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendPageIntentPageRoutingModule {}
