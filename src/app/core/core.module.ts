import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiPrefixInterceptorProvider,
  ErrorInterceptorProvider,
  JwtInterceptorProvider,
} from './Interceptors';
import {  StorageService, UtilitiesService } from './services';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  imports: [CommonModule],
  providers: [
    JwtInterceptorProvider,
    ApiPrefixInterceptorProvider,
    ErrorInterceptorProvider,
    StorageService,
    UtilitiesService,
    AuthGuard,
  ],

  declarations: [],
})
export class CoreModule {}
