import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  login(userData: any): void {
    this.storageService.set('user', userData);
  }

  logout(): void {
    this.storageService.remove('user');
  }

  isLoggedIn(): boolean {
    return this.storageService.get('user') !== null;
  }

  getUser(): any {
    return this.storageService.get('user');
  }
}
