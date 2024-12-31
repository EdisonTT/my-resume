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
  {
    path: PATH.EDUCATION,
    loadComponent: () =>
      import('./components/education/education.component').then(
        (c) => c.EducationComponent
      ),
  },
  {
    path: PATH.SKILLS,
    loadComponent: () =>
      import('./components/skills/skills.component').then(
        (c) => c.SkillsComponent
      ),
  },
  {
    path: '**',
    redirectTo: PATH.HOME,
    pathMatch: 'full',
  },
];
