import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from "@ionic/angular";
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/toast.service';
import { AddressService } from 'src/app/core/services/address.service';
import { AddAddressComponent } from './add-address/add-address.component';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.page.html',
  styleUrls: ['./my-addresses.page.scss'],
})
export class MyAddressesPage implements OnInit {
  addressData: any = [];
  constructor(
    public translate: TranslateService,
    private modalController: ModalController,
    public alertController: AlertController,
    private spinner: LoaderService,
    private toaster: ToastService,
    private address: AddressService,
    private actionSheetController: ActionSheetController
  ) { }

  async ngOnInit() {
    this.getAddress();
  }
  /**
    * refresh page content
    * @param event
    */
  doRefresh(event: any) {
    this.getAddress();
    event.target.complete();
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

  /**
   * to open action sheet
   * @param e 
   */
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
