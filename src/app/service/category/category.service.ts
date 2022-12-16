import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { HttpClient } from '@angular/common/http';
import{catchError,map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  routes: any = {
    getAllPath: `business_type/getAll`,
    // getByIdPath: (id) => `category/getAllCategoryByBusinessTypeId/${id}`,
    getAllBusinessWithCategory:(obj)=>`category/getAll?${obj.businessTypeId}`,
    getAllOfferPath: `offer/getAll`
  }
  constructor(
    private http: ApiService,
  ) { }
  getAllcategory(payload) {
     return this.http.get(this.routes.getAllPath,payload);
  }
  
  getAll(params){
    return this.http.get(this.routes.getAllBusinessWithCategory(params),params)
    .pipe(map((res:any)=>res));
  }
getAllOffer(payload){
  return this.http.get(this.routes.getAllOfferPath,payload);
}
// getAllcategory1(_id){
//   return this.http.get(this.routes.getAllPath,_id);
// }
}
