import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem2assignmentComponent } from './sem2assignment.component';

describe('Sem2assignmentComponent', () => {
  let component: Sem2assignmentComponent;
  let fixture: ComponentFixture<Sem2assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem2assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem2assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
