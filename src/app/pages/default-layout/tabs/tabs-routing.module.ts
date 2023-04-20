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
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../default-layout/landing-page/landing-page.module').then(m => m.LandingPagePageModule)
      },
      {
        path: 'qr-code',
        loadChildren: () => import('../../default-layout/qr-code/qr-code.module').then(m => m.QrCodePageModule)
      },
      {
        path: 'order-list',
        loadChildren: () => import('../order-list/order-list.module').then(m => m.OrderListPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../favorite/favorite.module').then(m => m.FavoritePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../default-layout/setting/setting.module').then(m => m.SettingPageModule)
      },
      {
        path: 'search-shop',
        loadChildren: () =>
          import('../../default-layout/search-shop/search-shop.module').then(
            (m) => m.SearchShopPageModule
          ),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('../../default-layout/category/category.module').then(
            (m) => m.CategoryPageModule
          ),
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
