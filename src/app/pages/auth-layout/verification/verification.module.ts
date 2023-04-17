import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerificationPage } from './verification.page';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/local-storage.service';

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
  providers: [UserService, StorageService]

})
export class VerificationPageModule { }
