import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForOLComponent } from './register-for-ol.component';

describe('RegisterForOLComponent', () => {
  let component: RegisterForOLComponent;
  let fixture: ComponentFixture<RegisterForOLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterForOLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterForOLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
