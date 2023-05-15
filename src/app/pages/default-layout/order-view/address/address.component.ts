import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { GoogleMapComponent } from '../../google-map/google-map.component';
import { AddressService } from 'src/app/core/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  addressData: any = [];
  data: any = null;
  constructor(
    private toaster: ToastService,
    public translate: TranslateService,
    private spinner: LoaderService,
    private modalController: ModalController,
    private address: AddressService,
  ) { }

  ngOnInit() {
    this.getAddress();
  }
  getAddress() {
    this.address.getAddress().subscribe(
      async (success) => {
        this.addressData = success;
        await this.spinner.hideLoader();
      }, async (error) => {
        await this.toaster.errorToast(error)
        this.spinner.hideLoader();
      }
    )
  }
  async openMap() {
    const modal = await this.modalController.create({
      component: GoogleMapComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {}
    });
    await modal.present();
    this.data = await modal.onWillDismiss();
    if (this.data) {
      this.closeModal();
    }
  }


  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      dismissed: isDismissed,
      data: this.data,
    });
  }

  selectedAddress(item) {
    this.data = `${item.addressLine1} ${item.addressLine2} ${item.pincode} ${item.city} ${item.countryName}`;
    this.closeModal()
  }

  async closeModal() {

    await this.modalController.dismiss({
      'dismissed': false,
      data: this.data,
    });

  }
}
