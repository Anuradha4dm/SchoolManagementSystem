import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonComponent } from './edit-non.component';

describe('EditNonComponent', () => {
  let component: EditNonComponent;
  let fixture: ComponentFixture<EditNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
