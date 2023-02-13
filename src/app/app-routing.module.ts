import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/tabs/landing-page',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./default-layout/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth-layout/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth-layout/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'forget-pwd',
    loadChildren: () =>
      import('./auth-layout/forget-pwd/forget-pwd.module').then(
        (m) => m.ForgetPwdPageModule
      ),
  },

  {
    path: 'profile-page',
    loadChildren: () =>
      import('./default-layout/profile-page/profile-page.module').then(
        (m) => m.ProfilePagePageModule
      ),
  },
  {
    path: 'view-profile',
    // canLoad: [AuthGuard],
    loadChildren: () =>
      import('./default-layout/setting/view-profile/view-profile.module').then(
        (m) => m.ViewProfilePageModule
      ),
  },
  {
    path: 'edit-profile',
    // canLoad: [AuthGuard],
    loadChildren: () =>
      import('./default-layout/setting/edit-profile/edit-profile.module').then(
        (m) => m.EditProfilePageModule
      ),
  },

  {
    path: 'change-pwd',
    loadChildren: () =>
      import('./auth-layout/change-pwd/change-pwd.module').then(
        (m) => m.ChangePwdPageModule
      ),
  },

  {
    path: 'onboarding',
    loadChildren: () =>
      import('src/app/onboarding/onboarding.module').then(
        (m) => m.OnboardingPageModule
      ),
  },
  {
    path: 'search-shop',
    loadChildren: () =>
      import('./default-layout/search-shop/search-shop.module').then(
        (m) => m.SearchShopPageModule
      ),
  },
  {
    path: 'shop-detail',
    loadChildren: () =>
      import('./default-layout/shop-detail/shop-detail.module').then(
        (m) => m.ShopDetailPageModule
      ),
  },
  {
    path: 'change-language',
    loadChildren: () =>
      import('./default-layout/change-language/change-language.module').then(
        (m) => m.ChangeLanguagePageModule
      ),
  },
  {
    path: 'change-pwd',
    loadChildren: () =>
      import('./auth-layout/change-pwd/change-pwd.module').then(
        (m) => m.ChangePwdPageModule
      ),
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./default-layout/setting/edit-profile/edit-profile.module').then(
        (m) => m.EditProfilePageModule
      ),
  },
  {
    path: 'notification-list',
    loadChildren: () =>
      import(
        './default-layout/notification-list/notification-list.module'
      ).then((m) => m.NotificationListPageModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./default-layout/category/category.module').then(
        (m) => m.CategoryPageModule
      ),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./default-layout/setting/setting.module').then(
        (m) => m.SettingPageModule
      ),
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./default-layout/catalogue/catalogue.module').then
      (m => m.CataloguePageModule)
  },
  {
    path: 'chat-view',
    loadChildren: () => import('./default-layout/chat-view/chat-view.module').then
      (m => m.ChatViewPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./default-layout/map/map.module').then
      (m => m.MapPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./default-layout/favorite/favorite.module').then
      (m => m.FavoritePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
