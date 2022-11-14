import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerFormPageRoutingModule } from './customer-form-routing.module';

import { CustomerFormPage } from './customer-form.page';
import { ValidationMessagesPageModule } from 'src/app/core/validation-messages/validation-messages.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerFormPageRoutingModule,
    ReactiveFormsModule,
    ValidationMessagesPageModule,
    SharedModule
  ],
  declarations: [CustomerFormPage],
})
export class CustomerFormPageModule {}
