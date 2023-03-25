import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class OrderRatingService {
  routes: any = {
    createPath: (_id) =>`chat/rating/${_id}`,
  };
  constructor(private http: ApiService) { }

  giveRating(_id,payload) {
    return this.http.put(this.routes.createPath(_id),payload);
  }
}
