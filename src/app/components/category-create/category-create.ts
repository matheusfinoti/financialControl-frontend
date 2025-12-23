import { Component, Output, EventEmitter } from '@angular/core';
import { eventListeners } from '@popperjs/core';
import { CategoryDto } from '../../models/category.model';
import { CategoryService } from '../../services/category-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css'
})
export class CategoryCreateComponent {
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  category: CategoryDto = {} as CategoryDto;

  constructor(private categoryService: CategoryService) { }

  saveCategory(): void {
    this.categoryService.create(this.category).subscribe({
      next: () => {
        this.saved.emit();
        alert('Categoria salva com sucesso');
      }, error: (err) => {
        console.error(err);
        alert('Erro ao salvar;');
      }
    })
  }

  cancel(): void {
    this.close.emit();
  }
}
