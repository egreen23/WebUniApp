import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteCenterComponent } from './docente-center.component';

describe('DocenteCenterComponent', () => {
  let component: DocenteCenterComponent;
  let fixture: ComponentFixture<DocenteCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
