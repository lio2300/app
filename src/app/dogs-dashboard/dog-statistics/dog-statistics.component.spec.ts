import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogStatisticsComponent } from './dog-statistics.component';

describe('DogStatisticsComponent', () => {
  let component: DogStatisticsComponent;
  let fixture: ComponentFixture<DogStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
