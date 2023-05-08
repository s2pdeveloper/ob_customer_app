import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopOrdersPageRoutingModule } from './shop-orders-routing.module';

import { ShopOrdersPage } from './shop-orders.page';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopOrdersPageRoutingModule, SharedModule
  ],
  declarations: [ShopOrdersPage]
})
export class ShopOrdersPageModule { }
