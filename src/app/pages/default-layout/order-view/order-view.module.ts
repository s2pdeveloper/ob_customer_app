import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderViewPageRoutingModule } from './order-view-routing.module';

import { OrderViewPage } from './order-view.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadService } from 'src/app/core/services/upload.service';
import { OrderRatingComponent } from './order-rating/order-rating.component';
import { ReportComponent } from './report/report.component';
import { AddressComponent } from './address/address.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrderViewPageRoutingModule,
    SharedModule
  ],
  declarations: [OrderViewPage, OrderRatingComponent, ReportComponent, AddressComponent],
  providers: [UploadService],
})
export class OrderViewPageModule { }
