import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritePageRoutingModule } from './favorite-routing.module';

import { FavoritePage } from './favorite.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScheduleNotificationListComponent } from './schedule-notification-list/schedule-notification-list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePageRoutingModule,
    SharedModule
  ],
  declarations: [FavoritePage, ScheduleNotificationListComponent]
})
export class FavoritePageModule { }
