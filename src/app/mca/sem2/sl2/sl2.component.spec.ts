import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sl2Component } from './sl2.component';

describe('Sl2Component', () => {
  let component: Sl2Component;
  let fixture: ComponentFixture<Sl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sl2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
