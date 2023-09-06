import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyTeachersComponent } from './student-my-teachers.component';

describe('StudentMyTeachersComponent', () => {
  let component: StudentMyTeachersComponent;
  let fixture: ComponentFixture<StudentMyTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMyTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMyTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
