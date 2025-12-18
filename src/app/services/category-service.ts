import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDto } from '../models/category.model';
import { environment } from '../config/environment';

@Injectable({
  providedIn: 'root' // Faz o Angular criar um singleton global do serviço
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/category`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.apiUrl);
  }

  getById(id: number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.apiUrl}/${id}`);
  }

  create(category: CategoryDto): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(
      this.apiUrl,
      category
    )
  }

  update(category: CategoryDto): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(
      `${this.apiUrl}/${category.id}`,
      category
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
