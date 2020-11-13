import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassHandlerComponent } from './class-handler.component';

describe('ClassHandlerComponent', () => {
  let component: ClassHandlerComponent;
  let fixture: ComponentFixture<ClassHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
