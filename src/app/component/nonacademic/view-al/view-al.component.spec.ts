import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewALComponent } from './view-al.component';

describe('ViewALComponent', () => {
  let component: ViewALComponent;
  let fixture: ComponentFixture<ViewALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
