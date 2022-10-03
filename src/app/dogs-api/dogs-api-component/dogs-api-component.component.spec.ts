import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsApiComponentComponent } from './dogs-api-component.component';

describe('DogsApiComponentComponent', () => {
  let component: DogsApiComponentComponent;
  let fixture: ComponentFixture<DogsApiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsApiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
