import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// Importe o provider
import { provideHttpClient } from '@angular/common/http'; 

import { routes } from './app.routes'; // Assumindo que você tem um arquivo app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Adicione a função de provedor HTTP aqui!
    provideHttpClient() 
  ]
};