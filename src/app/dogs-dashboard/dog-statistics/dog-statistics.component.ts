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
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      { data: [350, 450, 100], label: 'Series A' },
      { data: [50, 150, 120], label: 'Series B' },
      { data: [250, 130, 70], label: 'Series C' },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };

  public loading: boolean = true;

  constructor(private $DogsService: DogsServices) {}

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
