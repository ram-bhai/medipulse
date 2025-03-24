import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { AUTH_ROUTES } from '../constants/routes.constants';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl + '/auth'; // Base Auth URL

  constructor(private http: HttpClient, private storageService: StorageService) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${AUTH_ROUTES.REGISTER}`, userData);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/${AUTH_ROUTES.LOGIN}`, credentials);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${AUTH_ROUTES.FORGOT_PASSWORD}`, { email });
  }

  resetPassword(data: { token: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/${AUTH_ROUTES.RESET_PASSWORD}`, data);
  }

  logout(userId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${AUTH_ROUTES.LOGOUT}`, { userId });
    // this.storageService.remove('user');
  }

  isLoggedIn(): boolean {
    return this.storageService.get('user') !== null;
  }

  getUser(): any {
    return this.storageService.get('user');
  }
}
