import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AUTH_ROUTES, ROUTES } from '../../../core/constants/routes.constants';

@Component({
  selector: 'app-global-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './global-sidebar.component.html',
  styleUrl: './global-sidebar.component.scss'
})
export class GlobalSidebarComponent {
  isCollapsed = false;

  navLinks = [
    { path: ROUTES.DASHBOARD, label: 'Home', icon: 'fas fa-home' },
    { path: ROUTES.APPOINTMENTS, label: 'Appointments', icon: 'fas fa-calendar' },
    { path: ROUTES.PATIENTS, label: 'Patients', icon: 'fas fa-users' },
    { path: ROUTES.DOCTORS, label: 'Doctors', icon: 'fas fa-user-md' },
    { path: ROUTES.INVOICES, label: 'Invoices', icon: 'fas fa-file-invoice-dollar' },
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  RedirectTodashboard(){
    this.router.navigate([ROUTES.DASHBOARD]);
  }

}
