export const ROUTES = {
    DASHBOARD: 'dashboard',

    //Admin Module
    ADMIN_DASHBOARD: 'admin-dashboard',
    ADMINS: 'admins',
    ADMINS_DETAIL: 'admins-detail/:id',

    // Doctors Module
    DOCTOR_DASHBOARD: 'doctor-dashboard',
    DOCTORS: 'doctors',
    DOCTORS_DETAIL: 'doctors-detail/:id',

    // Patients Module
    PATIENT_DASHBOARD: 'patient-dashboard',
    PATIENTS: 'patients',
    PATIENTS_DETAIL: 'patients-detail/:id',

    // Staff Module
    STAFF_DASHBOARD: 'staff-dashboard',
    STAFFS: 'staffs',
    STAFFS_DETAIL: 'staffs-detail/:id',

    // Appointments Module
    APPOINTMENTS: 'appointments',
    APPOINTMENTS_DETAIL: 'appointments-detail/:id',

    // Invoices Module
    INVOICES: 'invoices',
    INVOICES_DETAIL: 'invoices-detail/:id',

    //Other
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
    RESET_PASSWORD: 'reset-password',
    LOGOUT: 'logout'
};

