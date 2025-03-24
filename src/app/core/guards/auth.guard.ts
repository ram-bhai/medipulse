import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);

  const token = storageService.get<string>('token', true);

  if (token) {
    return true;
  } else {
    router.navigate(['/auth/login']); 
    return false;
  }
};
