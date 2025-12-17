import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list';
import { Home } from './components/home/home';
import { TransactionEdit } from './components/transaction-edit/transaction-edit';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'transactions/edit/:id', component: TransactionEdit }
  // outras rotas aqui
];