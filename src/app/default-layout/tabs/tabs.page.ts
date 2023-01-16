import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';


const { Device, Geolocation } = Plugins;
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public selectedIndex: number = 0;
  deviceInfo: any;

  public tabPages = [
    {
      title: 'Home',
      value: 'landing-page',
      tab: 'landing-page',
      icon: 'home',
    },
    {
      title: 'Chat',
      value: 'chat',
      tab: 'chat-list',
      icon: 'chatbubble-sharp'
    },
   
    {
      title: 'Trade',
      value: 'trade',
      tab: 'trade',
      icon: 'server',
    },
    {
      title: 'Setting',
      value: 'settings',
      tab: 'settings',
      icon: 'settings',
    },
  ];

 
  constructor(
    private router: Router,

  ) {}

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    console.log('device info', this.deviceInfo);
  }

 
  /**
   * navigate to provided page url
   * @param page
   */
  navigateTo(page: any) {
    this.router.navigate([`${page?.url}`]);
  }

}
