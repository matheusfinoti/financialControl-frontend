import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config'; // O appConfig deve vir de app.config.ts

bootstrapApplication(App, appConfig) // <--- Passar o appConfig completo aqui
  .catch(err => console.error(err));