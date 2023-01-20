import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchShopPageRoutingModule } from './search-shop-routing.module';

import { SearchShopPage } from './search-shop.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoryComponent } from 'src/app/modal/sub-category/sub-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchShopPageRoutingModule,
    SharedModule
  ],
  declarations: [SearchShopPage,SubCategoryComponent]
})
export class SearchShopPageModule {}
