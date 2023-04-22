import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController) { }

  async showLoader() {
    const loading = await this.loadingController.create({
      cssClass: 'loading-class',
      message: 'Please wait...',
      backdropDismiss: false,
      keyboardClose: true,
      showBackdrop: true
    })
    await loading.present();
    return loading;
  }

  async hideLoader() {
    let isLoading = await this.loadingController.getTop();
    if (isLoading) {
      return await isLoading.dismiss();
    }
  }
}
