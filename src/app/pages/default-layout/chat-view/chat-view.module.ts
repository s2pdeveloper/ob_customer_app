import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatViewPageRoutingModule } from './chat-view-routing.module';

import { ChatViewPage } from './chat-view.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadService } from 'src/app/core/services/upload.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChatViewPageRoutingModule,
    SharedModule
  ],
  declarations: [ChatViewPage],
  providers: [UploadService],
})
export class ChatViewPageModule { }
