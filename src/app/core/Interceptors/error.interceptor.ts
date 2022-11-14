import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  currentRoute: string;
  constructor(
    private toaster: ToastService,
    private spinner: LoaderService,
    private router: Router
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // extract error message from http body if an error occurs
    return next.handle(request).pipe(
      catchError((errorResponse) => {
        this.spinner.hideLoader();
        if (errorResponse instanceof HttpErrorResponse) {
          if (!navigator.onLine) {
            // No Internet connection
            this.toaster.presentToast('warning', 'No Internet Connection');
          }
          // Server error happened
          let error = errorResponse.error?.error;
          switch (errorResponse.status) {
            case 401: // login
              // redirect to login page with the return url
              this.router.events
                .pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe((event) => {
                  this.currentRoute = event['url'];
                });
              // this.router.navigate(['/login'], {
              //   queryParams: { returnUrl: this.currentRoute },
              // });
              break;
            case 400: // forbidden
            case 403: // forbidden
              //  show server bad request message
              console.log(error.error_params);
              if (errorResponse.error?.error?.errors) {
                for (let i = error.errors.length - 1; i >= 0; i--) {
                  this.toaster.presentToast('error', error.errors[i]);
                }
              }

              if (error.error_params) {
                for (let i = error.error_params.length - 1; i >= 0; i--) {
                  let err = error.error_params[i].errors;
                  if (error.error_params[i]?.message) {
                    this.toaster.presentToast(
                      'error',
                      error.error_params[i].message
                    );
                  }
                  if (err) {
                    for (let j = err.length - 1; j >= 0; j--) {
                      this.toaster.presentToast('error', err[j].msg);
                    }
                  }
                }
              }
              break;
            case 500: // Internal Server Error
              // // show server bad request message
              // console.log(errorResponse.error);
              // console.log(errorResponse.error.error.errors);
              // console.log(errorResponse.error.error.error_params);
              // this.toaster.error(errorResponse.error?.message);
              if (errorResponse.error?.error?.errors) {
                for (let i = error.errors.length - 1; i >= 0; i--) {
                  this.toaster.presentToast('error', error.errors[i]);
                }
              }
              if (errorResponse.error?.error?.error_params) {
                for (let i = error.error_params.length - 1; i >= 0; i--) {
                  if (error.error_params[i]?.msg) {
                    this.toaster.presentToast(
                      'error',
                      error.error_params[i].msg
                    );
                  }
                  let err = error.error_params[i].errors;
                  if (err) {
                    for (let j = err.length - 1; j >= 0; j--) {
                      this.toaster.presentToast('error', err.msg);
                    }
                  }
                }
              }
              break;
          }
        } else {
        }

        return throwError(errorResponse.error);
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
