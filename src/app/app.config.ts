import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { authReducer } from '../app/state/reducers/auth.reducers';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(), 
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore({auth: authReducer}),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true,
      autoDismiss: true,
      preventDuplicates: true
    })
  ]
};
