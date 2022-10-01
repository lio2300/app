import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponentComponent } from './dog-component.component';

describe('DogComponentComponent', () => {
  let component: DogComponentComponent;
  let fixture: ComponentFixture<DogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
