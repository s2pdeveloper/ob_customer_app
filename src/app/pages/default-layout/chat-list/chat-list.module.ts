import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatListPageRoutingModule } from './chat-list-routing.module';
import { ChatListPage } from './chat-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChatListPageRoutingModule,
    SharedModule,
  ],
  declarations: [ChatListPage],
})
export class ChatListPageModule { }
