import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAttendenceTeacherComponent } from './mark-attendence-teacher.component';

describe('MarkAttendenceTeacherComponent', () => {
  let component: MarkAttendenceTeacherComponent;
  let fixture: ComponentFixture<MarkAttendenceTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkAttendenceTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAttendenceTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
