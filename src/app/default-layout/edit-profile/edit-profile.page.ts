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
    this.getById();
  }

  getById() {
    // this.spinner.showLoader();
    this.loaded = false;
    this.authService.profile(this.user._id).subscribe((success) => {
      console.log('success', success);
      this.registerForm.patchValue(success);
      // this.spinner.hideLoader();
      this.loaded = true;
    });
  }

  registerForm = new FormGroup({
     id: new FormControl(),
    mobile: new FormControl(''),
    
    // line1: new FormControl(null),
    
  firstName: new FormControl(''),
  lastName: new FormControl(''),
   email: new FormControl(),
  // password: new FormControl(null,[Validators.required]),
  // confirmPassword: new FormControl(null,[Validators.required]),
  // city: new FormControl(null,),
  // status: new FormControl(null,),
  // role: new FormControl(null,),
// image:new FormControl(null,)
// customerName: new FormControl(null, [Validators.required]),
// key: new FormControl(null),
  });

  get form() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.toaster.presentToast('warning', 'Please fill all valid field !');
      return;
    }
    // this.spinner.showLoader();
    this.loaded = false;
    let formData = this.registerForm.value;
    this.authService
      .updateUser(formData.id, formData)
      .subscribe((success: any) => {
        // console.log('success', success);
        // this.spinner.hideLoader();
        this.registerForm.reset();
        this.submitted = false;
        this.loaded = true;
        this.toaster.successToast('Profile updated successfully.');
        this.router.navigate(['/profile-page']);
      });
  }
  
  }

