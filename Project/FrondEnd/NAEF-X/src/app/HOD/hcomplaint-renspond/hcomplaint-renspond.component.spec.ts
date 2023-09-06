import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComplaintRenspondComponent } from './hcomplaint-renspond.component';

describe('HComplaintRenspondComponent', () => {
  let component: HComplaintRenspondComponent;
  let fixture: ComponentFixture<HComplaintRenspondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HComplaintRenspondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HComplaintRenspondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
