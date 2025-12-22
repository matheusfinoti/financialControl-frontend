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
  selector: 'app-transaction-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-edit.html',
  styleUrls: ['./transaction-edit.css']
})
export class TransactionEditComponent implements OnInit {
  @Input() transactionId!: number;
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
    if (!this.transactionId) {
      this.errorMessage = 'ID inválido!';
      return;
    }

    this.loadTransaction();
    this.loadCategories();
    this.loadPaymentMethods();
  }

  loadTransaction(): void {
    this.isLoading = true;
    this.transactionService.getById(this.transactionId).subscribe({
      next: (data) => {
        this.transaction = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erro ao carregar transação';
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  saveTransaction(): void {
    this.transactionService.update(this.transaction).subscribe({
      next: () => {
        alert('Transação atualizada com sucesso');
        this.transactionService.update(this.transaction).subscribe(() => {
          this.saved.emit(); // avisa o pai
        });
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao atualizar transação');
      }
    });
  }

  cancel(): void {
    this.close.emit();
  }

  loadPaymentMethods() {
    this.paymentMethodService.getAll().subscribe({
      next: (data) => this.paymentMethods = data,
      error: err => console.error(err)
    });
  }

  loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => this.categories = data,
      error: err => console.error(err)
    })
  }

}