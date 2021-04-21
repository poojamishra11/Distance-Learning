import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplabComponent } from './cplab.component';

describe('CplabComponent', () => {
  let component: CplabComponent;
  let fixture: ComponentFixture<CplabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CplabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CplabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
