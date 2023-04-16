import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  PushNotifications, ActionPerformed,
  PushNotificationSchema,
  Token,
  PushNotificationToken,
  
} from '@capacitor/push-notifications';
import { StorageService } from 'src/app/core/services';

// const { PushNotifications, Geolocation, LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  constructor(private router: Router, private storageService: StorageService) {}

  registerForPushNotification(){
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });
    // On success, we should be able to receive notifications
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        this.storageService.set('OBShopDeviceId', token.value);
      }
    );
    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }
  redirection(notification) {
    console.log('notification redirection', notification);
    const randomId = Math.floor(Math.random() * 10000) + 1;
    let additional = JSON.parse(notification);
    console.log('notification redirection', additional);
  }
  
  
}
