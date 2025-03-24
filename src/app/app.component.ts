import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from "./shared/components/global-header/global-header.component";
import { GlobalFooterComponent } from "./shared/components/global-footer/global-footer.component";
import { GlobalSidebarComponent } from "./shared/components/global-sidebar/global-sidebar.component";
import { ThemeService } from './core/services/theme.service';
import { GlobalLoaderComponent } from "./shared/components/global-loader/global-loader.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    GlobalHeaderComponent, 
    GlobalFooterComponent, 
    GlobalSidebarComponent, 
    GlobalLoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'medipulse';
  currentTheme = 'light';
  isCollapsed = false;
  isLoggedIn = true;

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
