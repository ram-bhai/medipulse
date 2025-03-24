export function getDashboardRoute(role: string): string {
    const routes: Record<string, string> = {
        admin: '/admin/dashboard',
        staff: '/staff/dashboard',
        patient: '/patient/dashboard',
        doctor: '/doctor/dashboard'
    };
    return routes[role];
}