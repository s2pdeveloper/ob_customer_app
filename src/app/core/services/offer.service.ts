import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class OfferService {
    constructor(private http: ApiService) { }
    /**
      * get All Offer
      * @returns 
      */
    getAll(payload) {
        let url: string = `mobile/offer/`;
        return this.http.get(url, payload).pipe(map(
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
