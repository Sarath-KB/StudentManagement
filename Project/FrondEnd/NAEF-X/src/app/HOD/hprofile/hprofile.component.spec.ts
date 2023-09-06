import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HProfileComponent } from './hprofile.component';

describe('HProfileComponent', () => {
  let component: HProfileComponent;
  let fixture: ComponentFixture<HProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
