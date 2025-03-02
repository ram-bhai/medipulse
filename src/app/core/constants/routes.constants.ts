export const ROUTES = {
    DASHBOARD: 'dashboard',

    // Appointments Module
    APPOINTMENTS: 'appointments',
    APPOINTMENTS_DETAIL: 'appointments-detail/:id',

    // Patients Module
    PATIENTS: 'patients',
    PATIENTS_DETAIL: 'patients-detail/:id',

    // Invoices Module
    INVOICES: 'invoices',
    INVOICES_DETAIL: 'invoices-detail/:id',

    // Doctors Module
    DOCTORS: 'doctors',
    DOCTORS_DETAIL: 'doctors-detail/:id',

    SETTINGS: 'settings',
    PROFILE: 'profile',

    // Wildcard Route (404)
    NOT_FOUND: '**'
};

export const AUTH_ROUTES = {
    ROOT: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT_PASSWORD: 'forgot-password',
};

