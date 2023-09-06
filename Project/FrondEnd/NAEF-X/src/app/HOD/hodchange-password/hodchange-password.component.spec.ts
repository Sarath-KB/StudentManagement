import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODChangePasswordComponent } from './hodchange-password.component';

describe('HODChangePasswordComponent', () => {
  let component: HODChangePasswordComponent;
  let fixture: ComponentFixture<HODChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HODChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HODChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
