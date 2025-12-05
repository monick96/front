import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home', 
        loadComponent: ()=> import('./home/home').then(m => m.Home)
    },
    {
        path:'productos',
        loadComponent: () => import('./tabla-producto/tabla-producto').then(m => m.TablaProducto),
    },
    {
        path:'productos-driven',
        loadComponent: ()=>import('./tabla-productos-driven/tabla-productos-driven').then(m=>m.TablaProductosDriven)
    },
    {
        path:'**', redirectTo:'home'
    }
];
