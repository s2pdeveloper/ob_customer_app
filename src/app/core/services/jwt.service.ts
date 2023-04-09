import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable()
export class JwtService {

  /**
   * retrieve token from localstorage
   * @returns
   */
  getToken(): String {
    return localStorage['jwtToken'];
  }

  /**
   * save token to localstorage
   * @param token
   */
  saveToken(token: String) {
    localStorage['jwtToken'] = token;
  }

  /**
   * remove token from localstorage
   */
  destroyToken() {
    localStorage.removeItem('jwtToken');
  }

}
