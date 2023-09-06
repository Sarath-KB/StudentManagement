import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewMoreComponent } from './student-view-more.component';

describe('StudentViewMoreComponent', () => {
  let component: StudentViewMoreComponent;
  let fixture: ComponentFixture<StudentViewMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
