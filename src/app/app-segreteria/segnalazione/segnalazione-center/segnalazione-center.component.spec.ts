import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalazioneCenterComponent } from './segnalazione-center.component';

describe('SegnalazioneCenterComponent', () => {
  let component: SegnalazioneCenterComponent;
  let fixture: ComponentFixture<SegnalazioneCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegnalazioneCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegnalazioneCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
