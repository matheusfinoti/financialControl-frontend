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
  
  transactions: TransactionDto[] = [];
  vwTransactions: VwTransactionDetailsDto[] = [];

  constructor(private transactionService: TransactionService, private vwTransactionService: VwTransactionDetailsService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.vwTransactionService.getAll().subscribe({
      next: (data) => this.vwTransactions = data,
      error: (err) => console.error('Erro ao carregar transactions', err)
    });
  }

}
