import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import {  map } from 'rxjs/operators';
// import { Plugins, FilesystemDirectory } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

import { FileOpener } from '@ionic-native/file-opener/ngx';
// const { Filesystem, Storage, LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  routes: any = {
    createPath: `chat/create`,

    getMsgByCustomerId: (_id) =>`chat/getMsgByCustomerId/${_id}`,

    getChatShopByCustomerId: `order/getChatShopByCustomerId`,
    
  };

  constructor(private http: ApiService,private fileOpener: FileOpener,) {}

  create(payload) {
    return this.http.post(this.routes.createPath, payload);
  }

  getMsgByCustomerId(_id) {
    return this.http.get(this.routes.getMsgByCustomerId(_id));
  }
// shop list
getChatShopByCustomerId(obj) {
    return this.http.get(this.routes.getChatShopByCustomerId,obj);
  }



}
