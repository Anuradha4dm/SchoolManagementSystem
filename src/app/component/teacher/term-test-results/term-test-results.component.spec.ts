import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermTestResultsComponent } from './term-test-results.component';

describe('TermTestResultsComponent', () => {
  let component: TermTestResultsComponent;
  let fixture: ComponentFixture<TermTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermTestResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
