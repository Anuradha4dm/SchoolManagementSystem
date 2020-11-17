import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTermResultsComponent } from './edit-term-results.component';

describe('EditTermResultsComponent', () => {
  let component: EditTermResultsComponent;
  let fixture: ComponentFixture<EditTermResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTermResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTermResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
