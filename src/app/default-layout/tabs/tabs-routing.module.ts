import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/landing-page',
        pathMatch: 'full'
      },
      {
        path: 'landing-page',
        loadChildren: () => import('../../default-layout/landing-page/landing-page.module').then(m => m.LandingPagePageModule)
      },
      {
        path: 'qr-code',
        loadChildren: () => import('../../default-layout/qr-code/qr-code.module').then(m => m.QrCodePageModule)
      },
      {
        path: 'chat-list',
        loadChildren: () => import('../chat-list/chat-list.module').then(m => m.ChatListPageModule)
      },
      // {
      //   path: 'cart',
      //   loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      // },
     
      {
        path: 'settings',
        loadChildren: () => import('../../default-layout/setting/setting.module').then(m => m.SettingPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
