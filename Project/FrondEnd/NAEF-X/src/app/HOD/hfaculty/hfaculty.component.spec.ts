import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HFacultyComponent } from './hfaculty.component';

describe('HFacultyComponent', () => {
  let component: HFacultyComponent;
  let fixture: ComponentFixture<HFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
