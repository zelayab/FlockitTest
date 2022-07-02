import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestService } from '../core/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  private baseUrl = environment.api;

  constructor(private requestService:RequestService) { }

  getProvinces(province: string): Observable<any>{
    return this.requestService.get(this.baseUrl + province)
  }
}
