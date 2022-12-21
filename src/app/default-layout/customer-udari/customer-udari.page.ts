import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { PassbookService } from 'src/app/service/passbook/passbook.service';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-customer-udari',
  templateUrl: './customer-udari.page.html',
  styleUrls: ['./customer-udari.page.scss'],
})
export class CustomerUdariPage implements OnInit {
  // submitted: boolean = false;
   loaded : boolean = true;
   user: any;
   selectedCatlogueId:string;
   selectedCatlogueName:string;
   catlogueTypeId:string;



  // customerId: number = null;
  // passbookForm = new FormGroup({
  //   id: new FormControl(),
  //   customerId: new FormControl(null, [Validators.required]),
  //   type: new FormControl('ADVANCE', [Validators.required]),
  //   particular: new FormControl(null, [Validators.required]),
  //   amount: new FormControl(null, [Validators.required]),
  //   paid: new FormControl(0, [Validators.required]),
  // });

  // get form() {
  //   return this.passbookForm.controls;
  // }
  shopDetails :any=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: LoaderService,
    private localStorage: StorageService,
    // private toaster: ToastService,
    // private passbookService: PassbookService,
    public translate: TranslateService,
    private categoryService:CategoryService

  ) {}

  ngOnInit() {
this.getAllCatlogueShop();
this.user = this.localStorage.get('OBUser');
  }

  getAllCatlogueShop(){
    this.loaded=false;
    let obj = {
    };
      this.categoryService.getAllCatlogue(obj).subscribe((success) => {
        console.log("success", success);
        this.shopDetails = success.rows;
        // this.spinner.hideLoader();
        this.selectedCatlogueId = success.rows[0]._id;
        this.selectedCatlogueName = success.rows[0].name;
        this.getByIdCatlogue(this.selectedCatlogueId,this.selectedCatlogueName);
        console.log("this.selectedCatlogueId",this.selectedCatlogueId);
        this.loaded = true;
      });
    }
    getByIdCatlogue(ev,name) {
      console.log("ev", ev);
  
      this.getByCatlogueTypeCategory(ev,name);
     
    };
  getByCatlogueTypeCategory(catlogueTypeId,name){
    this.selectedCatlogueId = catlogueTypeId;
    this.selectedCatlogueName=name;
    let obj :any= {catlogueTypeId:catlogueTypeId}
    this.categoryService.getAllCatlogue(obj).subscribe((success) => {
      console.log("success-----------", success);
      this.shopDetails=success.rows;
      
     });
  }
  }
  // ionViewWillEnter() {
  //   this.activatedRoute.queryParams.subscribe((params: any) => {
  //     if (params.id) this.customerId = +params.id;
  //   });
  // }

  // checkValidation() {
  //   if (this.passbookForm.get('type').value !== 'DEPOSIT') {
  //     this.passbookForm.get('amount').addValidators(Validators.required);
  //   } else {
  //     this.passbookForm.controls.amount.setValue(0);
  //     this.passbookForm.get('amount').clearValidators();
  //   }
  //   this.passbookForm.controls['amount'].updateValueAndValidity();
  //   console.log(' this.passbookForm', this.passbookForm);
  // }
  // submit() {
  //   this.submitted = true;
  //   this.passbookForm.controls.customerId.setValue(this.customerId);
  //   if (this.passbookForm.invalid) {
  //     this.toaster.presentToast('warning', 'Please fill all valid field !');
  //     return;
  //   }
  //   // this.spinner.showLoader();
  //   this.loaded = false;
  //   let formData = this.passbookForm.value;
  //   this.passbookService.createPassbook(formData).subscribe((success: any) => {
  //     // this.spinner.hideLoader(); 
  //     this.loaded= true;
  //     this.passbookForm.reset();
  //     this.submitted = false;
  //     this.toaster.successToast(success.message);
  //     this.router.navigate(['/customer-passbook'], {
  //       queryParams: { id: this.customerId },
  //     });
  //   });
  // }

