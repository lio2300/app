import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DogsDashboardRoutingModule } from './dogs-dashboard-routing.module';
import { DogStatisticsComponent } from './dog-statistics/dog-statistics.component';

@NgModule({
  declarations: [DogStatisticsComponent],
  imports: [
    CommonModule,
    DogsDashboardRoutingModule,
    NgChartsModule,
    NgbModule,
  ],
})
export class DogsDashboardModule {}
