import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent implements OnInit {

  @Input() dataList: any[] = [];

  constructor(public translate: TranslateService, public popoverController: PopoverController) { }

  ngOnInit() { }

  onDismiss(item) {
    this.popoverController.dismiss(item)
  }
}
