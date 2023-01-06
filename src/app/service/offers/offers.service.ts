import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  routes: any = {
   getAllPath:(obj)=>`offer/getAll`}
  constructor(private http: ApiService){}
  getAll(payload){
    return this.http.get(this.routes.getAllPath,payload)
  }
    }