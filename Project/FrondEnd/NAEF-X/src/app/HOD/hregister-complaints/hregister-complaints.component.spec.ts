import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRegisterComplaintsComponent } from './hregister-complaints.component';

describe('HRegisterComplaintsComponent', () => {
  let component: HRegisterComplaintsComponent;
  let fixture: ComponentFixture<HRegisterComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRegisterComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRegisterComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
