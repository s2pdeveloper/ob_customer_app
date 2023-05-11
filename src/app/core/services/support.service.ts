import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class SupportService {
    constructor(private http: ApiService) { }
    /**
      * get All Offer
      * @returns 
      */
    createSupport(payload) {
        let url: string = `mobile/support/`;
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

}
