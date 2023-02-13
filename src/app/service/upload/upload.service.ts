import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../core/services/local-storage.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {
  token: String;
  OPTIONS: { maxLimit: 8 };
  private httpClient: HttpClient;

  constructor(private jwtService: StorageService, handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
    this.token = this.jwtService.get('OBCustomer').token;
  }

  uploadFile(
    formData,
    isNew: boolean = false,
    id: string = ''
  ): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        enctype: 'multipart/form-data',
      }),
    };
    let path = `upload`;
    return this.httpClient
      .post(`${environment.s3Endpoint}${path}`, formData, httpHeaders)
      .pipe(
        map((data) => {
          if (data) {
            return data;
          } else {
            return null;
          }
        })
      );
  }

  downloadSignUrl(imageUrl: any) {
    const httpHeaders = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        enctype: 'multipart/form-data',
      }),
      params: {
        filePath: imageUrl,
      },
    };
    let url = `url`;
    return this.httpClient
      .get(`${environment.s3Endpoint}${url}`, httpHeaders)
      .pipe(
        map((data) => {
          if (data && data) {
            return data;
          } else {
            return null;
          }
        })
      );
  }

  /**
   * check th file size
   * @param file
   * @returns
   */
  checkFileSize(file) {
    let size = file.size / (1024 * 1024);
    if (size > this.OPTIONS.maxLimit) {
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
    return false;
  }
}
