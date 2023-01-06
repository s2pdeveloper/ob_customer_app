import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
routes:any={
  getAllPath:(obj)=>'subCategory/getAll',
    getByIdPath:(obj)=>'customer/getCatalogueBySubCategoryId?${obj.subCategoryId}',
  // getBySubCategoryIdWithSubCategory: (_id) => `customer/getShopByCategoryId/${_id}`
  // getProductIdPath:(obj)=>'customer/getCatalogueBySubCategoryId?${}'
}
  constructor(private http:ApiService) { }
  getAll(params) {
   
    return this.http.get(this.routes.getAllPath(params),params)
  }

  // getByIdSubCategory(_id) {
  //   return this.http.get(this.routes.getByIdPath(_id));
  // }
  // getBySubCategoryIdWithCategory(_id) {
  //   return this.http.get(this.routes.getBySubCategoryIdWithSubCategory(_id));
  // }
  getByIdSubCategory(params) {
    return this.http
      .get(this.routes.getByIdPath(params), params)
      .pipe(map((res: any) => res));
  }
  // getProductBySubcategoryId(obj){
  //   return this.http.get(this.routes. getByIdPath(obj));
  // }
}
