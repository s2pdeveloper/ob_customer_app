import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class FavoriteService {
    constructor(private http: ApiService) { }
    /**
      * get All favorite shop with with customer id
      * @returns 
      */
    getAllFavoriteWithCustomerId(payload) {
        let url: string = `mobile/favorite/`;
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
