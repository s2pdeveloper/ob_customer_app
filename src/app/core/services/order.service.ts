import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apiService: ApiService) { }
  getOrder(id: string) {
    let url: string = `mobile/order/${id}`;
    return this.apiService.get(url).pipe(map(
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


  giveRating(payload) {
    let url: string = `mobile/shop/${payload.orderId}/rating`;
    return this.apiService.put(url, payload).pipe(map(
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
