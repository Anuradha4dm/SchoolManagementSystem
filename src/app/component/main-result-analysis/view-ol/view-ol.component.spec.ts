import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOLComponent } from './view-ol.component';

describe('ViewOLComponent', () => {
  let component: ViewOLComponent;
  let fixture: ComponentFixture<ViewOLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
