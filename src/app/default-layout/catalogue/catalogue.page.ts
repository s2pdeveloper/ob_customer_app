import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/service/shop/shop.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  loaded: boolean = false;
  user: any;
  shopId: any;
  page: number = 1;
  pageSize: number = 10;
  search = '';
  shopDetails: any;
  catalogue: any;
  catalogueArr: any;
  selectAll: boolean;
  subCategoryArr: any;



  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private shopService: ShopService,
    private localStorage: StorageService,
    private spinner: LoaderService,
    private socket: Socket
  ) { }

  ngOnInit() {
    this.user = this.localStorage.get('OBCustomer');
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.getShopById(params._id)
    });
  }


  getCatalogueBySubCategoryId(_id, index) {
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService
      .getCatalogueBySubCategoryId(_id)
      .subscribe((success: any) => {
        this.catalogueArr = success.payload.rows.map((x) => {
          x.isChecked = false;
          return x;
        });
        // ----------------------------------- //
        this.subCategoryArr.forEach(x => {
          if (x.id === _id) {
            x.isActive = true
          } else {
            x.isActive = false
          }
        });
        this.spinner.hideLoader();
        this.loaded = true;
      });
  }

  getShopById(_id) {
    this.shopService.getByIdShop(_id).subscribe((success: any) => {
     this.subCategoryArr = success.data.map((y, i) => {
        y.isActive = false;
        if (i == 0) {
          y.isActive = true;
          this.getCatalogueBySubCategoryId(y._id, null);
        }
        return y;
      })
    });
  }


  navigateTo() {
    let msg = '';
    let arr = this.catalogueArr.filter((x) => x.isChecked == true);
    if (arr.length < 1) {
      this.toaster.errorToast('Plz select at least one product');
      return;
    }
    msg += `Dear ${arr[0].shopId.shopName},\n ${arr[0].shopId.fullName},\n would like to buy `;
    for (let i = 0; i < arr.length; i++) {
      const catTitle = arr[i].title;
      msg += `${catTitle}`;
      if (i != arr.length - 1) {
        msg += `,`;
      }
    }
    // join 
    let customerIdShopId = this.user._id + arr[0].shopId._id;
    this.socket.emit('join', { room: customerIdShopId, user: this.user._id });

    this.router.navigate(['/chat-view'], {
      queryParams: {
        msg: msg,
        shopId: arr[0].shopId._id,
        shopName: arr[0].shopId.shopName,
        roomName: customerIdShopId        //join
      },
    });
  }
}
