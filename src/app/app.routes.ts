import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'estudiante',
        loadChildren: () => import('./estudiante/estudiante.routes').then(m => m.ESTUDIANTE_ROUTES)
    }
];
