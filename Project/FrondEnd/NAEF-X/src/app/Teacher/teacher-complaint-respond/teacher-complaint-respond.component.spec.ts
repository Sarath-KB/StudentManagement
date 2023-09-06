import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherComplaintRespondComponent } from './teacher-complaint-respond.component';

describe('TeacherComplaintRespondComponent', () => {
  let component: TeacherComplaintRespondComponent;
  let fixture: ComponentFixture<TeacherComplaintRespondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherComplaintRespondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherComplaintRespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
