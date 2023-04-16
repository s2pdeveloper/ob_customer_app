import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SettingPageRoutingModule } from './setting-routing.module';
import { SettingPage } from './setting.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/service/auth/user.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule,SharedModule
  ],
  declarations: [SettingPage],
  providers:[UserService]
})
export class SettingPageModule {}
