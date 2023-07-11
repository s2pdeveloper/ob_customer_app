import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Filesystem } from '@capacitor/filesystem';
import { SendIntent } from "send-intent";

@Injectable({
  providedIn: 'root'
})
export class SendIntentService {

  constructor(private router:Router) { }

  async checkIncomingIntent() {
    try {
      const result = await SendIntent.checkSendIntentReceived()
      if (result) {
        console.log('SendIntent received');
        console.log(JSON.stringify(result));
      }
      if (result?.url) {
        let resultUrl = decodeURIComponent(result.url);
        const content = await Filesystem.readFile({ path: resultUrl });
        console.log('resultUrl', content.data);
        // this.router.navigate(['/app/tabs/order-list']) //! navigate to page to select order and send message
      }
    } catch (error) {
      console.error(error)
    }
  }

  initiateIntent() {
    this.checkIncomingIntent().then();
  }

  finishIntent() {
    SendIntent.finish();
  }
}
