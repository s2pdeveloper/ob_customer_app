import { Injectable } from '@angular/core';
import { OPTIONS } from 'src/app/helpers';
import { ToastService } from './toast.service';
import { Network } from '@capacitor/network';

@Injectable({
	providedIn: 'root'
})
export class NetworkService {

	constructor(private toastService: ToastService) { }

	checkInternetConnection() {
		Network.addListener('networkStatusChange', (status) => {
			if (!status?.connected) {
				this.toastService.presentToast('error',OPTIONS?.noInternet);
			}
		});
	}
}