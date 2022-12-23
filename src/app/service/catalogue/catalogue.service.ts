import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  routes: any = {
  
    getAllCatalogue:() => 'catalogue/getAll',

  };
  constructor(private http: ApiService) { }


  getAllCatalogue(params) {
    return this.http
      .get(this.routes.getAllCatalogue(params), params)
      .pipe(map((res: any) => res));
  }

}
