import { Injectable } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Injectable({
	providedIn: 'root'
})
export class SplashScreenService {

	async hideSplashScreen() {
		await SplashScreen.hide();
	}

}