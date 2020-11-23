import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlAnalysisComponent } from './al-analysis.component';

describe('AlAnalysisComponent', () => {
  let component: AlAnalysisComponent;
  let fixture: ComponentFixture<AlAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
