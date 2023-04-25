import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  api_url = environment.apiEndpoint;
  constructor(
    private http: HttpClient,
  ) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.api_url}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }
  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(`${this.api_url}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
  }
  delete(path): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }


  private formatErrors(error: any) {
    console.log('formatErrors', error)
    if (error && (error.status === 403 || error.status === 401)) {
      location.reload();
    }
    let err = error.error;
    if (err.error) {
      err = err.error;
      if (err && err.error_params && err.error_params.length > 0) {
        const errors = err.error_params.map(e => e.msg);
        return throwError(errors || ['Oops something went wrong!']);
      } else if (err && err.message && err.message.length > 0) {
        return throwError(err.message || 'Oops something went wrong!');
      } else {
        return throwError('Oops something went wrong!');
      }
    } else {
      return throwError(err ? err.errors ? err.errors : 'Oops something went wrong!' : 'Oops something went wrong!');
    }
  }
}
