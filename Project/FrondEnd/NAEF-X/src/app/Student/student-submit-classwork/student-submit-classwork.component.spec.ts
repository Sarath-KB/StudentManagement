import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubmitClassworkComponent } from './student-submit-classwork.component';

describe('StudentSubmitClassworkComponent', () => {
  let component: StudentSubmitClassworkComponent;
  let fixture: ComponentFixture<StudentSubmitClassworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubmitClassworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubmitClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
