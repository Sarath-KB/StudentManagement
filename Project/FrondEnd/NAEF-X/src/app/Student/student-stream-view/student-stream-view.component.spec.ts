import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStreamViewComponent } from './student-stream-view.component';

describe('StudentStreamViewComponent', () => {
  let component: StudentStreamViewComponent;
  let fixture: ComponentFixture<StudentStreamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStreamViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStreamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
