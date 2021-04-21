import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndtermComponent } from './endterm.component';

describe('EndtermComponent', () => {
  let component: EndtermComponent;
  let fixture: ComponentFixture<EndtermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndtermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
