import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailhandleComponent } from './emailhandle.component';

describe('EmailhandleComponent', () => {
  let component: EmailhandleComponent;
  let fixture: ComponentFixture<EmailhandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailhandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailhandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
