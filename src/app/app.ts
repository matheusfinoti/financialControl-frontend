import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // IMPORTANTE: CommonModule para *ngFor, RouterOutlet para rotas
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('financialcontrol-frontend');
}