import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprogComponent } from './cprog.component';

describe('CprogComponent', () => {
  let component: CprogComponent;
  let fixture: ComponentFixture<CprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
