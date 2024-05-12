import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsodistudioCenterComponent } from './corsodistudio-center.component';

describe('CorsodistudioCenterComponent', () => {
  let component: CorsodistudioCenterComponent;
  let fixture: ComponentFixture<CorsodistudioCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsodistudioCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsodistudioCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
