import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdslabComponent } from './mdslab.component';

describe('MdslabComponent', () => {
  let component: MdslabComponent;
  let fixture: ComponentFixture<MdslabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdslabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
