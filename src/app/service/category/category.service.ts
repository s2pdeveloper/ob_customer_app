import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  routes: any = {
    getAllPath: `category/getAll`,
    getAllCategory: `category/getAll`,
    getAllCategoryWithSubCategory: (obj) =>
      `category/getAllCategoryWithSubCategory`,
    getSubCategoryBySubCategory: (obj) =>
      `subCategory/getAll?${obj.categoryId}`,
  };
  constructor(private http: ApiService) { }

  getAll(params) {
    return this.http
      .get(this.routes.getAllPath, params)
      .pipe(map((res: any) => res));
  }

  getAllCategory(params) {
    return this.http
      .get(this.routes.getAllCategory(params), params)
      .pipe(map((res: any) => res));
  }

  getSubCategoryBySubCategory(params) {
    return this.http
      .get(this.routes.getSubCategoryBySubCategory(params), params)
      .pipe(map((res: any) => res));
  }

  getAllCategoryWithSubCategory(params) {
    return this.http
      .get(this.routes.getAllCategoryWithSubCategory(params), params)
      .pipe(map((res: any) => res));
  }
}
