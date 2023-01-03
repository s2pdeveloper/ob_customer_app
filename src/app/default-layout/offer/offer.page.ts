import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService } from 'src/app/core/services';
import { OffersService } from 'src/app/service/offers/offers.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})

export class OfferPage implements OnInit {
  user:any;
  loaded:boolean=false;
  offerDetails:any=[];
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute,
   private offer:OffersService,
    private spinner: LoaderService,
    public translate: TranslateService,
    private localStorage:StorageService) { }

  ngOnInit() {
    this.getAllOffer();
    this.user = this.localStorage.get('OBUser');
  }
  getAllOffer(){
    this.loaded = false;
    let obj = {

    };
    console.log("obj----",obj);
    this.offer.getAll(obj).subscribe((success) => {
      console.log("success", success);
      this.offerDetails = success.rows;
  }
  
    )};
    navigateTo(path, _id) {
      this.router.navigate([path], { queryParams: { _id } });
    }
    
  }


