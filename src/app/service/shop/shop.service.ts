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
    getByIDPath:(_id)=>'customer/getByIdShop/${_id}',
    getByCategoryIdWithShop:(_id)=>'customer/getShopByCategoryId/${_id}'
  }
  constructor(  private http: ApiService) { }

getAllShop(params){
  return this.http.get(this.routes.getAllPath(params),params);
}
getById(_id){
  return this.http.get(this.routes.getByIDPath,(_id));
}
getByCategoryIdWithShop(_id){
  return this.http.get(this.routes.getByCategoryIdWithShop,(_id));
}
}
