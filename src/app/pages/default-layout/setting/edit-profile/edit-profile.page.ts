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
      address: new FormGroup({
        line1: new FormControl(''),
        line2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl('India'),
        pinCode: new FormControl(''),
      }),
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
  ) { }

  ngOnInit() {}

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
      // if (success.profilePicture) {
      //   this.profileForm.controls.path.setValue(success.profilePicture);
      //   this.fileUploaded = true;
      // }
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


  async uploadFile($event) {
    let file = $event.target.files[0];
    // if (this.uploadService.checkFileSize(file)) {
    //   this.toaster.errorToast(OPTIONS.sizeLimit);
    //   this.spinner.hideLoader();
    //   return;
    // }
    // if (this.uploadService.checkImageType(file)) {
    //   this.toaster.errorToast(OPTIONS.imageType);
    //   this.spinner.hideLoader();
    //   return;
    // }
    await this.spinner.showLoader();
    let formData = new FormData();
    formData.append('file', file);
    this.uploadService.uploadFile(formData)
      .subscribe(
        async (data: any) => {
          this.filePath = data?.result?.url;
          this.profileForm.controls.profilePicture.setValue(this.filePath);
          this.fileUploaded = true;
          await this.spinner.hideLoader();
        },
        async (error: any) => {
          await this.spinner.hideLoader();
          this.toaster.errorToast(error);
        }
      );
  }
}
