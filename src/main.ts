import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { CategoryListComponent } from './app/category-list/category-list';
import { appConfig } from './app/app.config';
import { CategoryService } from './app/services/category-service';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    CategoryService
  ]
});