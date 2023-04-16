import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services'

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusinessTypeService {
  routes: any = {
    getAllPath: `business_type/getAll`,
    getAll:''
  }
  constructor(
    private http: ApiService,
  ) { }


  getAllBusinessType(payload) {
    return this.http.get(this.routes.getAllPath,payload);
  }
 
}