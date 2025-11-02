import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-service';
import { CategoryDto } from '../models/category.model';
import { CommonModule } from '@angular/common'; // <- Import necessário

@Component({
  selector: 'app-category-list',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryListComponent implements OnInit {

  categories: CategoryDto[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Erro ao carregar categorias', err)
    });
  }
}

