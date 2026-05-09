import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Pizzeria da Mario — Bari dal 1987'
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.component').then((m) => m.MenuComponent),
    title: 'Menu — Pizzeria da Mario'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Pizzeria da Mario'
  },
  {
    path: 'galleria',
    loadComponent: () => import('./pages/galleria/galleria.component').then((m) => m.GalleriaComponent),
    title: 'Galleria — Pizzeria da Mario'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Contatti e Prenotazioni — Pizzeria da Mario'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
