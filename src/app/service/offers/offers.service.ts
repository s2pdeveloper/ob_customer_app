import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  routes: any = {
    getAllPath: `mobile/offer/`,
    getAllAdvertise: `mobile/advertise/`
  }

  constructor(private http: ApiService) { }
  getAll(payload) {
    return this.http.get(this.routes.getAllPath, payload)
  }
  getAllAdvertise(payload) {
    return this.http.get(this.routes.getAllAdvertise, payload)
  }
}