import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HViewComplaintsComponent } from './hview-complaints.component';

describe('HViewComplaintsComponent', () => {
  let component: HViewComplaintsComponent;
  let fixture: ComponentFixture<HViewComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HViewComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HViewComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
