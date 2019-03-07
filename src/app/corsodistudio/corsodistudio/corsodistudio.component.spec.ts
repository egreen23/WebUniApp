import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsodistudioComponent } from './corsodistudio.component';

describe('CorsodistudioComponent', () => {
  let component: CorsodistudioComponent;
  let fixture: ComponentFixture<CorsodistudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsodistudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsodistudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
