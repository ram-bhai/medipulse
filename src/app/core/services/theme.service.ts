import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { THEMES, THEME_VARIABLES } from '../constants/theme-constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private currentTheme = new BehaviorSubject<string>(THEMES.LIGHT);
  theme$ = this.currentTheme.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private storageService: StorageService
  ) {
    // if (isPlatformBrowser(this.platformId)) {
      const savedTheme: any = this.storageService.get(this.THEME_KEY) || THEMES.LIGHT;
      this.setTheme(savedTheme);
    // }
  }

  setTheme(theme: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.document.documentElement.setAttribute('data-theme', theme);
      this.updateThemeVariables(theme);
      this.storageService.set(this.THEME_KEY, theme);
      this.currentTheme.next(theme);
    }
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const newTheme = this.currentTheme.value === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      this.setTheme(newTheme);
    }
  }

  private updateThemeVariables(theme: string): void {
    const root = this.document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--sidebar-bg', '#1e293b');  // Sidebar background
      root.style.setProperty('--text-color', '#f8fafc'); // Main text color
      root.style.setProperty('--header-bg', '#334155');  // Header background
      root.style.setProperty('--footer-bg', '#1e293b');  // Footer background
      root.style.setProperty('--border-color', '#4b5563'); // Border color
      root.style.setProperty('--active-bg', '#374151'); // Active nav background
      root.style.setProperty('--active-text', '#ffffff'); // Active nav text
      root.style.setProperty('--hover-bg', '#475569'); // Hover background
      root.style.setProperty('--hover-text', '#ffffff'); // Hover text
      root.style.setProperty('--footer-shadow', '0px -2px 6px rgba(255,255,255,0.1)'); // Footer shadow
    } else {
      root.style.setProperty('--sidebar-bg', '#ffffff');
      root.style.setProperty('--text-color', '#1e293b');
      root.style.setProperty('--header-bg', '#f8fafc');
      root.style.setProperty('--footer-bg', '#ffffff');
      root.style.setProperty('--border-color', '#e5e7eb');
      root.style.setProperty('--active-bg', '#e5e7eb');
      root.style.setProperty('--active-text', '#1e293b');
      root.style.setProperty('--hover-bg', '#cbd5e1');
      root.style.setProperty('--hover-text', '#1e293b');
      root.style.setProperty('--footer-shadow', '0px -2px 4px rgba(0,0,0,0.2)');
    }
  }
}
