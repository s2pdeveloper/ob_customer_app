import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  routes: any = {
    register: 'user/signup',
    login: 'customer/login',
    getByIdPath: (id) => `user/profile?id=${id}`,
    updatePath: (id) => `user/update?id=${id}`,
    forget_password: 'user/forgot-password',
    reset_password: 'user/reset-password',
    set_password: 'user/set-password',
    createAndUpdateUserDevice: 'user/createAndUpdateUserDevice',
  };

  constructor(
    private http: ApiService,
    private storageService: StorageService,
    public router: Router
  ) {}

  createUser(userPayload: any) {
    return this.http.post(this.routes.register, userPayload);
  }

  login(userPayload: any) {
    return this.http.post(this.routes.login, userPayload);
  }
  updateUser(id, payload) {
    return this.http.put(this.routes.updatePath(id), payload);
  }
  profile(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }
  getCurrentUser() {
    let x: any = localStorage.getItem('Student');
    return JSON.parse(x);
  }
  isLoggedIn() {
    return this.getCurrentUser() !== null;
  }

  forgetPassword(userPayload: any) {
    return this.http.post(this.routes.forget_password, userPayload);
  }

  resetPassword(userPayload: any) {
    return this.http.post(this.routes.reset_password, userPayload);
  }

  setPassword(userPayload: any) {
    return this.http.post(this.routes.set_password, userPayload);
  }
  createAndUpdateUserDevice(userPayload: any) {
    return this.http.post(this.routes.createAndUpdateUserDevice, userPayload);
  }
}
