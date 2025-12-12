import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home', 
        loadComponent: ()=>import ('./tarea-form/tarea-form').then(m=> m.TareaForm)
    },
    {
        path:'**',
        redirectTo:'home'
    }
];
