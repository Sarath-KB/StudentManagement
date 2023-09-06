import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRegisterComplaintComponent } from './teacher-register-complaint.component';

describe('TeacherRegisterComplaintComponent', () => {
  let component: TeacherRegisterComplaintComponent;
  let fixture: ComponentFixture<TeacherRegisterComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRegisterComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRegisterComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
