import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class AdvertiseService {
  routes: any = {
  
    getAllPath:  `advertise/getAll`,
   

  };
  constructor(private http: ApiService) { }

  getAll(payload) {
    return this.http.get(this.routes.getAllPath,payload);
  }


}