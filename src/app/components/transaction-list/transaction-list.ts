import { CommonModule } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';
import { TransactionDto } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';
import { VwTransactionDetailsService } from '../../services/vw-transaction-details-service';
import { VwTransactionDetailsDto } from '../../models/vw-transaction-details';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { TransactionEditComponent } from '../transaction-edit/transaction-edit';
import { TransactionCreateComponent } from '../transaction-create/transaction-create';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TransactionEditComponent, TransactionCreateComponent],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionListComponent implements OnInit {

  isEditModalOpen = false;
  isCreateModalOpen = false;
  selectedTransactionId: number | null = null;
  transactions: VwTransactionDetailsDto[] = [];
  filteredTransactions: VwTransactionDetailsDto[] = [];
   
  filterText = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private vwTransactionService: VwTransactionDetailsService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.isEditModalOpen = false;
    this.isLoading = true;
    this.errorMessage = '';

    this.vwTransactionService.getAll().subscribe({
      next: (data) => {
        this.transactions = data;
        this.filteredTransactions = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erro:errado';
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  applyFilter(): void {
    const text = this.filterText.toLowerCase();

    this.filteredTransactions = this.transactions.filter(t =>
      t.transactionDescription.toLowerCase().includes(text)
    );
  }

  viewTransaction(transaction: VwTransactionDetailsDto): void {
    console.log(transaction);
  }

  editTransaction(transaction: VwTransactionDetailsDto): void {
    console.log(transaction);
    this.selectedTransactionId = transaction.id;
    this.isEditModalOpen = true;
    // this.transactionService.update();
  }

  deleteTransaction(transaction: VwTransactionDetailsDto): void {
    console.log(transaction);

    if (!confirm(`Deseja realmente excluir a transação "${transaction.transactionDescription}"?`)) {
      return;
    }
    this.transactionService.delete(transaction.id).subscribe({
      next: () => {
        this.transactions = this.transactions.filter(t => t.id !== transaction.id);
        this.filteredTransactions = this.filteredTransactions.filter(t => t.id !== transaction.id);
      },
      error: (err) => {
        console.error(err)
        alert('Erro');
      }
    });
  }

  closeModal(): void {
    this.selectedTransactionId = null;
    this.isEditModalOpen = false;
    this.isCreateModalOpen = false;
  }

  onTransactionSaved(): void {
    this.closeModal();
    this.loadTransactions();
  }

  openCreateModal(): void {
    this.isCreateModalOpen = true;
  }
}
