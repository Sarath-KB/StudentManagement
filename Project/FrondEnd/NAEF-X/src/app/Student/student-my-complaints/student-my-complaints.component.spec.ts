import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyComplaintsComponent } from './student-my-complaints.component';

describe('StudentMyComplaintsComponent', () => {
  let component: StudentMyComplaintsComponent;
  let fixture: ComponentFixture<StudentMyComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMyComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMyComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
