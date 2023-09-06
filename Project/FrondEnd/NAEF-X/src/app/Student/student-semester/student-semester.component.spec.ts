import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSemesterComponent } from './student-semester.component';

describe('StudentSemesterComponent', () => {
  let component: StudentSemesterComponent;
  let fixture: ComponentFixture<StudentSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSemesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
