import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'app',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/default-layout/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth-layout/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/auth-layout/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('./pages/auth-layout/verification/verification.module').then(
        (m) => m.VerificationPageModule
      ),
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
    path: 'notification-list',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import(
        './pages/default-layout/notification-list/notification-list.module'
      ).then((m) => m.NotificationListPageModule),
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
    path: 'map',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/map/map.module').then
      (m => m.MapPageModule)
  },
  {
    path: 'checkout',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/default-layout/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
