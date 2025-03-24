import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { LoaderService } from '../../../core/services/loader.service';
import { Router, RouterModule } from '@angular/router';
import { AUTH_ROUTES } from '../../../core/constants/routes.constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  AUTH_ROUTES = AUTH_ROUTES;
  signupForm!: FormGroup;
  roles: string[] = ['doctor', 'patient', 'staff'];
  genders: string[] = ['male', 'female', 'other'];
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toasterService: ToasterService,
    private loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,  
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
      role: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      gender: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.toasterService.error('Please fill all required fields correctly.');
      return;
    }
    this.loaderService.showLoader();
    this.authService.register(this.signupForm.value).subscribe({
      next: (response) => {
        this.loaderService.hideLoader();
        this.toasterService.success(response.message);
        this.signupForm.reset();
        this.router.navigate([AUTH_ROUTES.ROOT, AUTH_ROUTES.LOGIN]);
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
