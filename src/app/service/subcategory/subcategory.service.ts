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
  
}
  constructor(private http:ApiService) { }
  getAll(params) {
    return this.http
    .get(this.routes.getAllPath(params), params)
    .pipe(map((res: any) => res));
    
  }
  
  getByIdSubCategory(params) {
    return this.http
      .get(this.routes.getByIdPath(params), params)
      .pipe(map((res: any) => res));
  }
  
}

