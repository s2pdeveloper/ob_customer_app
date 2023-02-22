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
    register: 'customer/register',
    login: 'customer/login',
    getByIdPath: (id) => `customer/getProfile/${id}`,
    updatePath: (id) => `customer/update/${id}`,
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
  profile(_id) {
    return this.http.get(this.routes.getByIdPath(_id));
  }
  getCurrentLocation(params:any) {
    console.log("params",params);
    
    let x:any = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${params.latitude},${params.longitude}&key=AIzaSyAp92DF5Vk3CokhTVKskaGA174iSX7o2Cs`
    return this.http.getMap(x); 
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
