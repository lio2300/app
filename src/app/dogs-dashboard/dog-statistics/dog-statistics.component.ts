import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Dogs } from 'src/app/interfaces/dogs.interfaces';
import { DogsServices } from 'src/app/services/dogs.services.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dog-statistics',
  templateUrl: './dog-statistics.component.html',
  styleUrls: ['./dog-statistics.component.scss'],
})
export class DogStatisticsComponent implements OnInit {
  /**
   * !Declare all variables for the component
   */
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public loading: boolean = true;

  constructor(private $DogsService: DogsServices) {}

  /**
   * *Load data from the server for show records in the charts
   *
   * @return {void}
   */
  ngOnInit(): void {
    this.loading = true;
    this.$DogsService.getDogsStatistics().subscribe((dogs) => {
      this.barChartData.labels = dogs.barChartData.map((dog: any) => dog._id);
      this.barChartData.datasets = [
        {
          data: dogs.barChartData.map((dog: any) => dog.count),
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgb(54, 162, 235)'],
          borderWidth: 1,
          label: 'Animal Type',
        },
      ];

      this.loading = false;
    });
  }
}
