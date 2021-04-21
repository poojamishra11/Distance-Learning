import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasemsComponent } from './databasems.component';

describe('DatabasemsComponent', () => {
  let component: DatabasemsComponent;
  let fixture: ComponentFixture<DatabasemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabasemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
