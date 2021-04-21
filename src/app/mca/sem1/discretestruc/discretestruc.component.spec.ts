import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscretestrucComponent } from './discretestruc.component';

describe('DiscretestrucComponent', () => {
  let component: DiscretestrucComponent;
  let fixture: ComponentFixture<DiscretestrucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscretestrucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscretestrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
