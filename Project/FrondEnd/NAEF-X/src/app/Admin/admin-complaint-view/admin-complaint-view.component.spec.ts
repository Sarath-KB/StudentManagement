import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComplaintViewComponent } from './admin-complaint-view.component';

describe('AdminComplaintViewComponent', () => {
  let component: AdminComplaintViewComponent;
  let fixture: ComponentFixture<AdminComplaintViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComplaintViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComplaintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
