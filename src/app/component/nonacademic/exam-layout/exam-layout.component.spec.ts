import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamLayoutComponent } from './exam-layout.component';

describe('ExamLayoutComponent', () => {
  let component: ExamLayoutComponent;
  let fixture: ComponentFixture<ExamLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
