import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDto } from '../models/category.model';

@Injectable({
  providedIn: 'root' // Faz o Angular criar um singleton global do serviço
})
export class CategoryService {
  // URL base da sua API de categorias
  private apiUrl = 'https://localhost:7271/api/category';

  constructor(private http: HttpClient) {}

  /**
   * Retorna todas as categorias
   */
  getAll(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.apiUrl);
  }

  /**
   * Cria uma nova categoria
   * @param category Objeto CategoryDto contendo os dados da categoria
   */
  create(category: CategoryDto): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(this.apiUrl, category);
  }

  /**
   * Atualiza uma categoria existente
   * @param category Objeto CategoryDto com o ID da categoria a ser atualizada
   */
  update(category: CategoryDto): Observable<CategoryDto> {
    return this.http.put<CategoryDto>(`${this.apiUrl}/${category.id}`, category);
  }

  /**
   * Remove uma categoria pelo ID
   * @param id ID da categoria a ser removida
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
