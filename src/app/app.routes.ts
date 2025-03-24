import { Routes } from '@angular/router';
import { ROUTES, AUTH_ROUTES } from './core/constants/routes.constants';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthRedirectGuard } from './core/guards/auth-redirect.guard';

export const routes: Routes = [
    { path: '', redirectTo: ROUTES.DASHBOARD, pathMatch: 'full' },
    {
        path: ROUTES.DASHBOARD,
        loadComponent: () => import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
    },
    {
        path: ROUTES.ADMIN_DASHBOARD,
        loadComponent: () => import('./features/dashboard/admin-dashboard/admin-dashboard.component')
            .then(m => m.AdminDashboardComponent),
            canActivate: [AuthGuard]
    },
    {
        path: ROUTES.DOCTOR_DASHBOARD,
        loadComponent: () => import('./features/dashboard/doctor-dashboard/doctor-dashboard.component')
            .then(m => m.DoctorDashboardComponent),
            canActivate: [AuthGuard]
    },
    {
        path: ROUTES.PATIENT_DASHBOARD,
        loadComponent: () => import('./features/dashboard/patient-dashboard/patient-dashboard.component')
            .then(m => m.PatientDashboardComponent),
            canActivate: [AuthGuard]
    },
    {
        path: ROUTES.PATIENTS,
        loadComponent: () => import('./features/patients/patients-list/patients-list.component')
            .then(m => m.PatientsListComponent),
        canActivate: [AuthGuard]
    },
    {
        path: ROUTES.PATIENTS_DETAIL,
        loadComponent: () => import('./features/patients/patients-detail/patients-detail.component')
            .then(m => m.PatientsDetailComponent),
        canActivate: [AuthGuard]
    },
    {
        path: ROUTES.APPOINTMENTS,
        loadComponent: () => import('./features/appointments/appointments-list/appointments-list.component')
            .then(m => m.AppointmentsListComponent),
        canActivate: [AuthGuard]
    },
    {
        path: ROUTES.APPOINTMENTS_DETAIL,
        loadComponent: () => import('./features/appointments/appointments-detail/appointments-detail.component')
            .then(m => m.AppointmentsDetailComponent),
        canActivate: [AuthGuard]
    },
    {
        path: ROUTES.INVOICES,
        loadComponent: () => import('./features/invoices/invoices-list/invoices-list.component')
            .then(m => m.InvoicesListComponent),
        canActivate: [AuthGuard]
    },
    {
        path: ROUTES.INVOICES_DETAIL,
        loadComponent: () => import('./features/invoices/invoices-detail/invoices-detail.component')
            .then(m => m.InvoicesDetailComponent),
        canActivate: [AuthGuard]
    },
    {
        path: ROUTES.DOCTORS,
        loadComponent: () => import('./features/doctors/doctors-list/doctors-list.component')
            .then(m => m.DoctorsListComponent),
        canActivate: [AuthGuard]
    },
    {
        path: ROUTES.DOCTORS_DETAIL,
        loadComponent: () => import('./features/doctors/doctors-detail/doctors-detail.component')
            .then(m => m.DoctorsDetailComponent),
        canActivate: [AuthGuard]
    },
    {
        path: AUTH_ROUTES.ROOT,
        children: [
            {
                path: AUTH_ROUTES.REGISTER.replace('auth/', ''),
                loadComponent: () => import('./features/auth/register/register.component')
                    .then(m => m.RegisterComponent),
                canActivate: [AuthRedirectGuard]
            },
            {
                path: AUTH_ROUTES.LOGIN.replace('auth/', ''),
                loadComponent: () => import('./features/auth/login/login.component')
                    .then(m => m.LoginComponent),
                canActivate: [AuthRedirectGuard]
            },
            {
                path: AUTH_ROUTES.FORGOT_PASSWORD.replace('auth/', ''),
                loadComponent: () => import('./features/auth/forgot-password/forgot-password.component')
                    .then(m => m.ForgotPasswordComponent),
                canActivate: [AuthRedirectGuard]
            },
            {
                path: AUTH_ROUTES.RESET_PASSWORD.replace('auth/', ''),
                loadComponent: () => import('./features/auth/reset-password/reset-password.component')
                    .then(m => m.ResetPasswordComponent),
                canActivate: [AuthRedirectGuard]
            }

        ]
    },
    {
        path: ROUTES.NOT_FOUND,  // Wildcard Route for handling 404 errors
        redirectTo: '',
        pathMatch: 'full'
    }
];
