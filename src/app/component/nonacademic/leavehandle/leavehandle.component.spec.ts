import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavehandleComponent } from './leavehandle.component';

describe('LeavehandleComponent', () => {
  let component: LeavehandleComponent;
  let fixture: ComponentFixture<LeavehandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavehandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavehandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
