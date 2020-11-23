import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlAnalysisComponent } from './ol-analysis.component';

describe('OlAnalysisComponent', () => {
  let component: OlAnalysisComponent;
  let fixture: ComponentFixture<OlAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
