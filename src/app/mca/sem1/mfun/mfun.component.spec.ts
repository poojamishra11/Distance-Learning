import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfunComponent } from './mfun.component';

describe('MfunComponent', () => {
  let component: MfunComponent;
  let fixture: ComponentFixture<MfunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
