import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioUiComponent } from './calendario-ui.component';

describe('CalendarioUiComponent', () => {
  let component: CalendarioUiComponent;
  let fixture: ComponentFixture<CalendarioUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
