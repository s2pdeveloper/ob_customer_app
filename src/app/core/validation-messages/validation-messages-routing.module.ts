import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationMessagesPage } from './validation-messages.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationMessagesPageRoutingModule {}
