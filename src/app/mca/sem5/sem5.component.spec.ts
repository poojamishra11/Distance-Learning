import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem5Component } from './sem5.component';

describe('Sem5Component', () => {
  let component: Sem5Component;
  let fixture: ComponentFixture<Sem5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
