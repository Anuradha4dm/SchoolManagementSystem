import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAcedemicViewProfileComponent } from './non-acedemic-view-profile.component';

describe('NonAcedemicViewProfileComponent', () => {
  let component: NonAcedemicViewProfileComponent;
  let fixture: ComponentFixture<NonAcedemicViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAcedemicViewProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAcedemicViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
