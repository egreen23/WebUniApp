import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCenterComponent } from './calendario-center.component';

describe('CalendarioCenterComponent', () => {
  let component: CalendarioCenterComponent;
  let fixture: ComponentFixture<CalendarioCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
