import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config/environment';
import { VwTransactionDetailsDto } from '../models/vw-transaction-details';

@Injectable({
  providedIn: 'root'
})
export class VwTransactionDetailsService {
  private apiUrl = `${environment.apiUrl}/vwtransactiondetails`;
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<VwTransactionDetailsDto[]> {
    return this.http.get<VwTransactionDetailsDto[]>(this.apiUrl);
  }
}
