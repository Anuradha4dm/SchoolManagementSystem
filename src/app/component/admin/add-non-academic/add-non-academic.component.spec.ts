import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonAcademicComponent } from './add-non-academic.component';

describe('AddNonAcademicComponent', () => {
  let component: AddNonAcademicComponent;
  let fixture: ComponentFixture<AddNonAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNonAcademicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNonAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
