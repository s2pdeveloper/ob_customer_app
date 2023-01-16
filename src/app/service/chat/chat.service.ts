import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  routes: any = {
    createPath: `chat/create`,
    getMsgByCustomerId: (_id) =>`chat/getMsgByCustomerId/${_id}`,
    getChatShopByCustomerId: `chat/getChatShopByCustomerId`,

  };

  constructor(private http: ApiService) {}

  create(payload) {
    return this.http.post(this.routes.createPath, payload);
  }

  getMsgByCustomerId(_id) {
    return this.http.get(this.routes.getMsgByCustomerId(_id));
  }
// shop list
  getChatShopByCustomerId() {
    return this.http.get(this.routes.getChatShopByCustomerId);
  }
 
}
