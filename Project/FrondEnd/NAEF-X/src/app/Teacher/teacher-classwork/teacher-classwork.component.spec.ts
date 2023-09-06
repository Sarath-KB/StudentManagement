import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassworkComponent } from './teacher-classwork.component';

describe('TeacherClassworkComponent', () => {
  let component: TeacherClassworkComponent;
  let fixture: ComponentFixture<TeacherClassworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherClassworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
