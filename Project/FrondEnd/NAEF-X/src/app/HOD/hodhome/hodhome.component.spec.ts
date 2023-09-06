import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODhomeComponent } from './hodhome.component';

describe('HODhomeComponent', () => {
  let component: HODhomeComponent;
  let fixture: ComponentFixture<HODhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HODhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HODhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
