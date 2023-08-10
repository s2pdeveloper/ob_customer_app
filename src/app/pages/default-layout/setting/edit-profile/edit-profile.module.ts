import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditProfilePageRoutingModule } from './edit-profile-routing.module';
import { EditProfilePage } from './edit-profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadService } from 'src/app/core/services/upload.service';
import { CropImagePage } from 'src/app/shared/crop-image/crop-image.page';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ImageCropperModule

  ],
  declarations: [EditProfilePage, CropImagePage],
  providers: [
    { provide: UploadService },
  ],
})
export class EditProfilePageModule { }
