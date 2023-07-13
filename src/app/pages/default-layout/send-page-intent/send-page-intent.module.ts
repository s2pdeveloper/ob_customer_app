import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendPageIntentPageRoutingModule } from './send-page-intent-routing.module';

import { SendPageIntentPage } from './send-page-intent.page';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendPageIntentPageRoutingModule,
    SharedModule
  ],
  declarations: [SendPageIntentPage]
})
export class SendPageIntentPageModule { }
