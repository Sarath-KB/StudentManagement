import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyVerifyDetailsComponent } from './faculty-verify-details.component';

describe('FacultyVerifyDetailsComponent', () => {
  let component: FacultyVerifyDetailsComponent;
  let fixture: ComponentFixture<FacultyVerifyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyVerifyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyVerifyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
