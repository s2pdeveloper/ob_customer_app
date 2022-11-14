import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  LocalNotificationActionPerformed,
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from '@capacitor/core';
import { StorageService } from 'src/app/core/services';

const { PushNotifications, Geolocation, LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  constructor(private router: Router, private storageService: StorageService) {}

  registerForPushNotification() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      console.log('push notification permission', result);
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
        console.log('in error');
      }
    });
    // On success, we should be able to receive notifications
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        this.storageService.set('s2pUserDeviceId', token.value);
      }
    );
    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        console.log("pushNotificationReceived",notification);
        const randomId = Math.floor(Math.random() * 10000) + 1;
        LocalNotifications.schedule({
          notifications: [
            {
              title: notification.title,
              body: notification.body,
              id: randomId,
              smallIcon: 'ic_stat_name',
              iconColor: '#3880ff'
            },
          ],
        });
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        console.log("pushNotificationActionPerformed",notification);
        this.redirection(notification.notification);
      }
    );

    Geolocation.requestPermissions().then((result) => {
      console.log('geo location permission', result);
      if (result.results) {
        // Register with Apple / Google to receive push via APNS/FCM
      } else {
        // Show some error
      }
    });
    LocalNotifications.requestPermission().then((result) => {
      console.log('local notification permission', result);
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
      } else {
        // Show some error
      }
    });
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
