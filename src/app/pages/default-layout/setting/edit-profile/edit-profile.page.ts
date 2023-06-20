import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UploadService } from 'src/app/core/services/upload.service';
import { UserService } from 'src/app/core/services/user.service';
import { validateField } from 'src/app/shared/validators/form.validator';
import { OPTIONS } from 'src/app/helpers';
import { CameraService } from 'src/app/core/services/camera.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  submitted: boolean = false;
  loaded: boolean = true;
  user: any;
  fileUploaded: boolean = false;
  filePath: string = "";

  profileForm = new FormGroup(
    {
      id: new FormControl(),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      countryCode: new FormControl('IN'),
      mobileNumber: new FormControl(''),
      profilePicture: new FormControl(''),
      registrationPlatform: new FormControl('android'),
      path: new FormControl(),
    },
  );


  constructor(
    private router: Router,
    private location: Location,
    private spinner: LoaderService,
    private toaster: ToastService,
    private userService: UserService,
    public translate: TranslateService,
    private uploadService: UploadService,
    private camerService: CameraService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getUserDetails();
  }

  get form() {
    return this.profileForm.controls;
  }

  getUserDetails() {
    this.user = this.userService.getCurrentUser();
    this.getData();
  }

  async getData() {
    await this.spinner.showLoader();
    this.userService.getProfile().subscribe(async success => {
      this.profileForm.patchValue(success);
      if (success.profilePicture) {
        this.profileForm.controls.path.setValue(success.profilePicture);
        this.fileUploaded = true;
      }
      await this.spinner.hideLoader();
    }, async error => {
      await this.spinner.hideLoader();
      this.toaster.errorToast(error);
    })
  }


  async updateProfile() {
    if (this.profileForm.invalid) {
      validateField(this.profileForm);
      return;
    }
    await this.spinner.hideLoader();
    this.userService.updateProfile(this.profileForm.value).subscribe(async success => {
      await this.spinner.hideLoader();
      this.toaster.successToast(success.message);
      this.goBack();
    }, async error => {
      await this.spinner.hideLoader();
      this.toaster.successToast(error);
    })
  }

  goBack() {
    this.location.back();
  }

  async uploadFile() {
   const image = await this.camerService.openCamera();
    console.log('image', JSON.stringify(image))
    const realFile = this.camerService.b64toBlob(image.base64String, `image/${image.format}`);
    await this.spinner.hideLoader();
    console.log('readfile', realFile);
    const params = { fileName: `file.${image.format}`, fileType: `image/${image.format}` };
    if (this.uploadService.checkFileSize(realFile)) {
      this.uploadService.getSignUrl(params).subscribe(
        async (data: any) => {
          this.uploadService.uploadFileUsingSignedUrl(data.url, realFile).subscribe(
            async (result: any) => {
              console.log('after upload', result);
              this.filePath = data.filePath
              this.profileForm.controls.profilePicture.setValue(data.filePath);
              this.profileForm.controls.path.setValue(data.filePath);
              this.fileUploaded = true;
              await this.spinner.hideLoader();
            }, async (error: any) => {
              this.toaster.errorToast(error);
              await this.spinner.hideLoader();
            }
          );
        }, async (error: any) => {
          this.toaster.errorToast(error);
          await this.spinner.hideLoader();
        }
      )
    }
    else {
      if (!this.uploadService.checkFileSize(realFile.size)) {
        this.toaster.errorToast(OPTIONS.sizeLimit);
        await this.spinner.hideLoader();
        return;
      }
    }
  }
}
