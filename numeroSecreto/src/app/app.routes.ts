import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'instrucciones',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'juego',
        loadComponent: () => import('./juego/juego').then(m => m.Juego)
    },
    {
        path: '**', redirectTo:'instrucciones'
    }

    
];
