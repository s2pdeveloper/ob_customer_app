import { Injectable } from '@angular/core';
import{catchError,map} from 'rxjs/operators';
import { ApiService } from 'src/app/core/services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  routes: any = {
    
    getAllPath:(obj)=>'customer/getAllShop',
    getByIDPath:(_id)=>'/customer/getByIdShop/${_id}',
  }
  constructor(  private http: ApiService) { }

getAllShop(payload){
  return this.http.get(this.routes.getAllPath,payload);
}
getById(_id){
  return this.http.get(this.routes.getByIDPath,(_id));
}
}
