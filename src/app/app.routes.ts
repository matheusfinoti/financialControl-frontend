import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'transactions/edit/:id', componente: TransactionEditComponent }
  // outras rotas aqui
];