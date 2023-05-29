import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { GoogleMapComponent } from '../../google-map/google-map.component';
import { AddressService } from 'src/app/core/services/address.service';
import { AddAddressComponent } from '../../setting/my-addresses/add-address/add-address.component';

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
    public alertController: AlertController,
    private actionSheetController: ActionSheetController
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
      componentProps: {
        key:'orderView'
      }
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

  async modalAddress(address) {
   const modal = await this.modalController.create({
      component: AddAddressComponent,
      cssClass: 'modal-medium',
      mode: 'ios',
      swipeToClose: true,
      componentProps: {
        'modalData': address
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.dismissed) {
      this.getAddress();
    }
  }

  async presentActionSheet(item, index) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Edit',
          handler: () => { this.modalAddress(item) }
        },
        {
          text: 'Delete',
          handler: () => { this.openConfirmDelete(item, index); }
        },
        {
          text: 'Cancel',
        }
      ]
    });
    await actionSheet.present();
  }

  async openConfirmDelete(item, index) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete ?',
      subHeader: 'Are you sure you want to delete this address',
      cssClass: 'custom-alert',
      mode: 'md',
      buttons: [
        {
          text: 'No',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          cssClass: 'primary',
          handler: () => {
            this.deleteAddress(item, index)
          },
        },
      ],
    });
    await alert.present();
  }

  deleteAddress(item, index) {
    this.address.deleteAddress(item.id).subscribe(
      async (success: any) => {
        await this.spinner.hideLoader();
        await this.toaster.successToast(success.message);
        this.addressData.splice(index, 1)
      },
      async (error) => {
        await this.toaster.errorToast(error)
        this.spinner.hideLoader();
      }
    )
  }

}
