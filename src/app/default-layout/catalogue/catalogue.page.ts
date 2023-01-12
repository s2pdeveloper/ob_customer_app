import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/service/shop/shop.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastService,
    private shopService: ShopService,
    private spinner: LoaderService,
    private socket:Socket
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      this.getCatalogueBySubCategoryId(params._id);
    });
  }

  getCatalogueBySubCategoryId(_id) {
    this.spinner.showLoader();
    this.loaded = false;
    this.shopService
      .getCatalogueBySubCategoryId(_id)
      .subscribe((success: any) => {
        console.log('success catalogue----', success);
        this.catalogueArr = success.payload.rows.map((x) => {
          x.isChecked = false;
          return x;
        });
        this.spinner.hideLoader();
        this.loaded = true;
      });
  }

  navigateTo() {
    let msg = '';
    let arr = this.catalogueArr.filter((x) => x.isChecked == true);
    if (arr.length < 1) {
      this.toaster.errorToast('Plz select at least one catalogue');
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
    // this.socket.emit('join', {room : data.data.bankName, user : data.data._id});
    this.router.navigate(['/chat-view'], {
      queryParams: {
        msg: msg,
        shopId: arr[0].shopId._id,
        shopName:arr[0].shopId.shopName
      },
    });
  }
}
