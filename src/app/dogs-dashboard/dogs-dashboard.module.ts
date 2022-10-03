import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsDashboardRoutingModule } from './dogs-dashboard-routing.module';
import { DogStatisticsComponent } from './dog-statistics/dog-statistics.component';


@NgModule({
  declarations: [
    DogStatisticsComponent
  ],
  imports: [
    CommonModule,
    DogsDashboardRoutingModule
  ]
})
export class DogsDashboardModule { }
