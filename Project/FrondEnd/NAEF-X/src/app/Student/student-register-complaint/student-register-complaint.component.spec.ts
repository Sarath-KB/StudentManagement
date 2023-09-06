import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterComplaintComponent } from './student-register-complaint.component';

describe('StudentRegisterComplaintComponent', () => {
  let component: StudentRegisterComplaintComponent;
  let fixture: ComponentFixture<StudentRegisterComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
