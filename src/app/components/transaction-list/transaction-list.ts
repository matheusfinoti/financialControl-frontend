import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransactionDto } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';
import { VwTransactionDetailsService } from '../../services/vw-transaction-details-service';
import { VwTransactionDetailsDto } from '../../models/vw-transaction-details';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.css']
})
export class TransactionListComponent implements OnInit {
  
  transactions: VwTransactionDetailsDto[] = [];
  filteredTransactions: VwTransactionDetailsDto[] = [];

  isLoading = false;
  errorMessage = '';

  constructor(
    private vwTransactionService: VwTransactionDetailsService
  ) {}

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
      error: () => {
        this.errorMessage = 'Erro ao carregar transações';
        this.isLoading = false;
      }
    });
  }

}
