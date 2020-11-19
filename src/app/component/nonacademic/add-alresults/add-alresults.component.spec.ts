import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddALresultsComponent } from './add-alresults.component';

describe('AddALresultsComponent', () => {
  let component: AddALresultsComponent;
  let fixture: ComponentFixture<AddALresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddALresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddALresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
