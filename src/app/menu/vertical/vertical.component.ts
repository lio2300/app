import { Component, OnInit } from '@angular/core';
import { verticalMenu } from 'src/app/interfaces/verticalMenu.interfaces';

@Component({
  selector: 'menu-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
})
export class VerticalComponent implements OnInit {
  /**
   * !Declare all variables for the component
   */
  public verticalMenu: verticalMenu[] = [
    {
      name: 'Statistics',
      path: ['/statistics'],
      link: 'top',
    },
    {
      name: 'API',
      path: ['/dogs-api'],
      link: 'middle',
    },
    {
      name: 'Dogs',
      path: ['/dogs'],
      link: 'bottom',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
