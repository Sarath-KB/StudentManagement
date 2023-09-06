import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetypeDetailsComponent } from './coursetype-details.component';

describe('CoursetypeDetailsComponent', () => {
  let component: CoursetypeDetailsComponent;
  let fixture: ComponentFixture<CoursetypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursetypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursetypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
