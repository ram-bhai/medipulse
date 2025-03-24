import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-footer.component.html',
  styleUrl: './global-footer.component.scss'
})
export class GlobalFooterComponent {
  @Input() isCollapsed!: boolean;

}
