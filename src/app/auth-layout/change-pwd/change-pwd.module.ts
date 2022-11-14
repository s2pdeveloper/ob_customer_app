import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChangePwdPageRoutingModule } from './change-pwd-routing.module';
import { ChangePwdPage } from './change-pwd.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ValidationMessagesPageModule } from 'src/app/core/validation-messages/validation-messages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePwdPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ValidationMessagesPageModule
  ],
  declarations: [ChangePwdPage]
})
export class ChangePwdPageModule {}
