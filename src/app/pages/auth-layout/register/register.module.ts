import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ValidationMessagesPageModule } from 'src/app/core/validation-messages/validation-messages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/core/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    ValidationMessagesPageModule,
    SharedModule
  ],
  declarations: [RegisterPage],
  providers:[UserService]
})
export class RegisterPageModule {}
