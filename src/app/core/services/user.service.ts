import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { SocketService } from './socket.service';
import { StorageService } from './local-storage.service';

@Injectable()
export class UserService {
  public currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  refreshTable = new Subject();

  constructor(private apiService: ApiService, private storageService: StorageService, private jwtService: JwtService, private socketService: SocketService) { }

  // Verify JWT in local storage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/mobile/user/profile')
        .subscribe(
          data => {
            if (data.result) {
              this.setAuth(data.result);
            } else {
              this.purgeAuth();
            }
          },
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: any) {
    this.socketService.connect();
    // Save JWT sent from server in local storage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.socketService.disconnect();
    // Remove JWT from local storage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({});
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    //clear local storage
    this.storageService.clear();
  }

  /**
   * set rememberMe in local storage
   * @param value
   */
  setRememberMe(value) {
    localStorage.setItem('rememberMe', value);
  }
  /**
   * get the rememberMe value
   * @returns
   */
  getRememberMe() {
    return localStorage.getItem('rememberMe');
  }
  /**
   * remove rememberMe
   */
  removeRememberMe() {
    localStorage.removeItem('rememberMe');
  }

  signUp(credentials): Observable<any> {
    let url = `/mobile/user/signup`;
    return this.apiService.post(url, credentials).pipe(map(
      data => {
        if (data && data.result) {
          return data.result;
        }
        else {
          return null;
        }
      }
    ));
  }

  /**
   * login to app
   * @param credentials
   * @returns
   */
  sendMobileOtp(credentials): Observable<any> {
    let url = `mobile/user/user-login`;
    return this.apiService.post(url, credentials).pipe(map(
      data => {
        if (data && data.result && data.result.existingUser) {
          return data.result;
        }
        else {
          return null;
        }
      }
    ));
  }

  verifyMobileToken(credentials): Observable<any> {
    return this.apiService.patch(`mobile/user/verify-mobile-otp`, credentials).pipe(map(
      data => {
        if (data && data.result) {
          localStorage.setItem('firstTime', 'firstTime');
          localStorage.setItem('mobileNumber', data.result.data.mobileNumber);
          localStorage.setItem('id', data.result.data.id);
          localStorage.setItem('role', data.result.data.role);
          localStorage.setItem('email', data.result.data.email);
          localStorage.setItem('fullName', data.result.data.fullName);
          this.setAuth(data.result.data);
          return data.result;
        } else {
          return null;
        }
      }
    ));
  }
  /**
   * set fcm token
   * @param payload
   * @returns
   */
  addDeviceToken(payload): Observable<any> {
    let url = `mobile/user/set-fcm-token`;
    return this.apiService.post(url, payload).pipe(map(
      data => {
        if (data && data.result) {
          return data.result;
        } else {
          return null;
        }
      }
    ));
  }
  /**
 * remove fcm token
 * @param payload
 * @returns
 */
  removeDeviceToken(payload): Observable<any> {
    let url = `mobile/user/clear-fcm-token`;
    return this.apiService.put(url, payload).pipe(map(
      data => {
        if (data && data.result) {
          return data.result;
        } else {
          return null;
        }
      }
    ));
  }
  /**
   * send verification token from backend to reset password
   * @param credentials
   * @returns
   */
  sendToken(credentials) {
    return this.apiService.post('mobile/user/send-token', credentials).pipe(map(
      data => {
        if (data && data.result) {
          return data.result;
        } else {
          return null;
        }
      }
    ));
  }
  /**
   * verify the token
   * @param credentials
   * @returns
   */
  verifyToken(credentials) {
    return this.apiService.post(`mobile/user/verify-token/`, credentials).pipe(map(
      data => {
        if (data && data.result) {
          return data.result;
        } else {
          return null;
        }
      }
    ));
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  /**
   * update profile
   * @param updatePayload
   * @returns
   */
  updateProfile(updatePayload: any) {
    return this.apiService.put('mobile/user/update', updatePayload).pipe(map(data => {
      if (data && data.result) {
        this.currentUserSubject.next(data.result);
        this.populate();
        return data.result;
      } else {
        return null;
      }
    }));
  }

  /**
   * get profile
   * @returns
   */
  getProfile() {
    return this.apiService.get(`mobile/user/profile`).pipe(map(data => {
      if (data && data.result) {
        return data.result;
      } else {
        return null;
      }
    }));
  }

  //**send mobile update otp */
  /**
 * @param credentials
 * @returns
 */
  sendOtp(credentials): Observable<any> {
    let url = `mobile/user/send-otp`;
    return this.apiService.post(url, credentials).pipe(map(
      data => {
        if (data && data.result && data.result.existingUser) {
          return data.result;
        }
        else {
          return null;
        }
      }
    ));
  }
  //** mobile number update */
  /**
 * @param credentials
 * @returns
 */
  updateMobile(credentials): Observable<any> {
    let url = `mobile/user/verify-otp`;
    return this.apiService.patch(url, credentials).pipe(map(
      data => {
        if (data && data.result) {
          return data.result;
        }
        else {
          return null;
        }
      }
    ));
  }

  deleteProfile() {
    return this.apiService.delete(`/mobile/user/`).pipe(map(data => {
      if (data && data.result) {
        return data.result;
      } else {
        return null;
      }
    }
    ));
  }

}

