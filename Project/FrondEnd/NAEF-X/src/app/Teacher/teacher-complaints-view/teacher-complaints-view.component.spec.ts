import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherComplaintsViewComponent } from './teacher-complaints-view.component';

describe('TeacherComplaintsViewComponent', () => {
  let component: TeacherComplaintsViewComponent;
  let fixture: ComponentFixture<TeacherComplaintsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherComplaintsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherComplaintsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
