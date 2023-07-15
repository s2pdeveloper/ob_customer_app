import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTrackingComponent } from './location-tracking.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LocationTrackingComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LocationTrackingComponent]
})
export class LocationTrackingModule { }
