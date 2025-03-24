import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object) { }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

    /**
   * Set data in local or session storage
   * @param key - Storage key
   * @param value - Data to store
   * @param isSession - Use sessionStorage instead of localStorage
   */
    set<T>(key: string, value: T, isSession: boolean = false): void {
      if (!this.isBrowser()) return; // Prevent errors in SSR
      const storage = isSession ? sessionStorage : localStorage;
      storage.setItem(key, JSON.stringify(value));
    }
  
    /**
     * Get data from local or session storage
     * @param key - Storage key
     * @param isSession - Use sessionStorage instead of localStorage
     * @returns Parsed data or null if not found
     */
    get<T>(key: string, isSession: boolean = false): T | null {
      if (!this.isBrowser()) return null;
      
      const storage = isSession ? sessionStorage : localStorage;
      const data = storage.getItem(key);
    
      if (!data) return null;
    
      try {
        return JSON.parse(data) as T;
      } catch (error) {
        return data as unknown as T; // If parsing fails, return as string
      }
    }
    
  
    /**
     * Remove a specific item from storage
     * @param key - Storage key
     * @param isSession - Use sessionStorage instead of localStorage
     */
    remove(key: string, isSession: boolean = false): void {
      if (!this.isBrowser()) return;
      const storage = isSession ? sessionStorage : localStorage;
      storage.removeItem(key);
    }
  
    /**
     * Clear all stored data from either local or session storage
     * @param isSession - Use sessionStorage instead of localStorage
     */
    clear(isSession: boolean = false): void {
      if (!this.isBrowser()) return;
      const storage = isSession ? sessionStorage : localStorage;
      storage.clear();
    }
}
