import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForALComponent } from './register-for-al.component';

describe('RegisterForALComponent', () => {
  let component: RegisterForALComponent;
  let fixture: ComponentFixture<RegisterForALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterForALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterForALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
