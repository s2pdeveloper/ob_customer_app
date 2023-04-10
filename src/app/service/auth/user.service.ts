import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ApiService } from '../../core/services';
import { StorageService } from '../../core/services';
import { DataTablesResponse, User } from '../../core/models';
import { distinctUntilChanged, map } from 'rxjs/operators';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  refreshTable = new Subject();

  constructor(
    private apiService: ApiService,
    private StorageService: StorageService) { }

  // Verify JWT in local storage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.StorageService.getItem('OBUser')) {
      this.apiService.get('/mobile/user/profile')
        .subscribe(
          data => {
            if (data.result) {
              this.setAuth(data.result);
            } else {
              this.purgeAuth(data.result);
            }
          },
        );
    } else {
      // Remove any potential remnants of previous auth states
      // this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in local storage
    this.StorageService.set('OBUser', user);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth(user: User) {
    // Remove JWT from local storage
    this.StorageService.remove('OBUser');
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('shopId');
  }

  /**
   * set rememberMe in local storage
   * @param value 
   */
  setRememberMe(value) {
    localStorage.setItem('OBUser', value);
  }
  /**
   * get the rememberMe value
   * @returns 
   */
  getRememberMe() {
    return localStorage.getItem('OBUser');
  }
  /**
   * remove rememberMe
   */
  removeRememberMe() {
    localStorage.removeItem('OBUser');
  }

  signUp(credentials): Observable<any> {
    let url = `mobile/user/signup`;
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
    let url = `mobile/user/send-mobile-otp`;
    return this.apiService.post(url, credentials).pipe(map(
      data => {
        if (data && data.result) {
          localStorage.setItem('firstTime', 'firstTime');
          localStorage.setItem('mobileNumber', data.result.mobileNumber);
          localStorage.setItem('mobileCode', data.result.mobileCode);
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
          this.setAuth(data.result.data);
          return data.result;
        } else {
          return null;
        }
      }
    ));
  }
  setShop(payload): Observable<any> {
    let url = `/mobile/user/set-shop`;
    return this.apiService.post(url, payload).pipe(map(
      data => {
        if (data && data.result) {
          this.setAuth(data.result.data);
          localStorage.setItem('shopId', data.result.data.shopId);
          return data.result;
        }
        else {
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
  /**
   * reset user password
   * @param credentials 
   * @returns 
   */
  resetPassword(credentials) {
    return this.apiService.post('/mobile/user/reset-password', credentials).pipe(map(
      data => {
        if (data && data.result) {
          return data.result;
        } else {
          return null;
        }
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  /**
   * update profile
   * @param updatePayload
   * @returns
   */
  updateProfile(updatePayload: any) {
    return this.apiService.put('/mobile/user/update', updatePayload).pipe(map(data => {
      if (data && data.result) {
        // this.currentUserSubject.next(data.result);
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

  /**
    * create a new user
    * @param credentials 
    * @returns 
    */
  addUser(credentials) {
    return this.apiService.post('/admin/user/signup', credentials).pipe(map(
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
   * get all the users
   * @param filter 
   * @returns 
   */
  getAllUsers(filter): Observable<DataTablesResponse> {
    return this.apiService.post(`/admin/user/listing`, filter).pipe(map(data => {
      if (data && data.result) {
        return data.result;
      } else {
        return null;
      }
    }));
  }

  /**
   * update user 
   * @param id 
   * @param user 
   * @returns 
   */
  update(id, user) {
    return this.apiService
      .post(`/admin/user/update/${id}`, user).pipe(map(data => {
        if (data && data.result) {
          return data.result;
        } else {
          return null;
        }
      }));
  }
  /**
   * change user status ( block and unblock )
   * @param id 
   * @returns 
   */
  changeStatus(id) {
    return this.apiService.post(`/admin/user/status/${id}`).pipe(map(data => {
      if (data && data.result) {
        return data.result;
      } else {
        return null;
      }
    }))
  }
  /**
   * delete the user
   * @param id 
   * @returns 
   */
  delete(id) {
    return this.apiService.post(`/admin/user/delete/${id}`).pipe(map(data => {
      if (data && data.result) {
        return data.result;
      } else {
        return null;
      }
    }
    ));
  }
}

