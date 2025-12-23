import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../services/transaction-service';
import { TransactionDto } from '../../models/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category-service';
import { PaymentMethodService } from '../../services/payment-method-service';
import { CategoryDto } from '../../models/category.model';
import { PaymentMethodDto } from '../../models/payment-method.model';

@Component({
  selector: 'app-transaction-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-create.html',
  styleUrl: './transaction-create.css'
})
export class TransactionCreateComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  transaction: TransactionDto = {} as TransactionDto;
  categories: CategoryDto[] = [];
  paymentMethods: PaymentMethodDto[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private paymentMethodService: PaymentMethodService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadPaymentMethods();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => this.categories = data,
      error: err => console.error(err)
    });
  }

  loadPaymentMethods(): void {
    this.paymentMethodService.getAll().subscribe({
      next: (data) => this.paymentMethods = data,
      error: err => console.error(err)
    });
  }

  saveTransaction(): void {
    this.transactionService.create(this.transaction).subscribe({
      next: () => {
        alert('Transação salva com sucesso');
        this.saved.emit();
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao salvar transação');
      }
    });
  }
  cancel(): void {
    this.close.emit();
  }

}

