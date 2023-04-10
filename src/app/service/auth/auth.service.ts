import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  routes: any = {
    register: 'customer/register',
    login: 'customer/login',
    getByIdPath: (id) => `customer/getProfile/${id}`,
    updatePath: (id) => `customer/update/${id}`,
    forget_password: 'user/forgot-password',
    reset_password: 'user/reset-password',
    set_password: 'user/set-password',
    createAndUpdateUserDevice: 'user/createAndUpdateUserDevice',
    getCurrentLocation: 'customer/getUserCurrentLocation'
  };

  constructor(
    private http: ApiService,
    public router: Router
  ) { }

  createUser(userPayload: any) {
    return this.http.post(this.routes.register, userPayload);
  }

  login(userPayload: any) {
    return this.http.post(this.routes.login, userPayload);
  }
  updateUser(id, payload) {
    return this.http.put(this.routes.updatePath(id), payload);
  }
  profile(_id) {
    return this.http.get(this.routes.getByIdPath(_id));
  }
  getCurrentLocation(params: any) {
    return this.http.get(this.routes.getCurrentLocation, params);
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
