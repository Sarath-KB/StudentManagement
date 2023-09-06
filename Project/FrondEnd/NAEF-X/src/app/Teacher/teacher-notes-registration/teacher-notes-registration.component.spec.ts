import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNotesRegistrationComponent } from './teacher-notes-registration.component';

describe('TeacherNotesRegistrationComponent', () => {
  let component: TeacherNotesRegistrationComponent;
  let fixture: ComponentFixture<TeacherNotesRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherNotesRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNotesRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
