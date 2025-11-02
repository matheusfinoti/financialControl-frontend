import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('financialcontrol-frontend');
}
