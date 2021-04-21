import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem2midtermComponent } from './sem2midterm.component';

describe('Sem2midtermComponent', () => {
  let component: Sem2midtermComponent;
  let fixture: ComponentFixture<Sem2midtermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem2midtermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem2midtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
