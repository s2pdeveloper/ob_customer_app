import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  routes: any = {
    getAllPath: `customer/getAllShop`,
    addFavorites: `favorite/create`,
    getByIdPath: (_id) => `customer/getByIdShop/${_id}`,
     getByCategoryIdWithShop: (_id) => `customer/getShopByCategoryId/${_id}`,

     getCatalogueBySubCategoryId: (_id) => `customer/getCatalogueBySubCategoryId/${_id}`,

  };
  constructor(private http: ApiService) {}

  getAllShop(params) {
   
    return this.http.get(this.routes.getAllPath(params),params)
  }

  getByIdShop(_id) {
    return this.http.get(this.routes.getByIdPath(_id));
  }
  getByIdShopUPI(params) {
    return this.http.get(this.routes.getByUPIPath, params);
  }
  getByCategoryIdWithShop(_id) {
    return this.http.get(this.routes.getByCategoryIdWithShop(_id));
  }

  getCatalogueBySubCategoryId(obj) {
    return this.http.get(this.routes.getCatalogueBySubCategoryId,obj);
  }
  createOrRemoveFavorite(payload: object) {
    return this.http.post(this.routes.addFavorites, payload);
  }
}
