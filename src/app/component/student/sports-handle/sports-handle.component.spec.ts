import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsHandleComponent } from './sports-handle.component';

describe('SportsHandleComponent', () => {
  let component: SportsHandleComponent;
  let fixture: ComponentFixture<SportsHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsHandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
