import { Routes } from '@angular/router';
import { PATH } from './const';

export const routes: Routes = [
  {
    path: '',
    redirectTo: PATH.HOME,
    pathMatch: 'full',
  },
  {
    path: PATH.HOME,
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: PATH.EXPERIENCE,
    loadComponent: () =>
      import('./components/experience/experience.component').then(
        (c) => c.ExperienceComponent
      ),
  },
];
