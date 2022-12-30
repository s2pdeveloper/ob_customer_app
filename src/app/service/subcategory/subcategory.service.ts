import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';
@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
routes:any={
  getAllPath:(obj)=>'subCategory/getAll',
    // getByIdPath(_id)=>'customer/getByIdShop/${_id}',
  // getBySubCategoryIdWithSubCategory: (_id) => `customer/getShopByCategoryId/${_id}`
}
  constructor(private http:ApiService) { }
  getAll(params) {
   
    return this.http.get(this.routes.getAllPath(params),params)
  }

  getByIdSubCategory(_id) {
    return this.http.get(this.routes.getByIdPath(_id));
  }
  getBySubCategoryIdWithCategory(_id) {
    return this.http.get(this.routes.getBySubCategoryIdWithSubCategory(_id));
  }
}
