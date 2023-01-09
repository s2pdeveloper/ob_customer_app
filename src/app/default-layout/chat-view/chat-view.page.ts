import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/service/chat/chat.service';
import { ToastService } from 'src/app/core/services';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private chatService: ChatService,
    private toaster: ToastService,
    private spinner: LoaderService
  ) { }

  chatForm = new FormGroup({
    _id: new FormControl(),
    shopId: new FormControl(),
    customerId: new FormControl(),
    roomName: new FormControl(''),
    message: new FormControl(''),
    createdBy: new FormControl()
  })

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log("params", params);
      if (params.shopId)
        this.chatForm.controls.shopId.setValue(params.shopId);
      this.getMsgByCustomerId(params.shopId)
    
    });
  }

  sendMessage() {
    console.log("this.chatForm.value", this.chatForm.value);
    this.chatService.create(this.chatForm.value).subscribe(success => {
      console.log("success", success);
      this.chatForm.reset();
      this.spinner.hideLoader();
    }, (error: any) => {
      this.spinner.hideLoader();
      this.toaster.errorToast(error);
    });
  }

  getMsgByCustomerId(_id) {
    console.log("getMsgByCustomerId>>>>>>>>>");
    this.spinner.showLoader();
    this.chatService.getMsgByCustomerId(_id).subscribe((success: any) => {
      console.log("getMsgByCustomerId-------", success);
      //  this.catalogueArr = success.payload.shop;
      this.spinner.hideLoader();
    });
  }

}
