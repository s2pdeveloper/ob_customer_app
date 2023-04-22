import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfilePageRoutingModule } from './edit-profile-routing.module';
import { EditProfilePage } from './edit-profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadService } from 'src/app/core/services/upload.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [EditProfilePage],
  providers: [
    { provide: UploadService },
  ],
})
export class EditProfilePageModule { }
