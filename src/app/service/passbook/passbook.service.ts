import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import {debounceTime,distinctUntilChanged} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class PassbookService {
  routes: any = {
    createPath: `passbook/create`,
    getByIdPath: (id) => `passbook/getById/${id}`,
    getAllPath: `passbook/getAll`,
    updatePath: (id) => `passbook/update/${id}`,
    deletePath: (id) => `passbook/delete/${id}`,
  };
  constructor(private http: ApiService) {}

  createPassbook(payload) {
    return this.http.post(this.routes.createPath, payload);
  }
  getAllPassbooks(payload) {
    debounceTime(600);
    distinctUntilChanged();
    return this.http.get(this.routes.getAllPath, payload);
  }

  updatePassbook(id, payload) {
    return this.http.put(this.routes.updatePath(id), payload);
  }
  getByPassbookId(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }
  deletePassbook(id) {
    return this.http.delete(this.routes.deletePath(id));
  }
}
