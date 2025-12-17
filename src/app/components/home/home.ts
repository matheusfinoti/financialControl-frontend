import { Component } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from '../transaction-list/transaction-list';

@Component({
  selector: 'app-home',
  imports: [CategoryListComponent, CommonModule, TransactionListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
