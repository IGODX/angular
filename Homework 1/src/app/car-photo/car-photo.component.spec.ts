import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPhotoComponent } from './car-photo.component';

describe('CarPhotoComponent', () => {
  let component: CarPhotoComponent;
  let fixture: ComponentFixture<CarPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarPhotoComponent]
    });
    fixture = TestBed.createComponent(CarPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
