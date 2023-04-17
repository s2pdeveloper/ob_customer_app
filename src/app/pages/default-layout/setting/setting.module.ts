import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SettingPageRoutingModule } from './setting-routing.module';
import { SettingPage } from './setting.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'src/app/core/services/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule, SharedModule
  ],
  declarations: [SettingPage],
  providers: [UserService, StorageService]
})
export class SettingPageModule { }
