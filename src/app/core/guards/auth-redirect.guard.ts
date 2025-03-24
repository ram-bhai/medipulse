import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { getDashboardRoute } from '../utils/helper-function';

export const AuthRedirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);

  const token = storageService.get<string>('token', true);
  const role = storageService.get<string>('role', true);

  if (token && role) {
    const dashboardRoute = getDashboardRoute(role);
    router.navigate([dashboardRoute]); 
    return false;
  }

  return true;
};
