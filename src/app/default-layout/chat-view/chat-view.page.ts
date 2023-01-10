import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/service/chat/chat.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  disabledScroll = false;
  page: number = 1;
  pageSize: number = 10;
  search = '';

  shopId: any;
  msgArr: any = [];
  user: any = {};
  msg: any;
  customerId: any;
  message: string;
 
  
  

  constructor(
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService,
    private localStorage: StorageService
  ) { }

  chatForm = new FormGroup({
    _id: new FormControl(),
    shopId: new FormControl(),
    customerId: new FormControl(),
    roomName: new FormControl(''),
    message: new FormControl(''),
    createdBy: new FormControl(),
  });

  ngOnInit() {
    this.user = this.localStorage.get('OBUser');
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log("params------",params);
      
      if (params.shopId) {
        this.shopId = params.shopId;
      }
    });
    this.getMsgByCustomerId(false);
  }

  sendMessage() {
    this.chatForm.controls.shopId.setValue(this.shopId);
    this.chatService.create(this.chatForm.value).subscribe(
      (success) => {
        console.log('success', success);
        this.getMsgByCustomerId(false);
        this.chatForm.reset();
        this.spinner.hideLoader();
      },
      (error: any) => {
        this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    );
  }

  getMsgByCustomerId(isFirstLoad: boolean, event?: any) {
    this.spinner.showLoader();
    this.chatService
      .getMsgByCustomerId(this.user._id)
      .subscribe((success: any) => {
        console.log('getMsgByCustomer----', success);
        this.msgArr = success.payload.rows;
        this.spinner.hideLoader();
      });
  }

  doInfinite(event) {
    console.log('In do');
    this.page++;
    this.getMsgByCustomerId(true, event);
    event.target.disabled = true;
    this.infiniteScroll.disabled = true;
    event.target.complete();
  }
}
