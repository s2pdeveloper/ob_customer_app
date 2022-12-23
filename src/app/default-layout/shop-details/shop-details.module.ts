import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopDetailsPageRoutingModule } from './shop-details-routing.module';

import { ShopDetailsPage } from './shop-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ShopDetailsPage]
})
export class ShopDetailsPageModule {}
