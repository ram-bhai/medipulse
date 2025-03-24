import { Component, computed, inject } from '@angular/core';
import { LoaderService } from '../../../core/services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-loader.component.html',
  styleUrl: './global-loader.component.scss'
})
export class GlobalLoaderComponent {
  loaderService = inject(LoaderService);
  isLoading = computed(() => this.loaderService.isLoading());

}
