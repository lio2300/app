import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDogsComponent } from './create-update-dogs.component';

describe('CreateUpdateDogsComponent', () => {
  let component: CreateUpdateDogsComponent;
  let fixture: ComponentFixture<CreateUpdateDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
