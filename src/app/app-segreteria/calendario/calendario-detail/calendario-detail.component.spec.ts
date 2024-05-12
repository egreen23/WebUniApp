import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioDetailComponent } from './calendario-detail.component';

describe('CalendarioDetailComponent', () => {
  let component: CalendarioDetailComponent;
  let fixture: ComponentFixture<CalendarioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
