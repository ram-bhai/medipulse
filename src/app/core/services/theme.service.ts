import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private storageService: StorageService
  ) {}

  applyTheme(theme: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.document.documentElement.setAttribute('data-theme', theme);
      this.storageService.set(this.THEME_KEY, theme);
    }
  }

  loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = this.storageService.get(this.THEME_KEY) || 'light';
      this.applyTheme(savedTheme as any);
    }
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentTheme = this.document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      this.applyTheme(currentTheme);
    }
  }
}
