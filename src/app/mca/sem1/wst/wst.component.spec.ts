import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WstComponent } from './wst.component';

describe('WstComponent', () => {
  let component: WstComponent;
  let fixture: ComponentFixture<WstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
