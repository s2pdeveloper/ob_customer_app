import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructionComponent } from './instructon/instruction.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPageRoutingModule,SharedModule
  ],
  declarations: [CheckoutPage,InstructionComponent]
})
export class CheckoutPageModule {}
