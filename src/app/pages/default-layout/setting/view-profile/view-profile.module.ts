import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewProfilePageRoutingModule } from './view-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewProfilePage } from './view-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewProfilePageRoutingModule,
    SharedModule
    
  ],
  declarations: [ViewProfilePage]
})
export class ViewProfilePageModule {}
