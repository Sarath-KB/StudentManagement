import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassworkDetailsComponent } from './teacher-classwork-details.component';

describe('TeacherClassworkDetailsComponent', () => {
  let component: TeacherClassworkDetailsComponent;
  let fixture: ComponentFixture<TeacherClassworkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherClassworkDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassworkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
