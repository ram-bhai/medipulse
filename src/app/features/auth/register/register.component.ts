import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  // Signals for better reactivity
  roles: string | any = signal(['patient', 'doctor', 'admin', 'staff']);
  commonFields: any = signal(['name', 'email', 'password']);

  roleFields: any = signal(new Map<string, string[]>([
    ['doctor', ['specialization', 'clinicName']],
    ['admin', ['hospitalName']],
    ['staff', ['department']]
  ]));

  fieldLabels: Record<string, string> = {
    name: 'Full Name',
    email: 'Email Address',
    password: 'Password',
    specialization: 'Specialization',
    clinicName: 'Clinic Name',
    hospitalName: 'Hospital Name',
    department: 'Department'
  };

  fieldErrors: Record<string, string>| any = {
    name: 'Name is required.',
    email: 'Valid email is required.',
    password: 'Password must be at least 6 characters.',
    specialization: 'Specialization is required.',
    clinicName: 'Clinic Name is required.',
    hospitalName: 'Hospital Name is required.',
    department: 'Department is required.'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.onRoleChange();
  }

  onRoleChange(event?: any) {
    const role = this.registerForm.get('role')?.value;
    const extraFields = this.roleFields().get(role) || [];

    // Remove old fields
    this.roleFields().forEach((_:any, field:any) => {
      this.registerForm.removeControl(field);
    });

    // Add new fields based on selected role
    extraFields.forEach((field: any) => {
      this.registerForm.addControl(field, this.fb.control('', Validators.required));
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      console.log('Form Invalid');
    }
  }

  signInWithGoogle() { 
    // this.authService.googleLogin(); 
  }
  signInWithFacebook() { 
    // this.authService.facebookLogin(); 
  }

  signInWithTwitter() { 
    // this.authService.twitterLogin(); 
  }

}
