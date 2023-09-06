import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodNavbarComponent } from './hod-navbar.component';

describe('HodNavbarComponent', () => {
  let component: HodNavbarComponent;
  let fixture: ComponentFixture<HodNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
