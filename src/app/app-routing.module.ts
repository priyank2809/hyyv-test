import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'tradies', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule),
  },
  {
    path: 'tradies',
    loadChildren: () => import('./tradies/tradies.module').then(m => m.TradiesModule),
  },
  {
    path: 'communities',
    loadChildren: () => import('./communities/communities.module').then(m => m.CommunitiesModule),
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes);
