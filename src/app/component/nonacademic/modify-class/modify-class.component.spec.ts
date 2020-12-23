import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyClassComponent } from './modify-class.component';

describe('ModifyClassComponent', () => {
  let component: ModifyClassComponent;
  let fixture: ComponentFixture<ModifyClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
