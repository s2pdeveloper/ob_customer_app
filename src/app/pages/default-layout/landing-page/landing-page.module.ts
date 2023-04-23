import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { StorageService } from 'src/app/core/services/local-storage.service';
import { GoogleMapModule } from '../google-map/google-map.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    SharedModule,
    GoogleMapModule
  ],
  declarations: [LandingPagePage], providers: [StorageService]
})
export class LandingPagePageModule { }
