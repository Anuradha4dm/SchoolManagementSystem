import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAcedemicEditProfileComponent } from './non-acedemic-edit-profile.component';

describe('NonAcedemicEditProfileComponent', () => {
  let component: NonAcedemicEditProfileComponent;
  let fixture: ComponentFixture<NonAcedemicEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAcedemicEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAcedemicEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
