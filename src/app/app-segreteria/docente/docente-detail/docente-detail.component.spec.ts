import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteDetailComponent } from './docente-detail.component';

describe('DocenteDetailComponent', () => {
  let component: DocenteDetailComponent;
  let fixture: ComponentFixture<DocenteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
