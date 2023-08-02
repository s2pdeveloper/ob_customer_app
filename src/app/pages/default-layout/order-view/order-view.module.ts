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
import { PhotoviewerComponentModule } from 'src/app/shared/photoviewer/photoviewer.module';
import { MyAddressesPageModule } from '../setting/my-addresses/my-addresses.module';
import { AttachmentComponent } from './attachment/attachment.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrderViewPageRoutingModule,
    SharedModule,
    PhotoviewerComponentModule,
    MyAddressesPageModule
  ],
  declarations: [OrderViewPage, OrderRatingComponent, ReportComponent, AddressComponent,AttachmentComponent],
  providers: [UploadService],
})
export class OrderViewPageModule { }
