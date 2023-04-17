import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,SharedModule
  ],
  declarations: [CataloguePage]
})
export class CataloguePageModule {}
