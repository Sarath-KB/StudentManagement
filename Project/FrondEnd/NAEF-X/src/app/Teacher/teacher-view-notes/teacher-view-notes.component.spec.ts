import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewNotesComponent } from './teacher-view-notes.component';

describe('TeacherViewNotesComponent', () => {
  let component: TeacherViewNotesComponent;
  let fixture: ComponentFixture<TeacherViewNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
