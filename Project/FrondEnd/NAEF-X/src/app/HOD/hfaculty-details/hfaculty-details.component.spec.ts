import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HFacultyDetailsComponent } from './hfaculty-details.component';

describe('HFacultyDetailsComponent', () => {
  let component: HFacultyDetailsComponent;
  let fixture: ComponentFixture<HFacultyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HFacultyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HFacultyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
