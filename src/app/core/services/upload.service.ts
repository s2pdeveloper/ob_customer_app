import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { formatErrors, OPTIONS } from "../../helpers";
import { JwtService } from './jwt.service';
import { ApiService } from './api.service';

@Injectable()
export class UploadService {
  token: String;
  private httpClient: HttpClient;

  constructor(private jwtService: JwtService, handler: HttpBackend,private apiService: ApiService) {
    this.httpClient = new HttpClient(handler);
    this.token = this.jwtService.getToken();
  }


  uploadFile(formData): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `JWT ${this.token}`,
        'Accept': 'application/json',
        'enctype': 'multipart/form-data'
      })
    };
    let path = `/shared/upload`;
    return this.httpClient.post(`${environment.apiEndpoint}${path}`, formData, httpHeaders)
      .pipe(catchError(formatErrors))
      .pipe(map(data => {
        if (data) {
          return data;
        } else {
          return null;
        }
      }));
  };

  uploadFileUsingSignedUrl(path: string, file): Observable<any> {
    return this.httpClient.put(`${path}`, file)
      .pipe(catchError(formatErrors))
      .pipe(map(data => {
        if (data) {
          return data;
        } else {
          return null;
        }
      }));
  };
  getSignUrl(params) {
    let url = `/shared/signed-url`;
    return this.apiService.get(url, params).pipe(map(data => {
      if (data && data.result) {
        return data.result;
      } else {
        return null;
      }
    }))
  }

  /**
  * check th file size
  * @param file 
  * @returns 
  */
  checkFileSize(file) {
    let size = file.size / (1024 * 1024);
    if (size > OPTIONS.maxLimit) {
      return true;
    }
    return false;
  }

  /**
   * check upload file type
   * @param file
   * @returns
   */
  checkDocumentType(file) {
    let types = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
    if (!types.includes(file.type)) {
      return true;
    }
    return false;
  }
  /**
  * check upload file type
  * @param file 
  * @returns 
  */
  checkImageType(file) {
    let types = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!types.includes(file.type)) {
      return true;
    }
    return false
  }

}

