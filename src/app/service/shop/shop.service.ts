import { Injectable } from '@angular/core';
import{catchError,map} from 'rxjs/operators';
import { ApiService } from 'src/app/core/services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  routes: any = {
    
    getAllPath:'customer/getAllShop',
    getAllShopCatlogueById:(_id)=>'/customer/getByIdShop/_id?${obj._id}'
  }
  constructor(  private http: ApiService) { }

getAllShop(payload){
  return this.http.get(this.routes.getAllPath,payload);
}
getShopCatlogueById(params){
  return this.http.get(this.routes.getAllBusinessWithCategory(params),params)
  .pipe(map((res:any)=>res));
}
}