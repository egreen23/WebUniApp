import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoDetailComponent } from './corso-detail.component';

describe('CorsoDetailComponent', () => {
  let component: CorsoDetailComponent;
  let fixture: ComponentFixture<CorsoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
