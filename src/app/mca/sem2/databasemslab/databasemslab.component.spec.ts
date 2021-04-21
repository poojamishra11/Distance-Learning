import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasemslabComponent } from './databasemslab.component';

describe('DatabasemslabComponent', () => {
  let component: DatabasemslabComponent;
  let fixture: ComponentFixture<DatabasemslabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabasemslabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasemslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
