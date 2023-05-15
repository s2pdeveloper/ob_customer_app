import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class AddressService {
    constructor(private http: ApiService) { }
    /**
      * get All Address
      * @returns 
      */
    getAddress() {
        let url: string = `mobile/address/`;
        return this.http.get(url).pipe(map(
            (data: any) => {
                if (data && data.result) {
                    return data.result;
                }
                else {
                    return null;
                }
            })
        );
    }
    /**
    * Create Address
    * @returns 
    */
    create(payload) {
        let url: string = `mobile/address/`;
        return this.http.post(url, payload).pipe(map(
            (data: any) => {
                if (data && data.result) {
                    return data.result;
                }
                else {
                    return null;
                }
            })
        );
    }

    /**
  * Update Address
  * @returns 
  */
    update(payload) {
        let url: string = `mobile/address/${payload.id}`;
        return this.http.put(url, payload).pipe(map(
            (data: any) => {
                if (data && data.result) {
                    return data.result;
                }
                else {
                    return null;
                }
            })
        );
    }

    /**
* Delete Address
* @returns 
*/
    deleteAddress(id) {
        let url: string = `mobile/address/${id}`;
        return this.http.delete(url,).pipe(map(
            (data: any) => {
                if (data && data.result) {
                    return data.result;
                }
                else {
                    return null;
                }
            })
        );
    }


}
