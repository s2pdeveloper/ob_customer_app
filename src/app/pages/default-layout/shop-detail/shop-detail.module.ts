import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopDetailPageRoutingModule } from './shop-detail-routing.module';

import { ShopDetailPage } from './shop-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParallaxHeaderDirective } from 'src/app/directives/parallax-header.directive';
import { SelectFilterComponent } from './select-filter/select-filter.component';

 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShopDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ShopDetailPage,
    SelectFilterComponent,
    ParallaxHeaderDirective,
  ],
})
export class ShopDetailPageModule {}
