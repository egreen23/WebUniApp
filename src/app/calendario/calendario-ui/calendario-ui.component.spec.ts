import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioUIComponent } from './calendario-ui.component';

describe('CalendarioUIComponent', () => {
  let component: CalendarioUIComponent;
  let fixture: ComponentFixture<CalendarioUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
