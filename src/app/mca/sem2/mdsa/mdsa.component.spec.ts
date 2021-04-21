import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdsaComponent } from './mdsa.component';

describe('MdsaComponent', () => {
  let component: MdsaComponent;
  let fixture: ComponentFixture<MdsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
