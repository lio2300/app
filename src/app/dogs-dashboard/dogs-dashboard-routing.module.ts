import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogStatisticsComponent } from './dog-statistics/dog-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: DogStatisticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsDashboardRoutingModule {}
