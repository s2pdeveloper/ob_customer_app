import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPwdPageRoutingModule } from './forget-pwd-routing.module';

import { ForgetPwdPage } from './forget-pwd.page';
import { ValidationMessagesPageModule } from 'src/app/core/validation-messages/validation-messages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgetPwdPageRoutingModule,
    ValidationMessagesPageModule
  ],
  declarations: [ForgetPwdPage]
})
export class ForgetPwdPageModule { }
