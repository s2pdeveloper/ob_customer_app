import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { Router } from '@angular/router';
import { StorageService } from '../core/services';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  routes: any = {
    getAllPath: `business_type/getAll`,
  }
  constructor(
    private http: ApiService,
    private storageService: StorageService,
    public router: Router
  ) { }
  getAllcategory(payload) {
    
    return this.http.get(this.routes.getAllPath,payload);
  }
}
