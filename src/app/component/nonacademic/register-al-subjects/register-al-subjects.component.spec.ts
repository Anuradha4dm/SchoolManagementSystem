import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAlSubjectsComponent } from './register-al-subjects.component';

describe('RegisterAlSubjectsComponent', () => {
  let component: RegisterAlSubjectsComponent;
  let fixture: ComponentFixture<RegisterAlSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAlSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAlSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
