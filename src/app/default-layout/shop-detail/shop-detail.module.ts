import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopDetailPageRoutingModule } from './shop-detail-routing.module';

import { ShopDetailPage } from './shop-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParallaxHeaderDirective } from 'src/app/directives/parallax-header.directive';

 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [ShopDetailPage,ParallaxHeaderDirective],
})
export class ShopDetailPageModule {}
