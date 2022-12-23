import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchShopPageRoutingModule } from './search-shop-routing.module';

import { SearchShopPage } from './search-shop.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchShopPageRoutingModule
  ],
  declarations: [SearchShopPage]
})
export class SearchShopPageModule {}
