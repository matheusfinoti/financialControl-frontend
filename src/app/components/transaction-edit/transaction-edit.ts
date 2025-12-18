import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../services/transaction-service';
import { TransactionDto } from '../../models/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-edit.html',
  styleUrls: ['./transaction-edit.css']
})
export class TransactionEditComponent implements OnInit {

  transaction: TransactionDto = {} as TransactionDto;
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage = 'ID inválido!';
      return;
    }

    this.loadTransaction(id);
  }

  loadTransaction(id: number): void {
    this.isLoading = true;
    this.transactionService.getById(id).subscribe({
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
        this.router.navigate(['/']); // volta para lista
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao atualizar transação');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}