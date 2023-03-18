import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  PushNotifications, ActionPerformed,
  PushNotificationSchema,
  Token,
  
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

    PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success, token: ' + token.value);
      this.storageService.set('OBShopDeviceId', token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

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

    // this.router.navigateByUrl('./main-layout/more-layout/notifications');
    // if (notificationType.CHAT_MESSAGE === notification.data.type) {
    //   this.router.navigate([`/chat-view/${additional.id}`]);
    // }
    // LocalNotifications.addListener(
    //   'localNotificationActionPerformed',
    //   (notification: LocalNotificationActionPerformed) => {
    //     console.log('localNotificationActionPerformed', notification);
    //     console.log(
    //       'localNotificationActionPerformed redirection',
    //       notification
    //     );
    //   }
    // );
  }
}
