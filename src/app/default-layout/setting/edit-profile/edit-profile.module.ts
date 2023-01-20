import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfilePageRoutingModule } from './edit-profile-routing.module';
import { EditProfilePage } from './edit-profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ValidationMessagesPageModule } from 'src/app/core/validation-messages/validation-messages.module';
import { UploadService } from 'src/app/service/upload/upload.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    ReactiveFormsModule,
    ValidationMessagesPageModule,
    SharedModule,
  ],
  declarations: [EditProfilePage],
  providers: [
    { provide: UploadService},
  ],
})
export class EditProfilePageModule {}
