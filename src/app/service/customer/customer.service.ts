import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  routes: any = {
    createPath: `customer/create`,
    getByIdPath: (id) => `customer/getById/${id}`,
    getAllCustomerDashBoardPath: `customer/getAllCustomerDashBoard`,
    getAllPath: `customer/getAll`,
    updatePath: (id) => `customer/update/${id}`,
    deletePath: (id) => `customer/delete/${id}`,

  };
  constructor(private http: ApiService) { }

  createCustomer(payload) {
    return this.http.post(this.routes.createPath, payload);
  }
  getAllCustomers(payload) {
    debounceTime(600);
    distinctUntilChanged();
    return this.http.get(this.routes.getAllPath, payload);
  }
  getAllCustomerDashBoard(params) {
    return this.http.get(this.routes.getAllCustomerDashBoardPath, params);
  }
  updateCustomer(id, payload) {
    return this.http.put(this.routes.updatePath(id), payload);
  }
  getByCustomerId(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }
  deleteCustomer(id) {
    return this.http.delete(this.routes.deletePath(id));
  }

}
