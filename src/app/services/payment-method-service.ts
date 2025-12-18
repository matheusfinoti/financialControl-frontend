import { Injectable } from '@angular/core';
import { environment } from '../config/environment';
import { HttpClient } from '@angular/common/http';
import { PaymentMethodDto } from '../models/payment-method.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private apiUrl = `${environment.apiUrl}/paymentMethod`;

  constructor(private http: HttpClient) { }


  getAll(): Observable<PaymentMethodDto[]> {
    return this.http.get<PaymentMethodDto[]>(this.apiUrl);
  }

  getById(id: number): Observable<PaymentMethodDto> {
    return this.http.get<PaymentMethodDto>(`${this.apiUrl}/${id}`);
  }

  create(paymentMethod: PaymentMethodDto): Observable<PaymentMethodDto> {
    return this.http.post<PaymentMethodDto>(
      this.apiUrl,
      paymentMethod
    )
  }

  update(paymentMethod: PaymentMethodDto): Observable<PaymentMethodDto> {
    return this.http.put<PaymentMethodDto>(
      `${this.apiUrl}/${paymentMethod.id}`,
      paymentMethod
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
