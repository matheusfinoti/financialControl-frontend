import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list';
import { Home } from './pages/home/home';
import { TransactionEditComponent } from './components/transaction-edit/transaction-edit';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'transactions/edit/:id', component: TransactionEditComponent }
  // outras rotas aqui
];