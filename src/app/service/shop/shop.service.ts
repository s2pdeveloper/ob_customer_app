import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  routes: any = {

    getAllPath: (obj) => `customer/getAllShop`,
    getByIdPath: (_id) => `customer/getByIdShop/${_id}`,
    getByCategoryIdWithShop: (_id) => `customer/getShopByCategoryId/${_id}`,

  };
  constructor(private http: ApiService) { }

  getAllShop(params) {
    return this.http
      .get(this.routes.getAllPath(params), params)
  }

  getByIdShop(_id) {
    return this.http.get(this.routes.getByIdPath(_id));
  }

  getByCategoryIdWithShop(_id) {
    return this.http.get(this.routes.getByCategoryIdWithShop(_id));
  }
}
