import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss'
})
export class GlobalHeaderComponent {
  isDarkMode = false;
  isUserLoggedIn = true;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private storageService: StorageService,
  ) {}

  ngOnInit(): void {

    this.isUserLoggedIn = this.storageService.get<boolean>('isLoggedIn') || false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // get isDarkModeFunc() {
  //   return this.themeService.currentTheme === 'dark';
  // }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
  
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    console.log('User Logged Out');
  }

}
