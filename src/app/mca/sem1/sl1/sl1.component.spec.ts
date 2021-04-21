import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sl1Component } from './sl1.component';

describe('Sl1Component', () => {
  let component: Sl1Component;
  let fixture: ComponentFixture<Sl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
