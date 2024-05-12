import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegCenterComponent } from './seg-center.component';

describe('SegCenterComponent', () => {
  let component: SegCenterComponent;
  let fixture: ComponentFixture<SegCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
