import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  filterForm = new FormGroup({
    startDate: new FormControl('', [Validators.required]),
  });
  // errorMessages = promotionErrors;
  maxDate = moment().format();
  constructor(private modalController: ModalController, public translate: TranslateService) { }

  ngOnInit() {}

  get form() {
    return this.filterForm.controls;
  }

  dismissModal(isClose) {
    this.modalController.dismiss({
      'dismissed': isClose,
      filterForm: {
        startDate: moment(this.filterForm.value.startDate).format('YYYY-MM-DD'),
      }
    });
  }
}
