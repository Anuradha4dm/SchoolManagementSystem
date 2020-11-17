import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassChangeComponent } from './class-change.component';

describe('ClassChangeComponent', () => {
  let component: ClassChangeComponent;
  let fixture: ComponentFixture<ClassChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
