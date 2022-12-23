import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  routes: any = {
  
    getAllPath: (obj) => `category/getAll?${obj.businessTypeId}`,
    getAllCategory: (obj) => `category/getAll`,
    getAllpath1:(obj)=>'offer/getAll'
    // getAllCataloguePath:() => 'catalogue/getAll',
    // getAllCategoryByBusinessTypeId: (obj) => `category/getAllCategoryByBusinessTypeId/${obj.businessTypeId}`,

  };
  constructor(private http: ApiService) { }

  getAll(params) {
    return this.http
      .get(this.routes.getAllPath(params), params)
      .pipe(map((res: any) => res));
  }

  getAllCategory(params) {
    return this.http
      .get(this.routes.getAllCategory(params), params)
      .pipe(map((res: any) => res));
  }
  getAllOffer(payload){
    return this.http.post(this.routes.getAllpath1, payload);
  }

  // getAllCatalogue(payload){
  //   return this.http.get(this.routes.getAllCataloguePath,payload);
  // }
  // getAllCategoryByBusinessTypeId(businessTypeId) {
  //   return this.http.get(this.routes.getAllCategoryByBusinessTypeId(businessTypeId));
  // }

}
