import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UploadService } from 'src/app/service/upload/upload.service';
import { OPTIONS } from 'src/app/helpers';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  submitted: boolean = false;
  loaded: boolean = true;
  user: any;
  formBuilder: any;
  fileUploaded: boolean = false;
  filePath: string = "";


  profileForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    image: new FormControl(''),

    address: new FormGroup({
      line1: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      pinCode: new FormControl(''),
    }),

    links: new FormGroup({
      facebook: new FormControl(''),
      insta: new FormControl(''),
      youtube: new FormControl(''),
    }),

    schedule: new FormGroup({
      day: new FormControl(''),
      open: new FormControl(''),
      close: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
    }),


  });


  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
    private localStorage: StorageService,
    public authService: AuthService,
    public translate: TranslateService,
    private uploadService: UploadService,

) { }

  ngOnInit() {
    this.user = this.localStorage.get('OBUser');
    console.log("this.user", this.user);
    this.getById();
  }

  get form() {
    return this.profileForm.controls;
  }


  getById() {
    this.authService.profile(this.user._id).subscribe((success) => {
      console.log('success profile', success);
      this.profileForm.patchValue(success);
    });
  }

  // updateProfile() {
  //   this.submitted = true;
  //   if (this.profileForm.invalid) {
  //     this.toaster.presentToast('warning', 'Please fill all valid field !');
  //     return;
  //   }
  //   this.spinner.showLoader();
  //   this.loaded = false;
  //   let formData = this.profileForm.value;
  //   this.authService
  //     .updateUser(formData.id, formData)
  //     .subscribe((success: any) => {
  //       // console.log('success', success);
  //       this.spinner.hideLoader();
  //       this.profileForm.reset();
  //       this.submitted = false;
  //       this.loaded = true;
  //       this.toaster.successToast('Profile updated successfully.');
  //       this.router.navigate(['/view-profile']);
  //     });
  // }

  async getData() {
    await this.spinner.hideLoader();
    this.authService.profile(this.user._id).subscribe(async success => {
      console.log("success----------", success);
      this.profileForm.patchValue(success);
      if (success.image) {
        this.fileUploaded = true;
      }
      await this.spinner.hideLoader();
    }, async error => {
      await this.spinner.hideLoader();
      this.toaster.errorToast(error);
    })
  }

  updateProfile() {
    if (this.profileForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    this.spinner.showLoader();
    let formData = this.profileForm.value;
    this.authService.updateUser(formData.id, formData).subscribe((success: any) => {
      console.log('success', success);
      this.spinner.hideLoader();
      this.profileForm.reset();
      this.toaster.successToast('Profile updated successfully.');
      this.router.navigate(['/view-profile']);
    });
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
          this.profileForm.controls.image.setValue(this.filePath);
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
