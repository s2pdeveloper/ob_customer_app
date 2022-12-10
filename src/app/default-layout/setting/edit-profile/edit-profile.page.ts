import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/service/auth/auth.service';

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
  constructor(
    private router: Router,
    private spinner: LoaderService,
    private toaster: ToastService,
    private localStorage: StorageService,
    public authService: AuthService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.user = this.localStorage.get('OBUser');
    console.log("this.user",this.user);
    
    this.getById();
  }

  getById() {
    this.loaded = false;
    this.authService.profile(this.user._id).subscribe((success) => {
      console.log('success profile', success);
      this.profileForm.patchValue(success);
      this.loaded = true;
    });
  }

  profileForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    // image: new FormControl(''),

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


  get form() {
    return this.profileForm.controls;
  }

  updateProfile() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    this.spinner.showLoader();
    this.loaded = false;
    let formData = this.profileForm.value;
    this.authService
      .updateUser(formData.id, formData)
      .subscribe((success: any) => {
        // console.log('success', success);
        this.spinner.hideLoader();
        this.profileForm.reset();
        this.submitted = false;
        this.loaded = true;
        this.toaster.successToast('Profile updated successfully.');
        this.router.navigate(['/view-profile']);
      });
  }


  uploadFile($event) {}
}
