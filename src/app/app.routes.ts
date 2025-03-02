import { Routes } from '@angular/router';
import { ROUTES, AUTH_ROUTES } from './core/constants/routes.constants';

export const routes: Routes = [
    { path: '', redirectTo: ROUTES.DASHBOARD, pathMatch: 'full' },
    {
        path: ROUTES.DASHBOARD,
        loadComponent: () => import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
    },
    {
        path: ROUTES.PATIENTS,
        loadComponent: () => import('./features/patients/patients-list/patients-list.component')
            .then(m => m.PatientsListComponent)
    },
    {
        path: ROUTES.PATIENTS_DETAIL,
        loadComponent: () => import('./features/patients/patients-detail/patients-detail.component')
            .then(m => m.PatientsDetailComponent)
    },
    {
        path: ROUTES.APPOINTMENTS,
        loadComponent: () => import('./features/appointments/appointments-list/appointments-list.component')
            .then(m => m.AppointmentsListComponent)
    },
    {
        path: ROUTES.APPOINTMENTS_DETAIL,
        loadComponent: () => import('./features/appointments/appointments-detail/appointments-detail.component')
            .then(m => m.AppointmentsDetailComponent)
    },
    {
        path: ROUTES.INVOICES,
        loadComponent: () => import('./features/invoices/invoices-list/invoices-list.component')
            .then(m => m.InvoicesListComponent)
    },
    {
        path: ROUTES.INVOICES_DETAIL,
        loadComponent: () => import('./features/invoices/invoices-detail/invoices-detail.component')
            .then(m => m.InvoicesDetailComponent)
    },
    {
        path: ROUTES.DOCTORS,
        loadComponent: () => import('./features/doctors/doctors-list/doctors-list.component')
            .then(m => m.DoctorsListComponent)
    },
    {
        path: ROUTES.DOCTORS_DETAIL,
        loadComponent: () => import('./features/doctors/doctors-detail/doctors-detail.component')
            .then(m => m.DoctorsDetailComponent)
    },
    {
        path: AUTH_ROUTES.ROOT,
        children: [
            {
                path: AUTH_ROUTES.LOGIN.replace('auth/', ''),
                loadComponent: () => import('./features/auth/login/login.component')
                    .then(m => m.LoginComponent)
            },
            {
                path: AUTH_ROUTES.REGISTER.replace('auth/', ''),
                loadComponent: () => import('./features/auth/register/register.component')
                    .then(m => m.RegisterComponent)
            }
        ]
    },
    {
        path: ROUTES.NOT_FOUND,  // Wildcard Route for handling 404 errors
        redirectTo: '',
        pathMatch: 'full'
    }
];
