import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyViewMoreComponent } from './faculty-view-more.component';

describe('FacultyViewMoreComponent', () => {
  let component: FacultyViewMoreComponent;
  let fixture: ComponentFixture<FacultyViewMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyViewMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyViewMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
