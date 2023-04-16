import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ValidationMessagesPageModule } from 'src/app/core/validation-messages/validation-messages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/service/auth/user.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    ValidationMessagesPageModule,
    SharedModule
  ],
  declarations: [LoginPage],
  providers:[UserService]
})
export class LoginPageModule {}
