import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AuthPageRoutingModule,
    SharedModule,
  ],
  declarations: [AuthPage, LoginComponent, RegisterComponent, VerificationComponent]
})
export class AuthPageModule { }
