import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedContentPageRoutingModule } from './shared-content-routing.module';

import { SharedContentPage } from './shared-content.page';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedContentPageRoutingModule,
    SharedModule
  ],
  declarations: [SharedContentPage]
})
export class SharedContentPageModule { }
