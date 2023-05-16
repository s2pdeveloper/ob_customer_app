import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  selectedData: string = '';
  filterForm = new FormGroup({
    geoNearestDistance: new FormControl('', [Validators.required]),
  });
  constructor(
    private modalCtrl: ModalController,
    public translate: TranslateService,

  ) { }

  ngOnInit() { }

  onSubmit() {
    this.closeModal();
  }

  /**
* to dismiss modal
*/
  dismissModal(isDismissed: boolean = false) {
    this.modalCtrl.dismiss({
      dismissed: isDismissed,
      data: this.filterForm.value,
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss({
      'dismissed': false,
      data: this.filterForm.value,
    });
  }
}
