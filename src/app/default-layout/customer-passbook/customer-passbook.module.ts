import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerPassbookPageRoutingModule } from './customer-passbook-routing.module';

import { CustomerPassbookPage } from './customer-passbook.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerPassbookPageRoutingModule,
    SharedModule
  ],
  declarations: [CustomerPassbookPage]
})
export class CustomerPassbookPageModule {}
