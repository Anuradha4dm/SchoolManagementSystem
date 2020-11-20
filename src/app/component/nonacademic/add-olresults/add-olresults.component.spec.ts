import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOLresultsComponent } from './add-olresults.component';

describe('AddOLresultsComponent', () => {
  let component: AddOLresultsComponent;
  let fixture: ComponentFixture<AddOLresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOLresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOLresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
