import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmilComponent } from './send-emil.component';

describe('SendEmilComponent', () => {
  let component: SendEmilComponent;
  let fixture: ComponentFixture<SendEmilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEmilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
