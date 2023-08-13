import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilGatesComponent } from './bil-gates.component';

describe('BilGatesComponent', () => {
  let component: BilGatesComponent;
  let fixture: ComponentFixture<BilGatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilGatesComponent]
    });
    fixture = TestBed.createComponent(BilGatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
