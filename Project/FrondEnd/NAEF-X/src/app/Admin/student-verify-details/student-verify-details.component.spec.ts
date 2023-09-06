import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVerifyDetailsComponent } from './student-verify-details.component';

describe('StudentVerifyDetailsComponent', () => {
  let component: StudentVerifyDetailsComponent;
  let fixture: ComponentFixture<StudentVerifyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentVerifyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVerifyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
