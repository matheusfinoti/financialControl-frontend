import { CommonModule } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';
import { TransactionDto } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';
import { VwTransactionDetailsService } from '../../services/vw-transaction-details-service';
import { VwTransactionDetailsDto } from '../../models/vw-transaction-details';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionListComponent implements OnInit {


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

}
