import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { LoaderService } from '../../../core/services/loader.service';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { setUser } from '../../../state/actions/auth.actions';
import { StorageService } from '../../../core/services/storage.service';
import { getDashboardRoute } from '../../../core/utils/helper-function';
import {AUTH_ROUTES} from '../../../core/constants/routes.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  AUTH_ROUTES = AUTH_ROUTES;
  signinForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toasterService: ToasterService,
    private loaderService: LoaderService,
    private storageService: StorageService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.signinForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.signinForm.invalid) {
      this.toasterService.error('Please fill all required fields correctly.');
      return;
    }
    this.loaderService.showLoader();
    this.authService.login(this.signinForm.value).subscribe({
      next: (response) => {
        this.loaderService.hideLoader();
        this.toasterService.success(response.message);
        const { token, data } = response;
        this.store.dispatch(setUser({ user: data }))
        this.storageService.set('token', token, true);
        this.storageService.set('role', data.role, true);
        const dashboardRoute = getDashboardRoute(data.role);
        this.signinForm.reset();
        this.router.navigate([dashboardRoute]);
      },
      error: (error) => {
        this.loaderService.hideLoader();
        if (error?.error?.message) {
          this.toasterService.error(error.error.message);
        } else {
          this.toasterService.error('Something went wrong. Please try again.');
        }
      }
    });
  }

}
