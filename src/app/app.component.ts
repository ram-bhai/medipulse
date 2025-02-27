import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from "./shared/components/global-header/global-header.component";
import { GlobalFooterComponent } from "./shared/components/global-footer/global-footer.component";
import { GlobalSidebarComponent } from "./shared/components/global-sidebar/global-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GlobalHeaderComponent, GlobalFooterComponent, GlobalSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'medipulse';
}
