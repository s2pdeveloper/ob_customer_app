import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth-layout/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'app',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'view-profile',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/setting/view-profile/view-profile.module').then(
        (m) => m.ViewProfilePageModule
      ),
  },
  {
    path: 'my-addresses',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/setting/my-addresses/my-addresses.module').then(m => m.MyAddressesPageModule)
  },
  {
    path: 'privacy-policy',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/setting/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyPageModule
      ),
  },
  {
    path: 'term-of-use',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/setting/term-of-use/term-of-use.module').then(
        (m) => m.TermOfUsePageModule
      ),
  }, {
    path: 'support',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/setting/support/support.module').then(
        (m) => m.SupportPageModule
      ),
  },
  {
    path: 'qr-code',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/qr-code/qr-code.module').then(m => m.QrCodePageModule)
  },
  {
    path: 'edit-profile',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/setting/edit-profile/edit-profile.module').then(
        (m) => m.EditProfilePageModule
      ),
  },

  {
    path: 'shop-detail',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/shop-detail/shop-detail.module').then(
        (m) => m.ShopDetailPageModule
      ),
  },
  {
    path: 'change-language',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/change-language/change-language.module').then(
        (m) => m.ChangeLanguagePageModule
      ),
  },
  {
    path: 'notifications',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'category',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/category/category.module').then
      (m => m.CategoryPageModule)
  },
  {
    path: 'search-shop',
    loadChildren: () =>
      import('./pages/default-layout/search-shop/search-shop.module').then(
        (m) => m.SearchShopPageModule
      ),
  },
  {
    path: 'catalogue',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/catalogue/catalogue.module').then
      (m => m.CataloguePageModule)
  },
  {
    path: 'order-view',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/order-view/order-view.module').then
      (m => m.OrderViewPageModule)
  },
  {
    path: 'checkout',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'shop-order',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/shop-detail/shop-orders/shop-orders.module').then(m => m.ShopOrdersPageModule)
  },
  {
    path: 'shared-content',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/shared-content/shared-content.module').then( m => m.SharedContentPageModule)
  },
  {
    path: 'account-delete',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/setting/delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
