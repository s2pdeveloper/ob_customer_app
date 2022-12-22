import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { PassbookService } from 'src/app/service/passbook/passbook.service';
import { StorageService } from 'src/app/core/services';
import { BehaviorSubject ,fromEvent } from 'rxjs';
import { CategoryService } from 'src/app/service/category/category.service';
@Component({
  selector: 'app-customer-passbook',
  templateUrl: './customer-passbook.page.html',
  styleUrls: ['./customer-passbook.page.scss'],
})
export class CustomerPassbookPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  page: number = 1;
  pageSize: number = 10;
  search = '';
  user:any;
  shopName:string;
  selectedCatlogueId:string;
  selectedCatlogueName:string;
  shopDetails:any=[];
   
@ViewChild('btn', { static: false }) button: ElementRef;
  collection: number = 0;
  customerId: number = 0;
  passbookArr: any = [];
  type: string = '';
  customerDetails: any = {};
  loaded: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: LoaderService,
    private passbookService: PassbookService,
    public translate: TranslateService,
    private localStorage:StorageService,
    private categoryService:CategoryService
  ) {}

  ngOnInit() {
    this.user = this.localStorage.get('OBUser');
  this.activatedRoute.queryParams.subscribe(success=>{
console.log("success",success);
this.shopName = success.name;
// this.getByCatlogueTypeCategory();

  })
  };
  // getByIdCatlogue(ev,name) {
  //   console.log("ev", ev);
  
  //   this.getByCatlogueTypeCategory(ev,name);
  // }
   
   
  // getByCatlogueTypeCategory(catlogueTypeId,name){
  // this.selectedCatlogueId = catlogueTypeId;
  // this.selectedCatlogueName=name;
  // let obj :any= {catlogueTypeId:catlogueTypeId}
  // this.categoryService.getAllCatlogue(obj).subscribe((success) => {
  //   console.log("success-----------", success);
    // this.shopDetails=success.rows;
    // this.selectedCatlogueId = success.rows[0]._id;
    //   this.selectedCatlogueName = success.rows[0].name;
    //   console.log("this.selectedCatlogueId",this.selectedCatlogueId);
    
   }
  
  // ngAfterViewInit() {
  //   fromEvent(this.button.nativeElement, 'keyup')
  //       .subscribe(res => console.log(res));
  // }
//   ionViewWillEnter() {
//     console.log('In will enter');

//     this.activatedRoute.queryParams.subscribe((params: any) => {
//       this.customerId = params.id;
//       this.getAllPassbooks(false);
//     });
  
//   }
//   // segmentChanged(ev) {
//   //   this.type = ev.detail.value;
//   //   this.page = 1;
//   //   this.passbookArr = [];
//   //   this.getAllPassbooks(false);
//   // }
//   trackBy(i, e) {
//     return e.id;
//   }
//   onSearch() {
//     console.log('In search');

//     this.page = 1;
//     this.passbookArr = [];
//     this.disabledScroll = false;
//     this.getAllPassbooks(false, '');
//   }

//   onSegmentChange() {
//     console.log('in segment');

//     this.page = 1;
//     this.passbookArr = [];
//     this.disabledScroll = false;
//     this.getAllPassbooks(false, '');
//   }
//   doRefresh(event) {
//     this.page = 1;
//     this.passbookArr = [];
//     this.getAllPassbooks(false);
//     event.target.complete();
//   }
//   doInfinite(event) {
//     console.log('In do');

//     this.page++;
//     this.getAllPassbooks(true, event);
//     event.target.disabled = true;
//     this.infiniteScroll.disabled = true;
//     event.target.complete();
//   }

//   getAllPassbooks(isFirstLoad: boolean, event?: any) {
//     // this.spinner.showLoader();
//     console.log('in passbook all');

//     this.loaded = false;
//     let obj = {
//       page: this.page,
//       pageSize: this.pageSize,
//       search: this.search,
//       customerId: this.customerId,
//       type: this.type,
//     };

//     this.passbookService.getAllPassbooks(obj).subscribe((success: any) => {
//       console.log('actual call');

//       this.loaded = true;
//       this.collection = success.count;
//       this.customerDetails = success.customerDetails;
//       this.passbookArr = [...this.passbookArr, ...success.rows];
//       if (isFirstLoad) event?.target.complete();
//       if (this.passbookArr.length >= this.collection && event) {
//         this.disabledScroll = true;
//       }
//       // this.spinner.hideLoader();
//       console.log('passbookArr', this.passbookArr);
//     });
//   }
//   navigateTo(path, id) {
//     this.router.navigate([path], { queryParams: { id } });
//   }
 
//  getByIdCatlogue(ev,name) {
//   console.log("ev", ev);

