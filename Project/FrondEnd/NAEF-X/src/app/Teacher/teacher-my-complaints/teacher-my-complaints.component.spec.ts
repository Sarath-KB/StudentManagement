import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMyComplaintsComponent } from './teacher-my-complaints.component';

describe('TeacherMyComplaintsComponent', () => {
  let component: TeacherMyComplaintsComponent;
  let fixture: ComponentFixture<TeacherMyComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherMyComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMyComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
