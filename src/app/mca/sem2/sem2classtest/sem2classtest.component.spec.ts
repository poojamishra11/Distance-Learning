import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem2classtestComponent } from './sem2classtest.component';

describe('Sem2classtestComponent', () => {
  let component: Sem2classtestComponent;
  let fixture: ComponentFixture<Sem2classtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem2classtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem2classtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
