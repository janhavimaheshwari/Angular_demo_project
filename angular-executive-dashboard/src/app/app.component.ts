import { Component, effect } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SidenavLayoutComponent } from './layout/sidenav-layout/sidenav-layout.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [SidenavLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {
    effect(() => {
      const theme = this.themeService.currentTheme$();
      this.renderer.setAttribute(document.documentElement, 'data-theme', theme);
    });
  }
}
