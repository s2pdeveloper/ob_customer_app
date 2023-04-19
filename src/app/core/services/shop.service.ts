import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { LoaderService } from './loader.service';
import { ToastService } from './toast.service';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class ShopService {
    private shopSubject = new BehaviorSubject<any>({});

    constructor(private apiService: ApiService, private userService: UserService, private fileOpener: FileOpener,
        private toastService: ToastService, private spinnerService: LoaderService) { }

    setShop(data) {
        return this.shopSubject.next(data);
    }

    getShop() {
        return this.shopSubject.asObservable();
    }

    /**
    * get shop profile
    * @returns 
    */
    getShopProfile(id: string) {
        let url: string = `mobile/shop/${id}`;
        return this.apiService.get(url).pipe(map(
            (data: any) => {
                if (data && data.result) {
                    return data.result;
                }
                else {
                    return null;
                }
            })
        );
    }
    list(params) {
        let url: string = `mobile/shop`;
        return this.apiService.get(url, params).pipe(map(
            (data: any) => {
                if (data && data.result) {
                    return data.result;
                }
                else {
                    return null;
                }
            })
        );
    }

    /**
  * get shop catalogue
  * @returns 
  */
    getShopCatalogue(payload: any) {
        let url: string = `mobile/shop/catalogue`;
        return this.apiService.get(url, payload).pipe(map(
            (data: any) => {
                if (data && data.result) {
                    return data.result;
                }
                else {
                    return null;
                }
            })
        );
    }

}