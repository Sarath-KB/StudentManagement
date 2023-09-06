import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRegisterClassworkComponent } from './teacher-register-classwork.component';

describe('TeacherRegisterClassworkComponent', () => {
  let component: TeacherRegisterClassworkComponent;
  let fixture: ComponentFixture<TeacherRegisterClassworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRegisterClassworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRegisterClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
