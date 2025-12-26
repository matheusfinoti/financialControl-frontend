import { Component } from '@angular/core';
import { CategoryListComponent } from '../../components/category-list/category-list';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from '../../components/transaction-list/transaction-list';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, TransactionListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
