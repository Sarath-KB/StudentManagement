import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyVerifyComponent } from './faculty-verify.component';

describe('FacultyVerifyComponent', () => {
  let component: FacultyVerifyComponent;
  let fixture: ComponentFixture<FacultyVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
