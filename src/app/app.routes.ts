import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
    },
    {
        path: 'patients',
        loadComponent: () => import('./features/patients/patients-list/patients-list.component')
            .then(m => m.PatientsListComponent)
    },
    {
        path: 'patients-detail/:id',
        loadComponent: () => import('./features/patients/patients-detail/patients-detail.component')
            .then(m => m.PatientsDetailComponent)
    },
    {
        path: 'appointments',
        loadComponent: () => import('./features/appointments/appointments-list/appointments-list.component')
            .then(m => m.AppointmentsListComponent)
    },
    {
        path: 'appointments-detail/:id',
        loadComponent: () => import('./features/appointments/appointments-detail/appointments-detail.component')
            .then(m => m.AppointmentsDetailComponent)
    },
    {
        path: 'invoices',
        loadComponent: () => import('./features/invoices/invoices-list/invoices-list.component')
            .then(m => m.InvoicesListComponent)
    },
    {
        path: 'invoices-detail/:id',
        loadComponent: () => import('./features/invoices/invoices-detail/invoices-detail.component')
            .then(m => m.InvoicesDetailComponent)
    },
    {
        path: 'doctors',
        loadComponent: () => import('./features/doctors/doctors-list/doctors-list.component')
            .then(m => m.DoctorsListComponent)
    },
    {
        path: 'doctors-detail/:id',
        loadComponent: () => import('./features/doctors/doctors-detail/doctors-detail.component')
            .then(m => m.DoctorsDetailComponent)
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                loadComponent: () => import('./features/auth/login/login.component')
                    .then(m => m.LoginComponent)
            },
            {
                path: 'register',
                loadComponent: () => import('./features/auth/register/register.component')
                    .then(m => m.RegisterComponent)
            }
        ]
    },
    {
        path: '**',  // Wildcard Route for handling 404 errors
        redirectTo: '',
        pathMatch: 'full'
    }
];
