import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerificationPage } from './verification.page';
import { UserService } from 'src/app/service/auth/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VerificationPageRoutingModule,
    SharedModule
  ],
  declarations: [VerificationPage],
  providers:[UserService]

})
export class VerificationPageModule { }
