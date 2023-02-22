
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !request.url.includes('/assets/i18n/en.json') &&
      !request.url.includes('assets/i18n/hi.json') &&
      !request.url.includes('assets/i18n/mr.json') &&
      !request.url.includes('/apk') &&
      !request.url.includes('obhaiya-assets.s3.ap-south-1.amazonaws.com') &&
      !request.url.includes('https://maps.googleapis.com') 
    ) {
      request = request.clone({
        url: environment.apiEndpoint + request.url,
      });
    }
  

    return next.handle(request);
  }
}
export const ApiPrefixInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiPrefixInterceptor,
  multi: true,
};
