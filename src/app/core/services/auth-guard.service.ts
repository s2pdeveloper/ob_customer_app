import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { take, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }
  canLoad(route: Route, segemets: UrlSegment[]): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(take(1), tap(allowed => {
      if (!allowed) {
        let returnUrl = segemets[0].path;
        this.router.navigate(['/login'], { queryParams: { returnUrl } });
      } else {
        const currentUser = this.userService.getCurrentUser();
        if (currentUser) {
          // if (route.data.roles && route.data.roles.length) {

          //   if (currentUser.role === Role.SYSTEM_OWNER) return true;
          //   let roles = route.data.roles;
          //   let isGranted = roles.includes(currentUser.role);
          //   if (isGranted) {
          //     return true;
          //   }
          // this.router.navigate(['/']);
          return true;
          // }
        } else {
          console.log('in else route to login')
          this.router.navigate(['/login']);
          return false;
        }
      }
    }))
  }
}
