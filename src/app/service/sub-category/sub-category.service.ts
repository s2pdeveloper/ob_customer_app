import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  routes: any = {

    getAllPath: `subCategory/getAll`,

    getSubCategoryByBusinessIdAndCategoryId: (_id) =>`subCategory/getSubCategoryByBusinessIdAndCategoryId/${_id}`,

  };

  constructor(private http: ApiService) {}

  getAllSubCategory(payload) {
    return this.http.get(this.routes.getAllPath,payload);
  }

  getSubCategoryByCategoryId(_id) {
    return this.http.get(this.routes.getSubCategoryByBusinessIdAndCategoryId(_id));
  }

 
}
