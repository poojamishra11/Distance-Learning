import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem2endtermComponent } from './sem2endterm.component';

describe('Sem2endtermComponent', () => {
  let component: Sem2endtermComponent;
  let fixture: ComponentFixture<Sem2endtermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem2endtermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem2endtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
