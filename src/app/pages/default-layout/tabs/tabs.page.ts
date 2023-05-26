import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public selectedIndex: number = 0;

  public tabPages = [
    {
      title: 'home',
      value: 'home',
      tab: 'home',
      icon: 'home',
    },
    {
      title: 'orders',
      value: 'order',
      tab: 'order-list',
      icon: 'chatbubble-sharp',
    },
    {
      title: 'QR Code',
      value: 'qr-code',
      tab: 'qr-code',
      icon: 'qr-code-sharp',
    },
    {
      title: 'favorites',
      value: 'favorite',
      tab: 'favorite',
      icon: 'heart',
    },
    {
      title: 'profile',
      value: 'settings',
      tab: 'settings',
      icon: 'person-sharp',
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  /**
   * navigate to provided page url
   * @param page
   */
  navigateTo(page: any) {
    this.router.navigate([`${page?.url}`]);
  }

  navigateToScanner() {
    this.router.navigate(['/qr-code']);
  }

}
