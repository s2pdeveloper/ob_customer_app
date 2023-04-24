import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
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
      console.log('allowed', allowed)
      if (!allowed) {
        let returnUrl = segemets[0].path;
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl } });
        return false;
      } else {
        const currentUser = this.userService.getCurrentUser();
        console.log('current user', currentUser)
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
          this.router.navigate(['/auth/login']);
          return false;
        }
      }
    }))
  }
}
