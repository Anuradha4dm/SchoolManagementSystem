import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonProfileComponent } from './non-profile.component';

describe('NonProfileComponent', () => {
  let component: NonProfileComponent;
  let fixture: ComponentFixture<NonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
