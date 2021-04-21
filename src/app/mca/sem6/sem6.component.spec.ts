import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem6Component } from './sem6.component';

describe('Sem6Component', () => {
  let component: Sem6Component;
  let fixture: ComponentFixture<Sem6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
