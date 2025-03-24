import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { StorageService } from '../../../core/services/storage.service';
import { selectCurrentUser } from '../../../state/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AUTH_ROUTES, ROUTES } from '../../../core/constants/routes.constants';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss'
})
export class GlobalHeaderComponent {
  isDarkMode = false;
  isUserLoggedIn = true;
  user$!: Observable<any>;
  @Input() isCollapsed!: boolean;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private storageService: StorageService,
    private store: Store
  ) {
    this.user$ = this.store.select(selectCurrentUser);
  }

  ngOnInit(): void {
    this.getActiveUser();
    this.isUserLoggedIn = this.storageService.get<boolean>('isLoggedIn') || false;
    this.themeService.theme$.subscribe((theme) => {
      this.isDarkMode = theme === 'dark';
    });
  }

  getActiveUser(){
    this.user$.subscribe(user => {
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  navigateToLogin() {
    this.router.navigate([AUTH_ROUTES.ROOT, AUTH_ROUTES.LOGIN]);
  }
  
  navigateToProfile() {
    this.router.navigate([ROUTES.PROFILE]);
  }

  logout() {
    console.log('User Logged Out');
  }

}
