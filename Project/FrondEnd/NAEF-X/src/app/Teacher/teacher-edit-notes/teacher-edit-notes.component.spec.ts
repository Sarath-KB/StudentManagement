import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditNotesComponent } from './teacher-edit-notes.component';

describe('TeacherEditNotesComponent', () => {
  let component: TeacherEditNotesComponent;
  let fixture: ComponentFixture<TeacherEditNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
