import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewStudentComponent } from './teacher-view-student.component';

describe('TeacherViewStudentComponent', () => {
  let component: TeacherViewStudentComponent;
  let fixture: ComponentFixture<TeacherViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
