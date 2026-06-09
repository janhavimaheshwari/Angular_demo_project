import { Injectable, computed, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  currentTheme$ = signal<AppTheme>('light');
  isDarkMode$ = computed(() => this.currentTheme$() === 'dark');

  toggleTheme(): void {
    this.currentTheme$.set(this.currentTheme$() === 'light' ? 'dark' : 'light');
    localStorage.setItem('dashboard-theme', this.currentTheme$());
  }

  initTheme(): void {
    const stored = localStorage.getItem('dashboard-theme') as AppTheme | null;
    if (stored) {
      this.currentTheme$.set(stored);
    }
  }
}
