import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComplaintsComponent } from './hcomplaints.component';

describe('HComplaintsComponent', () => {
  let component: HComplaintsComponent;
  let fixture: ComponentFixture<HComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
