import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyAddressesPageRoutingModule } from './my-addresses-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyAddressesPage } from './my-addresses.page';
import { AddAddressComponent } from './add-address/add-address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyAddressesPageRoutingModule,
    SharedModule
  ],
  declarations: [MyAddressesPage, AddAddressComponent]
})
export class MyAddressesPageModule { }
