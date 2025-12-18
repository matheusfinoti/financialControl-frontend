import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config/environment';
import { TransactionDto } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = `${environment.apiUrl}/transaction`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<TransactionDto[]> {
    return this.http.get<TransactionDto[]>(this.apiUrl);
  }

  getById(id: number): Observable<TransactionDto> {
    return this.http.get<TransactionDto>(`${this.apiUrl}/${id}`);
  }

  create(transaction: TransactionDto): Observable<TransactionDto> {
    return this.http.post<TransactionDto>(
      this.apiUrl,
      transaction
    )
  }

  update(transaction: TransactionDto): Observable<TransactionDto> {
    return this.http.put<TransactionDto>(
      `${this.apiUrl}/${transaction.id}`,
      transaction
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
