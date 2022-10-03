import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDogsComponent } from './delete-dogs.component';

describe('DeleteDogsComponent', () => {
  let component: DeleteDogsComponent;
  let fixture: ComponentFixture<DeleteDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
