import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'statistics',
    pathMatch: 'full',
  },
  {
    path: 'dogs-api',
    loadChildren: () => import('./dogs/dogs.module').then((m) => m.DogsModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./dogs-dashboard/dogs-dashboard.module').then(
        (m) => m.DogsDashboardModule
      ),
  },
  {
    path: 'dogs',
    loadChildren: () =>
      import('./dogs-api/dogs-api.module').then((m) => m.DogsApiModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
