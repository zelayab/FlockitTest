import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GenericRequest } from '../models/requesting.model';
import { ResponseType } from '../models/options.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders, responseType?: ResponseType): Observable<T> {
    const options: GenericRequest = { method: 'GET', url, options: { params, headers, responseType } };
    return this.requestAll<T>(options);
  }

  private requestAll<T>(requestOptions: GenericRequest): Observable<T> {
    const { method, url, options } = requestOptions;
    return this.http.request(method, url, options);
  }

}
