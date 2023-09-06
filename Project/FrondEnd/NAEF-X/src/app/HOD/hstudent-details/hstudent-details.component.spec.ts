import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HStudentDetailsComponent } from './hstudent-details.component';

describe('HStudentDetailsComponent', () => {
  let component: HStudentDetailsComponent;
  let fixture: ComponentFixture<HStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HStudentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
