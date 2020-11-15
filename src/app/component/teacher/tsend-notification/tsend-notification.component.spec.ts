import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsendNotificationComponent } from './tsend-notification.component';

describe('TsendNotificationComponent', () => {
  let component: TsendNotificationComponent;
  let fixture: ComponentFixture<TsendNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsendNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsendNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
