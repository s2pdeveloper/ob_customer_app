import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonalOffersPageRoutingModule } from './seasonal-offers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeasonalOffersPage } from './seasonal-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonalOffersPageRoutingModule,
    SharedModule
  ],
  declarations: [SeasonalOffersPage]
})
export class SeasonalOffersPageModule {}
