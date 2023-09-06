import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHProfileComponent } from './edit-hprofile.component';

describe('EditHProfileComponent', () => {
  let component: EditHProfileComponent;
  let fixture: ComponentFixture<EditHProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
