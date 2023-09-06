import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodReportComponent } from './hod-report.component';

describe('HodReportComponent', () => {
  let component: HodReportComponent;
  let fixture: ComponentFixture<HodReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
