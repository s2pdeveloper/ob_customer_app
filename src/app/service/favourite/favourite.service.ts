import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  routes: any = {
  
    getFavoriteByCustomerId: (_id) =>`customer/getFavoriteByCustomerId/${_id}`,
  };
  constructor(private http: ApiService) { }

  getFavoriteByCustomerId(_id,payload) {
    return this.http.get(this.routes.getFavoriteByCustomerId(_id),payload);
  }


}
