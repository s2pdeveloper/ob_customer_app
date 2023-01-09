import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/service/chat/chat.service';
import { StorageService, ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit {
  shopId: any;
  msgArr: any = [];
  user: any = {};

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
      if (params.shopId) {
        this.shopId = params.shopId;
      }
    });
    this.getMsgByCustomerId();
  }

  sendMessage() {
    this.chatForm.controls.shopId.setValue(this.shopId);
    this.chatService.create(this.chatForm.value).subscribe(
      (success) => {
        console.log('success', success);
        this.getMsgByCustomerId();
        this.chatForm.reset();
        this.spinner.hideLoader();
      },
      (error: any) => {
        this.spinner.hideLoader();
        this.toaster.errorToast(error);
      }
    );
  }

  getMsgByCustomerId() {
    this.spinner.showLoader();
    this.chatService
      .getMsgByCustomerId(this.user._id)
      .subscribe((success: any) => {
        console.log('getMsgByCustomerId-------', success);
        this.msgArr = success.payload.rows;
        this.spinner.hideLoader();
      });
  }
}
