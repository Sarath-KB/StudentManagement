import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HStudentComponent } from './hstudent.component';

describe('HStudentComponent', () => {
  let component: HStudentComponent;
  let fixture: ComponentFixture<HStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
